
const topButton = document.getElementById('topButton')
const topNav = document.getElementById('navContainer')

window.addEventListener('scroll', () => {

    if (this.scrollY > 456) {
        topButton.classList.add('scrolled')
        topNav.classList.remove('nav-normal')
        topNav.classList.add('nav-scrolled')
    } else {
        topButton.classList.remove('scrolled')
        topNav.classList.add('nav-normal')
        topNav.classList.remove('nav-scrolled')
    }
})
