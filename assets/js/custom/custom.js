// Navigation logic
document.querySelectorAll(".nav-item").forEach((item) => {
  item.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("data-target");
    const targetSection = document.getElementById(targetId);

    document.querySelectorAll(".nav-item").forEach((nav) => {
      nav.classList.remove("active");
    });

    this.classList.add("active");

    targetSection.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
});

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

  document.querySelectorAll(".nav-item").forEach((item) => {
    item.classList.remove("active");
    if (item.getAttribute("data-target") === current) {
      item.classList.add("active");
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
    rootMargin: "60px",
    threshold: 0.1, // Trigger when 10% of element is visible
  }
);

// Apply observer to all elements with the class
document
  .querySelectorAll(".scroll-effect")
  .forEach((el) => observer.observe(el));

  
