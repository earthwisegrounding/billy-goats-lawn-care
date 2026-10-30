// Stagger the hero mowing passes left to right
document.querySelectorAll('.lawn-plane span').forEach((stripe, i) => {
  stripe.style.setProperty('--i', i);
});

// Give the header a solid background once the hero scrolls away
// and show the mobile call bar once the hero's own call button is out of view
const header = document.querySelector('[data-header]');
const callBar = document.querySelector('.call-bar');
const onScroll = () => {
  header.classList.toggle('is-solid', window.scrollY > 40);
  callBar.classList.toggle('is-visible', window.scrollY > window.innerHeight * 0.6);
};
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

document.querySelector('[data-year]').textContent = new Date().getFullYear();
