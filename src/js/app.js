import { isWebp } from './modules/functions.js';
import { addMenuBurger } from './modules/header.js';
import { openModulWindow } from './modules/popup.js';
import { scrollToHashBlock } from './modules/scrollToHash.js';
import { scrollTop } from './modules/scrollTop.js';
import { openSpoller } from './modules/spoller.js';

document.addEventListener('DOMContentLoaded', () => {
	isWebp();
	addMenuBurger();
	openSpoller();
	scrollTop();
	scrollToHashBlock();
	openModulWindow();
});
