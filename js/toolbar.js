const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  let currentSectionId = "home"; 
  const offset = window.innerHeight * 0.4;

  sections.forEach((section) => {
    if (window.scrollY >= section.offsetTop - offset) {
      currentSectionId = section.id;
    }
  });

  document.querySelectorAll(".toolbar a").forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${currentSectionId}`) {
      link.classList.add("active");
    }
  });
});