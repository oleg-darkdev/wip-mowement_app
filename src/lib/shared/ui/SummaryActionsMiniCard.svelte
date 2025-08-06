<script lang="ts">
	import { slide } from 'svelte/transition';

	let { actions, title } = $props();
</script>

<div transition:slide role="region" class="flex flex-col">
	<div class="tab_item-title mr-6">
		<p class=""><strong>{actions.length}</strong> akcji - <strong>{title} r.</strong></p>
	</div>
	<div class="tab_item-content">
		<ul role="list" class="flex flex-row flex-wrap justify-between">
			{#each actions as { title, anchor }}
				<li class="opening-times_list-item">
					<a class="info_link-text" href="/#{anchor}"> <span>{title}</span></a>
				</li>
			{/each}
		</ul>
	</div>
</div>

<style lang="postcss">
</style>
