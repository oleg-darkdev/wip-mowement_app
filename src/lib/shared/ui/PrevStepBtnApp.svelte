<script lang="ts">
	let { prevStep } = $props();
</script>

<button onclick={prevStep} class="button is-small is-icon is-secondary mt-8">
	<div class="button-text button-prev-slide"></div>
	<div class="button-background"></div>
</button>

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

	@media screen and (max-width: 991px) {
		.button-prev-slide {
			min-height: 10svh;
		}
	}
</style>
