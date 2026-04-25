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
});.logo{ font-weight:700; }
nav a{
  margin:0 10px;
  text-decoration:none;
  color:var(--text);
  font-size:14px;
}
.toggle{ margin-left:10px; }

.menu-btn{ display:none; font-size:20px; }

/* HERO */
.hero{
  min-height:88vh;
  display:flex; align-items:center; justify-content:center;
  text-align:center;
  padding:40px 20px;
}
.hero h1{ font-size:40px; margin:0 0 10px; }
.hero span{ color:var(--accent); }
.hero p{ color:var(--muted); }
.hero-actions{ margin-top:20px; }

/* BUTTONS */
.btn{
  display:inline-block;
  padding:10px 18px;
  border-radius:8px;
  text-decoration:none;
  margin:5px;
}
.primary{
  background:var(--accent);
  color:white;
}
.ghost{
  border:1px solid var(--border);
  color:var(--text);
}

/* SECTION */
.section{
  padding:60px 20px;
  max-width:1000px;
  margin:auto;
  text-align:center;
}
.section h2{ margin-bottom:20px; }

/* GRID */
.grid{
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(260px,1fr));
  gap:20px;
}

/* CARD */
.card{
  background:var(--card);
  border:1px solid var(--border);
  padding:18px;
  border-radius:12px;
  text-align:left;
  transition:.25s;
}
.card:hover{
  transform:translateY(-6px);
}
.card-top{
  display:flex; justify-content:space-between; align-items:center;
}
.badge{
  font-size:12px;
  background:var(--accent);
  color:white;
  padding:3px 8px;
  border-radius:6px;
}
.card-actions a{
  margin-right:10px;
  font-size:14px;
  color:var(--accent);
  text-decoration:none;
}

/* SKILLS */
.skills span{
  display:inline-block;
  margin:8px;
  padding:8px 12px;
  border-radius:8px;
  background:var(--accent);
  color:white;
  font-size:14px;
}

/* FORM */
.form{
  display:flex; flex-direction:column;
  max-width:400px; margin:auto;
}
.form input, .form textarea{
  margin:8px 0;
  padding:10px;
  border:1px solid var(--border);
  border-radius:6px;
  background:transparent;
  color:var(--text);
}

/* CONTACT LINKS */
.contact-links a{
  margin:10px;
  color:var(--accent);
  text-decoration:none;
}

/* FOOTER */
footer{
  text-align:center;
  padding:20px;
  border-top:1px solid var(--border);
  margin-top:30px;
}

/* MOBILE */
@media(max-width:768px){
  .menu-btn{ display:block; }
  nav{
    display:none;
    position:absolute;
    right:10px; top:60px;
    flex-direction:column;
    background:var(--card);
    padding:10px;
    border:1px solid var(--border);
  }
  nav.active{ display:flex; }
}
