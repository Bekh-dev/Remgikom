export function scrollToHashBlock() {
	const hash = window.location.hash;

	if (hash) {
		const targetElement = document.querySelector(hash);
		const header = document.querySelector('.header');
		const headerHeight = header ? header.offsetHeight : 0;

		if (targetElement) {
			setTimeout(() => {
				const targetPosition =
					targetElement.getBoundingClientRect().top +
					window.pageYOffset -
					headerHeight;

				window.scrollTo({
					top: targetPosition,
					behavior: 'smooth',
				});
			}, 300); // Подожди 300 мс после закрытия меню
		}
	}
}
