// DARK MODE
const themeBtn = document.getElementById("themeBtn");

if(localStorage.getItem("theme")==="dark"){
  document.body.classList.add("dark");
}

themeBtn.onclick = ()=>{
  document.body.classList.toggle("dark");
  localStorage.setItem("theme",
    document.body.classList.contains("dark") ? "dark":"light"
  );
};

// MOBILE MENU
const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("navLinks");

menuBtn.onclick = ()=>{
  nav.classList.toggle("active");
};
