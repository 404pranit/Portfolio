/* THEME */
:root{
  --bg:#0b1220;
  --text:#e5e7eb;
  --muted:#94a3b8;
  --accent:#6366f1;
  --card:#111827;
  --border:#1f2937;
}

body.light{
  --bg:#ffffff;
  --text:#111827;
  --muted:#4b5563;
  --accent:#2563eb;
  --card:#f3f4f6;
  --border:#e5e7eb;
}

*{ box-sizing:border-box; }
body{
  margin:0;
  font-family:system-ui, -apple-system, Segoe UI, Roboto, Arial;
  background:var(--bg);
  color:var(--text);
}

/* NAV */
.nav{
  position:sticky; top:0; z-index:10;
  display:flex; justify-content:space-between; align-items:center;
  padding:14px 22px;
  background:rgba(0,0,0,0.3);
  backdrop-filter: blur(8px);
  border-bottom:1px solid var(--border);
}
.logo{ font-weight:700; }
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
