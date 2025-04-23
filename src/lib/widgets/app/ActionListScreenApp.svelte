<script lang="ts">
	import { slide } from 'svelte/transition';
	import { selectedAppMode } from '$stores/app';
	import { ProgressPanel } from '$entitiesApp';
</script>

<section class="w-full max-w-2xl ">
	{#if $selectedAppMode.progress < $selectedAppMode.data.length}
		<div transition:slide class="w-full px-4">
			<ProgressPanel
				finalStep={$selectedAppMode.data.length - 1}
				bind:progress={$selectedAppMode.progress}
				title={$selectedAppMode.title}
			/>

			<slot />
		</div>
	{:else}
		<div transition:slide class="w-full px-4">
			<div class="margin-bottom margin-small">
				<h3 class="tab_heading">
					Gratulacje z okazji
					<span
						>6 <img src="/images/dove-icon_black.svg" class="-ml-2 h-20 w-14 pb-2" alt="" /></span
					>
				</h3>
			</div>
		</div>
	{/if}
</section>

<!-- {#if $stepInstruction < 9}
	{#if $stepInstruction == 1}
		<div transition:slide class="max-w-2xl mt-20 px-4">
			<div class="overline">Poziomy delegowania</div>

			<h3 class="h3-heading mb-20">7 poziomów delegowania to model symetryczny.</h3>
			<p class="paragraph mb-6 txt-on-dark">
				Organizacje są złożonymi systemami, a badania pokazują, że takie systemy często działają
				najlepiej, gdy kontrola jest rozproszona. Oznacza to, że władza jest przekazywana do
				wszystkich zakątków sieci organizacyjnej.
			</p>

			<p class="paragraph mb-6 txt-on-dark">
				Zdefiniowanie kluczowych obszarów decyzyjnych polega na wzniesieniu ogrodzenia wokół
				samoorganizacji, podczas gdy zwiększanie i zmniejszanie poziomu delegowania (na kluczowy
				obszar decyzyjny) polega na znalezieniu odpowiedniego poziomu kontroli.
			</p>

			<p class="paragraph mb-6 txt-on-dark">
				Siedem poziomów delegowania można wykorzystać do określenia sposobu, w jaki podejmowanie
				decyzji jest delegowane od menedżera do jednostki lub zespołu, od zespołu lub jednostki do
				menedżera oraz między jednostkami lub zespołami w sposób peer-to-peer.
			</p>
		</div>
	{:else if $stepInstruction == 2}
		<div transition:slide class="overflow-y-scroll overflow-x-hidden">
			<DelegationsList {delegationLevels} />
		</div>
	{:else if $stepInstruction > START_DELEGATION_LEVELS_INSTRUCTION && $stepInstruction < END_DELEGATION_LEVELS_INSTRUCTION}
		{#each delegationLevels as level, i (level.id)}
			{#if $selectedLevelData == level.id}
				<div transition:slide class="">
					<DelegationLevelCardApp delegationLevel={delegationLevels[$selectedLevelData]} />
				</div>
			{/if}
		{/each}
	{/if}
{:else if $stepInstruction >= END_DELEGATION_LEVELS_INSTRUCTION}
	<h3 class="h3-heading mb-20">Dziękuję za uwagę</h3>
{/if} -->

<style lang="postcss">
</style>
