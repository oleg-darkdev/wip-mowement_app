<script lang="ts">
	import { SummaryActionsMiniCard } from '$sharedUi';
	import { slide } from 'svelte/transition';

	let { city } = $props();
</script>

<div transition:slide style="background-color:rgba(0,0,0,0) mt-4 " role="region" class=" w-full">
	<div class="legal_item max-h-[59vh] overflow-y-scroll">
		<div class="">
			<h3 class="heading-style-h6">{city.localisation}</h3>
			<div class="text-size-medium w-embed">
				<div class="flex flex-row flex-wrap">
					<SummaryActionsMiniCard title="1985" actions={city.actions_1985} />
					<SummaryActionsMiniCard title="1986" actions={city.actions_1986} />
					<SummaryActionsMiniCard title="1987" actions={city.actions_1987} />
					<SummaryActionsMiniCard title="1988" actions={city.actions_1988} />
					<SummaryActionsMiniCard title="1989" actions={city.actions_1989} />
					<SummaryActionsMiniCard title="1990" actions={city.actions_1990} />
					<SummaryActionsMiniCard title="1991" actions={city.actions_1991} />
					<SummaryActionsMiniCard title="1992" actions={city.actions_1992} />
				</div>

				<div role="region" class="flex flex-col">
					<div class="tab_item-title mr-6">
						<p class="">Aktywne grupy:</p>
					</div>
					<div class="tab_item-content">
						<ul role="list" class="flex flex-row flex-wrap justify-between">
							{#each city.groups as { title, abbr, anchor }}
								<li class="opening-times_list-item mr-6">
									<a class="info_link-text" href="/#{anchor}"> <span>{abbr}</span></a>
								</li>
							{/each}
						</ul>
					</div>
				</div>
			</div>
		</div>
		<div class=" lg:mt-6">
			<p>
				{city.shortDesc}
			</p>
		</div>
	</div>
</div>

<style lang="postcss">
	/*  */

	.card-wrapper {
		height: 60vh;
	}
	.legal_item {
		grid-column-gap: 1rem;
		grid-row-gap: 1rem;
		border: 2px solid var(--black);
		text-align: left;
		grid-template-rows: auto;
		grid-template-columns: 1fr 1fr;
		grid-auto-columns: 1fr;
		justify-content: space-between;
		padding: 1rem;
		display: grid;
	}

	.riot-list_link-block {
		border-style: solid;
		border-width: 2px;
		justify-content: space-between;
		align-items: start;
		margin-bottom: -2px;
		padding: 1rem;
		transition: all 0.3s;
		display: flex;
		flex-direction: column;
		position: relative;
	}
	.riot-list_link-text {
		font-size: 1.5rem;
		font-weight: 700;
		line-height: 1.2;
	}

	.riot-list_image-slider-wrapper {
		z-index: 1;
		justify-content: center;
		align-items: center;
		width: 25%;
		/* height: 100vh; */
		/* margin-left: 5%; */
		/* display: none; */
		position: relation;
		inset: 0%;
	}
	.riot-list_image-slider-wrapper.pointer-events-off {
		/* display: none; */
	}

	.riot-list_image {
		width: 100%;
		height: 100%;
	}
	.riot-list_link-image {
		border: 2px solid var(--black);
		width: 75%;
		max-width: 35rem;
	}

	.riot-list_link-text {
		font-size: 1.5rem;
		font-weight: 700;
		line-height: 1.2;
	}

	@media screen and (max-width: 991px) {
		.riot-list_image-slider-wrapper {
			z-index: -1;
		}
		.riot-list_link-block {
			flex-wrap: wrap;
		}

		.legal_item {
			grid-template-columns: 1fr;
		}
	}

	@media screen and (max-width: 767px) {
		.riot-list_link-block {
			padding-top: 1.25rem;
			padding-bottom: 1.25rem;
		}
	}
</style>
