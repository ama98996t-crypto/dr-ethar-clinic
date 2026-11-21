import { createFileRoute } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpLeft, Award, CalendarCheck, ChevronLeft, Clock3, HeartPulse, MapPin, Menu, Phone, ShieldCheck, Sparkles, Stethoscope, Syringe, Venus } from "lucide-react";
import { clinic, mapsUrl, services, whatsappUrl } from "@/config/clinic";

const title = "عيادة الدكتورة إيثار خضر الخفاجي | النسائية والتوليد والعقم";
const description = "عيادة الدكتورة إيثار خضر الخفاجي، بورد عربي في جراحة أمراض النسائية والتوليد والعقم.";

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

const nav = [
  ["#about", "عن الطبيبة"],
  ["#services", "الخدمات"],
  ["#contact", "التواصل"],
] as const;

const icons = [HeartPulse, Venus, Stethoscope, Syringe, ShieldCheck];

function Index() {
  return (
    <div className="clinic-site">
      <div className="topline"><div className="shell topline-inner"><span><MapPin size={14} /> النجف الأشرف · الحيدرية</span><span className="topline-note">رعاية واهتمام بصحة المرأة</span></div></div>
      <header className="site-header">
        <div className="shell header-inner">
          <a href="#home" className="brand" aria-label="الصفحة الرئيسية">
            <span className="brand-mark"><span>إ</span><i /></span>
            <span className="brand-copy"><strong>د. إيثار الخفاجي</strong><small>النسائية والتوليد والعقم</small></span>
          </a>
          <nav className="desktop-nav" aria-label="القائمة الرئيسية">
            {nav.map(([href, label]) => <a key={href} href={href}>{label}</a>)}
          </nav>
          <a className="header-cta" href={whatsappUrl} target="_blank" rel="noopener noreferrer">تواصلي معنا <ArrowUpLeft size={16} /></a>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-pattern" />
          <div className="shell hero-grid">
            <div className="hero-copy">
              <div className="eyebrow"><span className="eyebrow-line" /> عيادة متخصصة بصحة المرأة</div>
              <h1>رعاية طبية<br /><em>تستحقينها</em> بكل ثقة</h1>
              <p className="hero-lead">{clinic.name}</p>
              <p className="hero-description">{clinic.qualifications}. متابعة واهتمام في مختلف مراحل صحة المرأة، من الحمل والولادة إلى علاج الأمراض النسائية والعقم.</p>
              <div className="hero-actions">
                <a className="btn btn-gold" href={whatsappUrl} target="_blank" rel="noopener noreferrer">للاستفسار عبر واتساب <ArrowLeft size={17} /></a>
                <a className="btn btn-outline" href="#services">اكتشفي الخدمات <ChevronLeft size={17} /></a>
              </div>
              <div className="hero-trust"><span><ShieldCheck size={17} /> اختصاص دقيق</span><span><Award size={17} /> بورد عربي</span><span><HeartPulse size={17} /> اهتمام بصحتك</span></div>
            </div>
            <div className="hero-visual">
              <div className="visual-orbit orbit-one" /><div className="visual-orbit orbit-two" />
              <div className="portrait-card">
                <div className="portrait-top"><span>CLINIC PROFILE</span><Sparkles size={17} /></div>
                <div className="portrait-emblem"><div className="emblem-ring"><Venus size={68} strokeWidth={1.15} /></div><span className="emblem-cross">✦</span></div>
                <div className="portrait-caption"><span>الدكتورة</span><strong>إيثار خضر الخفاجي</strong><small>جراحة أمراض النسائية والتوليد والعقم</small></div>
                <div className="portrait-seal"><Award size={18} /><span>بورد عربي</span></div>
              </div>
              <div className="floating-note"><span className="note-icon"><HeartPulse size={19} /></span><span><b>صحة المرأة أولويتنا</b><small>رعاية ومتابعة باهتمام</small></span></div>
              <div className="visual-dot dot-a" /><div className="visual-dot dot-b" />
            </div>
          </div>
          <div className="hero-bottom"><div className="shell hero-bottom-inner"><span>عناية متخصصة · خصوصية · اهتمام</span><span className="scroll-hint">اكتشفي المزيد <span>↓</span></span></div></div>
        </section>

        <section className="credentials">
          <div className="shell credentials-grid">
            <div className="credential"><span className="credential-icon"><Award size={22} /></span><span><b>بورد عربي</b><small>في جراحة أمراض النسائية والتوليد والعقم</small></span></div>
            <div className="credential"><span className="credential-icon"><ShieldCheck size={22} /></span><span><b>تدريب نسائي لاجراحي</b><small>شهادة تدريب تخصصية</small></span></div>
            <div className="credential"><span className="credential-icon"><HeartPulse size={22} /></span><span><b>رعاية متخصصة</b><small>اهتمام بصحة المرأة ومراحل حياتها</small></span></div>
          </div>
        </section>

        <section className="section about-section" id="about">
          <div className="shell about-grid">
            <div className="section-heading"><span className="section-kicker">نبذة عن الطبيبة</span><h2>خبرة تخصصية،<br /><em>واهتمام يطمئنك</em></h2><div className="gold-rule" /></div>
            <div className="about-text"><p className="about-name">{clinic.doctorName}</p><p>{clinic.qualifications}.</p><p>{clinic.certificate}، مع اهتمام بتقديم الرعاية والمتابعة الطبية للمرأة في أجواء تحترم الخصوصية وتضع احتياجات المراجِعة في المقدمة.</p><a href="#contact" className="text-link">تواصلي مع العيادة <ArrowLeft size={16} /></a></div>
          </div>
        </section>

        <section className="section procedure-photo-section" aria-label="صورة من أجواء العمليات">
          <div className="shell procedure-photo-grid">
            <div className="procedure-photo-frame">
              <img src="/dr-ethar-clinic/clinic-surgery.jpg" alt="طبيبة من الفريق الطبي أثناء إجراء عملية جراحية" loading="lazy" />
              <span className="photo-corner photo-corner-one" />
              <span className="photo-corner photo-corner-two" />
            </div>
            <div className="procedure-photo-copy">
              <span className="section-kicker">رعاية طبية متخصصة</span>
              <h2>اهتمام بالتفاصيل<br /><em>في كل مرحلة</em></h2>
              <div className="gold-rule" />
              <p>الرعاية النسائية والتوليدية تبدأ بالاهتمام والمتابعة، وتستمر بالحرص على سلامة المريضة وراحتها.</p>
            </div>
          </div>
        </section>

        <section className="section services-section" id="services">
          <div className="shell">
            <div className="center-heading"><span className="section-kicker">خدمات العيادة</span><h2>رعاية شاملة لصحة المرأة</h2><p>مجموعة من الخدمات الطبية التخصصية لمتابعة صحتك باهتمام.</p></div>
            <div className="services-grid">
              {services.map((service, index) => {
                const Icon = icons[index % icons.length];
                return <article className="service-card" key={service.title}><div className="service-card-top"><span className="service-icon"><Icon size={24} strokeWidth={1.6} /></span><span className="service-number">0{index + 1}</span></div><h3>{service.title}</h3><p>{service.text}</p><a href="#contact" aria-label={`استفسري عن ${service.title}`}><ArrowUpLeft size={17} /></a></article>;
              })}
            </div>
          </div>
        </section>

        <section className="quote-band"><div className="shell quote-inner"><span className="quote-mark">“</span><p>صحتكِ وراحتكِ تستحقان عناية واهتماماً في كل مرحلة.</p><span className="quote-line" /></div></section>

        <section className="section contact-section" id="contact">
          <div className="shell contact-grid">
            <div className="contact-intro"><span className="section-kicker">نحن هنا لمساعدتك</span><h2>ابدئي بالتواصل<br /><em>مع العيادة</em></h2><p>للاستفسار عن الخدمات أو التواصل مع العيادة، استخدمي الهاتف أو واتساب.</p><a className="btn btn-gold" href={whatsappUrl} target="_blank" rel="noopener noreferrer">تواصلي عبر واتساب <ArrowLeft size={17} /></a></div>
            <div className="contact-panel">
              <div className="contact-row"><span className="contact-icon"><Phone size={20} /></span><div><small>رقم الهاتف</small><a href={`tel:${clinic.phoneLink}`} dir="ltr">{clinic.phoneDisplay}</a></div><a className="row-arrow" href={`tel:${clinic.phoneLink}`} aria-label="اتصال"><ArrowUpLeft size={18} /></a></div>
              <div className="contact-row"><span className="contact-icon"><MapPin size={20} /></span><div><small>عنوان العيادة</small><b>{clinic.address}</b></div><a className="row-arrow" href={mapsUrl} target="_blank" rel="noopener noreferrer" aria-label="الموقع على الخريطة"><ArrowUpLeft size={18} /></a></div>
              <div className="social-links"><a href={clinic.social.facebook} target="_blank" rel="noopener noreferrer">Facebook ↗</a><a href={clinic.social.instagram} target="_blank" rel="noopener noreferrer">Instagram ↗</a></div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer"><div className="shell footer-inner"><a href="#home" className="footer-brand">د. إيثار الخفاجي</a><span>© {new Date().getFullYear()} جميع الحقوق محفوظة</span><a href="#home">العودة للأعلى ↑</a></div></footer>
      <a className="mobile-whatsapp" href={whatsappUrl} target="_blank" rel="noopener noreferrer"><Phone size={18} /> تواصلي مع العيادة</a>
    </div>
  );
}
