<script lang="ts">
	import { AktivistCard } from '$entitiesLanding';

	let { activistsList,  title } = $props();

	let { showFullList } = $state(false);


</script>

<!-- a, b, c, d, i, k, l, ł, m, n, p, r, s, t, u, w -->

<div class="tab_component w-tabs">
	<div class="tab_tabs-content w-tab-content">
		<div class="tab_tab-pane">
			<div class="w-layout-grid tab_content-component exhebitions">
				<div class="tab_content-left">
					<h3 class="tab_heading">
						Niepełna lista <br /> uczestników <em>{activistsList.length} osób</em> <br /> z nazwiskiem
						na <em>{title}</em> .
					</h3>
				</div>
				<!-- <div class="tab_content-right">
					<p class="text-size-medium">
						Ruch liczył w szczytowym okresie rozwoju kilkuset członków.
					</p>
				</div> -->
			</div>

			<div class="margin-top margin-xxlarge">
				<div class="archive-list_component">
					<div class="archive_list-wrapper w-dyn-list">
						<div role="list" class="grid grid-cols-1 gap-x-6 lg:grid-cols-2">
							{#each showFullList ? activistsList : activistsList.slice(0, 3) as { firstName, lastName, shortDesc, photo, wikiLink, birthDate, deathDate, prisonTime, desc, id }, number}
								<AktivistCard
									{firstName}
									{lastName}
									{shortDesc}
									{photo}
									{wikiLink}
									{birthDate}
									{deathDate}
									{prisonTime}
									{desc}
									{number}
								/>
							{/each}
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
<div class="tabs_menu-border"></div>

<style lang="postcss">
</style>
