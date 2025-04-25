<script lang="ts">
	let { nextStep } = $props();
</script>

<button onclick={nextStep} class="button is-small is-icon is-primary mt-8"
	><div class="button-text button-next-slide"></div>
	<div class="button-background"></div>
</button>

<style lang="postcss">
	.button-next-slide {
		cursor: pointer;
		background-image: url(images/arrow_light.svg);
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
	}
</style>
