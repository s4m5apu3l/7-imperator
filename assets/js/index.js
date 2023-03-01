// on hero section mouse parallax
const parallax = document.querySelector(".l-hero--img img");
const container = document.querySelector(".l-hero__left");

if (!("ontouchstart" in document.documentElement)) {
  container.addEventListener("mousemove", function (event) {
    const x = event.clientX / container.offsetWidth;
    const y = event.clientY / container.offsetHeight;

    parallax.style.transform = `translate(-${x * 10}px, -${y * 10}px)`;
  });
}

// gsap scroll
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

if (ScrollTrigger.isTouch !== 1) {
  ScrollSmoother.create({
    wrapper: ".smooth-wrapper",
    content: ".smooth-content",
    smooth: 1.5,
    effects: true,
  });
}


