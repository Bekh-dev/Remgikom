export function addMenuBurger() {
	document.addEventListener('click', documentActions);

	function documentActions(event) {
		const target = event.target;

		if (target.closest('.icon-menu')) {
			document.body.classList.toggle('menu-open');
		}

		if (target.closest('[data-goto]')) {
			if (document.body.classList.contains('menu-open')) {
				document.body.classList.remove('menu-open');
			}

			const gotoSelector = target.closest('[data-goto]').dataset.goto;
			const gotoBlock = document.querySelector(gotoSelector);
			const headerHeight = document.querySelector('.header').offsetHeight;

			if (gotoBlock) {
				window.scrollTo({
					top: gotoBlock.offsetTop,
					behavior: 'smooth',
				});
			}

			event.preventDefault();
		}

		// Если нажали на кнопку "Связаться с нами", сначала закрываем меню, потом открываем модалку
		/*if (target.closest('[data-modal]')) {
				if (document.body.classList.contains('menu-open')) {
					document.body.classList.remove('menu-open');
					setTimeout(() => {
						target.click(); // Повторный клик по кнопке, чтобы сработал modal.js
					}, 200);
					event.preventDefault();
				}
			}
		*/
	}
}
