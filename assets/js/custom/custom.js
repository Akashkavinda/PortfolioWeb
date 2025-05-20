// Scroll detection for active section
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 300) {
      current = section.getAttribute("id");
    }
  });

  // Navbar blur effect on scroll
  const nav = document.querySelector(".bottom-nav");
  if (window.scrollY > 100) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      // Toggle "active" class based on visibility
      entry.target.classList.toggle("active", entry.isIntersecting);
    });
  },
  {
    rootMargin: "10px",
    threshold: 0.04, // Trigger when 10% of element is visible
  }
);

// Apply observer to all elements with the class
document
  .querySelectorAll(".scroll-effect")
  .forEach((el) => observer.observe(el));



// sweeper
  const swiper = new Swiper(".mySwiper", {
  loop: true,
  speed: 4000,
  autoplay: {
    delay: 0, // Instant automatic transition
    disableOnInteraction: false,
  },
  slidesPerView: "auto",
  spaceBetween: 30,
  centeredSlides: true,
  freeMode: true,
  breakpoints: {
    320: {
      spaceBetween: 20,
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 4,
    },
    1024: {
      slidesPerView: 6,
    },
  },
});
