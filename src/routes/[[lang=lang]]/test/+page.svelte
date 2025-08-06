<script lang="ts">
	import { fade, fly, slide } from 'svelte/transition';
	import { OrgCard } from '$entitiesApp';
	import { Cart } from '$widgetsApp';
	import {
		stepInstruction,
		selectedMenu,
		selectedAppMode,
		welcomeScreen,
		selectedPlayMenu,
		orgsMode
	} from '$stores/app';

	import { writable } from 'svelte/store';
	const stored = localStorage.progress;

	const progress = writable(stored || 0);

	progress.subscribe((value) => (localStorage.progress = value));

	let value = $state(false);
</script>

<!-- <Cart /> -->

{$progress}

<div class="animate-bounce  bg-black h-20"></div>



<button onclick={() => ($progress++)}>click</button>

<!-- <div transition:slide class="archive_list-wrapper mt-4"> -->
<!-- {#each $orgsMode.data as org, index (org.id)} -->
<!-- {#if $orgsMode.progress == index} -->
<!-- {#key $orgsMode.progress}
	<OrgCard org={$orgsMode.data[$orgsMode.progress]} />
{/key} -->
<!-- {/if}
								{/each} -->
<!-- </div> -->

<!-- {#key value}
	<div class="h-64 w-full bg-black" transition:fade>{value}</div>
{/key} -->

<!-- sync writable store to local storage  -->
<!-- import { derived } from 'svelte/store';

const doubled = derived(a, ($a) => $a * 2); -->
