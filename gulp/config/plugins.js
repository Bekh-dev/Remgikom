import browsersync from 'browser-sync'; //Локальный сервер
import ifPlugin from 'gulp-if'; //Условное ветвление
import newer from 'gulp-newer'; // Проверка обновления
import notify from 'gulp-notify'; //Сообщения (подсказки)
import plumber from 'gulp-plumber'; //Обработка ошибок
import replace from 'gulp-replace'; //Поиск и замена

export const plugins = {
	replace: replace,
	plumber: plumber,
	notify: notify,
	browsersync: browsersync,
	newer: newer,
	if: ifPlugin,
};
