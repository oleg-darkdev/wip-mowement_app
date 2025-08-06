<script lang="ts">
	import { slide } from 'svelte/transition';

	let { orgs, text } = $props();
</script>

<li transition:slide class="tab_list-item">
	<div role="region" class="tab_item">
		<div class="tab_item-title mr-6">
			<h4 class="heading-style-h6 mb-2">Sojusznicy <br class="hidden-sm" /> {text}:</h4>
		</div>
		<div class="tab_item-content">
			<ul role="list" class="opening-times_list">
				{#each orgs as { title, abbr, anchor }}
					<li class="opening-times_list-item mb-2 ml-2">
						<a class="info_link-text" href="/#{anchor}">{title} <strong>({abbr})</strong></a>
					</li>
				{/each}
			</ul>
		</div>
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
