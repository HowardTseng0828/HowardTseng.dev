// ===== 捲動時 header 變實心 + 顯示回頂端按鈕 =====
const header = document.getElementById("header");
const toTop = document.getElementById("toTop");

function onScroll() {
  const y = window.scrollY;
  header.classList.toggle("scrolled", y > 20);
  toTop.classList.toggle("show", y > 500);
}
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

// ===== 手機選單開關 =====
const navToggle = document.getElementById("navToggle");
const nav = document.getElementById("nav");

navToggle.addEventListener("click", () => {
  navToggle.classList.toggle("open");
  nav.classList.toggle("open");
});
// 點選單連結後自動收起
nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navToggle.classList.remove("open");
    nav.classList.remove("open");
  });
});

// ===== 捲動淡入動畫 =====
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        // 同一批進場時錯開一點點，做出依序浮現的感覺
        setTimeout(() => entry.target.classList.add("in"), i * 80);
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
);
document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

// ===== FAQ 手風琴 =====
document.querySelectorAll(".faq-item").forEach((item) => {
  const btn = item.querySelector(".faq-q");
  const ans = item.querySelector(".faq-a");
  btn.addEventListener("click", () => {
    const isOpen = item.classList.contains("active");
    // 收起其他項目，一次只開一個
    document.querySelectorAll(".faq-item").forEach((other) => {
      other.classList.remove("active");
      other.querySelector(".faq-a").style.maxHeight = null;
    });
    if (!isOpen) {
      item.classList.add("active");
      ans.style.maxHeight = ans.scrollHeight + "px";
    }
  });
});

// ===== 聯絡表單 → 開啟信箱寄信（純靜態，不需後端）=====
const form = document.getElementById("contactForm");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = form.name.value.trim();
  const reply = form.reply.value.trim();
  const message = form.message.value.trim();

  const subject = encodeURIComponent(`接案需求 - 來自 ${name}`);
  const body = encodeURIComponent(
    `稱呼：${name}\n聯絡方式：${reply}\n\n需求內容：\n${message}`
  );
  window.location.href = `mailto:howardtseng0828@gmail.com?subject=${subject}&body=${body}`;
});

// ===== 頁尾年份 =====
document.getElementById("year").textContent = new Date().getFullYear();
