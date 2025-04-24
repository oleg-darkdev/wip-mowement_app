<script lang="ts">
	import { selectedMenu, balance } from '$stores/app';

	import { slide } from 'svelte/transition';
</script>

<div transition:slide class="h-full w-full">
	<div
		class="margin-bottom margin-small flex h-full flex-col content-center items-center justify-center"
	>
		<h3
			class="tab_heading mb-10 flex flex-col content-center items-center justify-center text-center"
		>
			Gratulacje <br /> z okazji

			<div class="tab_list-item w-full">
				<div class="flex w-full flex-row justify-between">
					<div
						class="tab_item mx-auto"
						style="
							background-color: var(--black);
							color: var(--white);"
					>
						<button
							class=""
							onclick={() => {
								$balance += 6;
								$selectedMenu = 0;
							}}
						>
							<span>6</span><img
								src="/images/dove-icon_gray.svg"
								class="-ml-2 h-20 w-14 pb-2"
								alt=""
							/>
						</button>
					</div>
				</div>
			</div>
		</h3>

		<div class="flex w-full max-w-sm flex-row justify-between">
			<button onclick={() => ($selectedMenu = 0)} class="button is-secondary"
				><div class="button-text">Menu</div>
				<div class="button-background"></div>
			</button>

			<button onclick={() => ($selectedMenu = 2)} class="button is-secondary"
				><div class="button-text">Sklepik</div>
				<div class="button-background"></div>
			</button>
		</div>
	</div>
</div>

<style lang="postcss">
	.tab_item {
		border: 2px solid var(--black);
	}
</style>
