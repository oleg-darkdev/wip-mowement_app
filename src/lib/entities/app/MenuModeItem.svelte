<script lang="ts">
	import { selectedMenu, selectedAppMode, selectedPlayMenu } from '$stores/app';

	let { mode } = $props();
</script>

<li class="tab_list-item w-full">
	<div class="flex w-full flex-row justify-between">
		<div role="region" class="menu_item w-full">
			<div class="tab_item-title">
				<h4 class="heading-style-h6">{mode.title}</h4>
			</div>
			<div class="tab_item-content">
				<div>
					<span class="hidden-sm">progres</span> <strong>{mode.progress}</strong> /
					<span>{mode.data.length}</span>
				</div>
			</div>
		</div>
		<div class="p-2">
			<button
				onclick={() => {
					$selectedPlayMenu = mode.id;
					$selectedAppMode = mode;
					$selectedMenu = 1;
				}}
				class="button is-small is-icon is-primary"
				><div class="">&gt;</div>
				<div class="button-background"></div>
			</button>
		</div>
	</div>
</li>

<style lang="postcss">
	.menu_item {
		border-top: 2px solid var(--black);
		border-right: 2px solid var(--black);
		border-left: 2px solid var(--black);
		text-align: left;
		justify-content: space-between;
		padding: 1rem;
		display: flex;
	}

	@media screen and (max-width: 479px) {
		.menu_item {
			justify-content: justify-between;
			padding: 1rem;
			align-items: flex-start;
			align-content: flex-start;
			display: flex;
			flex-direction: row;
		}
	}
</style>
