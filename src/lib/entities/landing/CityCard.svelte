<script lang="ts">
	import { SummaryActionsMiniCard } from '$sharedUi';

	// import {  } from '$shared';
	// import {  } from '$widgets';
	// import {  } from '$entities'

	let {
		localisation,
		id,
		anchor,
		actions_1985,
		groups,
		actions_1986,
		actions_1987,
		actions_1988,
		actions_1989,
		actions_1990,
		actions_1991,
		actions_1992,
		article,
		shortDesc
	} = $props();
</script>

<li id={anchor} class="legal_list-item">
	<div role="region" class="legal_item">
		<div class="">
			<h3 class="heading-style-h6"><span class="mr-4">{id}.</span> {localisation}</h3>
			<div class="text-size-medium w-embed">
				<div class="flex flex-row flex-wrap">
					<SummaryActionsMiniCard title="1985" actions={actions_1985} />
					<SummaryActionsMiniCard title="1986" actions={actions_1986} />
					<SummaryActionsMiniCard title="1987" actions={actions_1987} />
					<SummaryActionsMiniCard title="1988" actions={actions_1988} />
					<SummaryActionsMiniCard title="1989" actions={actions_1989} />
					<SummaryActionsMiniCard title="1990" actions={actions_1990} />
					<SummaryActionsMiniCard title="1991" actions={actions_1991} />
					<SummaryActionsMiniCard title="1992" actions={actions_1992} />
				</div>
			</div>
		</div>
		<div class="">
			<div role="region" class="flex flex-col">
				<div class="tab_item-title mr-6">
					<p class="">Aktywne grupy:</p>
				</div>
				<div class="tab_item-content">
					<ul role="list" class="flex flex-row flex-wrap justify-between">
						{#each groups as { title, abbr, anchor }}
							<li class="opening-times_list-item mr-6">
								<a class="info_link-text" href="/#{anchor}"> <strong>{abbr}</strong></a>
							</li>
						{/each}
					</ul>
				</div>
			</div>

			<div>
				{shortDesc}
			</div>
		</div>
	</div>
	<!-- <a
		style="background-color:rgba(0,0,0,0)"
		href={article}
		target="_blank"
		class="riot-list_link-block w-inline-block"
	>
	</a> -->
</li>

<style lang="postcss">
	/*  */

	.riot-list_link-block {
		border-style: solid;
		border-width: 2px;
		justify-content: flex-start;
		align-items: center;
		margin-bottom: -2px;
		padding: 1rem;
		transition: all 0.3s;
		display: flex;
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
		margin-left: 60%;
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
	}

	@media screen and (max-width: 767px) {
		.riot-list_link-block {
			padding-top: 1.25rem;
			padding-bottom: 1.25rem;
		}
	}
</style>
