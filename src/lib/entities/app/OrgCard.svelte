<script lang="ts">
	import { fade, fly, slide } from 'svelte/transition';
	import { SummaryActionsMiniCard } from '$sharedUi';

	let { org } = $props();
</script>

<div
	transition:slide
	style="background-color:rgba(0,0,0,0)"
	class="riot-list_link-block w-inline-block mt-4 w-full"
>
	<div class="max-h-[59vh] overflow-y-scroll">
		<div class="">
			<div class="riot-list_link-block-content">
				<div class="margin-bottom margin-xxsmall">
					<!-- <span class="mr-4">{progress}.</span> -->
					<h4 class="riot-list_link-text">{org.title}</h4>
				</div>

				<div class="text-size-medium w-embed">
					<p class="">
						<span>{org.localisation}</span>
						<span class="mx-2">|</span>
						<!-- {date} -->
					</p>
				</div>
			</div>

			<div class="flex w-full flex-row flex-wrap">
				<SummaryActionsMiniCard title="1985" actions={org.actions_1985} />
				<SummaryActionsMiniCard title="1986" actions={org.actions_1986} />
				<SummaryActionsMiniCard title="1987" actions={org.actions_1987} />
				<SummaryActionsMiniCard title="1988" actions={org.actions_1988} />
				<SummaryActionsMiniCard title="1989" actions={org.actions_1989} />
				<SummaryActionsMiniCard title="1990" actions={org.actions_1990} />
				<SummaryActionsMiniCard title="1991" actions={org.actions_1991} />
				<SummaryActionsMiniCard title="1992" actions={org.actions_1992} />
			</div>

			<div class="flex w-full flex-col content-start items-start justify-start pr-4 pt-7">
				<p class="text-size-medium mb-2">
					{org.shortDesc}
				</p>

				<!-- text-weight-bold -->
				<div in:fly={{ y: 200 }} out:fade class="text-size-medium mb-4">
					{#each org.desc as text}
						<p class=" mb-2">
							{text}
						</p>
					{/each}
				</div>
			</div>
		</div>

		<div class="riot-list_image-slider-wrapper pointer-events-off max-w-sm">
			<div class="riot-list_link-image">
				<img src="images/about_2.jpg" loading="lazy" alt="" sizes="100vw" class="riot-list_image" />
			</div>
		</div>
	</div>
</div>

<style lang="postcss">
	.riot-list_link-block {
		border-style: solid;
		border-width: 2px;
		justify-content: space-between;
		align-items: start;
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
	}

	@media screen and (max-width: 767px) {
		.riot-list_link-block {
			padding-top: 1.25rem;
			padding-bottom: 1.25rem;
		}
	}
</style>
