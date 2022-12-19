const hamburger = document.querySelector('.hamburger-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const crossBtn = document.querySelector('.cross-btn');
const mobileItems = document.querySelectorAll('.mobile-item');

hamburger.addEventListener('click', () => {
  mobileMenu.style.display = 'block';
});

crossBtn.addEventListener('click', () => {
  mobileMenu.style.display = 'none';
});

for (let i = 0; i < mobileItems.length; i += 1) {
  const element = mobileItems[i];
  element.addEventListener('click', () => {
    mobileMenu.style.display = 'none';
  });
}
