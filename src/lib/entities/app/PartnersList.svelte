<script lang="ts">
	import { slide } from 'svelte/transition';

	import { partnersList } from '$sharedData';
	import { selectedMenu } from '$stores/app';

	// import {  } from '$shared';
	// import {  } from '$widgets';
	// import {  } from '$entities'
</script>

<div transition:slide class="h-full w-full">
	<div
		class="margin-bottom margin-small flex h-full flex-col content-center items-center justify-center"
	>
		<h3
			class="tab_heading mb-10 flex flex-col content-center items-center justify-center text-center"
		>
			Misja zakończona, <br /> gołębie zostały dodane do skarbonki
		</h3>

		<div class="margin-bottom margin-xxlarge">
			<div class="partners-logos">
				{#each partnersList as { img, title, link }}
					<!-- bg-[--grey] -->
					<a href="/" target="_blank" class="link-block w-inline-block m-1 bg-neutral-700">
						<img src={img} loading="lazy" alt="" class="footer-image grayscale" />
					</a>
				{/each}
			</div>
		</div>

		<div class="flex w-full max-w-sm flex-row justify-around">
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
	.footer-image {
		height: 4rem;
	}
	.partners-logos {
		grid-column-gap: 0;
		grid-row-gap: 0;
		grid-template-rows: auto;
		/* grid-template-columns: 1fr 1fr 1fr; */
		grid-auto-columns: 1fr;
		display: grid;
	}

	@media screen and (min-width: 1020px) {
		.partners-logos {
			grid-template-columns: 1fr 1fr 1fr 1fr;
		}
	}
	@media screen and (max-width: 991px) {
		.partners-logos {
			grid-template-columns: 1fr 1fr 1fr;
		}
	}

	@media screen and (max-width: 479px) {
		.partners-logos {
			grid-template-columns: 1fr 1fr;
		}
	}
</style>
