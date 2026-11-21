"use client";

import { useState } from "react";

type Status = "idle" | "submitting" | "sent" | "error";

const field =
  "w-full rounded-lg border border-line bg-white px-3.5 py-2.5 text-[14px] text-ink outline-none transition-colors placeholder:text-slate-400 focus:border-navy-900";
const labelCls = "block text-[12px] font-medium uppercase tracking-[0.1em] text-slate-500";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const next: Record<string, string> = {};
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();

    if (!name) next.name = "Let us know your name.";
    if (!email) next.email = "We need an email address to reply to.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email))
      next.email = "That email address doesn't look complete.";
    if (message.length < 10) next.message = "A sentence or two about what you need.";

    setErrors(next);
    if (Object.keys(next).length > 0) {
      form.querySelector<HTMLElement>(`[name="${Object.keys(next)[0]}"]`)?.focus();
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(Object.fromEntries(data)),
      });
      if (!res.ok) throw new Error(`Request failed: ${res.status}`);
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div role="status" aria-live="polite" className="rounded-2xl border border-line p-8">
        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-teal">
          Message sent
        </p>
        <h2 className="mt-3 font-display text-[24px] leading-tight text-navy-900">
          Thank you — it&apos;s with an advisor.
        </h2>
        <p className="mt-3 text-[14px] leading-relaxed text-slate-600">
          We reply during business hours, usually the same day.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-5 text-[13px] font-medium text-brand hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="rounded-2xl border border-line bg-mist/50 p-6 sm:p-8"
    >
      <h2 className="font-display text-[22px] text-navy-900">
        Send us a message
      </h2>
      <p className="mt-1 text-[13px] text-slate-500">
        For partnership enquiries, choose &ldquo;Partnership&rdquo; below.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="c-name" className={labelCls}>
            Name
          </label>
          <input
            id="c-name"
            name="name"
            type="text"
            autoComplete="name"
            aria-invalid={!!errors.name}
            className={`mt-2 ${field}`}
          />
          {errors.name && (
            <p className="mt-1.5 text-[12px] text-red-600">{errors.name}</p>
          )}
        </div>

        <div>
          <label htmlFor="c-email" className={labelCls}>
            Email
          </label>
          <input
            id="c-email"
            name="email"
            type="email"
            autoComplete="email"
            aria-invalid={!!errors.email}
            className={`mt-2 ${field}`}
          />
          {errors.email && (
            <p className="mt-1.5 text-[12px] text-red-600">{errors.email}</p>
          )}
        </div>

        <div>
          <label htmlFor="c-business" className={labelCls}>
            Business <span className="normal-case text-slate-400">(optional)</span>
          </label>
          <input
            id="c-business"
            name="business"
            type="text"
            autoComplete="organization"
            className={`mt-2 ${field}`}
          />
        </div>

        <div>
          <label htmlFor="c-topic" className={labelCls}>
            Topic
          </label>
          <select id="c-topic" name="topic" className={`mt-2 ${field}`}>
            <option>General enquiry</option>
            <option>Savings quote</option>
            <option>Existing account</option>
            <option>Point of sale</option>
            <option>Partnership</option>
          </select>
        </div>
      </div>

      <div className="mt-4">
        <label htmlFor="c-message" className={labelCls}>
          Message
        </label>
        <textarea
          id="c-message"
          name="message"
          rows={5}
          aria-invalid={!!errors.message}
          placeholder="What can we help with?"
          className={`mt-2 ${field}`}
        />
        {errors.message && (
          <p className="mt-1.5 text-[12px] text-red-600">{errors.message}</p>
        )}
      </div>

      {status === "error" && (
        <p role="alert" className="mt-4 rounded-lg bg-red-50 px-4 py-3 text-[13px] text-red-700">
          That didn&apos;t send. Please try again or call us.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-navy-900 px-6 py-3.5 text-[14px] font-medium text-white transition-colors hover:bg-navy-700 disabled:opacity-60 sm:w-auto"
      >
        {status === "submitting" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
