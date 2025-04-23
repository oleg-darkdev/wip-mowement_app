<script lang="ts">
	import { OrgCard } from '$entitiesLanding';

	let { localOrgs,
	worldwideOrgs,
	 } = $props();
</script>

<div id="organizacje" class="tab_component w-tabs">
	<div class="tab_tabs-content w-tab-content">
		<div class="tab_tab-pane">
			<div class="w-layout-grid tab_content-component exhebitions">
				<div class="tab_content-left">
					<h3 class="tab_heading">
						{localOrgs.length} lokalnych organizacji sojuszniczych .
					</h3>
				</div>
				<div class="tab_content-right">
					<p class="text-size-medium">
						Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w przemyśle
						poligraficznym. Został po raz pierwszy użyty w XV w. przez nieznanego drukarza do
						wypełnienia tekstem próbnej książki.
					</p>
				</div>
			</div>
			<div class="margin-bottom margin-xxlarge">
				<ul
					aria-label="Accordion Control Group Buttons"
					role="list"
					class="legal_content-list w-list-unstyled"
				>
					{#each localOrgs as { title, localisation, anchor, abbr, shortDesc, id, desc }}
						<OrgCard {title} {localisation} {anchor} {abbr} {shortDesc} {id} {desc} />
					{/each}
				</ul>
			</div>
		</div>
	</div>
</div>


<div class="tab_component w-tabs">
	<div class="tab_tabs-content w-tab-content">
		<div class="tab_tab-pane">
			<div class="w-layout-grid tab_content-component exhebitions">
				<div class="tab_content-left">
					<h3 class="tab_heading">
						{worldwideOrgs.length} międzynarodowych organizacji sojuszniczych.
					</h3>
				</div>
				<div class="tab_content-right">
					<p class="text-size-medium">
						Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w przemyśle
						poligraficznym. Został po raz pierwszy użyty w XV w. przez nieznanego drukarza do
						wypełnienia tekstem próbnej książki.
					</p>
				</div>
			</div>
			<div class="margin-bottom margin-xxlarge">
				<ul
					aria-label="Accordion Control Group Buttons"
					role="list"
					class="legal_content-list w-list-unstyled"
				>
					{#each worldwideOrgs as { title, localisation, anchor, abbr, shortDesc, id, desc }}
						<OrgCard {title} {localisation} {anchor} {abbr} {shortDesc} {id} {desc} />
					{/each}
				</ul>
			</div>
		</div>
	</div>
</div>
<style lang="postcss">
</style>
