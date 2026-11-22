import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpLeft, ArrowLeft, Award, HeartPulse, MapPin, Phone, ShieldCheck, Stethoscope, Venus, Baby, Activity, Instagram, Facebook, MessageCircle } from "lucide-react";
import { clinic, mapsUrl, services, whatsappUrl } from "@/config/clinic";

const title = "عيادة الدكتورة إيثار خضر الخفاجي | النسائية والتوليد والعقم";
const description = "عيادة الدكتورة إيثار خضر الخفاجي، بورد عربي في جراحة أمراض النسائية والتوليد والعقم.";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title }, { name: "description", content: description },
    { property: "og:title", content: title }, { property: "og:description", content: description },
    { property: "og:type", content: "website" }, { property: "og:locale", content: "ar_IQ" },
  ]}),
  component: Index,
});

const nav = [["#about","عن الطبيبة"],["#services","الخدمات الطبية"],["#contact","التواصل"]] as const;
const icons = [HeartPulse, Venus, Stethoscope, Baby, Activity];

function Index() {
  return <div className="fresh-site" dir="rtl">
    <div className="fresh-top"><div className="fresh-wrap fresh-top-inner"><span><MapPin size={14}/> النجف الأشرف · الحيدرية</span><span>عيادة متخصصة بصحة المرأة</span></div></div>
    <header className="fresh-header"><div className="fresh-wrap fresh-header-inner">
      <a href="#home" className="fresh-brand"><span className="fresh-brand-icon">إ</span><span><b>د. إيثار خضر الخفاجي</b><small>النسائية والتوليد والعقم</small></span></a>
      <nav className="fresh-nav">{nav.map(([href,label])=><a key={href} href={href}>{label}</a>)}</nav>
      <a className="fresh-header-btn" href={whatsappUrl} target="_blank" rel="noopener noreferrer">تواصلي معنا <ArrowUpLeft size={16}/></a>
    </div></header>

    <main>
      <section className="fresh-hero" id="home">
        <div className="fresh-wrap fresh-hero-grid">
          <div className="fresh-hero-copy">
            <span className="fresh-kicker"><i/> رعاية نسائية متخصصة</span>
            <h1>لأن صحتكِ<br/><em>تستحق الأفضل.</em></h1>
            <p className="fresh-doctor">{clinic.name}</p>
            <p className="fresh-intro">{clinic.qualifications}. رعاية ومتابعة طبية للمرأة في مراحل الحمل والولادة، وعلاج الأمراض النسائية والعقم.</p>
            <div className="fresh-actions">
              <a className="fresh-btn fresh-btn-primary" href={whatsappUrl} target="_blank" rel="noopener noreferrer"><Phone size={17}/> تواصلي عبر واتساب</a>
              <a className="fresh-btn fresh-btn-quiet" href="#services">تعرّفي على الخدمات <ArrowLeft size={16}/></a>
            </div>
            <div className="fresh-credentials"><span><Award size={18}/><b>بورد عربي</b></span><span><ShieldCheck size={18}/><b>تدريب تخصصي</b></span></div>
          </div>
          <div className="fresh-hero-image">
            <div className="fresh-image-frame">
              <img src="/dr-ethar-clinic/clinic-surgery.jpg?v=9" alt="صورة من غرفة العمليات" fetchPriority="high" decoding="async"/>
              <div className="fresh-image-label"><span>اختصاص النسائية والتوليد والعقم</span><b>د. إيثار خضر الخفاجي</b></div>
            </div>
            <span className="fresh-image-stamp"><HeartPulse size={19}/> صحة المرأة أولويتنا</span>
            <span className="fresh-image-index">01 / 03</span>
          </div>
        </div>
        <div className="fresh-hero-bottom"><div className="fresh-wrap">اهتمام بالتفاصيل <i/> خصوصية واحترام <i/> رعاية متخصصة</div></div>
      </section>

      <section className="fresh-about" id="about"><div className="fresh-wrap fresh-about-grid">
        <div><span className="fresh-overline">عن الطبيبة</span><h2>رعاية مبنية على<br/><em>العلم والاهتمام</em></h2></div>
        <div className="fresh-about-copy"><p className="fresh-about-name">{clinic.doctorName}</p><p>{clinic.qualifications}.</p><p>{clinic.certificate}، مع اهتمام بتقديم الرعاية والمتابعة الطبية للمرأة واحترام خصوصيتها واحتياجاتها.</p></div>
      </div></section>

      <section className="fresh-services" id="services"><div className="fresh-wrap">
        <div className="fresh-section-head"><div><span className="fresh-overline">خدمات العيادة</span><h2>اهتمام بصحتكِ<br/><em>في كل مرحلة</em></h2></div><p>خدمات طبية تخصصية لمتابعة صحة المرأة وتقديم الرعاية المناسبة.</p></div>
        <div className="fresh-service-list">{services.map((service,index)=>{const Icon=icons[index%icons.length];return <article className="fresh-service" key={service.title}><span className="fresh-service-no">0{index+1}</span><span className="fresh-service-icon"><Icon size={23} strokeWidth={1.6}/></span><div><h3>{service.title}</h3><p>{service.text}</p></div><a href="#contact" aria-label={`استفسري عن ${service.title}`}><ArrowUpLeft size={19}/></a></article>})}</div>
      </div></section>

      <section className="fresh-contact" id="contact"><div className="fresh-wrap fresh-contact-grid">
        <div className="fresh-contact-copy"><span className="fresh-overline">التواصل والاستفسار</span><h2>نحن هنا<br/><em>للاستماع إليكِ.</em></h2><p>للاستفسار عن خدمات العيادة أو الوصول إليها، يمكنكِ التواصل عبر الهاتف أو واتساب.</p><a className="fresh-btn fresh-btn-light" href={whatsappUrl} target="_blank" rel="noopener noreferrer">ابدئي المحادثة <ArrowUpLeft size={17}/></a></div>
        <div className="fresh-contact-card">
          <a className="fresh-contact-row" href={`tel:${clinic.phoneLink}`}><span><Phone size={20}/></span><div><small>اتصال مباشر</small><b dir="ltr">{clinic.phoneDisplay}</b></div><ArrowUpLeft size={18}/></a>
          <a className="fresh-contact-row" href={mapsUrl} target="_blank" rel="noopener noreferrer"><span><MapPin size={20}/></span><div><small>عنوان العيادة</small><b>{clinic.address}</b></div><ArrowUpLeft size={18}/></a>
          <div className="fresh-socials"><a href={clinic.social.facebook} target="_blank" rel="noopener noreferrer"><Facebook size={17}/> Facebook</a><a href={clinic.social.instagram} target="_blank" rel="noopener noreferrer"><Instagram size={17}/> Instagram</a></div>
        </div>
      </div></section>
    </main>
    <footer className="fresh-footer"><div className="fresh-wrap"><b>د. إيثار خضر الخفاجي</b><span>© {new Date().getFullYear()} جميع الحقوق محفوظة</span><a href="#home">العودة للأعلى ↑</a></div></footer>
    <a className="fresh-mobile-cta" href={whatsappUrl} target="_blank" rel="noopener noreferrer"><Phone size={18}/> تواصلي مع العيادة</a>
  </div>;
}
