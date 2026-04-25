const btn = document.getElementById("themeBtn");

if(localStorage.getItem("theme")==="dark"){
  document.body.classList.add("dark");
}

btn.onclick = ()=>{
  document.body.classList.toggle("dark");
  localStorage.setItem("theme",
    document.body.classList.contains("dark") ? "dark":"light"
  );
};
