// Single source of truth for everything on the site that is a fact about
// Merchant Advisory Services. Pulled from merchantadvisoryservices.com
// (about, team, terms & conditions) — do not invent values here.

export const site = {
  name: "Merchant Advisory Services",
  legalName: "Merchant Advisory Services",
  tagline: "Payments advisory for small business",
  founded: 2016,
  legal: "Delaware corporation",
  address: {
    line1: "99 Wall Street, #1122",
    city: "New York",
    region: "NY",
    postal: "10005",
    country: "USA",
  },
  phone: "646-780-0802",
  phoneHref: "tel:+16467800802",
  fax: "646-680-0606",
  email: "info@merchantadvisoryservices.com",
  helpEmail: "help@merchantadvisoryservices.com",
  domain: "merchantadvisoryservices.com",
  url: "https://merchantadvisoryservices.com",
  leadership: [
    {
      name: "JP Biamby",
      role: "Founder & Principal Advisor",
      bio: "Leads the advisory practice and the merchant relationships behind it. Works directly with owners on statement reviews, pricing structure and point-of-sale changes.",
    },
  ],
  principles: [
    {
      n: "01",
      glyph: "/media/principle-accountable.webp",
      title: "Authenticity",
      body: "We believe that being authentic at all times is essential for a productive environment.",
    },
    {
      n: "02",
      glyph: "/media/principle-save.webp",
      title: "Honesty",
      body: "Being honest makes it easy for us to provide transparent pricing and expert level customer service.",
    },
    {
      n: "03",
      glyph: "/media/principle-advocate.webp",
      title: "Accountability",
      body: "We pride ourselves on being accountable and we prove ourselves by providing measurable results.",
    },
  ],
  payments: ["Stripe", "Clover", "Fiserv", "TSYS"],
  hours: "Monday to Friday, 9:00am – 6:00pm ET",
} as const;

export const fullAddress = `${site.address.line1}, ${site.address.city}, ${site.address.region} ${site.address.postal}`;
