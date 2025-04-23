<script lang="ts">
	import { CityCard } from '$entitiesLanding';

	let { cities } = $props();
	let { showFullList } = $state(false);
</script>

<div id="miasta" class="tab_component w-tabs">
	<div class="tab_tabs-content w-tab-content">
		<div class="tab_tab-pane">
			<div class="w-layout-grid tab_content-component exhebitions">
				<div class="tab_content-left">
					<h3 class="tab_heading">
						{cities.length} miasta oporu.
					</h3>
				</div>
				<div class="tab_content-right mt-8">
					<p class="text-size-medium">
						Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w przemyśle
						poligraficznym. Został po raz pierwszy użyty w XV w. przez nieznanego drukarza do
						wypełnienia tekstem próbnej książki.
					</p>
				</div>
			</div>
			<div class="margin-bottom archive_list-wrapper archive-list_component margin-xxlarge">
				<ul
					aria-label="Accordion Control Group Buttons"
					role="list"
					class="legal_content-list w-list-unstyled"
				>
					{#each showFullList ? cities : cities.slice(0, 3) as { localisation, id, anchor, groups, actions_1985, actions_1986, actions_1987, actions_1988, actions_1989, actions_1990, actions_1991, actions_1992, article, shortDesc }}
						<CityCard
							{localisation}
							{id}
							{anchor}
							{groups}
							{actions_1985}
							{actions_1986}
							{actions_1987}
							{actions_1988}
							{actions_1989}
							{actions_1990}
							{actions_1991}
							{actions_1992}
							{article}
							{shortDesc}
						/>
					{/each}
				</ul>

				<button
					onclick={() => {
						showFullList = !showFullList;
						if (!showFullList) location.href = '/#miasta';
					}}
					class="button is-primary mt-8"
					><div class="button-text">
						{showFullList ? 'Ukryj' : `Wyświetl kolejnych`}
						{cities.length - 3} miast
					</div>
					<div class="button-background"></div>
				</button>
			</div>
		</div>
	</div>
</div>

<style lang="postcss">
</style>
