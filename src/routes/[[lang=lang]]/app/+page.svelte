<script lang="ts">
	// import { SEO } from '$sharedUtils';
	import { slide } from 'svelte/transition';
	// import { productslIst } from '$sharedData';
	import { Shop } from '$widgetsLanding';
	import { PartnersList } from '$entitiesApp';

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

	import { ActionListScreenApp, WelcomeScreen, Footer, Header, Cart } from '$widgetsApp';
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
		orgsMode,
		balance
	} from '$stores/app';
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
	{#if !$welcomeScreen}
		<Header />
	{/if}
	<main class="flex h-[78vh] flex-col content-center items-center overflow-x-hidden">
		{#if $selectedMenu == 0}
			<section class="h-full w-full max-w-2xl overflow-y-hidden">
				<div class="padding-global h-full w-full">
					<div class="container-large h-full w-full">
						<div class="h-full w-full">
							<div class="container-large h-full w-full overflow-y-hidden">
								{#if $welcomeScreen}
									<WelcomeScreen />
									
								{:else}
									<div class="" transition:slide>
										<ul
											aria-label="Accordion Control Group Buttons"
											role="list"
											class="tab_content-list w-list-unstyled h-[70vh] w-full overflow-y-scroll"
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
					{:else if !$basicMode.birds}
						<CongratCard
							getBirds={() => {
								$balance += $basicMode.prise;
								$basicMode.birds = true;
							}}
						/>
					{:else if $basicMode.birds}
						<PartnersList />
					{/if}

					{#if $basicMode.progress != $basicMode.data.length}
						<Footer>
							<BackMenuBtn />
							{#if $selectedMenu == 1}
								<div class="ml-10 grid h-24 grid-cols-2 gap-x-8 px-4 pb-1">
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
						{:else if !$orgsMode.birds}
							<CongratCard
								getBirds={() => {
									$balance += $orgsMode.prise;
									$orgsMode.birds = true;
								}}
							/>
						{:else if $orgsMode.birds}
							<PartnersList />
						{/if}
						{#if $orgsMode.progress != $orgsMode.data.length}
							<Footer>
								<BackMenuBtn />

								{#if $selectedMenu == 1}
									<div class="ml-10 grid h-24 grid-cols-2 gap-x-8 px-4 pb-1">
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
						{/if}
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
						{:else if !$activistsMode.birds}
							<CongratCard
								getBirds={() => {
									$balance += $activistsMode.prise;
									$activistsMode.birds = true;
								}}
							/>
						{:else if $activistsMode.birds}
							<PartnersList />
						{/if}

						{#if $activistsMode.progress != $activistsMode.data.length}
							<Footer>
								<BackMenuBtn />

								{#if $selectedMenu == 1}
									<div class="ml-10 grid h-24 grid-cols-2 gap-x-8 px-4 pb-1">
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
						{/if}
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
					{:else if !$citiesMode.birds}
						<CongratCard
							getBirds={() => {
								$balance += $citiesMode.prise;
								$citiesMode.birds = true;
							}}
						/>
					{:else if $citiesMode.birds}
						<PartnersList />
					{/if}
					{#if $citiesMode.progress != $citiesMode.data.length}
						<Footer>
							<BackMenuBtn />

							{#if $selectedMenu == 1}
								<div class="ml-10 grid h-24 grid-cols-2 gap-x-8 px-4 pb-1">
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
					{/if}
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
						{:else if !$riots1985Mode.birds}
							<CongratCard
								getBirds={() => {
									$balance += $riots1985Mode.prise;
									$riots1985Mode.birds = true;
								}}
							/>
						{:else if $riots1985Mode.birds}
							<PartnersList />
						{/if}
						{#if $riots1985Mode.progress != $riots1985Mode.data.length}
							<Footer>
								<BackMenuBtn />

								{#if $selectedMenu == 1}
									<div class="ml-10 grid max-h-24 grid-cols-2 gap-x-8 px-4 pb-1">
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
						{/if}
					{:else if $selectedPlayMenu == 6}
						{#if $riots1986Mode.progress < $riots1986Mode.data.length}
							<ProgressPanel
								finalStep={$riots1986Mode.data.length}
								progress={$riots1986Mode.progress}
								title={$riots1986Mode.title}
							/>
							{#each $riots1986Mode.data as riotAction, index (riotAction.id)}
								{#if $riots1986Mode.progress == index}
									<ActionCard data={riotAction} />
								{/if}
							{/each}
						{:else if !$riots1986Mode.birds}
							<CongratCard
								getBirds={() => {
									$balance += $riots1986Mode.prise;
									$riots1986Mode.birds = true;
								}}
							/>
						{:else if $riots1986Mode.birds}
							<PartnersList />
						{/if}

						{#if $riots1986Mode.progress != $riots1986Mode.data.length}
							<Footer>
								<BackMenuBtn />

								{#if $selectedMenu == 1}
									<div class="ml-10 grid h-24 grid-cols-2 gap-x-8 px-4 pb-1">
										{#if $riots1986Mode.progress > 0}
											<PrevStepBtnApp
												prevStep={() => {
													$stepInstruction -= 1;
													$riots1986Mode.progress -= 1;
												}}
											/>
										{/if}

										{#if $riots1986Mode.progress != $riots1986Mode.data.length}
											<NextStepBtnApp
												nextStep={() => {
													$stepInstruction += 1;
													$riots1986Mode.progress += 1;
												}}
											/>
										{/if}
									</div>
								{/if}
							</Footer>
						{/if}
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
						{:else if !$riots1987Mode.birds}
							<CongratCard
								getBirds={() => {
									$balance += $riots1987Mode.prise;
									$riots1987Mode.birds = true;
								}}
							/>
						{:else if $riots1987Mode.birds}
							<PartnersList />
						{/if}

						{#if $riots1987Mode.progress != $riots1987Mode.data.length}
							<Footer>
								<BackMenuBtn />

								{#if $selectedMenu == 1}
									<div class="ml-10 grid h-24 grid-cols-2 gap-x-8 px-4 pb-1">
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
						{/if}
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
						{:else if !$riots1988Mode.birds}
							<CongratCard
								getBirds={() => {
									$balance += $riots1988Mode.prise;
									$riots1988Mode.birds = true;
								}}
							/>
						{:else if $riots1988Mode.birds}
							<PartnersList />
						{/if}

						{#if $riots1988Mode.progress != $riots1988Mode.data.length}
							<Footer>
								<BackMenuBtn />

								{#if $selectedMenu == 1}
									<div class="ml-10 grid h-24 grid-cols-2 gap-x-8 px-4 pb-1">
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
						{/if}
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
						{:else if !$riots1989Mode.birds}
							<CongratCard
								getBirds={() => {
									$balance += $riots1989Mode.prise;
									$riots1989Mode.birds = true;
								}}
							/>
						{:else if $riots1989Mode.birds}
							<PartnersList />
						{/if}
						{#if $riots1989Mode.progress != $riots1989Mode.data.length}
							<Footer>
								<BackMenuBtn />

								{#if $selectedMenu == 1}
									<div class="ml-10 grid h-24 grid-cols-2 gap-x-8 px-4 pb-1">
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
						{/if}
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
						{:else if !$riots1990Mode.birds}
							<CongratCard
								getBirds={() => {
									$balance += $riots1990Mode.prise;
									$riots1990Mode.birds = true;
								}}
							/>
						{:else if $riots1990Mode.birds}
							<PartnersList />
						{/if}
						{#if $riots1990Mode.progress != $riots1990Mode.data.length}
							<Footer>
								<BackMenuBtn />

								{#if $selectedMenu == 1}
									<div class="ml-10 grid h-24 grid-cols-2 gap-x-8 px-4 pb-1">
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
						{/if}
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
						{:else if !$riots1991Mode.birds}
							<CongratCard
								getBirds={() => {
									$balance += $riots1991Mode.prise;
									$riots1991Mode.birds = true;
								}}
							/>
						{:else if $riots1991Mode.birds}
							<PartnersList />
						{/if}
						{#if $riots1991Mode.progress != $riots1991Mode.data.length}
							<Footer>
								<BackMenuBtn />

								{#if $selectedMenu == 1}
									<div class="ml-10 grid h-24 grid-cols-2 gap-x-8 px-4 pb-1">
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
						{/if}
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
						{:else if !$riots1992Mode.birds}
							<CongratCard
								getBirds={() => {
									$balance += $riots1992Mode.prise;
									$riots1992Mode.birds = true;
								}}
							/>
						{:else if $riots1992Mode.birds}
							<PartnersList />
						{/if}
						{#if $riots1992Mode.progress != $riots1992Mode.data.length}
							<Footer>
								<BackMenuBtn />

								{#if $selectedMenu == 1}
									<div class="ml-10 grid h-24 grid-cols-2 gap-x-8 px-4 pb-1">
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
				{/if}
			</ActionListScreenApp>
		{:else if $selectedMenu == 2}
			<div transition:slide class="h-[74vh] w-full overflow-y-scroll">
				<Shop />

				<!-- <Cart /> -->
			</div>
			<Footer>
				<BackMenuBtn />

				{#if $selectedPlayMenu != 0}
					<PlayBtn />
				{/if}

				<ShopBtn />
			</Footer>
		{/if}
	</main>
</div>

<style lang="postcss">
</style>
