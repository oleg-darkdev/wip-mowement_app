<script lang="ts">
	let { title, progress = $bindable(), finalStep } = $props();
</script>

<ul
	aria-label="Accordion Control Group Buttons"
	role="list"
	class="tab_content-list w-list-unstyled w-full"
>
	<li class="tab_list-item w-full">
		<div role="region" class="panel w-full">
			<div class="tab_item-title">
				<h4 class="heading-style-h6">{title}</h4>
			</div>
			<div class="tab_item-content">
				<div>
					<span class="hidden-sm mr-2"> progres </span><strong class=''>{progress}</strong> /
					<span>{finalStep}</span>
				</div>
			</div>
		</div>
	</li>
</ul>

<style lang="postcss">
	.panel {
		border: 2px solid var(--black);
		text-align: left;
		justify-content: space-between;
		padding: 1rem;
		display: flex;
	}

	@media screen and (max-width: 479px) {
		.panel {
			justify-content: justify-between;
			padding: 1rem;
			align-items: flex-start;
			align-content: flex-start;
			display: flex;
			flex-direction: row;
		}
	}
</style>
