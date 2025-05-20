const btnCalback = document.querySelector('.footer__callback');

export function scrollTop() {
	if (!btnCalback) return;

	btnCalback.addEventListener('click', () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	});
}
