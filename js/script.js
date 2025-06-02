document.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.querySelector(".sidebar");
  const toggleBtn = document.getElementById("toggleSidebar");

  toggleBtn.addEventListener("click", () => {
    sidebar.classList.toggle("expanded");
    sidebar.classList.toggle("collapsed");
  });
});