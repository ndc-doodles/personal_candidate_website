
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

