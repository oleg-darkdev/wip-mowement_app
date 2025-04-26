<script lang="ts">
	import { slide } from 'svelte/transition';
	import { StatCard } from '$entitiesApp';
	import { stats } from '$sharedData';

	import { welcomeScreen } from '$stores/app';
</script>

<div
	class="flex h-full w-full flex-col content-center items-center justify-center"
	transition:slide
>
	<div class=" margin-bottom margin-small">
		<h3 class="tab_heading text-center">
			Witamy w przewodniku <br /> po ruchu <br class="hidden-sm" />
			<span>
				"Wolność i Pokój" <img
					src="/images/dove-icon_black.svg"
					class="hidden-sm -ml-2 h-20 w-14 pb-2"
					alt=""
				/></span
			>
		</h3>
	</div>
	<p class="text-size-medium mb-10">
		Został po raz pierwszy użyty w XV w. przez nieznanego drukarza do wypełnienia tekstem próbnej
		książki. Pięć wieków później zaczął być używany.
		<span class="text-weight-bold"
			>Został po raz pierwszy użyty w XV w. przez nieznanego drukarza do wypełnienia tekstem próbnej
			książki.
		</span>
	</p>

	<div class="kr-m-values-layout">
		{#each stats as stat}
			<StatCard {stat} />
		{/each}
	</div>

	<div class="grid grid-cols-2 gap-x-8 px-4">
		<a href="/" target="_blank" class="button is-secondary"
			><div class="button-text">Główna</div>
			<div class="button-background"></div>
		</a>

		<button onclick={() => ($welcomeScreen = false)} class="button is-icon is-primary"
			><div class="button-text button-next-slide"></div>
			<div class="button-background"></div>
		</button>
	</div>
</div>

<style lang="postcss">
	.kr-m-values-layout {
		grid-column-gap: 16px;
		grid-row-gap: 16px;
		grid-template-rows: auto;
		grid-template-columns: 1fr 1fr 1fr 1fr;
		grid-auto-columns: 1fr;
		align-items: start;
		display: grid;
	}

	@media screen and (max-width: 767px) {
		.kr-m-values-layout {
			grid-template-rows: auto auto;
			grid-template-columns: 1fr 1fr;
		}
	}

	@media screen and (max-width: 479px) {
		.kr-m-values-layout {
			grid-column-gap: 0px;
			grid-row-gap: 0px;
			grid-template-rows: auto auto;
			grid-template-columns: 1fr 1fr;
			margin-right: -1px;
		}
	}

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
		.tab_item {
			display: flex;
			justify-content: space-between;
			flex-direction: row;
		}
	}
</style>
