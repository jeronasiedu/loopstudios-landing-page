const menu = document.querySelector('.menu')
const mobileNav = document.querySelector('.mobile')
menu.addEventListener('click', () => {
  menu.classList.toggle('active')
  mobileNav.classList.toggle('expand')
  document.body.style.overflowY =
    document.body.style.overflowY === 'hidden' ? 'visible' : 'hidden'
})
