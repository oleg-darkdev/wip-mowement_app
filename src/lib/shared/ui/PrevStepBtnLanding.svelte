<script lang="ts">
	import { selectedAppMode, stepInstruction } from '$stores/app';

	const prevStep = () => {
		$stepInstruction--;
		$selectedAppMode.progress--;
	};
</script>

<div onclick={prevStep} class=" banner-prew-slide-btn hero-header_info-grid-item">
	<div class="button-prev-slide"></div>
</div>

<style lang="postcss">
	.button-prev-slide {
		cursor: pointer;
		background-image: url(images/arrow-prev.svg);
		background-position: 50%;
		background-repeat: no-repeat;
		background-size: auto;
		height: 40px;

		justify-content: center;
		align-items: center;
		width: 100%;
		height: 100%;
		padding: 1rem;
		display: flex;
	}
	.button-prev-slide:hover {
		background-color: var(--grey);
	}

	.hero-header_info-grid-item {
		border-top: 2px solid var(--black);
		border-right: 2px solid var(--black);
	}
	.banner-prew-slide-btn {
		grid-area: span 1 / span 1 / span 1 / span 1;
		justify-self: stretch;
	}
	@media screen and (max-width: 991px) {
		.button-prev-slide {
			min-height: 10svh;
		}
		.banner-prew-slide-btn {
			grid-area: 1/1/2/2;
		}
		.hero-header_info-grid-item {
			background-color: var(--white);
			border-top-width: 0;
			border-right-width: 0;
		}
	}
</style>
