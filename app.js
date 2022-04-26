const menu = document.querySelector('.menu')
const mobileNav = document.querySelector('.mobile')
menu.addEventListener('click', () => {
  menu.classList.toggle('active')
  mobileNav.classList.toggle('expand')
})
