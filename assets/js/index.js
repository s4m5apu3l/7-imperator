console.log("ontouchstart" in document.documentElement)

const parallax = document.querySelector('.l-hero--img img');
const container = document.querySelector('.l-hero__left');

if (!("ontouchstart" in document.documentElement)) {
  container.addEventListener('mousemove', function(event) {
    const x = event.clientX / container.offsetWidth;
    const y = event.clientY / container.offsetHeight;

    parallax.style.transform = `translate(-${x * 10}px, -${y * 10}px)`;
  });
}
