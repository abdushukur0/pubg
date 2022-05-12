window.onload = function () {
  //swiper adding

// проверка на поддержку webp
async function supportsWebp() {
  if (!self.createImageBitmap) return false;

  const webpData = 'data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=';
  const blob = await fetch(webpData).then(r => r.blob());
  return createImageBitmap(blob).then(() => true, () => false);
}

(async () => {
  if (await supportsWebp()) {
    document.querySelector('html').classList.add('webp');
  } else {
    document.querySelector('html').classList.add('no-webp');
  }
})();;

// header
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
});

// icon menu
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
headerObserver.observe(headerElement);;

// ibg
function ibg() {
  let ibg = document.querySelectorAll("._ibg");
  for (var i = 0; i < ibg.length; i++) {
    if (ibg[i].querySelector('img')) {
      ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
    }
  }
}
ibg();;

//slieder
// инициализация slider
new Swiper('.reviews-slider', {
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  // стрелки
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  simulateTouch: false,
  touchRatio: 2,
  autoHeight: true,

  //Кол слайдов
  slidesPerView: 1,

  watchOverflow: true,

  // бесконечность
  loop: true,

  effect: 'flip',
  speed: 800,
});;


// Popup script
/*const popapLinks = document.querySelectorAll(".popap-link");
const body =  document.querySelector("body");

let unlock = true;

const timeout = 800;

if(popapLinks.length > 0){
	for (let i = popapLinks.length - 1; i >= 0; i--) {
		const popapLink = popapLinks[i];
		popapLink.addEventListener("click", function(e){
			const popapName = popapLink.getAttribute('href').replace('#', '');
			const currentPopap = document.getElementById(popapName);
			popapOpen(currentPopap);
			body.classList.add('_lock');
			e.preventDefault();
		});
	}
}


const popapCloseIcon = document.querySelectorAll('.close-popup');
if (popapCloseIcon.length > 0) {
	for (let i = popapCloseIcon.length - 1; i >= 0; i--) {
		const el = popapCloseIcon[i];
		el.addEventListener('click', function(e){
			popapClose(el.closest('.popap'));
			e.preventDefault();	
		});
	}
}

function popapOpen(currentPopap){
	if (currentPopap && unlock) {
		const popapActive = document.querySelector('.popap.open');
		if(popapActive){
			popapClose(popapActive, false);
		}
		currentPopap.classList.add('open');
		currentPopap.addEventListener('click', function(e){
			if(!e.target.closest('.popap__content')){
				popapClose(e.target.closest('.popap'));
			}
		});
	}
}

function popapClose(popapActive, doUnlock = true){
	if (unlock) {
		popapActive.classList.remove('open');
		body.classList.remove('_lock');
	}
};*/
}