import { NextResponse } from "next/server";
import { site } from "@/lib/site";

const str = (v: unknown, max = 2000) =>
  typeof v === "string" ? v.trim().slice(0, max) : "";

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ error: "Malformed request." }, { status: 400 });
  }

  const name = str(body.name, 120);
  const email = str(body.email, 200);
  const business = str(body.business, 160);
  const topic = str(body.topic, 60);
  const message = str(body.message, 4000);

  const missing: string[] = [];
  if (!name) missing.push("name");
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) missing.push("email");
  if (message.length < 10) missing.push("message");

  if (missing.length > 0) {
    return NextResponse.json(
      { error: "Missing or invalid fields.", fields: missing },
      { status: 422 },
    );
  }

  console.info("[contact] new message", {
    name,
    email,
    business,
    topic,
    message,
    receivedAt: new Date().toISOString(),
  });

  const webhook = process.env.CONTACT_WEBHOOK_URL;
  if (webhook) {
    try {
      const res = await fetch(webhook, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ name, email, business, topic, message }),
      });
      if (!res.ok) {
        console.error("[contact] webhook rejected", res.status);
        return NextResponse.json({ error: "Delivery failed." }, { status: 502 });
      }
    } catch (err) {
      console.error("[contact] webhook error", err);
      return NextResponse.json({ error: "Delivery failed." }, { status: 502 });
    }
  }

  return NextResponse.json({ ok: true, contact: site.email });
}
