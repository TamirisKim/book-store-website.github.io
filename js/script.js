/*появлялась происковое окно вниз при нажатии иконки поиск*/
searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () => {
   searchForm.classList.toggle('active');
}

/*login form*/
let loginForm = document.querySelector('.login-form-container');

document.querySelector('#login-btn').onclick = () => {
   loginForm.classList.toggle('active');
}

document.querySelector('#close-login-btn').onclick = () => {
   loginForm.classList.remove('active');
}

/*при скроле header-2 встает на место header-1*/
window.onscroll = () => {

   searchForm.classList.remove('active');/*исчез навер когда узко*/

   if (window.scrollY > 80) {
      document.querySelector('.header .header-2').classList.add('active');
   } else {
      document.querySelector('.header .header-2').classList.remove('active');
   }

}

window.onload = () => {

   if (window.scrollY > 80) {
      document.querySelector('.header .header-2').classList.add('active');
   } else {
      document.querySelector('.header .header-2').classList.remove('active');
   }

   fadeOut();/*чтоб закрылась анимация загрузки */

}

/*анимация закгрузки */
function loader() {
   document.querySelector('.loader-container').classList.add('active');
}

function fadeOut() {
   setTimeout(loader, 4000);
}


/*слайдер книг для home*/
var swiper = new Swiper(".books-slider", {
   loop: true,
   centeredSlides: true,
   autoplay: {
      delay: 9500,
      disableOnInteraction: false,
   },
   breakpoints: {
      0: {
         slidesPerView: 1,
      },
      768: {
         slidesPerView: 2,
      },
      1024: {
         slidesPerView: 3,
      },
   },
});
/*слайдер книг для featured*/
var swiper = new Swiper(".featured-slider", {
   spaceBetween: 10,
   loop: true,
   centeredSlides: true,
   autoplay: {
      delay: 9500,
      disableOnInteraction: false,
   },
   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
   },
   breakpoints: {
      0: {
         slidesPerView: 1,
      },
      450: {
         slidesPerView: 2,
      },
      768: {
         slidesPerView: 3,
      },
      1024: {
         slidesPerView: 4,
      },
   },
});

/*слайдер книг для arrivals*/
var swiper = new Swiper(".arrivals-slider", {
   spaceBetween: 10,
   loop: true,
   centeredSlides: true,
   autoplay: {
      delay: 9500,
      disableOnInteraction: false,
   },
   breakpoints: {
      0: {
         slidesPerView: 1,
      },
      768: {
         slidesPerView: 2,
      },
      1024: {
         slidesPerView: 3,
      },
   },
});

/*слайдер  для reviews*/
var swiper = new Swiper(".reviews-slider", {
   spaceBetween: 10,
   grabCursor: true,
   loop: true,
   centeredSlides: true,
   autoplay: {
      delay: 9500,
      disableOnInteraction: false,
   },
   breakpoints: {
      0: {
         slidesPerView: 1,
      },
      768: {
         slidesPerView: 2,
      },
      1024: {
         slidesPerView: 3,
      },
   },
});

/*слайдер  для blogs*/
var swiper = new Swiper(".blogs-slider", {
   spaceBetween: 10,
   grabCursor: true,
   loop: true,
   centeredSlides: true,
   autoplay: {
      delay: 9500,
      disableOnInteraction: false,
   },
   breakpoints: {
      0: {
         slidesPerView: 1,
      },
      768: {
         slidesPerView: 2,
      },
      1024: {
         slidesPerView: 3,
      },
   },
});

