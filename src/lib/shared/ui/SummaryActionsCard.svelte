<script lang="ts">
	import { slide } from 'svelte/transition';

	import { actionsCounter } from '$sharedData';
</script>

<li transition:slide class="tab_list-item">
	<div role="region" class="tab_item">
		<div class="tab_item-title">
			<h4 class="heading-style-h6">Akcji:</h4>
		</div>
		<div class="tab_item-content pl-4 md:pl-8 lg:pl-16">
			<ul role="list" class="opening-times_list flex flex-row flex-wrap justify-between">
				<!-- opening-times_list -->
				<!-- title -->
				<!-- add countup.js -->
				{#each actionsCounter as { text, count, id, anchor }}
					<li class="opening-times_list-item mr-7">
						<a class="info_link-text" href={anchor}><strong>{text} r.</strong> – {count} akcji. </a>
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
