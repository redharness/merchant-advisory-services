import type { Metadata } from "next";
import { PageHero, Prose, Section, ButtonLink, Eyebrow } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "How it works — the audit, step by step",
  description:
    "What happens after you send a merchant statement: how we classify fees, what the quote contains, and how a switch is handled end to end.",
};

const steps = [
  {
    n: "01",
    title: "Send a statement",
    time: "5 minutes",
    body: "One recent statement, PDF or photo. We also ask three questions: what you sell, roughly how many transactions a month, and how many of them are online. The card mix decides what a fair rate looks like.",
    detail: ["Upload in the form, email it, or bring it to a call."],
  },
  {
    n: "02",
    title: "We classify every fee",
    time: "Same or next business day",
    body: "Interchange and network assessments are pass-through — those are the card networks' published rates and nobody negotiates them. Processor markup and ancillary fees are the part that is negotiable. We mark which is which, line by line, and total the recoverable amount.",
    detail: [
      "Effective rate as a percentage of your card volume",
      "Each avoidable fee named and quantified",
      "A note where a fee looks legitimate",
    ],
  },
  {
    n: "03",
    title: "You get a written quote",
    time: "Within a business day",
    body: "The quote contains the pricing we would put you on, the projected monthly and annual cost, and what changes for your customers at the counter. If your current setup is already competitive, the quote says that instead of pushing a switch.",
    detail: [
      "Projected cost at your own volume and card mix",
      "Hardware cost stated separately",
      "No obligation to proceed",
    ],
  },
  {
    n: "04",
    title: "A short call",
    time: "15 minutes",
    body: "We walk through the numbers together and answer the obvious next question — what does the switch actually involve. You can bring your accountant or business partner.",
    detail: ["Phone or video", "The quote is yours to keep either way"],
  },
  {
    n: "05",
    title: "Switch, or don't",
    time: "7–10 days if you do",
    body: "If it makes sense, we handle the application, the terminal configuration and the cutover date. Your existing terminal may be reprogrammable rather than replaced. If it doesn't make sense, nothing happens and you keep the audit.",
    detail: [
      "Terminal configured before shipping",
      "Cutover scheduled around your trading hours",
      "Old provider cancellation handled with you",
    ],
  },
];

const faqs = [
  {
    q: "Is the audit really free?",
    a: "The statement review and the written quote are free and carry no obligation. We are paid by the processing relationship if you choose to switch, which is why we are explicit about when switching is not worth it.",
  },
  {
    q: "Do I have to sign a long contract?",
    a: "No. We do not ask for a long-term contract to run the audit or to receive a quote. Any processing agreement is between you and the acquiring bank, and we will read it with you before you sign.",
  },
  {
    q: "Will my rates change if my card mix changes?",
    a: "On interchange-plus, the pass-through portion moves with the cards your customers actually use, and the provider fee does not. On flat-rate pricing, the single blended number can drift away from your real cost as your mix changes.",
  },
  {
    q: "What if my current provider is already cheap?",
    a: "Then we say so in writing. A meaningful share of the statements we review are already competitively priced, and telling you that is cheaper for us than a relationship that starts with a bad recommendation.",
  },
  {
    q: "Do you handle online payments too?",
    a: `Yes — gateway and e-commerce fee review, recurring billing and ACH alongside card. We work across ${site.payments.join(", ")}.`,
  },
  {
    q: "How much of my data do you keep?",
    a: "The statement you send is used for the audit and kept for the duration of the advisory relationship. See the privacy policy for retention and deletion.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <PageHero
        eyebrow="How it works"
        title="Send a statement. Get a number you can check."
        intro="The whole process is five steps and, in most cases, under a week from first contact to a decision. Here is exactly what happens at each one."
      >
        <ButtonLink href="/savings-quote">Start the audit</ButtonLink>
      </PageHero>

      <Section>
        <ol className="space-y-0">
          {steps.map((s, i) => (
            <li
              key={s.n}
              className={`grid gap-6 border-t border-line py-10 md:grid-cols-[auto_1fr_1fr] md:gap-12 ${
                i === steps.length - 1 ? "border-b" : ""
              }`}
            >
              <div className="flex items-baseline gap-4 md:block">
                <span className="font-display text-[28px] leading-none text-slate-300">
                  {s.n}
                </span>
                <p className="mt-2 text-[11px] uppercase tracking-[0.14em] text-brand md:mt-3">
                  {s.time}
                </p>
              </div>

              <h2 className="font-display text-[24px] leading-tight text-navy-900">
                {s.title}
              </h2>

              <div>
                <p className="text-[15px] leading-relaxed text-slate-600">
                  {s.body}
                </p>
                <ul className="mt-4 space-y-1.5">
                  {s.detail.map((d) => (
                    <li key={d} className="flex gap-2.5 text-[13px] text-slate-500">
                      <span aria-hidden="true" className="text-teal">
                        —
                      </span>
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      <section className="border-y border-line bg-mist">
        <div className="container-x py-20">
          <Eyebrow>Common questions</Eyebrow>
          <h2 className="mt-3 font-display text-[30px] leading-tight text-navy-900 sm:text-[36px]">
            The things owners ask on the first call.
          </h2>

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {faqs.map((f) => (
              <div key={f.q}>
                <h3 className="text-[15px] font-semibold text-navy-900">{f.q}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-slate-600">
                  {f.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Section>
        <div className="max-w-2xl">
          <h2 className="font-display text-[28px] leading-tight text-navy-900">
            What we need from you
          </h2>
        </div>
        <Prose>
          <p>
            To produce a quote we need three things, and nothing else:
          </p>
          <ul>
            <li>One recent merchant statement, one full month.</li>
            <li>
              Roughly how many transactions go through in that month and how many
              of them are online.
            </li>
            <li>
              What you sell and where — a single counter, several locations, or
              online only.
            </li>
          </ul>
          <p>
            You do not need to redact anything, and you do not need to tell us
            what you are currently paying. The statement does that.
          </p>
        </Prose>
        <div className="mt-8">
          <ButtonLink href="/savings-quote">Send a statement</ButtonLink>
        </div>
      </Section>
    </>
  );
}
