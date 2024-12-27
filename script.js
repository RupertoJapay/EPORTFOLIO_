// Highlight Active Navbar Link
document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".nav-links a");

  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      navLinks.forEach(nav => nav.classList.remove("active"));
      link.classList.add("active");
    });
  });
});

// Carousel Functionality (Projects Page)
const carousel = document.querySelector(".carousel");
if (carousel) {
  const slides = carousel.querySelectorAll(".slide");
  const next = carousel.querySelector(".next");
  const prev = carousel.querySelector(".prev");
  let currentIndex = 0;

  const showSlide = index => {
    slides.forEach((slide, i) => {
      slide.style.display = i === index ? "block" : "none";
    });
  };

  next.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  });

  prev.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
  });

  showSlide(currentIndex);
}

// Scroll-to-top Button
const scrollToTopBtn = document.querySelector(".scroll-to-top");
if (scrollToTopBtn) {
  window.addEventListener("scroll", () => {
    scrollToTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
  });

  scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// Form Validation (Contact Page)
const contactForm = document.querySelector(".contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", event => {
    const name = contactForm.querySelector("input[name='name']").value;
    const email = contactForm.querySelector("input[name='email']").value;
    const message = contactForm.querySelector("textarea[name='message']").value;

    if (!name || !email || !message) {
      event.preventDefault();
      alert("Please fill in all fields before submitting.");
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      event.preventDefault();
      alert("Please enter a valid email address.");
    }
  });
}
