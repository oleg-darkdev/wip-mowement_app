<script lang="ts">
	import { fade, fly } from 'svelte/transition';

	let {
		firstName,
		lastName,
		shortDesc,
		photo,
		wikiLink,
		birthDate,
		prisonTime,
		deathDate,
		desc,
		index,
		sanction
	} = $props();

	let showMore = $state(false);
</script>

<!-- w-6/12 -->
<div role="listitem" class="w-full">
	<div style="background-color:rgba(0,0,0,0)" class="riot-list_link-block w-inline-block w-full">
		<div class="h-[59vh] overflow-y-scroll">
			<div class="">
				<div class="riot-list_link-block-content mr-4">
					<div class="margin-bottom margin-xxsmall">
						<h4 class="riot-list_link-text">
							<span class="mr-4"><em>{index}.</em></span>{firstName}
							{lastName}
						</h4>
					</div>

					<div class="text-size-medium w-embed">
						<p class="flex flex-row">
							<em>{birthDate} <br /> {deathDate ? `${deathDate}` : ''}</em>
							<span class="mx-2">|</span>
							<strong> {prisonTime} mies. aresztu</strong>
							<span class="mx-2">|</span>
							<strong> {sanction} grzywna </strong>
						</p>
					</div>
				</div>

				<div class="flex w-full flex-col content-start items-start justify-start pr-4 pt-4">
					<p class="text-size-medium mb-2 mb-6">
						{shortDesc}
					</p>

					<!-- text-weight-bold -->
				</div>

				{#if showMore}
					<div in:fly={{ y: 200 }} out:fade class="text-size-medium mb-4 mt-10">
						{#each desc as { title, text }}
							<p class=" mb-2">
								<strong class="block uppercase">{title}</strong>

								{text}
							</p>
						{/each}
					</div>
				{/if}
			</div>
			<!-- <div class="riot-list_link-block-content"> -->
			<!-- <div class="tab_content-right"> -->

			<!-- </div> -->
			<!-- on mobile flex-column - on decstop flex-row -->
			<div class="">
				{#if photo}
					<div class=" pointer-events-off max-w-sm">
						<img src={photo} loading="lazy" alt="" class="h-40 w-40 object-cover grayscale-[70]" />
					</div>
				{/if}

				<div class="flex-fol mt-20 flex">
					<a href={wikiLink} target="_blank" class="button is-small is-primary mb-4"
						><div class="button-text">Wikipedia</div>
						<div class="button-background"></div>
					</a>

					{#if desc[0].title.length > 0}
						<button onclick={() => (showMore = !showMore)} class="button is-small is-secondary"
							><div class="button-text">Więcej info</div>
							<div class="button-background"></div>
						</button>
					{/if}
				</div>
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
		margin-bottom: -2px;
		padding: 1rem;
		transition: all 0.3s;
		display: flex;
		flex-direction: row;
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
