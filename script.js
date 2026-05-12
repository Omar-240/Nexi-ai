const timelineData = [
  { year: "العصور القديمة", text: "قيام ممالك الأدوميين والعمونيين والمؤابيين." },
  { year: "القرن 4 ق.م - 2 م", text: "ازدهار الأنباط واتخاذ البتراء عاصمة." },
  { year: "106 م", text: "ضم المملكة النبطية إلى الإمبراطورية الرومانية." },
  { year: "القرن 7 م", text: "دخول المنطقة في الحضارة الإسلامية." },
  { year: "1516 - 1918", text: "الحكم العثماني لبلاد الشام ومن ضمنها الأردن." },
  { year: "1921", text: "تأسيس إمارة شرق الأردن بقيادة الأمير عبدالله بن الحسين." },
  { year: "1946", text: "إعلان استقلال المملكة الأردنية الهاشمية." },
  { year: "1952", text: "إقرار الدستور الأردني الحديث." }
];

const timelineElement = document.getElementById("timeline");
const sortBtn = document.getElementById("sortBtn");
const modeToggle = document.getElementById("modeToggle");
const resultEl = document.getElementById("quizResult");
const answersEl = document.getElementById("answers");

let reversed = false;

function renderTimeline() {
  const data = reversed ? [...timelineData].reverse() : timelineData;
  timelineElement.innerHTML = data
    .map(item => `<li><span class="year">${item.year}:</span> ${item.text}</li>`)
    .join("");
}

sortBtn.addEventListener("click", () => {
  reversed = !reversed;
  renderTimeline();
});

modeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

answersEl.addEventListener("click", (event) => {
  const target = event.target;
  if (!(target instanceof HTMLButtonElement)) return;
  const isCorrect = target.dataset.correct === "true";
  resultEl.textContent = isCorrect ? "إجابة صحيحة ✅" : "إجابة غير صحيحة، حاول مرة أخرى.";
  resultEl.style.color = isCorrect ? "#16a34a" : "#dc2626";
});

renderTimeline();
