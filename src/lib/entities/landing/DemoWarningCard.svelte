<script lang="ts">
	// let { showPage } = $state(false);
	let { readyToUse = $bindable() } = $props();

	// console.log(readyToUse);
</script>

{#if readyToUse == false}
	<section>
		<div class="hero-header_info-grid hidden">
			<!-- <div class="button-text button-next-slide"></div> -->
			<div class="w-full py-6">
				<img src="images/warning_icon.svg" class="h-full w-full" alt="" />
			</div>
			<div class="hero-slider-info-block-wrap hero-header_info-grid-item">
				<div class="w-dyn-list">
					<div role="list" class="w-dyn-items">
						<div role="listitem" class="w-dyn-item">
							<div class="hero-header_info-content">
								<div class="margin-bottom margin-xsmall">
									<h1 class="heading-style-h4">Encyklopedia w fazie rozwoju</h1>
								</div>
								<div class="margin-bottom margin-tiny max-w-2xl">
									<p class="text-size-medium mb-6">
										Duża część funkcjonalności jest już dostępna, ale projekt jest w fazie rozwoju.
									</p>
									<p class="text-size-medium">Planowany czas wdrożenia to koniec 2025r.</p>
								</div>

								<div class="margin-top margin-medium">
									<div class="button-group">
										<button
											on:click={() => (readyToUse = !readyToUse)}
											class="button is-secondary w-inline-block"
										>
											<div class="button-text">Rozpocznij używanie</div>
											<div class="button-background"></div>
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
{/if}

<style lang="postcss">
	.hero-slider-info-block-wrap {
		grid-area: span 2 / span 1 / span 2 / span 1;
	}
	.hero-header_info-grid-item {
		border-top: 2px solid var(--black);
		border-right: 2px solid var(--black);
	}

	@media screen and (max-width: 991px) {
		.hero-header_info-grid-item {
			background-color: var(--white);
			border-top-width: 0;
			border-right-width: 0;
		}

		.hero-slider-info-block-wrap {
			/* grid-area: 2/1/3/3; */
			display: none;
		}
	}

	.button-next-slide {
		cursor: pointer;
		background-image: url(images/warning_icon.svg);
		background-position: 50%;
		background-repeat: no-repeat;
		background-size: auto;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 100%;
		padding: 1rem;
		display: flex;
	}
	/* .button-next-slide:hover {
		background-color: var(--grey);
	} */

	@media screen and (max-width: 991px) {
	}
</style>
