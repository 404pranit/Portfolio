function scrollToProjects() {
  document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
}

// Dark mode toggle
document.getElementById("themeBtn").onclick = () => {
  document.body.classList.toggle("light");
};
