<script lang="ts">
	let { stat } = $props();
</script>

<div class="value-wrapper">
	<div class="value-inner-wrapper">
		<span class="text-size-medium uppercase">{stat.title}</span>
		<!-- <h3 class="tab_heading">{stat.count}</h3> -->
		<h2 class="heading-style-medium">{stat.count}</h2>
		<!-- <img src="/images/about_3.jpg" loading="lazy" alt="" class="hidden-sm value-image" /> -->
	</div>
</div>

<style lang="postcss">
	.value-inner-wrapper {
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.value-wrapper {
		text-align: center;
		background-image: linear-gradient(#fff, rgba(255, 255, 255, 0));
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100%;
		padding-top: 80px;
		padding-bottom: 80px;
		display: flex;
		position: relative;
	}

	@media screen and (max-width: 479px) {
		.value-wrapper {
			background-image: radial-gradient(
				circle closest-side at 50% 50%,
				var(--purple),
				rgba(225, 255, 215, 0)
			);
			margin-top: -1px;
			margin-left: -1px;
			padding: 32px 20px;
		}
	}
</style>
