// 🔥 Phase 7 — DOM, Browser APIs & Front-End Integration (1–2 Weeks)

// 1️⃣ DOM Traversal & Selectors

let access_para = document.querySelector(".para");
console.log(access_para);

let access_btn = document.querySelector("button");
console.log(access_btn);

access_btn.addEventListener("click", () => {
    alert("Click!!");
})

access_btn.classList.add("btn");

access_btn.style.background = "blue";