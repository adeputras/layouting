window.addEventListener('DOMContentLoaded', (event) => {
  const burgerIcon = document.querySelector('.burger-icon');
  const sidebar = document.querySelector('.sidebar');
  const overlay = document.querySelector('.overlay-bg');
  document.eve
  burgerIcon.addEventListener('click', () => {
    // console.log('burger icon di click')
    sidebar.classList.add('menu-active');
    overlay.classList.add('menu-active');
    // sidebar.classList.toggle('menu-active')
  });

  const closeIcon = document.querySelector('.close-icon')
  closeIcon.addEventListener('click', () => {
    // console.log('burger icon di click')
    sidebar.classList.remove('menu-active');
    overlay.classList.remove('menu-active');
    // sidebar.classList.toggle('menu-active')
  });
});
