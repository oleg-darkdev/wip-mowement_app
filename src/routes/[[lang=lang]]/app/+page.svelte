<script lang="ts">
	// import { SEO } from '$sharedUtils';
	import { slide } from 'svelte/transition';

	import {
		NextStepBtn,
		PrevStepBtn,
		BackMenuBtn,
		PlayBtn,
		ShopBtn,
		SummaryActionsCard,
		SummaryCitiesCard,
		SummaryOrgsCard
	} from '$sharedUi';

	import { ActionListScreenApp, WelcomeScreen, Footer, Header } from '$widgetsApp';
	import { stepInstruction, selectedMenu, selectedAppMode, selectedPlayMenu } from '$stores/app';
	import { derived } from 'svelte/store';
	import { ActionCard, MainInfoCard, OrgCard, CityCard, AktivistCard } from '$entitiesApp';
	import { localOrgs, worldwideOrgs, cities } from '$sharedData';

	const selectedLevelData = derived(stepInstruction, ($stepInstruction) => {
		if ($stepInstruction < $selectedAppMode.data.length) return $stepInstruction;
	});
</script>

<svelte:head>
	<title>| Home</title>
	<meta name="description" content="" />
</svelte:head>

<!-- <SEO title="App" /> -->

<div class="h-screen">
	<!-- {#if $selectedMenu} -->
	<Header />
	<!-- 94vh -->
	<main class="flex h-[68vh] flex-col items-center overflow-x-hidden">
		<!-- content-center items-center  -->
		{#if $selectedMenu == 0}
			<WelcomeScreen />
		{:else if $selectedMenu == 1}
			<ActionListScreenApp>
				{#if $selectedPlayMenu == 1}
					<MainInfoCard>
						{#if $selectedLevelData == 0}
							<SummaryActionsCard />
						{:else if $selectedLevelData == 1}
							<SummaryCitiesCard {cities} />
						{:else if $selectedLevelData == 2}
							<SummaryOrgsCard text="lokalni" orgs={localOrgs} />
						{:else if $selectedLevelData == 3}
							<SummaryOrgsCard text="międzynarodowi" orgs={worldwideOrgs} />
						{/if}
					</MainInfoCard>
				{:else if $selectedPlayMenu == 2}
					<div class="mt-4">
						{#each $selectedAppMode.data as { title, desc, shortDesc, actions_1985, actions_1986, actions_1987, actions_1988, actions_1989, actions_1990, actions_1991, actions_1992, link, id, localisation }, index (id)}
							{#if $selectedLevelData == index}
								<div transition:slide class="archive_list-wrapper w-dyn-list">
									<div role="list" class="archive_list w-dyn-items">
										<OrgCard
											{desc}
											{title}
											{actions_1985}
											{actions_1986}
											{actions_1987}
											{actions_1988}
											{actions_1989}
											{actions_1990}
											{actions_1991}
											{actions_1992}
											{shortDesc}
											{link}
											{id}
											{localisation}
										/>
									</div>
								</div>
							{/if}
						{/each}
					</div>
				{:else if $selectedPlayMenu == 3}
					<div class="mt-4">
						{#each $selectedAppMode.data as { firstName, lastName, shortDesc, photo, wikiLink, birthDate, deathDate, desc, id }, index (id)}
							{#if $selectedLevelData == index}
								<div transition:slide class="archive_list-wrapper w-dyn-list">
									<div role="list" class="archive_list w-dyn-items">
										<AktivistCard
											{firstName}
											{lastName}
											{shortDesc}
											{photo}
											{wikiLink}
											{birthDate}
											{deathDate}
											{desc}
											{index}
										/>
									</div>
								</div>
							{/if}
						{/each}
					</div>
				{:else if $selectedPlayMenu == 4}
					<div class=" mt-4">
						{#each $selectedAppMode.data as { title, groups, desc, shortDesc, id, actions_1985, actions_1986, actions_1987, actions_1988, actions_1989, actions_1990, actions_1991, actions_1992, localisation }, index (id)}
							{#if $selectedLevelData == index}
								<div transition:slide class="archive_list-wrapper w-dyn-list">
									<div role="list" class="archive_list w-dyn-items">
										<CityCard
											{title}
											{desc}
											{groups}
											{id}
											{actions_1985}
											{actions_1986}
											{actions_1987}
											{actions_1988}
											{actions_1989}
											{actions_1990}
											{actions_1991}
											{actions_1992}
											{shortDesc}
											{localisation}
										/>
									</div>
								</div>
							{/if}
						{/each}
					</div>
				{:else if $selectedPlayMenu > 3}
					<div class=" mt-4">
						{#each $selectedAppMode.data as { title, desc, shortDesc, date, link, id, localisation }, index (id)}
							{#if $selectedLevelData == index}
								<div transition:slide class="archive_list-wrapper w-dyn-list">
									<div role="list" class="archive_list w-dyn-items">
										<ActionCard {desc} {title} {date} {shortDesc} {link} {id} {localisation} />
									</div>
								</div>
							{/if}
						{/each}
					</div>
				{/if}
			</ActionListScreenApp>
		{:else if $selectedMenu == 3}
			<h1 class="text-black">play</h1>
		{/if}
	</main>

	<Footer>
		<div class="mx-auto w-full max-w-lg">
			<div class="mx-auto flex justify-center gap-x-4">
				<BackMenuBtn />

				{#if $selectedMenu == 1}
					<div class="grid grid-cols-2 gap-x-8 px-4">
						{#if $selectedAppMode.progress > 0}
							<PrevStepBtn />
						{/if}
						<NextStepBtn />
					</div>
				{/if}

				{#if $selectedMenu != 1}
					<PlayBtn />

					<ShopBtn />
				{/if}
			</div>
		</div>
	</Footer>
</div>

<style lang="postcss">
</style>
