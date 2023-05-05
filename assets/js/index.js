// gsap scroll
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

if (ScrollTrigger.isTouch !== 1) {
  let smoother = ScrollSmoother.create({
    wrapper: ".smooth-wrapper",
    content: ".smooth-content",
    smooth: 0.8,
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
        // start: "bottom bottom",

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
        // start: "bottom bottom",

        // scrub: true
      },
    }
  );
  gsap.fromTo(
    ".l-profit__list-item",
    { opacity: 0, x: -200 },
    {
      opacity: 1,
      x: 0,
      duration: 0.6,
      stagger: 0.3,
      scrollTrigger: {
        trigger: ".l-profit__list-item",
      },
    }
  );

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
      { opacity: 0, y: 200 },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: item,
          start: "-750",
          end: "top",
          // scrub: true,
          onEnter: () => {
            // gsap.to(item, { height: '100%' });
          },
        },
      }
    );
  });

  let fadeUp = gsap.utils.toArray(".fadeUp");

  fadeUp.forEach((item) => {
    gsap.fromTo(
      item,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 0.4,
        scrollTrigger: {
          trigger: item,
          start: "-660",
          // markers: true
          // end: "top",/
          // scrub: true,
        },
      }
    );
  });

  let fadeRight = gsap.utils.toArray(".fadeRight");

  fadeRight.forEach((item) => {
    gsap.fromTo(
      item,
      { opacity: 0, x: 200 },
      {
        opacity: 1,
        x: 0,
        duration: 0.4,
        scrollTrigger: {
          trigger: item,
          start: "-500",
          // end: "top",/
          // scrub: true,
        },
      }
    );
  });

  let fadeLeft = gsap.utils.toArray(".fadeLeft");

  fadeLeft.forEach((item) => {
    gsap.fromTo(
      item,
      { opacity: 0, x: -200 },
      {
        opacity: 1,
        x: 0,
        duration: 0.4,
        scrollTrigger: {
          trigger: item,
          start: "-500",

          // end: "top",/
          // scrub: true,
        },
      }
    );
  });

  let fadeOpacity = gsap.utils.toArray(".fadeOpacity");

  fadeOpacity.forEach((item) => {
    gsap.fromTo(
      item,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.4,
        scrollTrigger: {
          trigger: item,
          // start: "500",

          // end: "top",/
          // scrub: true,
        },
      }
    );
  });
}

// $(".js-modal-btn").modalVideo();
new ModalVideo(".js-modal-btn");

var swiperKids = new Swiper(".l-kids__swiper", {
  slidesPerView: "auto",
  centered: true,
  speed: 400,
  grabCursor: true,
  freeMode: true,
  lazyLoading: true,
});

var swiperGallery = new Swiper(".l-gallery__swiper", {
  slidesPerView: "auto",
  speed: 400,
  grabCursor: true,
  freeMode: true,
  lazyLoading: true,
});

let swiperFaces = new Swiper(".l-faces__swiper", {
  slidesPerView: 1,
  speed: 600,
  lazyLoading: true,
  loop: true,
  autoplay: {
    delay: 7000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".boss-button-next",
    prevEl: ".boss-button-prev",
  },
  pagination: {
    el: ".boss-pagination",
  },
});

const textInstagram = document.querySelector(".l-phone__text .last");
const slideText = [
  { slide: 1, text: "@imperator_franchise" },
  { slide: 2, text: "@imperator_ykt" },
  { slide: 3, text: "@imperator.msk" },
];

var swiperGallery = new Swiper(".l-phone__swiper", {
  slidesPerView: 1,
  loop: true,
  speed: 1200,
  grabCursor: true,
  lazyLoading: true,
  effect: "fade",
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
  },
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },

  on: {
    slideChange: function () {
      const activeSlide = swiperGallery.realIndex + 1;
      const slideValue = slideText.find((slide) => slide.slide === activeSlide);
      textInstagram.textContent = slideValue.text;
    },
  },
});

// calc range slider
const rangePrice = document.querySelector("#price");
const rangeDays = document.querySelector("#days");
const rangePriceValue = document.querySelector("#price-value");
const rangeDaysValue = document.querySelector("#days-value");

const result = document.querySelector("#result-calc");

function sliderPrice() {
  let rangeMax = 14000;
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
  rangePriceValue.style.left = bulletPosition * 95 + "%";
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
  rangeDaysValue.style.left = bulletPosition * 95 + "%";
}
sliderDays();
sliderPrice();

let btns = document.querySelectorAll(".ripple-btn");
btns.forEach((btn) => {
  btn.addEventListener("click", createRipple);
});

function createRipple(e) {
  let btn = e.target;
  let boundingBox = btn.getBoundingClientRect();
  let x = e.clientX - boundingBox.left;
  let y = e.clientY - boundingBox.top;

  let ripple = document.createElement("span");
  ripple.classList.add("ripple-span");
  ripple.style.left = `${x}px`;
  ripple.style.top = `${y}px`;

  btn.appendChild(ripple);

  ripple.addEventListener("animationend", () => {
    ripple.remove();
  });
}

const myModal = new HystModal({
  linkAttributeName: "data-hystmodal",
  // настройки (не обязательно), см. API
  backscroll: false,
  beforeOpen: function () {
    ym(92757724, "reachGoal", "klik_po_knopke");
  },
});

const form = document.querySelectorAll(".form");

form.forEach((el) => {
  el.addEventListener("submit", function (e) {
    e.preventDefault();
  });
});
