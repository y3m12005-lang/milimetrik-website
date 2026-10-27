/* =========================================================
   Site content. Every text field has one entry per language.
   To add real photos, drop files in assets/ and set the paths
   below; a missing file falls back to a styled placeholder.
   ========================================================= */

window.DOCTORS = [
  {
    id: "ramin",
    lead: true,
    name: "Dr. Ramin Eyyub",
    photo: "assets/img/dr-ramin.jpg",
    instagram: "https://www.instagram.com/dr.ramineyyub/",
    role: { tr: "Başhekim · Ortodontist", en: "Chief Physician · Orthodontist", ru: "Главный врач · Ортодонт", ar: "رئيس الأطباء · أخصائي تقويم الأسنان", de: "Chefarzt · Kieferorthopäde" },
    spec: { tr: "Ortodonti", en: "Orthodontics", ru: "Ортодонтия", ar: "تقويم الأسنان", de: "Kieferorthopädie" },
    bio: {
      tr: "Milimetrik'in kurucu ortağı ve başhekimi Dr. Ramin Eyyub, ortodonti tedavilerinin planlanması ve uygulanmasını yürütmektedir. Çocuklarda erken dönem ortodontik muayeneden yetişkinlerde diş teli tedavisine kadar her aşamada, dişlerin yalnızca düzelmesini değil; çevre dokuların bu değişime sağlıklı biçimde uyum sağlamasını hedefler.",
      en: "Dr. Ramin Eyyub, founding partner and chief physician of Milimetrik, leads the planning and delivery of all orthodontic treatment. From early orthodontic check-ups for children to braces for adults, his aim is not only straighter teeth but surrounding tissues that adapt to the change in a healthy way.",
      ru: "Соучредитель и главный врач Milimetrik доктор Рамин Эйюб руководит планированием и проведением ортодонтического лечения. От ранних ортодонтических осмотров у детей до брекетов у взрослых — его цель не только ровные зубы, но и здоровая адаптация окружающих тканей к изменениям.",
      ar: "يتولّى الدكتور رامين أيوب، الشريك المؤسس لميليمتريك ورئيس الأطباء فيها، تخطيط علاجات تقويم الأسنان وتنفيذها. من الفحص التقويمي المبكر للأطفال إلى تقويم الأسنان للبالغين، لا يهدف فقط إلى ترتيب الأسنان، بل إلى تكيّف الأنسجة المحيطة مع هذا التغيير بشكل صحي.",
      de: "Dr. Ramin Eyyub, Gründungspartner und Chefarzt von Milimetrik, leitet die Planung und Durchführung aller kieferorthopädischen Behandlungen. Von der frühen kieferorthopädischen Untersuchung bei Kindern bis zur Zahnspange bei Erwachsenen geht es ihm nicht nur um gerade Zähne, sondern auch darum, dass sich das umliegende Gewebe gesund an die Veränderung anpasst."
    },
    treatments: {
      tr: ["Ortodontik tedavi planlaması", "Diş teli (sabit ortodontik tedavi)", "Çocuklarda ortodontik muayene", "Gece diş sıkma (bruksizm) değerlendirmesi"],
      en: ["Orthodontic treatment planning", "Braces (fixed orthodontics)", "Orthodontic check-ups for children", "Night-time teeth grinding (bruxism) assessment"],
      ru: ["Планирование ортодонтического лечения", "Брекеты (несъёмная ортодонтия)", "Ортодонтический осмотр детей", "Оценка ночного скрежета зубами (бруксизм)"],
      ar: ["تخطيط العلاج التقويمي", "تقويم الأسنان الثابت", "الفحص التقويمي للأطفال", "تقييم صرير الأسنان الليلي"],
      de: ["Kieferorthopädische Behandlungsplanung", "Feste Zahnspange", "Kieferorthopädische Untersuchung bei Kindern", "Abklärung von nächtlichem Zähneknirschen (Bruxismus)"]
    }
  },
  {
    id: "damla",
    name: "Uzm. Dt. Damla Bilgin Avşar",
    photo: "assets/img/dr-damla.jpg",
    role: { tr: "Uzman Diş Hekimi", en: "Specialist Dentist", ru: "Врач-стоматолог, специалист", ar: "طبيبة أسنان أخصائية", de: "Fachzahnärztin" },
    spec: { tr: "Protetik Diş Tedavisi", en: "Prosthodontics", ru: "Ортопедическая стоматология", ar: "التعويضات السنية", de: "Prothetik" },
    bio: {
      tr: "Protetik Diş Tedavisi Uzmanı Uzm. Dt. Damla Bilgin Avşar; zirkonya ve E-max kaplamalar, lamine (laminate veneer), implant destekli protezler, hareketli protezler ile temporomandibular eklem (çene eklemi) hastalıklarının tedavisini uygulamaktadır. Hem estetik görünümü hem de çiğneme fonksiyonunu birlikte ele alan, doğal görünen gülüşler tasarlar.",
      en: "Prosthodontics specialist Dr. Damla Bilgin Avşar provides zirconia and E-max crowns, laminate veneers, implant-supported prostheses, removable dentures and treatment of temporomandibular joint (jaw joint) disorders. She designs natural-looking smiles that restore both appearance and chewing function.",
      ru: "Специалист по ортопедической стоматологии доктор Дамла Билгин Авшар выполняет коронки из диоксида циркония и E-max, ламинаты (виниры), протезы на имплантах, съёмные протезы, а также лечение заболеваний височно-нижнечелюстного сустава. Она создаёт естественные улыбки, восстанавливая и эстетику, и функцию жевания.",
      ar: "تقدّم أخصائية التعويضات السنية د. داملا بيلغين أفشار تيجان الزركونيا والإيماكس، وقشور اللامينيت، والتعويضات المثبّتة على الزرعات، والأطقم المتحركة، إضافة إلى علاج اضطرابات المفصل الفكي الصدغي. وتصمّم ابتسامات طبيعية تعيد الشكل الجمالي ووظيفة المضغ معاً.",
      de: "Die Fachzahnärztin für Prothetik Dr. Damla Bilgin Avşar bietet Zirkon- und E-max-Kronen, Veneers, implantatgetragenen Zahnersatz, herausnehmbare Prothesen sowie die Behandlung von Kiefergelenkserkrankungen (CMD) an. Sie gestaltet natürlich wirkende Lächeln, die Ästhetik und Kaufunktion gleichermaßen wiederherstellen."
    },
    treatments: {
      tr: ["Zirkonya / E-max kaplama", "Lamine (laminate veneer)", "İmplant destekli protezler", "Temporomandibular eklem hastalıkları ve tedavisi", "Hareketli protezler"],
      en: ["Zirconia / E-max crowns", "Laminate veneers", "Implant-supported prostheses", "Jaw joint (TMJ) disorders and treatment", "Removable dentures"],
      ru: ["Коронки из диоксида циркония / E-max", "Ламинаты (виниры)", "Протезы на имплантах", "Заболевания ВНЧС и их лечение", "Съёмные протезы"],
      ar: ["تيجان الزركونيا / الإيماكس", "قشور اللامينيت", "تعويضات مثبّتة على الزرعات", "اضطرابات المفصل الفكي الصدغي وعلاجها", "الأطقم المتحركة"],
      de: ["Zirkon- / E-max-Kronen", "Veneers", "Implantatgetragener Zahnersatz", "Kiefergelenkserkrankungen (CMD) und Therapie", "Herausnehmbare Prothesen"]
    }
  },
  {
    id: "eda",
    name: "Uzm. Dt. Eda Doğuş",
    photo: "assets/img/dr-eda.jpg",
    role: { tr: "Uzman Diş Hekimi", en: "Specialist Dentist", ru: "Врач-стоматолог, специалист", ar: "طبيبة أسنان أخصائية", de: "Fachzahnärztin" },
    spec: { tr: "Endodonti (Kanal Tedavisi)", en: "Endodontics (Root Canal Treatment)", ru: "Эндодонтия (лечение каналов)", ar: "علاج جذور الأسنان (علاج العصب)", de: "Endodontie (Wurzelkanalbehandlung)" },
    bio: {
      tr: "Endodonti (Kanal Tedavisi) Uzmanı Uzm. Dt. Eda Doğuş, kliniğimizde kanal tedavisi ve kanal tedavisi tekrarı uygulamalarını gerçekleştirmektedir. Amacı; ağrıyı gidermek ve doğal dişinizi mümkün olan en uzun süre ağzınızda, sağlıklı şekilde korumaktır.",
      en: "Endodontics specialist Dr. Eda Doğuş performs root canal treatments and root canal re-treatments at our clinic. Her goal is to relieve pain and keep your natural tooth healthy in your mouth for as long as possible.",
      ru: "Специалист-эндодонт доктор Эда Догуш проводит в нашей клинике лечение и перелечивание корневых каналов. Её цель — снять боль и как можно дольше сохранить ваш собственный зуб здоровым.",
      ar: "تُجري أخصائية علاج الجذور د. إيدا دوغوش في عيادتنا علاج العصب وإعادة علاج العصب. وهدفها تخفيف الألم والحفاظ على سنّك الطبيعي سليماً في فمك لأطول فترة ممكنة.",
      de: "Die Fachzahnärztin für Endodontie Dr. Eda Doğuş führt in unserer Klinik Wurzelkanalbehandlungen und Revisionen durch. Ihr Ziel: Schmerzen lindern und Ihren natürlichen Zahn so lange wie möglich gesund zu erhalten."
    },
    treatments: {
      tr: ["Kanal tedavisi", "Kanal tedavisi tekrarı (yenileme)", "Diş ağrısı ve hassasiyet değerlendirmesi"],
      en: ["Root canal treatment", "Root canal re-treatment", "Toothache and sensitivity assessment"],
      ru: ["Лечение корневых каналов", "Перелечивание каналов", "Диагностика зубной боли и чувствительности"],
      ar: ["علاج العصب", "إعادة علاج العصب", "تقييم ألم الأسنان وحساسيتها"],
      de: ["Wurzelkanalbehandlung", "Wurzelkanal-Revision", "Abklärung von Zahnschmerzen und Empfindlichkeit"]
    }
  }
];

