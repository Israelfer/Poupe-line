const menuMob = document.getElementsByClassName('menu-mobile')[0]
menuMob.addEventListener('click', menuMobile)

function menuMobile () {
const menuTop = document.getElementById('topMenu')
menuTop.classList.toggle('navfake')
}

