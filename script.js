const subjects = [
    { id: "arabic", name: "اللغة العربية", icon: "📘", desc: "قراءة ونحو وبلاغة وأدب" },
    { id: "english", name: "اللغة الإنجليزية", icon: "🇬🇧", desc: "قواعد ومفردات وقراءة" },
    { id: "math", name: "الرياضيات", icon: "📐", desc: "شرح وتدريبات ومسائل" },
    { id: "history", name: "التاريخ", icon: "🏛️", desc: "أحداث وشخصيات ومفاهيم" },
    { id: "science", name: "العلوم المتكاملة", icon: "🔬", desc: "مفاهيم وتطبيقات علمية" },
    { id: "programming", name: "البرمجة", icon: "💻", desc: "أساسيات التفكير البرمجي" }
];

const lessons = {
    arabic: ["النحو: أساسيات الجملة", "القراءة والفهم", "البلاغة: الصور البيانية"],
    english: ["Present Simple", "Past Simple", "Vocabulary Practice"],
    math: ["المعادلات", "الدوال", "التدريب على حل المسائل"],
    history: ["مفهوم الدولة وعناصرها", "بناء الدولة المصرية", "قراءة وتحليل المصادر التاريخية"],
    science: ["الأنظمة البيئية", "المادة والطاقة", "التفكير العلمي"],
    programming: ["مقدمة في البرمجة", "المتغيرات وأنواع البيانات", "الشروط والتكرار"]
};

const libraryItems = [
    { title: "ملخص أساسيات النحو", subject: "اللغة العربية", detail: "مراجعة تمهيدية لمفاهيم النحو الأساسية." },
    { title: "قائمة مفردات إنجليزية", subject: "اللغة الإنجليزية", detail: "مجموعة كلمات للتدريب على المعنى والاستخدام." },
    { title: "ورقة تدريب على المعادلات", subject: "الرياضيات", detail: "تدريب تمهيدي على خطوات حل المعادلات." },
    { title: "مفاهيم بناء الدولة", subject: "التاريخ", detail: "مراجعة لمفهوم الدولة وعناصرها الأساسية." },
    { title: "مدخل إلى التفكير البرمجي", subject: "البرمجة", detail: "مفاهيم أولية تساعدك على فهم كتابة البرامج." }
];

const quizData = {
    arabic: [
        { q: "أيٌّ مما يلي يُعد اسمًا؟", options: ["يكتب", "مدرسة", "إلى", "لن"], answer: 1 },
        { q: "الجملة الاسمية تبدأ غالبًا بـ:", options: ["اسم", "فعل", "حرف جر", "أداة شرط"], answer: 0 },
        { q: "مرادف كلمة شجاع هو:", options: ["جبان", "جريء", "حزين", "هادئ"], answer: 1 }
    ],
    english: [
        { q: "Choose the correct sentence:", options: ["She go to school.", "She goes to school.", "She going school.", "She gone school."], answer: 1 },
        { q: "The past of play is:", options: ["plays", "playing", "played", "playes"], answer: 2 },
        { q: "What is the meaning of book?", options: ["قلم", "كتاب", "باب", "مدرسة"], answer: 1 }
    ],
    math: [
        { q: "إذا كان س + 3 = 8، فإن س =", options: ["3", "5", "8", "11"], answer: 1 },
        { q: "ناتج 4 × 6 =", options: ["10", "18", "24", "28"], answer: 2 },
        { q: "مربع العدد 5 يساوي:", options: ["10", "15", "20", "25"], answer: 3 }
    ],
    history: [
        { q: "من عناصر الدولة:", options: ["الشعب", "الطقس", "اللغة فقط", "العملة فقط"], answer: 0 },
        { q: "يقصد بالسيادة:", options: ["خضوع الدولة لدولة أخرى", "استقلال سلطة الدولة", "زيادة السكان", "اتساع التجارة"], answer: 1 },
        { q: "الحيز الجغرافي هو:", options: ["أرض الدولة وحدودها", "عدد السكان", "الحكومة فقط", "القوانين فقط"], answer: 0 }
    ],
    programming: [
        { q: "تُستخدم المتغيرات من أجل:", options: ["تخزين البيانات", "إطفاء الجهاز", "رسم الصور فقط", "حذف البرنامج"], answer: 0 },
        { q: "HTML تُستخدم أساسًا في:", options: ["هيكلة صفحات الويب", "تحرير الصوت", "إدارة الحسابات البنكية", "ضغط الملفات"], answer: 0 },
        { q: "أي مما يلي يمثل شرطًا برمجيًا؟", options: ["if", "print فقط", "title", "color"], answer: 0 }
    ]
};

const subjectGrid = document.getElementById("subjectGrid");
const lessonsPanel = document.getElementById("lessonsPanel");
const lessonsTitle = document.getElementById("lessonsTitle");
const lessonsList = document.getElementById("lessonsList");

subjects.forEach(subject => {
    const card = document.createElement("button");

    card.className = "subject-card";
    card.type = "button";

    card.innerHTML = `
        <div class="subject-icon">${subject.icon}</div>
        <h3>${subject.name}</h3>
        <p>${subject.desc}</p>
    `;

    card.addEventListener("click", () => showLessons(subject));

    subjectGrid.appendChild(card);
});

function showLessons(subject) {
    lessonsTitle.textContent = `دروس ${subject.name}`;
    lessonsList.replaceChildren();

    (lessons[subject.id] || []).forEach((lesson, index) => {
        const item = document.createElement("article");
        item.className = "lesson-item";

        const title = document.createElement("strong");
        title.textContent = `${index + 1}. ${lesson}`;

        const description = document.createElement("p");
        description.textContent = "عنوان دراسي جاهز لإضافة الشرح والملخص والملفات الخاصة به.";

        item.append(title, description);
        lessonsList.appendChild(item);
    });

    lessonsPanel.hidden = false;
    lessonsPanel.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

document.getElementById("closeLessons").addEventListener("click", () => {
    lessonsPanel.hidden = true;
});

function renderLibrary(filter = "") {
    const list = document.getElementById("lib