const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  let currentSectionId = "home"; // Default to the first section
  const offset = window.innerHeight * 0.4; // Adjust as needed

  sections.forEach((section) => {
    if (window.scrollY >= section.offsetTop - offset) {
      currentSectionId = section.id;
    }
  });

  // Add the "active" class to the corresponding link in the toolbar
  document.querySelectorAll(".toolbar a").forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${currentSectionId}`) {
      link.classList.add("active");
    }
  });
});