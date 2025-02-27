import { setSettings, getSettings } from './comms/get-settings.js';

import config from '../../shared/config.json';

// @ts-ignore
global.onOpen = function onOpen() {
	SpreadsheetApp.getUi()
		.createMenu('Articleman')
		.addItem('Open Articleman...', 'showSidebar')
		.addItem('Open help...', 'showHelp')
		.addToUi();
};

// @ts-ignore
global.setSettings = setSettings;
// @ts-ignore
global.getSettings = getSettings;

// @ts-ignore
global.onSelectionChange = () => {
	const sheet = SpreadsheetApp.getActiveSheet();
	const row = sheet.getActiveCell().getRow();
	const column = sheet.getActiveCell().getColumn();
	CacheService.getUserCache().put(
		'currentRow',
		JSON.stringify({
			row,
			column,
			sheet: sheet.getName(),
		}),
		21600,
	);
};

// @ts-ignore
global.showSidebar = () => {
	SpreadsheetApp.getUi().showSidebar(
		HtmlService.createHtmlOutput(
			UrlFetchApp.fetch(config.containerUrl),
		).setTitle('Articleman'),
	);
};

// @ts-ignore
global.showHelp = () => {
	CacheService.getUserCache().put('help', 'true', 20); // @ts-ignore
	global.showSidebar();
};

// @ts-ignore
global.onInstall = function onInstall() {
	// @ts-ignore
	global.showSidebar();
};
