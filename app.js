let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

// MENU ANIMACION //

// FIN MEMU ANIMACION //

menu.onclick = () =>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}
//SWIPER
var swiper = new Swiper(".services-contentt", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 500000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  //END SWIPER//