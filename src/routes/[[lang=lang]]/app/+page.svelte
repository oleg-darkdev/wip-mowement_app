<script lang="ts">
	// import { SEO } from '$sharedUtils';
	import { slide } from 'svelte/transition';

	import {
		NextStepBtnApp,
		PrevStepBtnApp,
		BackMenuBtn,
		PlayBtn,
		ShopBtn,
		SummaryActionsCard,
		SummaryCitiesCard,
		SummaryOrgsCard
	} from '$sharedUi';

	import { ActionListScreenApp, WelcomeScreen, Footer, Header } from '$widgetsApp';
	import {
		stepInstruction,
		selectedMenu,
		selectedAppMode,
		welcomeScreen,
		selectedPlayMenu,
		//
		basicMode,
		activistsMode,
		citiesMode,
		riots1985Mode,
		riots1986Mode,
		riots1987Mode,
		riots1988Mode,
		riots1989Mode,
		riots1990Mode,
		riots1991Mode,
		riots1992Mode,
		orgsMode
	} from '$stores/app';
	import { derived } from 'svelte/store';
	import {
		ActionCard,
		MainInfoCard,
		OrgCard,
		CityCard,
		AktivistCard,
		MenuModeItem,
		ProgressPanel,
		CongratCard
	} from '$entitiesApp';
	import { localOrgs, worldwideOrgs, cities } from '$sharedData';
</script>

<svelte:head>
	<title>| Home</title>
	<meta name="description" content="" />
</svelte:head>

<!-- <SEO title="App" /> -->

