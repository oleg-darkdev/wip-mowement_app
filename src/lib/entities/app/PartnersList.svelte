<script lang="ts">
	import { slide } from 'svelte/transition';

	import { partnersList } from '$sharedData';
	import { selectedMenu } from '$stores/app';
</script>

<div transition:slide class="h-full w-full">
	<div
		class="margin-bottom margin-small flex h-full flex-col content-center items-center justify-center"
	>
		<div class="grid h-dvh place-items-center antialiased">
			<div
				class="group w-full max-w-[620px] border border-2 border-[--black] bg-[#FCFCFC] p-14 text-center transition duration-500 hover:bg-[#F5F5F5] hover:duration-200"
			>
				<div class="isolate flex justify-center">
					<div
						class="relative left-2.5 top-1.5 grid size-12 -rotate-6 place-items-center rounded-xl bg-white shadow shadow-lg ring-1 ring-black/[0.08] transition duration-500 group-hover:-translate-x-5 group-hover:-translate-y-0.5 group-hover:-rotate-12 group-hover:duration-200"
					>
						<img src="/images/dove-icon_black.svg" class="h-10 w-10" alt="" />
					</div>
					<div
						class="z-10 grid size-12 place-items-center rounded-xl bg-white shadow-lg ring-1 ring-black/[0.08] transition duration-500 group-hover:-translate-y-0.5 group-hover:duration-200"
					>
						<img src="/images/dove-icon_black.svg" class="h-10 w-10" alt="" />
					</div>
					<div
						class="relative right-2.5 top-1.5 grid size-12 rotate-6 place-items-center rounded-xl bg-white shadow-lg ring-1 ring-black/[0.08] transition duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-5 group-hover:rotate-12 group-hover:duration-200"
					>
						<img src="/images/dove-icon_black.svg" class="h-10 w-10" alt="" />
					</div>
				</div>
				<h2 class="mt-6 text-base font-medium text-[#212121]">Misja zakończona</h2>
				<p class="mt-1 text-sm text-[#666666]">Gołębie zostały dodane do skarbonki</p>

				<div class="mt-6 flex w-full max-w-sm flex-row justify-around">
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
