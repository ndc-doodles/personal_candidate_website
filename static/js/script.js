// JAVASCRIPT FOR ANIMATION OF NAVBAR AND HAMBURGER IN INDEX PAGE
  window.addEventListener("scroll", function () {
    const navbar = document.getElementById("navbar");
    if (window.scrollY > 100) {
      navbar.classList.add(
        "bg-[#FD000080]",   
        "backdrop-blur-md", 
        "shadow-lg",
        "transition-all",
        "duration-500"
      );
      navbar.classList.remove("bg-transparent");
    } else {
      navbar.classList.add("bg-transparent");
      navbar.classList.remove(
        "bg-[#FD000080]",
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
    title: "Launch of Phase-5 – ‘Makkalai Kaappom, Thamizhagathai Meetpom’ Statewide Yatra",
    date: "Held from September 17 – 26, 2025 – starting at Dharmapuri (TN)",
    description:
      "EPS launched the fifth phase of his statewide campaign ‘Makkalai Kaappom, Thamizhagathai Meetpom’ covering Dharmapuri, Namakkal, The Nilgiris, Dindigul and Karur districts through 19 public meetings - aiming to engage with citizens across Tamil Nadu and reinforce his party’s development agenda.",
    image: "./static/images/meeting.jpg",
  },
  {
    title: "Meeting with Union Home Minister Amit Shah in Delhi",
    date: "September 16, 2025 – New Delhi",
    description:
      "EPS along with senior leaders of his party met Amit Shah in Delhi - publicly positioning the agenda for Tamil Nadu and clarifying his firm stance regarding internal party unity ahead of the 2026 Assembly elections. ",
    image: "./static/images/meeting2.png",
  },
  {
    title: "Public Rally at Thiruparankundram – Madurai (Property-Tax Scam Exposé)",
    date: "September 2, 2025 – Madurai",
    description:
      "During his campaign tour in Madurai, EPS addressed a rally in Thiruparankundram and alleged the ruling party was shielding the mayor in a large property-tax scam; he pledged a transparent investigation if his party returns to power. ",
    image: "./static/images/meeting3.jpg",
  },
  {
    title: "Tribute Ceremony – 68th Death Anniversary of Immanuel Sekaran",
    date: "September 12, 2025 – Paramakudi",
    description:
      "EPS joined leaders across parties in paying tribute to Immanuel Sekaran on his death anniversary, highlighting social justice and harmony in Tamil Nadu.",
    image: "./static/images/meeting4.png",
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
 