/* Specialties. `icon` refers to an SVG in app.js; `doctor` links a doctor id. */
window.SERVICES = [
  {
    id: "ortho", icon: "braces", doctor: "ramin", latin: "Orthodontia",
    name: { tr: "Ortodonti", en: "Orthodontics", ru: "Ортодонтия", ar: "تقويم الأسنان", de: "Kieferorthopädie" },
    text: {
      tr: "Çapraşık, aralıklı veya kapanışı bozuk dişleri doğru konuma getirir. Tedavi süresi; dişlerin konumuna ve kapanış problemine göre kişiden kişiye değişir.",
      en: "Moves crowded, gapped or misaligned teeth into the right position. Treatment time varies with tooth position and bite problem.",
      ru: "Исправляет скученность, щели и неправильный прикус. Длительность лечения зависит от положения зубов и типа прикуса.",
      ar: "يعيد الأسنان المتزاحمة أو المتباعدة أو ذات الإطباق غير الصحيح إلى وضعها الصحيح. وتختلف مدة العلاج حسب وضع الأسنان ومشكلة الإطباق.",
      de: "Bringt engstehende, lückige oder fehlstehende Zähne in die richtige Position. Die Dauer hängt von Zahnstellung und Bissproblem ab."
    },
    items: {
      tr: ["Diş teli tedavisi", "Çocuklarda ortodontik muayene", "Kapanış bozuklukları"],
      en: ["Braces", "Orthodontic check-ups for children", "Bite problems"],
      ru: ["Брекеты", "Ортодонтический осмотр детей", "Нарушения прикуса"],
      ar: ["تقويم الأسنان", "فحص تقويمي للأطفال", "مشاكل الإطباق"],
      de: ["Zahnspangen", "Kieferorthopädische Kinderuntersuchung", "Bissfehlstellungen"]
    }
  },
  {
    id: "prosth", icon: "crown", doctor: "damla", latin: "Prosthodontia",
    name: { tr: "Protetik Diş Tedavisi", en: "Prosthodontics", ru: "Ортопедическая стоматология", ar: "التعويضات السنية", de: "Prothetik" },
    text: {
      tr: "Eksik veya yıpranmış dişleri; estetik görünümü ve çiğneme fonksiyonunu birlikte geri kazandıran kalıcı ya da hareketli protezlerle tamamlar.",
      en: "Replaces missing or worn teeth with fixed or removable prostheses that restore both appearance and chewing.",
      ru: "Восстанавливает отсутствующие или стёртые зубы несъёмными или съёмными протезами — эстетика и функция жевания вместе.",
      ar: "يعوّض الأسنان المفقودة أو المتآكلة بتعويضات ثابتة أو متحركة تعيد الجمال ووظيفة المضغ معاً.",
      de: "Ersetzt fehlende oder abgenutzte Zähne durch festen oder herausnehmbaren Zahnersatz – für Ästhetik und Kaufunktion."
    },
    items: {
      tr: ["Zirkonya / E-max kaplama", "İmplant destekli protezler", "Hareketli protezler", "Çene eklemi (TME) tedavisi"],
      en: ["Zirconia / E-max crowns", "Implant-supported prostheses", "Removable dentures", "Jaw joint (TMJ) treatment"],
      ru: ["Коронки цирконий / E-max", "Протезы на имплантах", "Съёмные протезы", "Лечение ВНЧС"],
      ar: ["تيجان زركونيا / إيماكس", "تعويضات على الزرعات", "أطقم متحركة", "علاج المفصل الفكي"],
      de: ["Zirkon- / E-max-Kronen", "Implantatgetragener Zahnersatz", "Herausnehmbare Prothesen", "Kiefergelenk-(CMD-)Therapie"]
    }
  },
  {
    id: "endo", icon: "root", doctor: "eda", latin: "Endodontia",
    name: { tr: "Endodonti", en: "Endodontics", ru: "Эндодонтия", ar: "علاج الجذور", de: "Endodontie" },
    text: {
      tr: "Derin çürük veya travma nedeniyle iltihaplanan dişin içini temizleyip doldurarak ağrıyı giderir ve doğal dişi korur.",
      en: "Cleans and seals the inside of a tooth inflamed by deep decay or trauma — relieving pain and saving the natural tooth.",
      ru: "Очищает и пломбирует каналы зуба, воспалённого из-за глубокого кариеса или травмы, — снимает боль и сохраняет зуб.",
      ar: "ينظّف داخل السن الملتهب بسبب تسوّس عميق أو إصابة ويحشوه، فيزيل الألم ويحافظ على السن الطبيعي.",
      de: "Reinigt und versiegelt das Innere eines durch tiefe Karies oder Trauma entzündeten Zahns – lindert Schmerzen und erhält den Zahn."
    },
    items: {
      tr: ["Kanal tedavisi", "Kanal tedavisi tekrarı"],
      en: ["Root canal treatment", "Root canal re-treatment"],
      ru: ["Лечение каналов", "Перелечивание каналов"],
      ar: ["علاج العصب", "إعادة علاج العصب"],
      de: ["Wurzelkanalbehandlung", "Revision"]
    }
  },
  {
    id: "aesthetic", icon: "sparkle", doctor: "damla", latin: "Aesthetica",
    name: { tr: "Estetik Diş Hekimliği", en: "Aesthetic Dentistry", ru: "Эстетическая стоматология", ar: "تجميل الأسنان", de: "Ästhetische Zahnmedizin" },
    text: {
      tr: "Renk, şekil ve oran uyumunu yüzünüze göre tasarlayarak doğal ve parlak gülüşler oluşturur.",
      en: "Designs colour, shape and proportion to suit your face for a natural, radiant smile.",
      ru: "Цвет, форма и пропорции зубов подбираются под ваше лицо — для естественной и сияющей улыбки.",
      ar: "يصمّم اللون والشكل والتناسب بما يلائم وجهك للحصول على ابتسامة طبيعية ومشرقة.",
      de: "Farbe, Form und Proportion werden auf Ihr Gesicht abgestimmt – für ein natürliches, strahlendes Lächeln."
    },
    items: {
      tr: ["Lamine (laminate veneer)", "Gülüş tasarımı", "Zirkonya ile rehabilitasyon"],
      en: ["Laminate veneers", "Smile design", "Full-mouth zirconia rehabilitation"],
      ru: ["Ламинаты (виниры)", "Дизайн улыбки", "Реабилитация цирконием"],
      ar: ["قشور اللامينيت", "تصميم الابتسامة", "إعادة التأهيل بالزركونيا"],
      de: ["Veneers", "Smile Design", "Rehabilitation mit Zirkon"]
    }
  },
  {
    id: "implant", icon: "implant", doctor: null, latin: "Implantologia",
    name: { tr: "İmplant Tedavisi", en: "Dental Implants", ru: "Имплантация", ar: "زراعة الأسنان", de: "Implantologie" },
    text: {
      tr: "Eksik dişlerin yerine çene kemiğine yerleştirilen yapay kökler; üzerine yapılan protezlerle doğal dişe en yakın his ve görünüm.",
      en: "Artificial roots placed in the jawbone replace missing teeth — with prostheses on top that look and feel closest to natural teeth.",
      ru: "Искусственные корни в челюстной кости заменяют утраченные зубы; протезы на них максимально похожи на натуральные зубы.",
      ar: "جذور صناعية تُثبَّت في عظم الفك لتعويض الأسنان المفقودة، وتعلوها تعويضات أقرب ما تكون إلى الأسنان الطبيعية شكلاً وإحساساً.",
      de: "Künstliche Zahnwurzeln im Kieferknochen ersetzen fehlende Zähne – mit Zahnersatz, der natürlichen Zähnen am nächsten kommt."
    },
    items: {
      tr: ["Tek diş implant", "İmplant üstü protezler"],
      en: ["Single-tooth implants", "Implant-supported prostheses"],
      ru: ["Имплантат одного зуба", "Протезы на имплантах"],
      ar: ["زرعة سن واحدة", "تعويضات فوق الزرعات"],
      de: ["Einzelzahnimplantat", "Implantatgetragener Zahnersatz"]
    }
  },
  {
    id: "surgery", icon: "jaw", doctor: null, latin: "Chirurgia",
    name: { tr: "Ağız, Diş ve Çene Cerrahisi", en: "Oral & Maxillofacial Surgery", ru: "Челюстно-лицевая хирургия", ar: "جراحة الفم والفكين", de: "Mund-, Kiefer- und Gesichtschirurgie" },
    text: {
      tr: "Diş çekimi, gömülü yirmilik dişler ve çene bölgesine yönelik cerrahi işlemler; konforunuz önceliğimizdir.",
      en: "Extractions, impacted wisdom teeth and surgical procedures of the jaw — with your comfort as our priority.",
      ru: "Удаление зубов, ретинированные зубы мудрости и хирургические вмешательства в области челюсти — с заботой о вашем комфорте.",
      ar: "خلع الأسنان، وأضراس العقل المطمورة، والإجراءات الجراحية في منطقة الفك — وراحتك أولويتنا.",
      de: "Zahnentfernungen, verlagerte Weisheitszähne und chirurgische Eingriffe im Kieferbereich – Ihr Komfort steht an erster Stelle."
    },
    items: {
      tr: ["Diş çekimi", "Gömülü yirmilik dişler"],
      en: ["Tooth extraction", "Impacted wisdom teeth"],
      ru: ["Удаление зубов", "Ретинированные зубы мудрости"],
      ar: ["خلع الأسنان", "أضراس العقل المطمورة"],
      de: ["Zahnentfernung", "Verlagerte Weisheitszähne"]
    }
  },
  {
    id: "perio", icon: "gum", doctor: null, latin: "Periodontologia",
    name: { tr: "Diş Eti Tedavileri", en: "Gum Treatments", ru: "Лечение дёсен", ar: "علاج اللثة", de: "Zahnfleischbehandlung" },
    text: {
      tr: "Diş eti çekilmesi yalnızca estetik bir sorun değildir; kök hassasiyeti ve çürük riskini artırır. Erken değerlendirme ilerlemeyi önler.",
      en: "Gum recession is not just cosmetic — it raises root sensitivity and decay risk. Early assessment stops it progressing.",
      ru: "Рецессия дёсен — не только эстетическая проблема: она повышает чувствительность корней и риск кариеса. Ранняя диагностика останавливает процесс.",
      ar: "انحسار اللثة ليس مشكلة جمالية فقط؛ فهو يزيد حساسية الجذور وخطر التسوّس. والتقييم المبكر يوقف تقدّمه.",
      de: "Zahnfleischrückgang ist nicht nur ein ästhetisches Problem – er erhöht Wurzelempfindlichkeit und Kariesrisiko. Frühe Abklärung stoppt das Fortschreiten."
    },
    items: {
      tr: ["Diş eti çekilmesi", "Diş taşı temizliği"],
      en: ["Gum recession", "Scaling and cleaning"],
      ru: ["Рецессия дёсен", "Удаление зубного камня"],
      ar: ["انحسار اللثة", "إزالة الجير"],
      de: ["Zahnfleischrückgang", "Zahnsteinentfernung"]
    }
  },
  {
    id: "bruxism", icon: "moon", doctor: "ramin", latin: "Bruxismus",
    name: { tr: "Diş Sıkma & Gece Plağı", en: "Teeth Grinding & Night Guards", ru: "Бруксизм и ночные капы", ar: "صرير الأسنان والواقي الليلي", de: "Zähneknirschen & Aufbissschiene" },
    text: {
      tr: "Sabahları çene ağrısıyla mı uyanıyorsunuz? Doğru teşhis ve gece plağı ile çene kaslarınızı rahatlatır, dişlerinizi aşınmadan koruruz.",
      en: "Waking up with jaw pain? With the right diagnosis and a night guard we relax your jaw muscles and protect your teeth from wear.",
      ru: "Просыпаетесь с болью в челюсти? Точная диагностика и ночная капа расслабят мышцы и защитят зубы от стирания.",
      ar: "هل تستيقظ بألم في الفك؟ بالتشخيص الصحيح والواقي الليلي نُريح عضلات فكك ونحمي أسنانك من التآكل.",
      de: "Wachen Sie mit Kieferschmerzen auf? Mit der richtigen Diagnose und einer Aufbissschiene entspannen wir Ihre Kiefermuskeln und schützen Ihre Zähne."
    },
    items: {
      tr: ["Bruksizm değerlendirmesi", "Gece plağı"],
      en: ["Bruxism assessment", "Night guard"],
      ru: ["Диагностика бруксизма", "Ночная капа"],
      ar: ["تقييم الصرير", "واقٍ ليلي"],
      de: ["Bruxismus-Diagnostik", "Aufbissschiene"]
    }
  }
];

