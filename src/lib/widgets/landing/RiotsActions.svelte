<script lang="ts">
	import { DateCard } from '$entitiesLanding';

	let { riotsRecords, year, shortDesc, anchor } = $props();

	let { showFullList } = $state(false);
</script>

<section id={anchor} class="tab_component w-tabs mb-4">
	<div class="tab_tabs-content w-tab-content">
		<div class="tab_tab-pane">
			<div class="w-layout-grid tab_content-component exhebitions">
				<div class="tab_content-left">
					<h3 class="tab_heading">
						W {year} odbyły się {riotsRecords.length} <br /> akcji protesty.
					</h3>
				</div>
				<div class="tab_content-right">
					<p class="text-size-medium">
						{shortDesc}
					</p>
				</div>
			</div>

			<div class="margin-top margin-xxlarge">
				<div class="archive-list_component">
					<div class="archive_list-wrapper w-dyn-list">
						<div role="list" class="archive_list w-dyn-items">
							{#each showFullList ? riotsRecords : riotsRecords.slice(0, 3) as { title, desc, shortDesc, date, link, id, localisation }}
								<DateCard {desc} {title} {date} {shortDesc} {link} {id} {localisation} />
							{/each}
						</div>

						<button
							onclick={() => {
								showFullList = !showFullList;
								if (!showFullList) location.href = `/#${anchor}`;
							}}
							class="button is-primary mt-8"
							><div class="button-text">
								{showFullList ? 'Ukryj' : `Wyświetl kolejne`}
								{riotsRecords.length - 3} akcji
							</div>
							<div class="button-background"></div>
						</button>
					</div>

					<!-- <a href="#" class="archive-list_link-block hide w-inline-block">
						<div class="archive-list_link-block-content">
							<div class="margin-bottom margin-xxsmall">
								<h3 class="archive-list_link-text">Susanne Tunn</h3>
							</div>
							<p>24. März 2023 - 10. September 2023</p>
						</div>
						<div class="archive-list_image-slider-wrapper pointer-events-off">
							<div class="archive-list_link-image">
								<div class="image-wrapper-3-2">
									<img
										sizes="100vw"
										srcset="images/644a8ce58327657366ae6945_lechner-skulpturenpark-01-p-500.webp 500w, images/644a8ce58327657366ae6945_lechner-skulpturenpark-01-p-800.webp 800w, images/644a8ce58327657366ae6945_lechner-skulpturenpark-01.webp 1000w"
										src="images/644a8ce58327657366ae6945_lechner-skulpturenpark-01.webp"
										loading="lazy"
										alt=""
										class="image-wrapper_image"
									/>
								</div>
							</div>
						</div>
					</a> -->
				</div>
			</div>
		</div>
	</div>
</section>
<div class="tabs_menu-border"></div>

<style lang="postcss">
</style>
