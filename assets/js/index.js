// on hero section mouse parallax
const parallax = document.querySelector(".l-hero--img img");
const container = document.querySelector(".l-hero__left");

// if (!("ontouchstart" in document.documentElement)) {
// may be work when scrollSmooth undefiend
// }

// gsap scroll
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

if (ScrollTrigger.isTouch !== 1) {
  container.addEventListener("mousemove", function (event) {
    const x = event.clientX / container.offsetWidth;
    const y = event.clientY / container.offsetHeight;

    parallax.style.transform = `translate(-${x * 10}px, -${y * 10}px)`;
  });

  let smoother = ScrollSmoother.create({
    wrapper: ".smooth-wrapper",
    content: ".smooth-content",
    smooth: 2,
    effects: true,
    smoothTouch: 0.1,
  });

  gsap.fromTo(
    ".l-whatis__content-left",
    { x: -400, opacity: 0 },
    {
      opacity: 1,
      x: 0,
      speed: 0.4,
      scrollTrigger: {
        trigger: ".l-whatis__content-left",
        start: "bottom bottom",

        // scrub: true
      },
    }
  );
  gsap.fromTo(
    ".l-whatis__content-right",
    { x: 400, opacity: 0 },
    {
      opacity: 1,
      x: 0,
      speed: 0.4,
      scrollTrigger: {
        trigger: ".l-whatis__content-left",
        start: "bottom bottom",

        // scrub: true
      },
    }
  );
  smoother.effects(".l-whatis__content-left", { speed: 0.9, lag: 0.4 });
  smoother.effects(".l-whatis__content-right", { speed: 0.9, lag: 0.4 });

  gsap.fromTo(
    ".l-history__title",
    {},
    {
      scrollTrigger: {
        trigger: ".l-history__title",
        pin: true,
      },
    }
  );

  let itemsHistory = gsap.utils.toArray(".l-history__timeline li");

  itemsHistory.forEach((item) => {
    gsap.fromTo(
      item,
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        scrollTrigger: {
          trigger: item,
          start: "-750",
          end: "top",
          scrub: true
        },
      }
    );
  });
}

// $(".js-modal-btn").modalVideo();
new ModalVideo(".js-modal-btn");

var swiperKids = new Swiper(".l-kids__swiper", {
  slidesPerView: "auto",
  // spaceBetween: ,
  // loop: true,
  speed: 400,
  grabCursor: true,
  freeMode: true,
  lazyLoading: true,
  // cssMode: true,
});

var swiperGallery = new Swiper(".l-gallery__swiper", {
  slidesPerView: "auto",
  // spaceBetween: ,
  // loop: true,
  speed: 400,
  grabCursor: true,
  freeMode: true,
  lazyLoading: true,
  // cssMode: true,
});

var swiperGallery = new Swiper(".l-phone__swiper", {
  slidesPerView: 1,
  // spaceBetween: ,
  // loop: true,
  speed: 1200,
  grabCursor: true,
  // freeMode: true,
  lazyLoading: true,
  effect: "fade",
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
  },
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
});

// calc range slider
const rangePrice = document.querySelector("#price");
const rangeDays = document.querySelector("#days");
const rangePriceValue = document.querySelector("#price-value");
const rangeDaysValue = document.querySelector("#days-value");

const result = document.querySelector("#result-calc");

function sliderPrice() {
  let rangeMax = 7000;
  let rangeMin = 3200;
  valPercent = Math.round(
    ((rangePrice.value - rangeMin) / (rangeMax - rangeMin)) * 100
  );

  rangePrice.style.background = `linear-gradient(to right, #343434 ${valPercent}% , #FFAD00 ${valPercent}%)`;
  rangePriceValue.textContent = rangePrice.value;
  resultCalc = rangePrice.value * rangeDays.value;
  const formatResult = resultCalc
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  result.textContent = `${formatResult} руб`;

  let bulletPosition = (rangePrice.value - 3300) / (rangeMax - rangeMin);
  rangePriceValue.style.left = bulletPosition * 379 + "px";
}

function sliderDays() {
  let rangeMax = 220;
  let rangeMin = 60;
  valPercent = Math.round(
    ((rangeDays.value - rangeMin) / (rangeMax - rangeMin)) * 100
  );

  rangeDays.style.background = `linear-gradient(to right, #343434 ${valPercent}% , #FFAD00 ${valPercent}%)`;
  rangeDaysValue.textContent = rangeDays.value;
  resultCalc = rangePrice.value * rangeDays.value;
  const formatResult = resultCalc
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  result.textContent = `${formatResult} руб`;

  let bulletPosition = (rangeDays.value - 60) / (rangeMax - rangeMin);
  rangeDaysValue.style.left = bulletPosition * 379 + "px";
}
sliderDays();
sliderPrice();
