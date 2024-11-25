document.addEventListener("DOMContentLoaded", () => {
  console.log("Website loaded successfully!");
});

document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.querySelector(".carousel");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");

  let currentIndex = 0;

  const updateCarousel = () => {
    const itemWidth = carousel.querySelector(".carousel-item").clientWidth;
    carousel.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
  };

  prevBtn.addEventListener("click", () => {
    currentIndex =
      currentIndex === 0 ? carousel.children.length - 1 : currentIndex - 1;
    updateCarousel();
  });

  nextBtn.addEventListener("click", () => {
    currentIndex =
      currentIndex === carousel.children.length - 1 ? 0 : currentIndex + 1;
    updateCarousel();
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.querySelector(".carousel");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");

  const items = document.querySelectorAll(".carousel-item");
  const totalItems = items.length;
  let currentIndex = 0;

  const updateCarousel = () => {
    const itemWidth = items[0].clientWidth;
    carousel.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
  };

  prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateCarousel();
    }
  });

  nextBtn.addEventListener("click", () => {
    if (currentIndex < totalItems - 1) {
      currentIndex++;
      updateCarousel();
    }
  });

  // Update carousel saat ukuran layar berubah
  window.addEventListener("resize", updateCarousel);
});

const testimonials = [
    { quote: "Informatif! Seluruh informasi yang diberikan sangat detail dan mudah dimengerti.", author: "Jane Doe" },
    { quote: "Blog ini tidak buruk, sangat baik.", author: "John Smith" },
    { quote: "Selalu update paling cepet, mantap emang", author: "Emily Davis" },
  ];
  
  let currentIndex = 0;
  
  function updateTestimonial() {
    const testimonial = document.getElementById("testimonial");
    testimonial.innerHTML = `
      <p class="quote">"${testimonials[currentIndex].quote}"</p>
      <p class="author">- ${testimonials[currentIndex].author}</p>
    `;
  }
  
  function prevTestimonial() {
    currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    updateTestimonial();
  }
  
  function nextTestimonial() {
    currentIndex = (currentIndex + 1) % testimonials.length;
    updateTestimonial();
  }
  
  // Initialize with the first testimonial
  updateTestimonial();
  
  document.addEventListener("scroll", () => {
    const aboutSection = document.querySelector(".about-me");
    const position = aboutSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.5;
  
    if (position < screenPosition) {
      aboutSection.classList.add("active");
    }
  });
  