<div class="h-screen">
	<!-- {#if $selectedMenu} -->
	<Header />

	<main class="flex h-[68vh] flex-col content-center items-center overflow-x-hidden">
		{#if $selectedMenu == 0}
			<section class="w-full h-full max-w-2xl overflow-y-hidden">
				<div class="padding-global w-full h-full ">
					<div class="container-large w-full h-full ">
						<div class="h-full w-full">
							<div class="container-large h-full w-full overflow-y-hidden">
								{#if $welcomeScreen}
									<WelcomeScreen />
								{:else}
									<div class="" transition:slide>
										<ul
											aria-label="Accordion Control Group Buttons"
											role="list"
											class="tab_content-list w-list-unstyled h-[65vh] w-full overflow-y-scroll"
										>
											<MenuModeItem mode={$basicMode} />
											<MenuModeItem mode={$orgsMode} />
											<MenuModeItem mode={$activistsMode} />
											<MenuModeItem mode={$citiesMode} />
											<MenuModeItem mode={$riots1985Mode} />
											<MenuModeItem mode={$riots1986Mode} />
											<MenuModeItem mode={$riots1987Mode} />
											<MenuModeItem mode={$riots1988Mode} />
											<MenuModeItem mode={$riots1989Mode} />
											<MenuModeItem mode={$riots1990Mode} />
											<MenuModeItem mode={$riots1991Mode} />
											<MenuModeItem mode={$riots1992Mode} />
										</ul>
									</div>
									<Footer>
										<BackMenuBtn />

										{#if $selectedMenu != 1}
											{#if $selectedPlayMenu != 0}
												<PlayBtn />
											{/if}
											<ShopBtn />
										{/if}
									</Footer>
								{/if}
							</div>
						</div>
					</div>
				</div>
			</section>
		{:else if $selectedMenu == 1}
			<ActionListScreenApp>
				{#if $selectedPlayMenu == 1}
					{#if $basicMode.progress < $basicMode.data.length}
						<ProgressPanel
							finalStep={$basicMode.data.length}
							progress={$basicMode.progress}
							title={$basicMode.title}
						/>

						<div class="mt-4">
							<MainInfoCard>
								{#if $basicMode.progress == 0}
									<SummaryActionsCard />
								{:else if $basicMode.progress == 1}
									<SummaryCitiesCard {cities} />
								{:else if $basicMode.progress == 2}
									<SummaryOrgsCard text="lokalni" orgs={localOrgs} />
								{:else if $basicMode.progress == 3}
									<SummaryOrgsCard text="międzynarodowi" orgs={worldwideOrgs} />
								{/if}
							</MainInfoCard>
						</div>
					{:else}
						<CongratCard />
					{/if}
					{#if $basicMode.progress != $basicMode.data.length}
						<Footer>
							<BackMenuBtn />
							{#if $selectedMenu == 1}
								<div class="ml-10 grid grid-cols-2 gap-x-8 px-4">
									{#if $basicMode.progress > 0 && $basicMode.progress != $basicMode.data.length}
										<PrevStepBtnApp
											prevStep={() => {
												$stepInstruction -= 1;
												$basicMode.progress -= 1;
											}}
										/>
									{/if}

									{#if $basicMode.progress != $basicMode.data.length}
										<NextStepBtnApp
											nextStep={() => {
												$stepInstruction += 1;
												$basicMode.progress += 1;
											}}
										/>
									{/if}
								</div>
							{/if}
						</Footer>
					{/if}
				{:else if $selectedPlayMenu == 2}
					<div class="">
						{#if $orgsMode.progress < $orgsMode.data.length}
							<ProgressPanel
								finalStep={$orgsMode.data.length}
								progress={$orgsMode.progress}
								title={$orgsMode.title}
							/>

							<div transition:slide class="archive_list-wrapper mt-4">
								{#each $orgsMode.data as org, index (org.id)}
									{#if $orgsMode.progress == index}
										<OrgCard {org} />
									{/if}
								{/each}
							</div>
						{:else}
							<CongratCard />
						{/if}
						<Footer>
							<BackMenuBtn />

							{#if $selectedMenu == 1}
								<div class="ml-10 grid grid-cols-2 gap-x-8 px-4">
									{#if $orgsMode.progress > 0}
										<PrevStepBtnApp
											prevStep={() => {
												$stepInstruction -= 1;
												$orgsMode.progress -= 1;
											}}
										/>
									{/if}

									{#if $orgsMode.progress != $orgsMode.data.length}
										<NextStepBtnApp
											nextStep={() => {
												$stepInstruction += 1;
												$orgsMode.progress += 1;
											}}
										/>
									{/if}
								</div>
							{/if}
						</Footer>
					</div>
				{:else if $selectedPlayMenu == 3}
					<div class="">
						{#if $activistsMode.progress < $activistsMode.data.length}
							<ProgressPanel
								finalStep={$activistsMode.data.length}
								progress={$activistsMode.progress}
								title={$activistsMode.title}
							/>

							<div transition:slide class="archive_list-wrapper mt-4">
								{#each $activistsMode.data as org, index (org.id)}
									{#if $activistsMode.progress == index}
										<AktivistCard data={$activistsMode.data[$activistsMode.progress]} />
									{/if}
								{/each}
							</div>
						{:else}
							<CongratCard />
						{/if}
						<Footer>
							<BackMenuBtn />

							{#if $selectedMenu == 1}
								<div class="ml-10 grid grid-cols-2 gap-x-8 px-4">
									{#if $activistsMode.progress > 0}
										<PrevStepBtnApp
											prevStep={() => {
												$stepInstruction -= 1;
												$activistsMode.progress -= 1;
											}}
										/>
									{/if}

									{#if $activistsMode.progress != $activistsMode.data.length}
										<NextStepBtnApp
											nextStep={() => {
												$stepInstruction += 1;
												$activistsMode.progress += 1;
											}}
										/>
									{/if}
								</div>
							{/if}
						</Footer>
					</div>
				{:else if $selectedPlayMenu == 4}
					{#if $citiesMode.progress < $citiesMode.data.length}
						<ProgressPanel
							finalStep={$citiesMode.data.length}
							progress={$citiesMode.progress}
							title={$citiesMode.title}
						/>

						<div transition:slide class="archive_list-wrapper mt-4">
							{#each $citiesMode.data as org, index (org.id)}
								{#if $citiesMode.progress == index}
									<CityCard city={$citiesMode.data[$citiesMode.progress]} />
								{/if}
							{/each}
						</div>
					{:else}
						<CongratCard />
					{/if}
					<Footer>
						<BackMenuBtn />

						{#if $selectedMenu == 1}
							<div class="ml-10 grid grid-cols-2 gap-x-8 px-4">
								{#if $citiesMode.progress > 0}
									<PrevStepBtnApp
										prevStep={() => {
											$stepInstruction -= 1;
											$citiesMode.progress -= 1;
										}}
									/>
								{/if}

								{#if $citiesMode.progress != $citiesMode.data.length}
									<NextStepBtnApp
										nextStep={() => {
											$stepInstruction += 1;
											$citiesMode.progress += 1;
										}}
									/>
								{/if}
							</div>
						{/if}
					</Footer>
				{:else if $selectedPlayMenu >= 5}
					{#if $selectedPlayMenu == 5}
						{#if $riots1985Mode.progress < $riots1985Mode.data.length}
							<ProgressPanel
								finalStep={$riots1985Mode.data.length}
								progress={$riots1985Mode.progress}
								title={$riots1985Mode.title}
							/>
							{#each $riots1985Mode.data as riotAction, index (riotAction.id)}
								{#if $riots1985Mode.progress == index}
									<ActionCard data={riotAction} />
								{/if}
							{/each}
						{:else}
							<CongratCard />
						{/if}

						<Footer>
							<BackMenuBtn />

							{#if $selectedMenu == 1}
								<div class="ml-10 grid grid-cols-2 gap-x-8 px-4">
									{#if $riots1985Mode.progress > 0}
										<PrevStepBtnApp
											prevStep={() => {
												$stepInstruction -= 1;
												$riots1985Mode.progress -= 1;
											}}
										/>
									{/if}

									{#if $riots1985Mode.progress != $riots1985Mode.data.length}
										<NextStepBtnApp
											nextStep={() => {
												$stepInstruction += 1;
												$riots1985Mode.progress += 1;
											}}
										/>
									{/if}
								</div>
							{/if}
						</Footer>
					{:else if $selectedPlayMenu == 6}
						{#if $riots1987Mode.progress < $riots1987Mode.data.length}
							<ProgressPanel
								finalStep={$riots1987Mode.data.length}
								progress={$riots1987Mode.progress}
								title={$riots1987Mode.title}
							/>
							{#each $riots1987Mode.data as riotAction, index (riotAction.id)}
								{#if $riots1987Mode.progress == index}
									<ActionCard data={riotAction} />
								{/if}
							{/each}
						{:else}
							<CongratCard />
						{/if}
						<Footer>
							<BackMenuBtn />

							{#if $selectedMenu == 1}
								<div class="ml-10 grid grid-cols-2 gap-x-8 px-4">
									{#if $riots1987Mode.progress > 0}
										<PrevStepBtnApp
											prevStep={() => {
												$stepInstruction -= 1;
												$riots1987Mode.progress -= 1;
											}}
										/>
									{/if}

									{#if $riots1987Mode.progress != $riots1987Mode.data.length}
										<NextStepBtnApp
											nextStep={() => {
												$stepInstruction += 1;
												$riots1987Mode.progress += 1;
											}}
										/>
									{/if}
								</div>
							{/if}
						</Footer>
					{:else if $selectedPlayMenu == 7}
						{#if $riots1988Mode.progress < $riots1988Mode.data.length}
							<ProgressPanel
								finalStep={$riots1988Mode.data.length}
								progress={$riots1988Mode.progress}
								title={$riots1988Mode.title}
							/>
							{#each $riots1988Mode.data as riotAction, index (riotAction.id)}
								{#if $riots1988Mode.progress == index}
									<ActionCard data={riotAction} />
								{/if}
							{/each}
						{:else}
							<CongratCard />
						{/if}
						<Footer>
							<BackMenuBtn />

							{#if $selectedMenu == 1}
								<div class="ml-10 grid grid-cols-2 gap-x-8 px-4">
									{#if $riots1988Mode.progress > 0}
										<PrevStepBtnApp
											prevStep={() => {
												$stepInstruction -= 1;
												$riots1988Mode.progress -= 1;
											}}
										/>
									{/if}

									{#if $riots1988Mode.progress != $riots1988Mode.data.length}
										<NextStepBtnApp
											nextStep={() => {
												$stepInstruction += 1;
												$riots1988Mode.progress += 1;
											}}
										/>
									{/if}
								</div>
							{/if}
						</Footer>
					{:else if $selectedPlayMenu == 8}
						{#if $riots1989Mode.progress < $riots1989Mode.data.length}
							<ProgressPanel
								finalStep={$riots1989Mode.data.length}
								progress={$riots1989Mode.progress}
								title={$riots1989Mode.title}
							/>
							{#each $riots1989Mode.data as riotAction, index (riotAction.id)}
								{#if $riots1989Mode.progress == index}
									<ActionCard data={riotAction} />
								{/if}
							{/each}
						{:else}
							<CongratCard />
						{/if}
						<Footer>
							<BackMenuBtn />

							{#if $selectedMenu == 1}
								<div class="ml-10 grid grid-cols-2 gap-x-8 px-4">
									{#if $riots1989Mode.progress > 0}
										<PrevStepBtnApp
											prevStep={() => {
												$stepInstruction -= 1;
												$riots1989Mode.progress -= 1;
											}}
										/>
									{/if}

									{#if $riots1989Mode.progress != $riots1989Mode.data.length}
										<NextStepBtnApp
											nextStep={() => {
												$stepInstruction += 1;
												$riots1989Mode.progress += 1;
											}}
										/>
									{/if}
								</div>
							{/if}
						</Footer>
					{:else if $selectedPlayMenu == 9}
						{#if $riots1990Mode.progress < $riots1990Mode.data.length}
							<ProgressPanel
								finalStep={$riots1990Mode.data.length}
								progress={$riots1990Mode.progress}
								title={$riots1990Mode.title}
							/>
							{#each $riots1990Mode.data as riotAction, index (riotAction.id)}
								{#if $riots1990Mode.progress == index}
									<ActionCard data={riotAction} />
								{/if}
							{/each}
						{:else}
							<CongratCard />
						{/if}
						<Footer>
							<BackMenuBtn />

							{#if $selectedMenu == 1}
								<div class="ml-10 grid grid-cols-2 gap-x-8 px-4">
									{#if $riots1990Mode.progress > 0}
										<PrevStepBtnApp
											prevStep={() => {
												$stepInstruction -= 1;
												$riots1990Mode.progress -= 1;
											}}
										/>
									{/if}

									{#if $riots1990Mode.progress != $riots1990Mode.data.length}
										<NextStepBtnApp
											nextStep={() => {
												$stepInstruction += 1;
												$riots1990Mode.progress += 1;
											}}
										/>
									{/if}
								</div>
							{/if}
						</Footer>
					{:else if $selectedPlayMenu == 10}
						{#if $riots1991Mode.progress < $riots1991Mode.data.length}
							<ProgressPanel
								finalStep={$riots1991Mode.data.length}
								progress={$riots1991Mode.progress}
								title={$riots1991Mode.title}
							/>
							{#each $riots1991Mode.data as riotAction, index (riotAction.id)}
								{#if $riots1991Mode.progress == index}
									<ActionCard data={riotAction} />
								{/if}
							{/each}
						{:else}
							<CongratCard />
						{/if}
						<Footer>
							<BackMenuBtn />

							{#if $selectedMenu == 1}
								<div class="ml-10 grid grid-cols-2 gap-x-8 px-4">
									{#if $riots1991Mode.progress > 0}
										<PrevStepBtnApp
											prevStep={() => {
												$stepInstruction -= 1;
												$riots1991Mode.progress -= 1;
											}}
										/>
									{/if}

									{#if $riots1991Mode.progress != $riots1991Mode.data.length}
										<NextStepBtnApp
											nextStep={() => {
												$stepInstruction += 1;
												$riots1991Mode.progress += 1;
											}}
										/>
									{/if}
								</div>
							{/if}
						</Footer>
					{:else if $selectedPlayMenu == 11}
						{#if $riots1992Mode.progress < $riots1992Mode.data.length}
							<ProgressPanel
								finalStep={$riots1992Mode.data.length}
								progress={$riots1992Mode.progress}
								title={$riots1992Mode.title}
							/>
							{#each $riots1992Mode.data as riotAction, index (riotAction.id)}
								{#if $riots1992Mode.progress == index}
									<ActionCard data={riotAction} />
								{/if}
							{/each}
						{:else}
							<CongratCard />
						{/if}
						<Footer>
							<BackMenuBtn />

							{#if $selectedMenu == 1}
								<div class="ml-10 grid grid-cols-2 gap-x-8 px-4">
									{#if $riots1992Mode.progress > 0}
										<PrevStepBtnApp
											prevStep={() => {
												$stepInstruction -= 1;
												$riots1992Mode.progress -= 1;
											}}
										/>
									{/if}

									{#if $riots1992Mode.progress != $riots1992Mode.data.length}
										<NextStepBtnApp
											nextStep={() => {
												$stepInstruction += 1;
												$riots1992Mode.progress += 1;
											}}
										/>
									{/if}
								</div>
							{/if}
						</Footer>
					{/if}
				{/if}
			</ActionListScreenApp>
		{:else if $selectedMenu == 2}
			<div class="h-[40vh] bg-black"></div>

			<Footer>
				<BackMenuBtn />

				{#if $selectedPlayMenu != 0}
					<PlayBtn />
				{/if}

				<ShopBtn />
			</Footer>
		{/if}
	</main>

	<!-- <Footer>
		<div class="mx-auto w-full max-w-lg">
			<div class="mx-auto flex justify-center gap-x-4">
				<BackMenuBtn />

				{#if $selectedMenu == 1}
					<div class="ml-10 grid grid-cols-2 gap-x-8 px-4">
						{#if $selectedAppMode.progress > 0}
							<PrevStepBtnApp />
						{/if}

						{#if $selectedAppMode.progress != $selectedAppMode.data.length}
							<NextStepBtnApp />
						{/if}
					</div>
				{/if}

				{#if $selectedMenu != 1}
					<PlayBtn />

					<ShopBtn />
				{/if}
			</div>
		</div>
	</Footer> -->
</div>

<style lang="postcss">
	.button-next-slide {
		cursor: pointer;
		background-image: url(images/arrow_light.svg);
		background-position: 50%;
		background-repeat: no-repeat;
		background-size: auto;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 100%;
		padding: 1rem;
		display: flex;
	}
	.button-next-slide:hover {
		background-color: var(--grey);
	}

	@media screen and (max-width: 991px) {
	}
</style>
