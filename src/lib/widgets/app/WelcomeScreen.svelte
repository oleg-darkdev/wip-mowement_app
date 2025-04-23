<script lang="ts">
	import { slide } from 'svelte/transition';

	import { selectedMenu, selectedAppMode, welcomeScreen, selectedPlayMenu } from '$stores/app';
	import { appScreensMenu } from '$sharedData';

	// 	const selectedLevelData = derived(stepInstruction, ($stepInstruction) => {
	// 	console.log($stepInstruction);
	// 	if ($stepInstruction < END_DELEGATION_LEVELS_INSTRUCTION)
	// 		return ($stepInstruction = $stepInstruction - START_DELEGATION_LEVELS_INSTRUCTION);
	// });
	// let welcomeScreen = $state(true);
</script>

<!-- <div class="tab_tab-pane">
	<div class="tab_content-component">
		<div class="tab_content-left">
			<div class="margin-bottom margin-small">
				<h3 class="tab_heading">
					Ogólne informacje <br /> o ruchu <br /> "Wolność i Pokój"
				</h3>
			</div>
			<p class="text-size-medium">
				Został po raz pierwszy użyty w XV w. przez nieznanego drukarza do wypełnienia tekstem
				próbnej książki. Pięć wieków później zaczął być używany przemyśle elektronicznym, pozostając
				praktycznie niezmienionym.
				<span class="text-weight-bold"
					>Został po raz pierwszy użyty w XV w. przez nieznanego drukarza do wypełnienia tekstem
					próbnej książki. Pięć wieków później zaczął być używany przemyśle elektronicznym,
					pozostając praktycznie niezmienionym.
				</span>
			</p>
		</div> -->
<section class="w-full max-w-2xl overflow-y-hidden">
	<!-- padding-section-large -->
	<!-- <div class="padding-global"> -->
	<div class="container-large overflow-y-hidden">
		{#if $welcomeScreen}
			<div class="flex flex-col justify-center" transition:slide>
				<div class="margin-bottom margin-small">
					<h3 class="tab_heading">
						Witamy w przewodniku <br /> po ruchu <br />
						<span>
							"Wolność i Pokój" <img
								src="/images/dove-icon_black.svg"
								class="-ml-2 h-20 w-14 pb-2"
								alt=""
							/></span
						>
					</h3>
				</div>
				<p class="text-size-medium mb-10">
					Został po raz pierwszy użyty w XV w. przez nieznanego drukarza do wypełnienia tekstem
					próbnej książki. Pięć wieków później zaczął być używany przemyśle elektronicznym,
					pozostając praktycznie niezmienionym.
					<span class="text-weight-bold"
						>Został po raz pierwszy użyty w XV w. przez nieznanego drukarza do wypełnienia tekstem
						próbnej książki. Pięć wieków później zaczął być używany przemyśle elektronicznym,
						pozostając praktycznie niezmienionym.
					</span>
				</p>

				<div class="grid grid-cols-2 gap-x-8 px-4">
					<a href="/" target="_blank" class="button is-secondary"
						><div class="button-text">Strona główna</div>
						<div class="button-background"></div>
					</a>

					<button onclick={() => ($welcomeScreen = false)} class="button is-primary"
						><div class="button-text">
							<span class="hidden sm:inline">Rozpocząć</span>
							<span class="inline sm:hidden">&lt;</span>
						</div>
						<div class="button-background"></div>
					</button>
				</div>
			</div>
		{:else}
			<div class="" transition:slide>
				<ul
					aria-label="Accordion Control Group Buttons"
					role="list"
					class="tab_content-list w-list-unstyled w-full"
				>
					{#each appScreensMenu as mode}
						<li class="tab_list-item w-full">
							<div class="flex w-full flex-row justify-between">
								<div role="region" class="tab_item w-full">
									<div class="tab_item-title">
										<h4 class="heading-style-h6">{mode.title}</h4>
									</div>
									<div class="tab_item-content">
										<div>
											progres <span>{mode.progress}</span> / <span>{mode.data.length}</span>
										</div>
									</div>
								</div>
								<div class="p-2">
									<button
										onclick={() => {
											$selectedPlayMenu = mode.id;
											$selectedAppMode = mode;
											$selectedMenu = 1;
										}}
										class="button is-small is-icon is-primary"
										><div class="">
											&gt;
											<!-- <span class="hidden sm:inline">Rozpocząć</span> -->
											<!-- <span class="inline button-text sm:hidden">">"</span> -->
										</div>
										<div class="button-background"></div>
									</button>
								</div>
							</div>
						</li>
					{/each}
				</ul>

				<!-- <button
						onclick={() => ($welcomeScreen = false)}
						class="button is-secondary mx-auto mt-8 max-w-sm"
						><div class="button-text">
							<span class="button-text mr-2">&lt;&lt;</span> Z powrotem
						</div>
						<div class="button-background"></div>
					</button> -->
			</div>
		{/if}
	</div>
</section>

<!-- </div>
</div> -->

<style lang="postcss">
</style>
