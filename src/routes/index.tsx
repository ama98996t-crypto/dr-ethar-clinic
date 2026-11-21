import { createFileRoute } from "@tanstack/react-router";
import { clinic, mapsUrl, services } from "@/config/clinic";

const title = "عيادة الدكتورة إيثار خضر الخفاجي | النسائية والتوليد – النجف";
const description =
  "عيادة الدكتورة إيثار خضر الخفاجي للنسائية والتوليد في مجمع لازو، الحيدرية – النجف. رعاية هادئة ومتابعة باهتمام لصحة المرأة والحمل.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "ar_IQ" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Section({ id, eyebrow, title, children }: { id: string; eyebrow: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} aria-labelledby={`${id}-t`} className="scroll-mt-20 px-5 py-20 sm:py-24">
      <div className="mx-auto max-w-5xl">
        <p className="text-sm font-semibold tracking-wide text-ring">{eyebrow}</p>
        <h2 id={`${id}-t`} className="mt-2 text-2xl font-bold text-navy sm:text-3xl">{title}</h2>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}

const nav = [
  ["#about", "عن الطبيبة"],
  ["#services", "الاختصاص"],
  ["#contact", "الموقع"],
] as const;

function Index() {
  const socials = Object.entries(clinic.social).filter(([, v]) => v);
  const labels: Record<string, string> = { instagram: "إنستغرام", facebook: "فيسبوك", telegram: "تيليغرام" };

  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:right-3 focus:z-50 focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground">
        تخطَّ إلى المحتوى
      </a>
      <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-5 py-3">
          <a href="#top" className="font-display text-base font-bold text-navy">د. إيثار الخفاجي</a>
          <nav aria-label="القائمة الرئيسية" className="hidden gap-6 text-sm sm:flex">
            {nav.map(([h, l]) => (
              <a key={h} href={h} className="text-muted-foreground transition hover:text-primary">{l}</a>
            ))}
          </nav>
          <a href="#contact" className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition hover:bg-navy">موقع العيادة</a>
        </div>
      </header>

      <main id="main">
        <section id="top" className="bg-hero px-5 pb-24 pt-20 sm:pt-28">
          <div className="mx-auto max-w-5xl">
            <span className="inline-block rounded-full border border-sky bg-card/70 px-4 py-1 text-sm text-secondary-foreground">{clinic.specialty}</span>
            <h1 className="mt-6 max-w-3xl text-4xl font-bold leading-snug text-navy sm:text-5xl sm:leading-snug">{clinic.name}</h1>
            <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
              رعاية هادئة ومتابعة باهتمام لصحة المرأة والحمل، في بيئة تحترم خصوصيتك وراحتك.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#contact" className="rounded-full bg-primary px-7 py-3.5 font-semibold text-primary-foreground shadow-soft transition hover:bg-navy">موقع العيادة</a>
              <a href="#services" className="rounded-full border border-input bg-card px-7 py-3.5 font-semibold text-primary transition hover:bg-secondary">مجالات الرعاية</a>
            </div>
            <p className="mt-8 flex items-start gap-2 text-sm text-muted-foreground">
              <span aria-hidden>📍</span>{clinic.address}
            </p>
          </div>
        </section>

        <Section id="about" eyebrow="عن الطبيبة" title={clinic.doctorName}>
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <p className="max-w-2xl text-lg text-foreground/85">
              تستقبل {clinic.doctorName} المراجِعات في اختصاص {clinic.specialty}، وتحرص على توفير استشارة واضحة
              ومتابعة مريحة تُناسب احتياجات كل مراجِعة، مع الاستماع الجيد والإجابة عن الاستفسارات بهدوء.
            </p>
            <div aria-hidden className="hidden h-40 w-40 place-items-center rounded-full bg-secondary text-6xl md:grid">⚕</div>
          </div>
        </Section>

        <div className="bg-muted/60">
          <Section id="services" eyebrow="الاختصاص" title="مجالات الرعاية">
            <ul className="grid gap-5 sm:grid-cols-2">
              {services.map((s, i) => (
                <li key={s.title} className="rounded-2xl border border-border bg-card p-6 shadow-soft">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-secondary font-display text-sm font-bold text-primary">{i + 1}</span>
                  <h3 className="mt-4 text-lg font-bold text-navy">{s.title}</h3>
                  <p className="mt-2 text-muted-foreground">{s.text}</p>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-muted-foreground">تُحدَّد الحاجة لأي فحص أو إجراء بعد الاستشارة ووفق تقدير الطبيبة.</p>
          </Section>
        </div>

        <div className="bg-muted/60">
          <Section id="contact" eyebrow="الموقع والتواصل" title="زيارة العيادة">
            <div className="grid gap-5 md:grid-cols-2">
              <div className="rounded-2xl border border-border bg-card p-6">
                <h3 className="font-bold text-navy">العنوان</h3>
                <p className="mt-2">{clinic.address}</p>
                <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="mt-5 inline-block rounded-full border border-input px-5 py-2.5 font-semibold text-primary transition hover:bg-secondary">
                  البحث عن الموقع في خرائط Google ↗
                </a>
              </div>
              <div className="rounded-2xl border border-border bg-card p-6">
                <h3 className="font-bold text-navy">التواصل وأوقات الدوام</h3>
                <dl className="mt-2 space-y-2">
                  {clinic.phoneDisplay && (<div><dt className="inline text-muted-foreground">الهاتف: </dt><dd className="inline" dir="ltr">{clinic.phoneDisplay}</dd></div>)}
                  {clinic.workingHours && (<div><dt className="inline text-muted-foreground">الدوام: </dt><dd className="inline">{clinic.workingHours}</dd></div>)}
                </dl>
                {socials.length > 0 && (
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {socials.map(([k, v]) => (
                      <li key={k}><a href={v} target="_blank" rel="noopener noreferrer" className="rounded-full bg-secondary px-4 py-1.5 text-sm text-secondary-foreground hover:bg-accent">{labels[k]}</a></li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </Section>
        </div>
      </main>

      <footer className="bg-navy px-5 py-10 text-primary-foreground">
        <div className="mx-auto flex max-w-5xl flex-col gap-2 text-sm sm:flex-row sm:justify-between">
          <p className="font-display font-bold">{clinic.name}</p>
          <p className="opacity-80">© {new Date().getFullYear()} — جميع الحقوق محفوظة</p>
        </div>
      </footer>
    </>
  );
}