const iconMenu = document.querySelector('.icon-menu');
const body = document.querySelector('body');
const headerContent = document.querySelector('.menu');
const wrapper = document.querySelector('.header__wrapper');
const transform = document.querySelectorAll('._transform');

iconMenu.addEventListener('click', function () {
  const docWidth = document.documentElement.clientWidth;
  body.classList.toggle('_lock');
  headerContent.classList.toggle('_active');
  iconMenu.classList.toggle('_active');
  if (docWidth <= 768) {
    headerContent.style.paddingTop = wrapper.clientHeight + 30 + 'px';
    console.log(wrapper.clientHeight);
  }
})

window.addEventListener('resize', function () {
  const docWidth = document.documentElement.clientWidth;
  if (docWidth > 768)
    headerContent.style.paddingTop = 0 + 'px';
  else {
    headerContent.style.paddingTop = wrapper.clientHeight + 30 + 'px';
  }
})