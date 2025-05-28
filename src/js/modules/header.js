// modules/header.js
export function addMenuBurger() {
	document.addEventListener('click', documentActions);

	function documentActions(event) {
		const target = event.target;

		if (target.closest('.icon-menu')) {
			document.body.classList.toggle('menu-open');
		}

		if (target.closest('[data-goto]')) {
			const gotoLink = target.closest('[data-goto]');
			const gotoSelector = gotoLink.dataset.goto; // ".about"
			const gotoBlock = document.querySelector(gotoSelector);

			closeMenu();

			if (gotoBlock) {
				const headerH = document.querySelector('.header')?.offsetHeight || 0;
				const top =
					gotoBlock.getBoundingClientRect().top + window.scrollY - headerH;

				window.scrollTo({ top, behavior: 'smooth' });
			} else {
				window.location.href = `/#${gotoSelector.replace('.', '')}`;
			}

			event.preventDefault();
			return;
		}

		if (target.closest('.popup-link')) {
			const wasOpen = closeMenu();

			const popupId = target
				.closest('.popup-link')
				.getAttribute('href')
				.replace('#', '');
			const popup = document.getElementById(popupId);

			if (popup) {
				setTimeout(
					() => {
						popup.classList.add('open');
						document.body.classList.add('lock');
					},
					wasOpen ? 300 : 0
				);
			}

			event.preventDefault();
			return;
		}

		if (target.closest('.menu__link')) closeMenu();
	}

	function closeMenu() {
		if (document.body.classList.contains('menu-open')) {
			document.body.classList.remove('menu-open');
			return true;
		}
		return false;
	}

	window.addEventListener('load', closeMenu);
	window.addEventListener('popstate', closeMenu);
}
