const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];
const certificate = document.getElementsByClassName("rsButton")[0];

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});

certificate.addEventListener("click", () => {
  location.href = "https://app.rs.school/certificate/48dfqcsr";
});
