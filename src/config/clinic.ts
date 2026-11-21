/** إعدادات ومعلومات عيادة الدكتورة إيثار خضر الخفاجي */
export const clinic = {
  name: "عيادة الدكتورة إيثار خضر الخفاجي",
  doctorName: "الدكتورة إيثار خضر الخفاجي",
  qualifications: "بورد عربي في جراحة أمراض النسائية والتوليد والعقم",
  certificate: "حاصلة على شهادة التدريب النسائي اللاجراحي",
  specialty: "جراحة أمراض النسائية والتوليد والعقم",
  address: "مجمع لازو، النجف / الحيدرية، مجاور صدى الحيدرية للبنات",
  phoneDisplay: "07812285000",
  phoneLink: "+9647812285000",
  workingHours: "",
  social: {
    facebook: "https://www.facebook.com/share/1CefDMcx68/",
    instagram: "https://www.instagram.com/p/DfpNKx5uP5G/?mdxt=N3lqdGN2NzdrMGho",
  },
} as const;

export const services = [
  { title: "رعاية الحوامل", text: "متابعة ورعاية الحامل خلال مراحل الحمل." },
  { title: "الولادة الطبيعية", text: "رعاية ومتابعة حالات الولادة الطبيعية." },
  { title: "علاج الأمراض النسائية والعقم", text: "تقييم ومتابعة الأمراض النسائية ومشكلات العقم." },
  { title: "العمليات القيصرية والنسائية والتجميل الجراحي", text: "إجراء العمليات القيصرية والعمليات النسائية والتجميل الجراحي." },
  { title: "معالجة اضطرابات الهرمونات", text: "متابعة اضطرابات الهرمونات والمشكلات المرتبطة بها." },
] as const;

export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  "مجمع لازو الحيدرية النجف",
)}`;

export const whatsappUrl = `https://wa.me/${clinic.phoneLink.replace("+", "")}`;
