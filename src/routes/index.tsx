import { createFileRoute } from "@tanstack/react-router";
import { clinic, mapsUrl, services, whatsappUrl } from "@/config/clinic";

const title = "عيادة الدكتورة إيثار خضر الخفاجي | جراحة أمراض النسائية والتوليد والعقم";
const description =
  "عيادة الدكتورة إيثار خضر الخفاجي. بورد عربي في جراحة أمراض النسائية والتوليد والعقم، ورعاية الحوامل والولادة الطبيعية والعمليات النسائية.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "ar_IQ" },
    ],
  }),
  component: Index,
});

function Section({ id, eyebrow, title, children }: { id: string; eyebrow: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} aria-labelledby={`${id}-t`} className="scroll-mt-20 px-5 py-16 sm:py-20">
      <div className="mx-auto max-w-5xl">
        <p className="text-sm font-semibold tracking-wide text-ring">{eyebrow}</p>
        <h2 id={`${id}-t`} className="mt-2 text-2xl font-bold text-navy sm:text-3xl">{title}</h2>
        <div className="mt-8">{children}</div>
      </div>
    </section>
  );
}

const nav = [
  ["#about", "عن الطبيبة"],
  ["#services", "الخدمات"],
  ["#contact", "للحجز والاستفسار"],
] as const;

function Index() {
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:right-3 focus:z-50 focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground">
        تخطَّ إلى المحتوى
      </a>
      <header className="sticky top-0 z-40 border-b border-border/70 bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-5 py-3">
          <a href="#top" className="font-display text-base font-bold text-navy">د. إيثار الخفاجي</a>
          <nav aria-label="القائمة الرئيسية" className="hidden gap-6 text-sm sm:flex">
            {nav.map(([h, l]) => (
              <a key={h} href={h} className="text-muted-foreground transition hover:text-primary">{l}</a>
            ))}
          </nav>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition hover:bg-navy">واتساب</a>
        </div>
      </header>

      <main id="main">
        <section id="top" className="bg-hero px-5 pb-20 pt-16 sm:pt-24">
          <div className="mx-auto max-w-5xl">
            <span className="inline-block rounded-full border border-sky bg-card/70 px-4 py-1 text-sm text-secondary-foreground">النسائية والتوليد والعقم</span>
            <h1 className="mt-6 max-w-4xl text-3xl font-bold leading-relaxed text-navy sm:text-5xl">{clinic.name}</h1>
            <p className="mt-5 max-w-3xl text-lg font-semibold text-foreground/85">{clinic.qualifications}</p>
            <p className="mt-3 max-w-2xl text-base text-muted-foreground">
              رعاية طبية واهتمام بصحة المرأة، ومتابعة الحمل والولادة والأمراض النسائية والعقم.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={`tel:${clinic.phoneLink}`} className="rounded-full bg-primary px-7 py-3.5 font-semibold text-primary-foreground shadow-soft transition hover:bg-navy">اتصال: {clinic.phoneDisplay}</a>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="rounded-full border border-input bg-card px-7 py-3.5 font-semibold text-primary transition hover:bg-secondary">تواصل عبر واتساب</a>
            </div>
            <p className="mt-7 flex items-start gap-2 text-sm text-muted-foreground">
              <span aria-hidden>📍</span>{clinic.address}
            </p>
          </div>
        </section>

        <Section id="about" eyebrow="نبذة تعريفية" title={clinic.doctorName}>
          <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="text-lg font-semibold leading-loose text-foreground/90">{clinic.qualifications}</p>
              <p className="mt-3 leading-loose text-muted-foreground">{clinic.certificate}</p>
            </div>
            <div aria-hidden className="hidden h-36 w-36 place-items-center rounded-full bg-secondary text-6xl md:grid">⚕</div>
          </div>
        </Section>

        <div className="bg-muted/60">
          <Section id="services" eyebrow="خدمات العيادة" title="الخدمات الطبية">
            <ul className="grid gap-5 sm:grid-cols-2">
              {services.map((s, i) => (
                <li key={s.title} className="rounded-2xl border border-border bg-card p-6 shadow-soft">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-secondary font-display text-sm font-bold text-primary">{i + 1}</span>
                  <h3 className="mt-4 text-lg font-bold leading-relaxed text-navy">{s.title}</h3>
                  <p className="mt-2 leading-loose text-muted-foreground">{s.text}</p>
                </li>
              ))}
            </ul>
          </Section>
        </div>

        <Section id="contact" eyebrow="للحجز والاستفسار" title="اتصلوا بنا">
          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="font-bold text-navy">الهاتف والتواصل</h3>
              <p className="mt-3 text-xl font-bold" dir="ltr">{clinic.phoneDisplay}</p>
              <div className="mt-5 flex flex-wrap gap-3">
                <a href={`tel:${clinic.phoneLink}`} className="rounded-full bg-primary px-5 py-2.5 font-semibold text-primary-foreground">اتصال مباشر</a>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="rounded-full border border-input px-5 py-2.5 font-semibold text-primary hover:bg-secondary">واتساب</a>
              </div>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="font-bold text-navy">عنوان العيادة</h3>
              <p className="mt-3 leading-loose">{clinic.address}</p>
              <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="mt-5 inline-block rounded-full border border-input px-5 py-2.5 font-semibold text-primary transition hover:bg-secondary">
                عرض الموقع على خرائط Google ↗
              </a>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={clinic.social.facebook} target="_blank" rel="noopener noreferrer" className="rounded-full bg-secondary px-5 py-2.5 text-sm font-semibold text-secondary-foreground hover:bg-accent">صفحة فيسبوك</a>
            <a href={clinic.social.instagram} target="_blank" rel="noopener noreferrer" className="rounded-full bg-secondary px-5 py-2.5 text-sm font-semibold text-secondary-foreground hover:bg-accent">إنستغرام</a>
          </div>
        </Section>
      </main>

      <footer className="bg-navy px-5 py-9 text-primary-foreground">
        <div className="mx-auto flex max-w-5xl flex-col gap-2 text-sm sm:flex-row sm:justify-between">
          <p className="font-display font-bold">{clinic.name}</p>
          <p className="opacity-80">© {new Date().getFullYear()} — جميع الحقوق محفوظة</p>
        </div>
      </footer>
    </>
  );
}
