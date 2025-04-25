<script lang="ts">
	import { selectedAppMode, stepInstruction } from '$stores/app';

	const nextStep = () => {
		$stepInstruction++;
		$selectedAppMode.progress++;
	};
</script>

<div onclick={nextStep} class="banner-next-slide-btn hero-header_info-grid-item">
	<div class="button-next-slide"></div>
</div>

<style lang="postcss">
	.banner-next-slide-btn {
		grid-area: span 1 / span 1 / span 1 / span 1;
	}
	.hero-header_info-grid-item {
		border-top: 2px solid var(--black);
		border-right: 2px solid var(--black);
	}
	.button-next-slide {
		cursor: pointer;
		background-image: url(images/arrow_.svg);
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
	.button-next-slide:hover {
		background-color: var(--grey);
	}

	@media screen and (max-width: 991px) {
		.banner-next-slide-btn {
			grid-area: 1/2/2/3;
		}
		.hero-header_info-grid-item {
			background-color: var(--white);
			border-top-width: 0;
			border-right-width: 0;
		}
	}
</style>
