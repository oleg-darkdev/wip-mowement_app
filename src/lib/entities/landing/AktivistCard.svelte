<script lang="ts">
	let { firstName, lastName, shortDesc, photo, wikiLink, birthDate, deathDate, prisonTime, desc, number } =
		$props();
</script>

<div role="listitem" class="background-color-gray max-w-xl">
	<div style="background-color:rgba(0,0,0,0)" class="riot-list_link-block w-inline-block w-full">
		<div class="riot-list_link-block-content mr-4 w-4/12">
			<div class="margin-bottom margin-xxsmall">
				<h4 class="riot-list_link-text">
					<span class="mr-4"><em>{number + 1}.</em></span>{firstName}
					{lastName}
				</h4>
			</div>

			<!-- prisonTime -->
			<div class="text-size-medium w-embed">
				<p class="">
					<em>{birthDate} <br /> {deathDate ? `${deathDate}` : ''}</em>
				</p>
			</div>
		</div>

		<div class="flex w-full flex-col content-start items-start justify-start pr-4 pt-4">
			<p class="text-size-medium mb-2 mb-6 h-auto max-w-[350px] truncate">
				{shortDesc}
			</p>

			<div class="flex w-full flex-row">
				<a href="/app" target="_blank" class="button is-small is-secondary"
					><div class="button-text">Więcej info</div>
					<div class="button-background"></div>
				</a>

				{#if wikiLink}
					<a href={wikiLink} target="_blank" class="button is-small is-primary"
						><div class="button-text">Wikipedia</div>
						<div class="button-background"></div>
					</a>
				{/if}
			</div>
			<!-- text-weight-bold -->

			<!-- {#if showAction}
				<div in:fly={{ y: 200 }} out:fade class="text-size-medium mb-4">
					{#each desc as text}
						<p class=" mb-2">
							{text}
						</p>
					{/each}
				</div>
			{/if}

			<button onclick={() => (showAction = !showAction)} class="button is-secondary mt-8"
				><div class="button-text">{showAction ? 'Mniej' : 'Więcej'} info</div>
				<div class="button-background"></div>
			</button> -->
		</div>
		<!-- <div class="riot-list_link-block-content"> -->
		<!-- <div class="tab_content-right"> -->

		<!-- </div> -->
		<!-- on mobile flex-column - on decstop flex-row -->
		<!-- <div class="riot-list_image-slider-wrapper pointer-events-off max-w-sm">
			<div class="riot-list_link-image">
				<img
					src="/images/about_2.jpg"
					loading="lazy"
					alt=""
					sizes="100vw"
					class=" riot-list_image"
				/>
			</div>
		</div> -->
	</div>
</div>

<style lang="postcss">
	/*  */
	.truncate {
		white-space: wrap;
		overflow: hidden;
		display: -webkit-box;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
		text-overflow: ellipsis;
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
