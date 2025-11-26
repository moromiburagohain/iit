let index = 0;
const slides = document.querySelectorAll(".slide");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const dotsContainer = document.querySelector(".dots");
const sliderContainer = document.querySelector(".slider-container");

// ---------- CREATE DOTS WITH ACCESSIBILITY ----------
function createDots() {
  slides.forEach((_, i) => {
    const d = document.createElement("span");
    d.classList.add("dot");
    d.setAttribute("tabindex", "0"); // focusable for keyboard
    d.setAttribute("aria-label", `Go to slide ${i + 1}`); // screen reader
    d.addEventListener("click", () => goToSlide(i));
    d.addEventListener("keypress", (e) => { // Enter key support
      if (e.key === "Enter" || e.key === " ") goToSlide(i);
    });
    dotsContainer.appendChild(d);
  });
}
createDots();

const dots = document.querySelectorAll(".dot");

// ---------- SHOW SLIDE FUNCTION ----------
function showSlide(i) {
  slides.forEach(sl => sl.classList.remove("active-slide"));
  dots.forEach(d => d.classList.remove("active"));

  slides[i].classList.add("active-slide");
  dots[i].classList.add("active");
}

// ---------- NEXT / PREV / GOTO ----------
function nextSlide() {
  index = (index + 1) % slides.length;
  showSlide(index);
}

function prevSlide() {
  index = (index - 1 + slides.length) % slides.length;
  showSlide(index);
}

function goToSlide(i) {
  index = i;
  showSlide(index);
}

// ---------- BUTTON EVENT LISTENERS ----------
prev?.addEventListener("click", prevSlide);
next?.addEventListener("click", nextSlide);

// ---------- AUTOPLAY WITH PAUSE ON HOVER ----------
let autoplay = setInterval(nextSlide, 4000);

sliderContainer.addEventListener("mouseenter", () => clearInterval(autoplay));
sliderContainer.addEventListener("mouseleave", () => autoplay = setInterval(nextSlide, 4000));

// ---------- INITIALIZE FIRST SLIDE ----------
showSlide(index);
