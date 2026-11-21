"use client";

import { useRef, useState } from "react";

type Status = "idle" | "submitting" | "sent" | "error";

const field =
  "w-full rounded-lg border border-line bg-white px-3.5 py-2.5 text-[14px] text-ink outline-none transition-colors placeholder:text-slate-400 focus:border-navy-900";
const labelCls = "block text-[12px] font-medium uppercase tracking-[0.1em] text-slate-500";

export function QuoteForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [fileName, setFileName] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const next: Record<string, string> = {};
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const business = String(data.get("business") || "").trim();
    const statement = data.get("statement");
    const hasFile =
      statement instanceof File ? statement.size > 0 : false;

    if (!name) next.name = "Tell us who to reply to.";
    if (!email) next.email = "We need an email address for the quote.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email))
      next.email = "That email address doesn't look complete.";
    if (!business) next.business = "Which business is this for?";
    if (!hasFile) next.statement = "Attach one recent statement.";

    setErrors(next);
    if (Object.keys(next).length > 0) {
      const first = Object.keys(next)[0];
      form.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch("/api/quote", { method: "POST", body: data });
      if (!res.ok) throw new Error(`Request failed: ${res.status}`);
      setStatus("sent");
      form.reset();
      setFileName(null);
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div
        role="status"
        aria-live="polite"
        className="rounded-2xl border border-line bg-white p-8"
      >
        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-teal">
          Statement received
        </p>
        <h2 className="mt-3 font-display text-[26px] leading-tight text-navy-900">
          Your audit is in the queue.
        </h2>
        <p className="mt-3 text-[15px] leading-relaxed text-slate-600">
          You will get a written quote within one business day. If anything about
          the statement is unclear we will ask before we quote, rather than
          guessing at a number.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-[13px] font-medium text-brand hover:underline"
        >
          Send another statement
        </button>
      </div>
    );
  }

  return (
    <form
      ref={formRef}
      onSubmit={onSubmit}
      noValidate
      className="rounded-2xl border border-line bg-white p-6 sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelCls}>
            Your name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Jordan Mitchell"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
            className={`mt-2 ${field}`}
          />
          {errors.name && (
            <p id="name-error" className="mt-1.5 text-[12px] text-red-600">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className={labelCls}>
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@business.com"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={`mt-2 ${field}`}
          />
          {errors.email && (
            <p id="email-error" className="mt-1.5 text-[12px] text-red-600">
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="business" className={labelCls}>
            Business name
          </label>
          <input
            id="business"
            name="business"
            type="text"
            autoComplete="organization"
            placeholder="Mitchell & Co."
            aria-invalid={!!errors.business}
            aria-describedby={errors.business ? "business-error" : undefined}
            className={`mt-2 ${field}`}
          />
          {errors.business && (
            <p id="business-error" className="mt-1.5 text-[12px] text-red-600">
              {errors.business}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className={labelCls}>
            Phone <span className="normal-case text-slate-400">(optional)</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="(555) 123-4567"
            className={`mt-2 ${field}`}
          />
        </div>

        <div>
          <label htmlFor="volume" className={labelCls}>
            Monthly card volume
          </label>
          <select id="volume" name="volume" className={`mt-2 ${field}`}>
            <option value="">Select…</option>
            <option>Under $10,000</option>
            <option>$10,000 – $50,000</option>
            <option>$50,000 – $150,000</option>
            <option>$150,000 – $500,000</option>
            <option>Over $500,000</option>
          </select>
        </div>

        <div>
          <label htmlFor="channel" className={labelCls}>
            Where you take payments
          </label>
          <select id="channel" name="channel" className={`mt-2 ${field}`}>
            <option value="">Select…</option>
            <option>In person only</option>
            <option>Online only</option>
            <option>Both</option>
          </select>
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="statement" className={labelCls}>
          Merchant statement
        </label>
        <div className="mt-2 rounded-lg border border-dashed border-line bg-mist/60 px-4 py-6 text-center">
          <input
            id="statement"
            name="statement"
            type="file"
            accept=".pdf,.png,.jpg,.jpeg"
            aria-invalid={!!errors.statement}
            aria-describedby={errors.statement ? "statement-error" : "statement-hint"}
            onChange={(e) => setFileName(e.target.files?.[0]?.name ?? null)}
            className="mx-auto block w-full max-w-sm cursor-pointer text-[13px] text-slate-600 file:mr-3 file:cursor-pointer file:rounded-full file:border-0 file:bg-navy-900 file:px-4 file:py-2 file:text-[12px] file:font-medium file:text-white hover:file:bg-navy-700"
          />
          <p id="statement-hint" className="mt-2 text-[12px] text-slate-500">
            {fileName
              ? `Attached: ${fileName}`
              : "PDF, PNG or JPG. One full month."}
          </p>
        </div>
        {errors.statement && (
          <p id="statement-error" className="mt-1.5 text-[12px] text-red-600">
            {errors.statement}
          </p>
        )}
      </div>

      <div className="mt-5">
        <label htmlFor="notes" className={labelCls}>
          Anything we should know?{" "}
          <span className="normal-case text-slate-400">(optional)</span>
        </label>
        <textarea
          id="notes"
          name="notes"
          rows={3}
          placeholder="e.g. moving to a second location in the spring"
          className={`mt-2 ${field}`}
        />
      </div>

      <label className="mt-6 flex items-start gap-3 text-[12.5px] leading-relaxed text-slate-600">
        <input
          type="checkbox"
          name="consent"
          required
          className="mt-0.5 h-4 w-4 shrink-0 rounded border-line accent-navy-900"
        />
        <span>
          I agree to Merchant Advisory Services using this statement to prepare a
          quote, as described in the{" "}
          <a href="/privacy" className="text-brand underline">
            privacy policy
          </a>
          .
        </span>
      </label>

      {status === "error" && (
        <p role="alert" className="mt-4 rounded-lg bg-red-50 px-4 py-3 text-[13px] text-red-700">
          That didn&apos;t go through. Try again, or email the statement to
          info@merchantadvisoryservices.com.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-navy-900 px-6 py-3.5 text-[14px] font-medium text-white transition-colors hover:bg-navy-700 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {status === "submitting" ? "Sending…" : "Get my savings quote"}
      </button>

      <p className="mt-4 text-[11.5px] leading-relaxed text-slate-400">
        No obligation and no contract to receive a quote. Typical turnaround is
        one business day.
      </p>
    </form>
  );
}
