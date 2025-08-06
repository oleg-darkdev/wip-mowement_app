<script lang="ts">
	import { slide } from 'svelte/transition';
	
	let { cities } = $props();
</script>

<li transition:slide class="tab_list-item">
	<div role="region" class="tab_item">
		<div class="tab_item-title">
			<h4 class="heading-style-h6">Miasta:</h4>
		</div>

		<!--  -->
		<ul
			role="list"
			class="-ml-6 flex flex-row flex-wrap content-start items-start justify-between md:m-0 lg:m-0"
		>
			{#each cities as { localisation, totalActions, anchor }}
				<li class="mx-2 lg:mx-4">
					<a class="info_link-text" href="/#{anchor}"
						>{localisation} – <strong>{totalActions}</strong> akcji.</a
					>
				</li>
			{/each}
		</ul>
	</div>
</li>

<style lang="postcss">
	.info_link-text {
		border-bottom: 1px solid;
		/* color: var(--dark-grey); */
		letter-spacing: 0.5px;
		/* text-transform: uppercase; */
		line-height: 1.2;
		transition: all 0.2s;
	}
	.info_link-text:hover {
		border-bottom-color: var(--white);
		color: var(--dark-grey);
	}
</style>
