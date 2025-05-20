export function openSpoller() {
	const spollers = document.querySelectorAll('[data-spoller]');

	if (spollers.length > 0) {
		spollers.forEach(spoller => {
			const title = spoller.querySelector('.spoller__title');
			const body = spoller.querySelector('.spoller__body');

			title.addEventListener('click', () => {
				spollers.forEach(otherSpoller => {
					if (otherSpoller !== spoller) {
						otherSpoller.classList.remove('active');
						otherSpoller.querySelector('.spoller__body').style.maxHeight = '0';
					}
				});

				if (spoller.classList.contains('active')) {
					spoller.classList.remove('active');
					body.style.maxHeight = '0';
				} else {
					spoller.classList.add('active');
					body.style.maxHeight = body.scrollHeight + 'px';
				}
			});
		});
	}
}
