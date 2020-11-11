const vidContainer = document.querySelectorAll(".swiper-slide");
// Loop through each video and play or pause video on mouse events
vidContainer.forEach((vid) => {
  const video = vid.children[0];
  vid.addEventListener("mouseover", () => {
    video.play();
  });
  vid.addEventListener("mouseout", () => {
    video.load();
  });
});

const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-items");
  const closeBtn = document.querySelector(".close-menu-btn");
  const items = document.querySelectorAll(".nav-item");

  // open mobile menu
  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
    //animates links
    items.forEach((item, index) => {
      item.style.animation = `navItemsShow 0.5s ease forwards ${index / 5}s`;
    });
  });

  //close mobile menu
  closeBtn.addEventListener("click", () => {
    nav.classList.remove("nav-active");
    items.forEach((item) => {
      item.style = "";
    });
  });
};

navSlide();

// Page transition
function pageTransition() {
   const tl = gsap.timeline()
   // block animation
  
   
   tl.from('.home, .contact', {duration:2, opacity:0})
   tl.to('.home, .contact', {duration:2, opacity:1})
}

pageTransition();