/* Case categories shown on the Previous Work page, in order */
window.CASE_GROUPS = [
  { id: "ortho",     name: window.SERVICES[0].name,
    text: { tr: "Diş teli ile düzenlenen gülüşler.", en: "Smiles straightened with orthodontic treatment.", ru: "Улыбки, выровненные ортодонтическим лечением.", ar: "ابتسامات تم ترتيبها بالتقويم.", de: "Mit Kieferorthopädie begradigte Lächeln." } },
  { id: "prosth",    name: window.SERVICES[1].name,
    text: { tr: "Zirkonya, E-max ve implant üstü protezlerle yenilenen gülüşler.", en: "Smiles renewed with zirconia, E-max and implant prostheses.", ru: "Улыбки, обновлённые цирконием, E-max и протезами на имплантах.", ar: "ابتسامات تجدّدت بالزركونيا والإيماكس والتعويضات على الزرعات.", de: "Mit Zirkon, E-max und Implantatprothetik erneuerte Lächeln." } },
  { id: "endo",      name: window.SERVICES[2].name,
    text: { tr: "Kanal tedavisiyle kurtarılan doğal dişler.", en: "Natural teeth saved by root canal treatment.", ru: "Собственные зубы, сохранённые лечением каналов.", ar: "أسنان طبيعية أُنقذت بعلاج العصب.", de: "Durch Wurzelbehandlung gerettete natürliche Zähne." } },
  { id: "aesthetic", name: window.SERVICES[3].name,
    text: { tr: "Lamine ve gülüş tasarımı ile estetik dönüşümler.", en: "Aesthetic makeovers with veneers and smile design.", ru: "Эстетические преображения с винирами и дизайном улыбки.", ar: "تحوّلات جمالية بالقشور وتصميم الابتسامة.", de: "Ästhetische Verwandlungen mit Veneers und Smile Design." } }
];

