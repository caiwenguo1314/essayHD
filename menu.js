// menu.js
function toggleMenu() {
  const menu = document.querySelector('.hamburger-menu');
  if (menu.style.display === 'block') {
    menu.style.display = 'none';
  } else {
    menu.style.display = 'block';
  }
}
