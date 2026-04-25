// DARK MODE
const themeBtn = document.getElementById("themeBtn");

if(localStorage.getItem("theme")==="light"){
  document.body.classList.add("light");
}

themeBtn.onclick = ()=>{
  document.body.classList.toggle("light");
  localStorage.setItem("theme",
    document.body.classList.contains("light") ? "light" : "dark"
  );
};

// MOBILE MENU
const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("navLinks");

menuBtn.onclick = ()=>{
  nav.classList.toggle("active");
};

// CONTACT FORM (mailto)
document.getElementById("contactForm").addEventListener("submit", function(e){
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const msg = document.getElementById("message").value;

  window.location.href =
    `mailto:your-email@gmail.com?subject=Message from ${name}&body=${msg} (${email})`;
});
