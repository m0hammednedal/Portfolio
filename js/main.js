const grid=document.querySelector("#projects"),filters=document.querySelectorAll("#filters button");
const langBtn=document.querySelector("#langBtn");

const translations={
  en:{
    title:"Mohammed Al Mbayed — Video Editor & Multimedia Designer",navWork:"Work",navAbout:"About",navExperience:"Experience",navSkills:"Skills",navContact:"Contact",
    eyebrow:"VIDEO EDITOR • MULTIMEDIA DESIGNER",heroA:"I turn ideas into ",heroB:"visual stories.",heroText:"Video editing, motion graphics and AI-assisted visual production built for social media, campaigns, brands and stories that need to be seen.",
    viewWork:"View My Work",workTogether:"Let’s Work Together",showreel:"SELECTED SHOWREEL",
    stat1:"Videos Produced",stat2:"Motion & Editing Projects",stat3:"Views on Multiple Videos",stat4:"Complete Brand Identity Packages",
    impactLabel:"HUMANITARIAN IMPACT",impactTitle:"Content that ",impactTitle2:"reached people.",impactIntro:"A selection of humanitarian content categories and the audience reach achieved through social media.",appealsTitle:"Humanitarian Appeals",appealsDesc:"Impact-driven content highlighting urgent humanitarian cases through emotional visual storytelling, designed to communicate the message clearly and encourage audience engagement and support.",storiesTitle:"Human Stories",storiesDesc:"Real human stories transformed into compelling visual narratives, focusing on authentic emotions and meaningful details to create a strong connection with the audience.",entertainmentTitle:"Entertainment & Events",entertainmentDesc:"Dynamic content capturing children’s activities and community events, combining authentic moments with energetic editing to create engaging and shareable videos.",selectedWork:"SELECTED WORK",workTitle:"15 projects. ",workTitle2:"One visual language.",workIntro:"A curated selection of humanitarian storytelling, AI video production and motion graphics.",
    allProjects:"All Projects",humanitarian:"Humanitarian",aiVideo:"AI Video",motionGraphics:"Motion Graphics",allDrive:"View All Projects on Drive",moreWork:"More work is available in the full project archive.",
    aboutLabel:"ABOUT",aboutTitle:"Visual storytelling with ",aboutTitle2:"purpose.",aboutP1:"I’m Mohammed Al Mbayed, a Video Editor & Multimedia Designer working across short-form content, motion design, branding and AI-assisted production.",
    aboutP2:"Since 2022, I’ve produced 100+ videos and 50+ editing/motion projects, including humanitarian field content and social campaigns. I combine editing craft with AI tools to move from concept and storyboard to a polished final piece.",
    experienceLabel:"EXPERIENCE",experienceTitle:"Where I’ve ",experienceTitle2:"made an impact.",current:"CURRENT",job1:"Video Editor & Content Creator",org:"Charity Organization",
    job1p:"Humanitarian field and campaign videos. Produced 50 videos between March–August 2026 that trended on social media, reaching 100K–1M views each. Also produce AI-generated video content for product advertisements.",
    job2:"Freelance Video Editor & Motion Graphics Artist",freelance:"Freelancing · Jun–Nov 2022",job2p:"Delivered 50+ motion graphics and video editing projects, designed 2 complete brand identity packages and optimized editing workflows.",
    skillsLabel:"SKILLS",skillsTitle:"Tools behind the ",skillsTitle2:"work.",editing:"Editing",design:"Design",aiTools:"AI Tools",content:"Content",
    letsCreate:"LET’S CREATE",contactTitle:"Have a story<br>worth ",contactTitle2:"showing?",contactIntro:"For video editing, motion graphics, social content or AI-assisted production:",drive:"Drive",behance:"Behance",footerRole:"VIDEO EDITOR • MULTIMEDIA DESIGNER"
  },
  ar:{
    title:"محمد المبيض — مونتير ومصمم وسائط متعددة",navWork:"الأعمال",navAbout:"نبذة عني",navExperience:"الخبرة",navSkills:"المهارات",navContact:"تواصل",
    eyebrow:"مونتير • مصمم وسائط متعددة",heroA:"أحوّل الأفكار إلى ",heroB:"قصص بصرية.",heroText:"مونتاج الفيديو، الموشن جرافيك والإنتاج البصري بالذكاء الاصطناعي لمحتوى السوشيال ميديا والحملات والعلامات التجارية والقصص التي تستحق أن تُرى.",
    viewWork:"شاهد أعمالي",workTogether:"لنعمل معًا",showreel:"شو ريل مختار",
    stat1:"فيديو تم إنتاجه",stat2:"مشروع مونتاج وموشن",stat3:"مشاهدة على عدة فيديوهات",stat4:"هويات بصرية متكاملة",
    impactLabel:"الأثر الإنساني",impactTitle:"محتوى وصل إلى ",impactTitle2:"الجمهور.",impactIntro:"مجموعة من أنواع المحتوى الإنساني ونسب الوصول التي حققتها الأعمال عبر منصات السوشيال ميديا.",appealsTitle:"مناشدات إنسانية",appealsDesc:"محتوى مؤثر يسلّط الضوء على الحالات الإنسانية واحتياجاتها، مع توظيف السرد البصري والإيقاع العاطفي لإيصال الرسالة وتحفيز الجمهور على التفاعل والدعم.",storiesTitle:"قصص إنسانية",storiesDesc:"قصص حقيقية تُقدَّم بأسلوب بصري يركّز على المشاعر والتفاصيل الإنسانية لبناء ارتباط مباشر وقوي بين القصة والجمهور.",entertainmentTitle:"ترفيه وفعاليات",entertainmentDesc:"محتوى ترفيهي يوثّق فعاليات الأطفال والمبادرات المجتمعية بأسلوب حيوي وديناميكي، يحوّل اللحظات العفوية إلى محتوى جذاب وقابل للمشاركة.",selectedWork:"أعمال مختارة",workTitle:"15 مشروعًا. ",workTitle2:"لغة بصرية واحدة.",workIntro:"مجموعة مختارة من القصص الإنسانية، إنتاج الفيديو بالذكاء الاصطناعي والموشن جرافيك.",
    allProjects:"كل المشاريع",humanitarian:"إنساني",aiVideo:"فيديو بالذكاء الاصطناعي",motionGraphics:"موشن جرافيك",allDrive:"شاهد جميع الأعمال على Drive",moreWork:"المزيد من الأعمال متوفر في الأرشيف الكامل للمشاريع.",
    aboutLabel:"نبذة عني",aboutTitle:"سرد بصري ",aboutTitle2:"بهدف.",aboutP1:"أنا محمد المبيض، مونتير ومصمم وسائط متعددة أعمل في محتوى الفيديو القصير، الموشن ديزاين، الهوية البصرية والإنتاج المدعوم بالذكاء الاصطناعي.",
    aboutP2:"منذ عام 2022، أنتجت أكثر من 100 فيديو وأكثر من 50 مشروع مونتاج وموشن، من بينها محتوى إنساني ميداني وحملات للسوشيال ميديا. أجمع بين مهارات المونتاج وأدوات الذكاء الاصطناعي للانتقال من الفكرة والستوري بورد إلى العمل النهائي.",
    experienceLabel:"الخبرة",experienceTitle:"خبرة صنعت ",experienceTitle2:"أثرًا.",current:"حاليًا",job1:"مونتير وصانع محتوى",org:"جمعية خيرية",
    job1p:"إنتاج ومونتاج فيديوهات إنسانية وميدانية وحملات. أنتجت 50 فيديو بين مارس وأغسطس 2026 حققت انتشارًا على السوشيال ميديا ووصلت إلى 100 ألف–500 ألف مشاهدة لكل فيديو. كما أنتج فيديوهات إعلانية بالذكاء الاصطناعي للمنتجات.",
    job2:"مونتير مستقل وفنان موشن جرافيك",freelance:"عمل حر · يونيو–نوفمبر 2022",job2p:"تنفيذ أكثر من 50 مشروع مونتاج وموشن جرافيك، وتصميم هويتين بصريتين متكاملتين، وتحسين سير عمل المونتاج وتنظيم الملفات.",
    skillsLabel:"المهارات",skillsTitle:"الأدوات وراء ",skillsTitle2:"العمل.",editing:"المونتاج",design:"التصميم",aiTools:"أدوات الذكاء الاصطناعي",content:"المحتوى",
    letsCreate:"لِنُبدع معًا",contactTitle:"لديك قصة<br>تستحق ",contactTitle2:"أن تُروى؟",contactIntro:"لخدمات المونتاج، الموشن جرافيك، محتوى السوشيال ميديا أو الإنتاج بالذكاء الاصطناعي:",drive:"Drive",behance:"Behance",footerRole:"مونتير • مصمم وسائط متعددة"
  }
};

