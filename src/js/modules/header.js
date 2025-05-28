export function addMenuBurger() {
	document.addEventListener('click', documentActions);

	function documentActions(event) {
		const target = event.target;

		// Открытие/закрытие меню
		if (target.closest('.icon-menu')) {
			document.body.classList.toggle('menu-open');
		}

		// Обработка ссылок с якорем
		if (target.closest('[data-goto]')) {
			const gotoLink = target.closest('[data-goto]');
			const gotoSelector = gotoLink.dataset.goto;
			const gotoBlock = document.querySelector(gotoSelector);

			// Закрываем меню
			if (document.body.classList.contains('menu-open')) {
				document.body.classList.remove('menu-open');
			}

			if (gotoBlock) {
				const headerHeight =
					document.querySelector('.header')?.offsetHeight || 0;
				const gotoBlockTop =
					gotoBlock.getBoundingClientRect().top + window.scrollY - headerHeight;

				window.scrollTo({
					top: gotoBlockTop,
					behavior: 'smooth',
				});
			} else {
				window.location.href = `/#${gotoSelector.replace('.', '')}`;
			}

			event.preventDefault();
		}

		// 👉 Закрываем меню при переходе по обычным ссылкам
		if (target.closest('.menu__link') && !target.closest('[data-goto]')) {
			if (document.body.classList.contains('menu-open')) {
				document.body.classList.remove('menu-open');
			}
		}
	}

	// Безопасно закрываем меню при загрузке и возврате назад
	window.addEventListener('DOMContentLoaded', () => {
		document.body.classList.remove('menu-open');
	});
	window.addEventListener('popstate', () => {
		document.body.classList.remove('menu-open');
	});
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
