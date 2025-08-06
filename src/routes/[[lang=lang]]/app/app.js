import { writable } from 'svelte/store';

const stepInstruction = writable(1),
	selectedMenu = writable(false);

export { stepInstruction, selectedMenu };
