const popapLinks = document.querySelectorAll(".popap-link");
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
}