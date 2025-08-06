<script lang="ts">
	import { slide } from 'svelte/transition';
	let { getBirds } = $props();
</script>

<!-- max-h-64 h-20 -->
<div transition:slide class="h-full w-full">
	<div
		onclick={getBirds}
		class="margin-bottom margin-small flex  h-full animate-pulse flex-col content-center items-center justify-center"
	>
		<h3
			class="tab_heading mb-6 flex flex-col content-center items-center justify-center text-center"
		>
			Odebrać
		</h3>

		<div class="tab_list-item w-full">
			<div class="flex w-full justify-between">
				<div
					class="tab_item mx-auto"
					style="
							background-color: var(--black);
							color: var(--white);"
				>
					<div class=" flex flex-row">
						<h3 class="tab_heading">6</h3>
						<img src="/images/dove-icon_gray.svg" class="-ml-2 h-20 w-14 pb-2" alt="" />
					</div>
				</div>
			</div>
		</div>

		<slot />
	</div>
</div>

<style lang="postcss">
	.tab_item {
		border: 2px solid var(--black);
	}
</style>
