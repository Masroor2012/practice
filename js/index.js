setTimeout(() => {
    let anim = document.getElementById('load-anim')
    anim.style.display = 'none'
    let pageHidden = document.getElementById('page-cont')
    pageHidden.style.display = 'block'
}, 2000)

const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
