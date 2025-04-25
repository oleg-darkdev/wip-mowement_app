import { writable } from 'svelte/store';
import {
	allOrgs,
	activistsListApp,
	cities,
	records_1985,
	records_1986,
	records_1987,
	records_1988,
	records_1989,
	records_1990,
	records_1992,
	records_1991
} from '$sharedData';

let stepInstruction = writable(0),
	selectedAppMode = writable({ title: '', id: 0, progress: 0, prise: 6, birds: false, data: [''] }),
	welcomeScreen = writable(true),
	selectedPlayMenu = writable(0),
	balance = writable(0),
	selectedMenu = writable(0);

let basicMode = writable({
	title: 'Ogólne informacje',
	id: 1,
	progress: 0,
	prise: 6,
	birds: false,
	data: ['', '', '', '']
});
let orgsMode = writable({
	title: 'Organizacje',
	id: 2,
	progress: 0,
	prise: 6,
	birds: false,
	data: allOrgs
});
let activistsMode = writable({
	title: 'Uczestniki',
	id: 3,
	progress: 0,
	prise: 6,
	birds: false,
	data: activistsListApp
});
let citiesMode = writable({
	title: 'Miasta',
	id: 4,
	progress: 0,
	prise: 6,
	birds: false,
	data: cities
});
let riots1985Mode = writable({
	title: 'Akcji 1985 r.',
	id: 5,
	progress: 0,
	prise: 6,
	birds: false,
	data: records_1985
});
let riots1986Mode = writable({
	title: 'Akcji 1986 r.',
	id: 6,
	progress: 0,
	prise: 6,
	birds: false,
	data: records_1986
});
let riots1987Mode = writable({
	title: 'Akcji 1987 r.',
	id: 7,
	progress: 0,
	prise: 6,
	birds: false,
	data: records_1987
});
let riots1988Mode = writable({
	title: 'Akcji 1988 r.',
	id: 8,
	progress: 0,
	prise: 6,
	birds: false,
	data: records_1988
});
let riots1989Mode = writable({
	title: 'Akcji 1989 r.',
	id: 9,
	progress: 0,
	prise: 6,
	birds: false,
	data: records_1989
});
let riots1990Mode = writable({
	title: 'Akcji 1990 r.',
	id: 10,
	progress: 0,
	prise: 6,
	birds: false,
	data: records_1990
});
let riots1991Mode = writable({
	title: 'Akcji 1991 r.',
	id: 11,
	progress: 0,
	prise: 6,
	birds: false,
	data: records_1991
});

let riots1992Mode = writable({
	title: 'Akcji 1992 r.',
	id: 12,
	progress: 0,
	prise: 6,
	birds: false,
	data: records_1992
});

export {
	stepInstruction,
	welcomeScreen,
	selectedAppMode,
	selectedMenu,
	selectedPlayMenu,
	//
	basicMode,
	activistsMode,
	citiesMode,
	riots1985Mode,
	riots1986Mode,
	riots1987Mode,
	riots1988Mode,
	riots1989Mode,
	riots1990Mode,
	riots1991Mode,
	riots1992Mode,
	orgsMode,
	balance
};
