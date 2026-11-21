import { NextResponse } from "next/server";
import { site } from "@/lib/site";

const MAX_BYTES = 15 * 1024 * 1024; // 15 MB
const ALLOWED = ["application/pdf", "image/png", "image/jpeg"];

const str = (v: FormDataEntryValue | null, max = 500) =>
  typeof v === "string" ? v.trim().slice(0, max) : "";

export async function POST(request: Request) {
  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return NextResponse.json({ error: "Malformed request." }, { status: 400 });
  }

  const name = str(form.get("name"), 120);
  const email = str(form.get("email"), 200);
  const business = str(form.get("business"), 160);
  const phone = str(form.get("phone"), 40);
  const volume = str(form.get("volume"), 60);
  const channel = str(form.get("channel"), 60);
  const notes = str(form.get("notes"), 2000);
  const consent = form.get("consent") === "on";
  const statement = form.get("statement");

  const missing: string[] = [];
  if (!name) missing.push("name");
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) missing.push("email");
  if (!business) missing.push("business");
  if (!consent) missing.push("consent");
  if (!(statement instanceof File) || statement.size === 0) missing.push("statement");

  if (missing.length > 0) {
    return NextResponse.json(
      { error: "Missing or invalid fields.", fields: missing },
      { status: 422 },
    );
  }

  const file = statement as File;
  if (file.size > MAX_BYTES) {
    return NextResponse.json(
      { error: "That file is larger than 15 MB." },
      { status: 413 },
    );
  }
  if (!ALLOWED.includes(file.type)) {
    return NextResponse.json(
      { error: "Please send a PDF, PNG or JPG." },
      { status: 415 },
    );
  }

  // No CRM is wired up yet. Log the lead so nothing is silently lost, and
  // record what still needs connecting rather than pretending it was delivered.
  console.info("[quote] new statement", {
    name,
    email,
    business,
    phone,
    volume,
    channel,
    notes,
    file: { name: file.name, type: file.type, size: file.size },
    receivedAt: new Date().toISOString(),
  });

  // To deliver to the practice, set QUOTE_WEBHOOK_URL to an endpoint that
  // accepts multipart form data (CRM, inbox, or storage upload) — the form
  // posts the original fields through unchanged.
  const webhook = process.env.QUOTE_WEBHOOK_URL;
  if (webhook) {
    try {
      const outgoing = new FormData();
      outgoing.set("name", name);
      outgoing.set("email", email);
      outgoing.set("business", business);
      outgoing.set("phone", phone);
      outgoing.set("volume", volume);
      outgoing.set("channel", channel);
      outgoing.set("notes", notes);
      outgoing.set("statement", file, file.name);
      const res = await fetch(webhook, { method: "POST", body: outgoing });
      if (!res.ok) {
        console.error("[quote] webhook rejected", res.status);
        return NextResponse.json(
          { error: `Delivery failed (${res.status}).` },
          { status: 502 },
        );
      }
    } catch (err) {
      console.error("[quote] webhook error", err);
      return NextResponse.json(
        { error: "Delivery failed." },
        { status: 502 },
      );
    }
  }

  return NextResponse.json({ ok: true, contact: site.email });
}
