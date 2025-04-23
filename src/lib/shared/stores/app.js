import { writable } from 'svelte/store';

const stepInstruction = writable(0),
	selectedAppMode = writable({ title: '', id: 0, progress: 0, data: [''] }),
	welcomeScreen = writable(true),
	selectedPlayMenu = writable(0),
	selectedMenu = writable(0);

export { stepInstruction, welcomeScreen, selectedAppMode, selectedMenu, selectedPlayMenu };
