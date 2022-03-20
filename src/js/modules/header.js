//header
const headerElement = document.querySelector('.header');

const callback = function (enatries, observer) {
  if (enatries[0].isIntersecting) {
    headerElement.classList.remove('_scroll');
  } else {
    headerElement.classList.add('_scroll');
  }
}
const headerObserver = new IntersectionObserver(callback);
headerObserver.observe(headerElement);