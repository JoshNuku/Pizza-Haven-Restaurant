const blurredImages = document.querySelectorAll(".lazy-img");

function removeBlur() {
  blurredImages.forEach((image) => {
    const imageTop = image.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (imageTop - windowHeight > 0) return;

    image.classList.remove("lazy-img");
  });
}

window.addEventListener("scroll", removeBlur);

const sections = document.querySelectorAll("section");

const revealSections = () => {
  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (sectionTop - windowHeight > 0) return;

    section.classList.remove("section--hidden");
  });
};

window.addEventListener("scroll", revealSections);