function applyLanguage(lang){
  const t=translations[lang];
  document.documentElement.lang=lang;
  document.documentElement.dir=lang==="ar"?"rtl":"ltr";
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const key=el.dataset.i18n;
    if(t[key]!==undefined) el.innerHTML=t[key];
  });
  langBtn.textContent=lang==="ar"?"English":"عربي";
  localStorage.setItem("portfolio-lang",lang);
  render(document.querySelector(".filters button.active")?.dataset.filter||"all");
}
function render(f="all"){
  const currentLang=document.documentElement.lang==="ar"?"ar":"en";
  grid.innerHTML=projects.filter(p=>f==="all"||p[1]===f).map(p=>{
    const title=currentLang==="ar"?(p[5]||p[0]):p[0];
    const meta=currentLang==="ar"?(p[6]||p[2]):p[2];
    const desc=currentLang==="ar"?(p[7]||p[3]):p[3];
    return `
      <article class="card">
        <div class="thumb">${p[4]?`<video src="${p[4]}" muted loop playsinline controls></video>`:"PROJECT  —  ADD YOUR THUMBNAIL / VIDEO"}</div>
        <div class="card-body">
          <div class="meta"><span>${meta}</span><span>${currentLang==="ar"?"مشروع":"PROJECT"}</span></div>
          <h3>${title}</h3>
          <p>${desc}</p>
        </div>
      </article>`;
  }).join("");
}
render();
filters.forEach(b=>b.onclick=()=>{filters.forEach(x=>x.classList.remove("active"));b.classList.add("active");render(b.dataset.filter)});
document.querySelector("#year").textContent=new Date().getFullYear();
document.querySelector("#menu").onclick=()=>document.querySelector("#nav").classList.toggle("open");
langBtn.onclick=()=>applyLanguage(document.documentElement.lang==="ar"?"en":"ar");
// Detect the visitor's browser language automatically.
// Arabic browsers => Arabic. Any other browser language => English.
// The visitor can still switch manually using the language button.
const browserLanguage=(navigator.language||navigator.userLanguage||"ar").toLowerCase();
const detectedLanguage=browserLanguage.startsWith("ar")?"ar":"en";
applyLanguage(detectedLanguage);