/* ---------------------------------------------------------
   Cases. Patient names are never shown.
   images: { before, after, angles: [{before, after}, ...] }
   When images are not set, an illustrated sample is drawn
   and marked "sample" — replace with the clinic's own photos
   in assets/cases/.
   --------------------------------------------------------- */
window.CASES = [
  {
    group: "prosth", doctor: "damla", style: "worn", featured: true,
    source: "https://www.instagram.com/p/DeUccusDKiM/",
    images: {
      before: "assets/cases/zirkonya/front-before.jpg",
      after: "assets/cases/zirkonya/front-after.jpg",
      ratio: 1080 / 430,
      angles: [
        { label: "side", before: "assets/cases/zirkonya/side-before.jpg", after: "assets/cases/zirkonya/side-after.jpg", ratio: 1080 / 430 },
        { label: "face", before: "assets/cases/zirkonya/face-before.jpg", after: "assets/cases/zirkonya/face-after.jpg", ratio: 540 / 420 }
      ]
    },
    title: { tr: "Zirkonya ile Rehabilitasyon", en: "Rehabilitation with Zirconia", ru: "Реабилитация с цирконием", ar: "إعادة تأهيل بالزركونيا", de: "Rehabilitation mit Zirkon" },
    treatment: { tr: "Zirkonya restorasyon", en: "Zirconia restorations", ru: "Циркониевые реставрации", ar: "ترميمات زركونيا", de: "Zirkon-Restaurationen" },
    duration: { tr: "24.08.2026 – 18.09.2026 (yaklaşık 4 hafta)", en: "24.08.2026 – 18.09.2026 (about 4 weeks)", ru: "24.08.2026 – 18.09.2026 (около 4 недель)", ar: "24.08.2026 – 18.09.2026 (حوالي ٤ أسابيع)", de: "24.08.2026 – 18.09.2026 (ca. 4 Wochen)" },
    story: {
      tr: "Hastamızın gülüşünde birbirinden farklı renk ve boyda eski kaplamalar, renk değiştirmiş dişler ve diş aralarında koyu boşluklar vardı. Uzm. Dt. Damla Bilgin Avşar, tüm üst dişleri tek bir uyum içinde ele alan bir zirkonya rehabilitasyonu planladı: amaç hem estetik görünümü hem de çiğneme fonksiyonunu iyileştirmekti. Yaklaşık dört hafta sonunda; renk, boy ve form olarak birbiriyle uyumlu, doğal ve aydınlık bir gülüş ortaya çıktı.",
      en: "Our patient's smile had old crowns of different shades and sizes, discoloured teeth and dark gaps between them. Dr. Damla Bilgin Avşar planned a zirconia rehabilitation that treated all the upper teeth as one harmonious whole, aiming to improve both the look of the smile and chewing function. About four weeks later, the result was a natural, bright smile with teeth matched in colour, length and shape.",
      ru: "В улыбке пациента были старые коронки разного цвета и размера, потемневшие зубы и тёмные промежутки между ними. Доктор Дамла Билгин Авшар спланировала реабилитацию цирконием, рассматривая все верхние зубы как единое целое, — чтобы улучшить и эстетику, и функцию жевания. Примерно через четыре недели получилась естественная светлая улыбка с зубами, гармоничными по цвету, длине и форме.",
      ar: "كانت ابتسامة مريضنا تضمّ تيجاناً قديمة مختلفة اللون والحجم، وأسناناً متغيّرة اللون وفراغات داكنة بينها. خطّطت د. داملا بيلغين أفشار لإعادة تأهيل بالزركونيا تعاملت مع جميع الأسنان العلوية كوحدة متناسقة، بهدف تحسين المظهر الجمالي ووظيفة المضغ معاً. وبعد نحو أربعة أسابيع، ظهرت ابتسامة طبيعية مشرقة بأسنان متناسقة في اللون والطول والشكل.",
      de: "Im Lächeln unseres Patienten fanden sich alte Kronen in unterschiedlichen Farben und Größen, verfärbte Zähne und dunkle Zwischenräume. Dr. Damla Bilgin Avşar plante eine Rehabilitation mit Zirkon, die alle oberen Zähne als harmonische Einheit behandelte – mit dem Ziel, Ästhetik und Kaufunktion zu verbessern. Nach rund vier Wochen entstand ein natürliches, helles Lächeln mit Zähnen, die in Farbe, Länge und Form zueinander passen."
    }
  },
  {
    group: "prosth", doctor: "damla", featured: true,
    images: {
      before: "assets/cases/protez-yenileme/front-before.jpg?v=2",
      after: "assets/cases/protez-yenileme/front-after.jpg?v=2",
      ratio: 1496 / 720
    },
    title: { tr: "Eski Kaplama ve Köprülerin Yenilenmesi", en: "Renewing Old Crowns and Bridges", ru: "Замена старых коронок и мостов", ar: "تجديد التيجان والجسور القديمة", de: "Erneuerung alter Kronen und Brücken" },
    treatment: { tr: "Yeni sabit protezler", en: "New fixed prostheses", ru: "Новые несъёмные протезы", ar: "تعويضات ثابتة جديدة", de: "Neuer festsitzender Zahnersatz" },
    story: {
      tr: "Yıllar önce yapılmış kaplama ve köprülerin diş eti kenarlarında koyu çizgiler ve boşluklar oluşmuş; dişler hem soluk hem de birbirinden kopuk görünüyordu. Eski protezler sökülerek üst çene, renk ve boyu birbirine uyumlu yeni sabit protezlerle baştan yenilendi. Sonuç: koyu kenarlardan arınmış, temiz ve bütünlüklü bir gülüş.",
      en: "Crowns and bridges made years ago had developed dark lines and gaps along the gum line, and the teeth looked dull and mismatched. The old prostheses were removed and the upper jaw was rebuilt with new fixed prostheses matched in colour and length. The result: a clean, unified smile with no more dark edges.",
      ru: "У коронок и мостов, сделанных много лет назад, у края десны появились тёмные полосы и щели, а зубы выглядели тусклыми и разрозненными. Старые протезы сняли, а верхнюю челюсть полностью восстановили новыми несъёмными протезами, подобранными по цвету и длине. Результат: чистая, цельная улыбка без тёмных краёв.",
      ar: "ظهرت خطوط داكنة وفراغات عند حافة اللثة في تيجان وجسور صُنعت قبل سنوات، وبدت الأسنان باهتة وغير متناسقة. أُزيلت التعويضات القديمة وأُعيد بناء الفك العلوي بتعويضات ثابتة جديدة متناسقة في اللون والطول. النتيجة: ابتسامة نظيفة ومتكاملة بلا حواف داكنة.",
      de: "Vor Jahren angefertigte Kronen und Brücken zeigten am Zahnfleischrand dunkle Linien und Spalten, die Zähne wirkten matt und uneinheitlich. Der alte Zahnersatz wurde entfernt und der Oberkiefer mit neuem, in Farbe und Länge abgestimmtem festsitzendem Zahnersatz neu versorgt. Das Ergebnis: ein sauberes, harmonisches Lächeln ohne dunkle Ränder."
    }
  },
  {
    group: "ortho", doctor: "ramin", style: "crowded",
    images: null,
    title: { tr: "Çapraşık Dişlerin Düzeltilmesi", en: "Correcting Crowded Teeth", ru: "Исправление скученности зубов", ar: "تصحيح تزاحم الأسنان", de: "Korrektur engstehender Zähne" },
    treatment: { tr: "Sabit ortodontik tedavi (diş teli)", en: "Fixed orthodontics (braces)", ru: "Несъёмная ортодонтия (брекеты)", ar: "تقويم ثابت", de: "Feste Zahnspange" },
    duration: { tr: "Kişiye göre değişir", en: "Varies per patient", ru: "Индивидуально", ar: "تختلف حسب الحالة", de: "Individuell" },
    story: {
      tr: "Dişler çenede yeterli yer bulamadığı için üst üste binmişti; bu hem görüntüyü etkiliyor hem de temizliği zorlaştırıyordu. Diş teli ile dişler adım adım, çevre dokuların uyum sağlamasına zaman tanınarak doğru konumlarına taşındı. Artık hem düzgün hem de bakımı çok daha kolay bir gülüş var.",
      en: "The teeth didn't have enough room in the jaw and overlapped — affecting the look and making cleaning hard. With braces they were moved step by step into place, giving the surrounding tissues time to adapt. The result is a straight smile that's much easier to care for.",
      ru: "Зубам не хватало места, и они наслаивались друг на друга — это портило вид и затрудняло гигиену. С брекетами зубы шаг за шагом переместили на место, давая тканям время адаптироваться. Теперь улыбка ровная, а уход — гораздо проще.",
      ar: "لم يكن في الفك مكان كافٍ فتراكبت الأسنان، مما أثّر على المظهر وصعّب تنظيفها. بالتقويم نُقلت الأسنان خطوة بخطوة إلى أماكنها مع منح الأنسجة وقتاً للتكيّف. والنتيجة ابتسامة مستقيمة وأسهل بكثير في العناية.",
      de: "Die Zähne hatten im Kiefer zu wenig Platz und überlappten – das störte die Optik und erschwerte die Reinigung. Mit einer Zahnspange wurden sie Schritt für Schritt an ihren Platz bewegt, mit Zeit für das Gewebe, sich anzupassen. Heute: ein gerades, viel leichter zu pflegendes Lächeln."
    }
  },
  {
    group: "ortho", doctor: "ramin", style: "gaps",
    images: null,
    title: { tr: "Diş Aralarındaki Boşlukların Kapatılması", en: "Closing Gaps Between Teeth", ru: "Закрытие щелей между зубами", ar: "إغلاق الفراغات بين الأسنان", de: "Schließen von Zahnlücken" },
    treatment: { tr: "Sabit ortodontik tedavi", en: "Fixed orthodontic treatment", ru: "Несъёмное ортодонтическое лечение", ar: "علاج تقويمي ثابت", de: "Feste kieferorthopädische Behandlung" },
    duration: { tr: "Kişiye göre değişir", en: "Varies per patient", ru: "Индивидуально", ar: "تختلف حسب الحالة", de: "Individuell" },
    story: {
      tr: "Ön dişler arasındaki boşluklar, hastamızın fotoğraflarda ağzını kapalı tutmasına neden oluyordu. Ortodontik tedaviyle dişler birbirine doğru yaklaştırıldı ve boşluklar kendi dişleriyle, herhangi bir kaplama yapılmadan kapatıldı.",
      en: "Gaps between the front teeth made our patient keep their mouth closed in photos. Orthodontic treatment moved the teeth together and closed the gaps using their own teeth — no veneers or crowns needed.",
      ru: "Из-за щелей между передними зубами пациент не улыбался на фото. Ортодонтическое лечение сблизило зубы и закрыло промежутки собственными зубами — без виниров и коронок.",
      ar: "كانت الفراغات بين الأسنان الأمامية تجعل مريضنا يُغلق فمه في الصور. بالعلاج التقويمي قُرّبت الأسنان من بعضها وأُغلقت الفراغات بأسنانه الطبيعية دون قشور أو تيجان.",
      de: "Die Lücken zwischen den Frontzähnen führten dazu, dass unser Patient auf Fotos den Mund geschlossen hielt. Kieferorthopädisch wurden die Zähne zusammengeführt – die Lücken schlossen sich mit den eigenen Zähnen, ganz ohne Veneers oder Kronen."
    }
  },
  {
    group: "endo", doctor: "eda", style: "dark",
    images: null,
    title: { tr: "Ağrıyan Dişin Kanal Tedavisi", en: "Root Canal for a Painful Tooth", ru: "Лечение каналов больного зуба", ar: "علاج عصب لسن مؤلم", de: "Wurzelbehandlung eines schmerzenden Zahns" },
    treatment: { tr: "Kanal tedavisi + restorasyon", en: "Root canal + restoration", ru: "Лечение каналов + реставрация", ar: "علاج العصب + ترميم", de: "Wurzelbehandlung + Restauration" },
    duration: { tr: "Genellikle 1–2 seans", en: "Usually 1–2 visits", ru: "Обычно 1–2 визита", ar: "عادةً ١–٢ جلسة", de: "Meist 1–2 Sitzungen" },
    story: {
      tr: "Derin bir çürük dişin sinirine ulaşmış, sıcak-soğukta zonklayan bir ağrıya yol açmıştı. Kanal tedavisiyle dişin içi temizlenip doldurularak ağrı giderildi; ardından dişin rengi ve formu yeniden oluşturuldu. Diş çekilmedi — hastamız kendi dişini korudu.",
      en: "A deep cavity had reached the nerve, causing throbbing pain with hot and cold. Root canal treatment cleaned and sealed the inside of the tooth and stopped the pain; then its colour and shape were rebuilt. No extraction — our patient kept their own tooth.",
      ru: "Глубокий кариес дошёл до нерва и вызывал пульсирующую боль от горячего и холодного. Каналы очистили и запломбировали — боль ушла; затем восстановили цвет и форму зуба. Без удаления — пациент сохранил свой зуб.",
      ar: "وصل تسوّس عميق إلى العصب مسبّباً ألماً نابضاً مع الساخن والبارد. نُظّف داخل السن وحُشي فزال الألم، ثم أُعيد بناء لونه وشكله. لم يُخلع السن — واحتفظ مريضنا بسنّه الطبيعي.",
      de: "Eine tiefe Karies hatte den Nerv erreicht und verursachte pochende Schmerzen bei Heiß und Kalt. Die Wurzelbehandlung reinigte und versiegelte den Zahn – der Schmerz verschwand; anschließend wurden Farbe und Form wiederhergestellt. Keine Extraktion – der eigene Zahn blieb erhalten."
    }
  },
  {
    group: "endo", doctor: "eda", style: "dark2",
    images: null,
    title: { tr: "Eski Kanal Tedavisinin Yenilenmesi", en: "Re-treating an Old Root Canal", ru: "Перелечивание старого канала", ar: "إعادة علاج عصب قديم", de: "Revision einer alten Wurzelbehandlung" },
    treatment: { tr: "Kanal tedavisi tekrarı", en: "Root canal re-treatment", ru: "Перелечивание каналов", ar: "إعادة علاج العصب", de: "Wurzelkanal-Revision" },
    duration: { tr: "Genellikle 2 seans", en: "Usually 2 visits", ru: "Обычно 2 визита", ar: "عادةً جلستان", de: "Meist 2 Sitzungen" },
    story: {
      tr: "Yıllar önce kanal tedavisi yapılmış bir dişte yeniden şikâyet başlamış ve diş zamanla koyulaşmıştı. Eski dolgu maddesi temizlenerek kanallar yeniden tedavi edildi ve diş estetik olarak tamamlandı. Çekim yerine, doğal dişe ikinci bir şans.",
      en: "A tooth treated years ago had started to hurt again and had gradually darkened. The old filling material was removed, the canals re-treated and the tooth restored aesthetically. Instead of an extraction — a second chance for the natural tooth.",
      ru: "Зуб, леченный много лет назад, снова начал беспокоить и потемнел. Старый материал удалили, каналы перелечили, зуб эстетично восстановили. Вместо удаления — второй шанс для своего зуба.",
      ar: "بدأ سنٌّ عولج عصبه قبل سنوات يؤلم مجدداً وأصبح داكناً. أُزيلت مادة الحشو القديمة وأُعيد علاج القنوات ثم رُمّم السن جمالياً. بدلاً من الخلع — فرصة ثانية للسن الطبيعي.",
      de: "Ein vor Jahren wurzelbehandelter Zahn bereitete erneut Beschwerden und hatte sich verfärbt. Das alte Füllmaterial wurde entfernt, die Kanäle neu behandelt und der Zahn ästhetisch versorgt. Statt Extraktion – eine zweite Chance für den eigenen Zahn."
    }
  },
  {
    group: "aesthetic", doctor: "damla",
    images: {
      before: "assets/cases/gulus-tasarimi/front-before.jpg?v=2",
      after: "assets/cases/gulus-tasarimi/front-after.jpg?v=2",
      ratio: 1282 / 640
    },
    title: { tr: "Sararmış ve Aşınmış Dişlere Gülüş Tasarımı", en: "Smile Design for Yellowed, Worn Teeth", ru: "Дизайн улыбки при пожелтевших и стёртых зубах", ar: "تصميم الابتسامة لأسنان مصفرّة ومتآكلة", de: "Smile Design bei verfärbten, abgenutzten Zähnen" },
    treatment: { tr: "Estetik restorasyonlarla gülüş tasarımı", en: "Smile design with aesthetic restorations", ru: "Дизайн улыбки эстетическими реставрациями", ar: "تصميم الابتسامة بترميمات تجميلية", de: "Smile Design mit ästhetischen Restaurationen" },
    story: {
      tr: "Hastamızın dişleri zamanla sararmış, kenarları aşınmış ve dişlerin sırası düzensizleşmişti. Yüzüne ve dudak çizgisine göre planlanan estetik restorasyonlarla dişlerin rengi, boyu ve dizilimi yeniden düzenlendi. Ortaya çıkan sonuç: beyaz, düzgün ve doğal görünen bir gülüş.",
      en: "Over time our patient's teeth had yellowed, their edges had worn down and the row had become uneven. With aesthetic restorations planned around the face and lip line, the colour, length and alignment of the teeth were redesigned. The result: a white, even and natural-looking smile.",
      ru: "Со временем зубы пациента пожелтели, их края стёрлись, а ряд стал неровным. Эстетические реставрации, спланированные с учётом лица и линии губ, изменили цвет, длину и расположение зубов. Результат: белая, ровная и естественная улыбка.",
      ar: "مع الوقت اصفرّت أسنان مريضنا وتآكلت حوافها وأصبح صفّها غير منتظم. وبترميمات تجميلية خُطّطت وفق ملامح الوجه وخط الشفاه، أُعيد تصميم لون الأسنان وطولها وترتيبها. النتيجة: ابتسامة بيضاء ومنتظمة وطبيعية المظهر.",
      de: "Mit der Zeit hatten sich die Zähne unseres Patienten gelblich verfärbt, die Kanten waren abgenutzt und die Zahnreihe unregelmäßig geworden. Mit ästhetischen Restaurationen, geplant nach Gesicht und Lippenlinie, wurden Farbe, Länge und Stellung der Zähne neu gestaltet. Das Ergebnis: ein weißes, ebenmäßiges und natürlich wirkendes Lächeln."
    }
  },
  {
    group: "aesthetic", doctor: "damla", style: "chipped",
    images: null,
    title: { tr: "Kırık Ön Dişlerin Estetik Onarımı", en: "Aesthetic Repair of Chipped Front Teeth", ru: "Эстетическое восстановление сколов", ar: "ترميم جمالي لأسنان أمامية مكسورة", de: "Ästhetische Reparatur abgebrochener Frontzähne" },
    treatment: { tr: "E-max restorasyon", en: "E-max restorations", ru: "Реставрации E-max", ar: "ترميمات إيماكس", de: "E-max-Restaurationen" },
    duration: { tr: "Genellikle 2 seans", en: "Usually 2 visits", ru: "Обычно 2 визита", ar: "عادةً جلستان", de: "Meist 2 Sitzungen" },
    story: {
      tr: "Bir kaza sonrası kırılan ön dişler, hastamızın en çok dikkat ettiği konuydu. Işığı doğal diş gibi geçiren E-max restorasyonlarla dişlerin formu tamamlandı; yakından bakıldığında bile doğal dişten ayırt etmek güç.",
      en: "Front teeth chipped in an accident were our patient's biggest concern. E-max restorations, which let light through just like natural enamel, rebuilt their shape — hard to tell apart from natural teeth even up close.",
      ru: "Сколотые после травмы передние зубы больше всего беспокоили пациента. Реставрации E-max, пропускающие свет как натуральная эмаль, восстановили форму — даже вблизи их трудно отличить от своих зубов.",
      ar: "كانت الأسنان الأمامية المكسورة بعد حادث أكثر ما يقلق مريضنا. أعادت ترميمات الإيماكس — التي تمرّر الضوء كالمينا الطبيعية — شكلَ الأسنان، ويصعب تمييزها عن الأسنان الطبيعية حتى عن قرب.",
      de: "Die nach einem Unfall abgebrochenen Frontzähne waren die größte Sorge unseres Patienten. E-max-Restaurationen, die Licht wie natürlicher Zahnschmelz durchlassen, stellten die Form wieder her – selbst aus der Nähe kaum vom eigenen Zahn zu unterscheiden."
    }
  }
];
