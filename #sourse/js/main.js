//==========================================================================
"use strict"



window.addEventListener('DOMContentLoaded', () => {

	const btnTop = document.querySelector('.footer__back-top');

	btnTop.addEventListener('click', (e) => {
		e.preventDefault();
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	});

});

//Footer-Scroll-Top==========================================================

//Spoller======================================================================

//Dinamic-Adaptiv==============================================================
