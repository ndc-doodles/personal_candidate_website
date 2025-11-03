// JAVASCRIPT FOR ANIMATION OF NAVBAR AND HAMBURGER IN INDEX PAGE
  window.addEventListener("scroll", function () {
    const navbar = document.getElementById("navbar");
    if (window.scrollY > 100) {
      navbar.classList.add(
        "bg-[#F97D09]/50",   
        "backdrop-blur-md", 
        "shadow-lg",
        "transition-all",
        "duration-500"
      );
      navbar.classList.remove("bg-transparent");
    } else {
      navbar.classList.add("bg-transparent");
      navbar.classList.remove(
        "bg-[#F97D09]/50",
        "backdrop-blur-md",
        "shadow-lg"
      );
    }
  });

document.addEventListener("DOMContentLoaded", () => {
  const desktopLinks = document.querySelectorAll(".desktop-menu a");
  const mobileLinks = document.querySelectorAll("#mobileMenu a");
  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobileMenu");
  const overlay = document.getElementById("overlay");
  const closeBtn = document.getElementById("closeBtn");

  // === Open & Close Mobile Menu ===
  const openMenu = () => {
    hamburger.classList.add("active");
    mobileMenu.classList.remove("translate-x-full");
    overlay.classList.remove("hidden");
    document.body.style.overflow = "hidden";
  };

  const closeMenu = () => {
    hamburger.classList.remove("active");
    mobileMenu.classList.add("translate-x-full");
    overlay.classList.add("hidden");
    document.body.style.overflow = "";
  };

  hamburger.addEventListener("click", openMenu);
  closeBtn.addEventListener("click", closeMenu);
  overlay.addEventListener("click", closeMenu);

  // === Desktop Active Underline ===
  desktopLinks.forEach(link => {
    link.addEventListener("click", () => {
      desktopLinks.forEach(l => l.classList.remove("active"));
      link.classList.add("active");
    });
  });

  // === Mobile Active Color + Auto Close ===
  mobileLinks.forEach(link => {
    link.addEventListener("click", () => {
      mobileLinks.forEach(l => l.classList.remove("active"));
      link.classList.add("active");
      closeMenu(); // auto close
    });
  });

  // ✅ Set "Home" active by default
  if (mobileLinks.length > 0) {
    mobileLinks[0].classList.add("active");
  }

  // Prevent overlay from moving on scroll
  window.addEventListener("scroll", () => {
    if (!overlay.classList.contains("hidden")) {
      overlay.style.position = "fixed";
    }
  });
});




// JAVASCRIPT FOR ANIMATION OF ABOUT SECTION IN INDEX PAGE
  
    const reveals = document.querySelectorAll('.reveal-left, .reveal-right');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    }, { threshold: 0.3 });

    reveals.forEach(r => observer.observe(r));




// JAVASCRIPT FOR ANIMATION OF VISION SECTION IN INDEX PAGE
  
    document.addEventListener('DOMContentLoaded', () => {
      const animatedItems = document.querySelectorAll('.reveal-left, .reveal-right, .vision-image, .vision-text');

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          const el = entry.target;
          if (entry.isIntersecting) {
            el.classList.remove('opacity-0', 'scale-95', 'translate-y-10', '-translate-y-10');

            el.classList.add('opacity-100', 'scale-100', 'translate-y-0');

            observer.unobserve(el);
          }
        });
      }, { threshold: 0.3 });

      animatedItems.forEach(el => {
        if (!el.classList.contains('opacity-0') && !el.classList.contains('translate-y-10') && !el.classList.contains('scale-95')) {
          if (el.classList.contains('vision-image')) el.classList.add('opacity-0', 'scale-95');
          if (el.classList.contains('vision-text')) el.classList.add('opacity-0', 'translate-y-10');
        }
        observer.observe(el);
      });
    });
 


// JAVASCRIPT FOR SWITCHING EVENTS IN INDEX PAGE

    const events = [
      {
        title: "Youth Empowerment Rally",
        date: "Held on October 20, 2025 - Coimbatore",
        description:
          "A vibrant gathering led by Annamalai to inspire young minds towards leadership, innovation and community service - promoting unity and progress across Tamil Nadu.",
        image: "./static/images/meeting.jpg",
      },
      {
        title: "Farmers' Support Meet",
        date: "Held on September 15, 2025 - Madurai",
        description:
          "Annamalai addressed thousands of farmers, assuring policies to protect agriculture and empower rural communities with modern tools and fair market prices.",
        image:
          "https://th-i.thgim.com/public/incoming/a5huht/article65513329.ece/alternates/LANDSCAPE_1200/IMG_10217_6_6_2022_18_34_3_1_DP9T3FJU.jpg",
      },
      {
        title: "Women's Safety & Leadership Drive",
        date: "Held on August 5, 2025 - Chennai",
        description:
          "A statewide campaign focused on women’s empowerment, safety and leadership programs that promote social equality and self-reliance.",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQV4VHU5owcmgkR3x1xzoCnY0VGCLfghHrcw&s",
      },
      {
        title: "Education for All Initiative",
        date: "Held on July 10, 2025 - Salem",
        description:
          "A mission to uplift underprivileged students through scholarships and infrastructure development in rural schools.",
        image: "./static/images/education.jpg",
      },
      {
        title: "Clean Tamil Nadu Campaign",
        date: "Held on June 12, 2025 - Tiruchirapalli",
        description:
          "A large-scale public awareness event promoting cleanliness, sustainability and eco-friendly habits across Tamil Nadu.",
        image: "./static/images/clean.jpg",
      },
    ];

    let currentIndex = 0;

    const titleEl = document.getElementById("event-title");
    const dateEl = document.getElementById("event-date");
    const descEl = document.getElementById("event-description");
    const imgEl = document.getElementById("event-image");
    const countEl = document.getElementById("event-count");

    document.getElementById("next-event").addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % events.length;
      updateEvent();
    });

    document.getElementById("prev-event").addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + events.length) % events.length;
      updateEvent();
    });

    function updateEvent() {
      const e = events[currentIndex];
      titleEl.textContent = e.title;
      dateEl.textContent = e.date;
      descEl.textContent = e.description;
      imgEl.src = e.image;
      countEl.textContent = `${String(currentIndex + 1).padStart(
        2,
        "0"
      )} - ${String(events.length).padStart(2, "0")}`;
    }
 