<script lang="ts">
	// import { SEO } from '$sharedUtils';
	import { slide } from 'svelte/transition';
	import { productslIst } from '$sharedData';
	import { ShopCard } from '$entitiesLanding';
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
		orgsMode
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
	<main class="flex h-[68vh] flex-col content-center items-center overflow-x-hidden">
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
			<div class="">
				<div class="mb-10">
					<div class="max-width-xlarge">
						<h2 class="heading-style-medium">
							Nasz sklepik <span class="big-heading heart-dektop"></span>
						</h2>
					</div>
				</div>

				<div class=" mb-10 block">
					<div role="list" class="collection-list-products bestseller">
						{#each productslIst.promo as product}
							<ShopCard {product} />
						{/each}
						<!-- <slot></slot> -->
					</div>
				</div>

				<slot />
			</div>

			<Cart />

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
	.heart-dektop {
		background-image: url(/images/heart_black.svg);
		background-position: 50%;
		background-repeat: no-repeat;
		background-size: auto;
		min-width: 33px;
		height: 34px;
		margin-left: -12px;
		display: inline-block;
		position: relative;
	}
	.collection-list-products {
		grid-column-gap: 0;
		grid-row-gap: 0;
		grid-template-rows: auto;
		grid-template-columns: 1fr 1fr 1fr;
		grid-auto-columns: 1fr;
		display: grid;
	}
	.collection-list-products.bestseller {
		grid-template-columns: 1fr 1fr 1fr 1fr;
	}
	.link-block-product {
		z-index: 0;
		background-color: var(--gray);
		outline-color: var(--black);
		outline-offset: 0;
		outline-width: 1px;
		outline-style: solid;
		flex-direction: column;
		justify-content: space-between;
		width: 100%;
		height: 100%;
		text-decoration: none;
		transition: background-color 0.15s;
		display: flex;
		position: relative;
		overflow: hidden;
	}
	.link-block-product:hover {
		background-color: var(--gray);
		outline-color: var(--black);
		outline-offset: 0;
		outline-width: 1px;
		outline-style: solid;
	}
	.link-block-product:focus-visible {
		outline-width: 3px;
	}
	.link-block-product[data-wf-focus-visible] {
		outline-width: 3px;
	}
	.big-heading {
		text-transform: uppercase;
		margin-top: 0;
		margin-bottom: 0;
		font-size: 50px;
		font-weight: 700;
		line-height: 1.2;
	}
	.big-heading.heart-dektop {
		background-image: url(/images/heart_black.svg);
		background-position: 50%;
		background-repeat: no-repeat;
		background-size: auto;
		min-width: 33px;
		height: 34px;
		margin-left: -12px;
		display: inline-block;
		position: relative;
	}
	@media screen and (min-width: 992px) {
		.collection-list-products.bestseller :nth-child(-n + 4) {
			display: flex;
		}
	}
	@media screen and (min-width: 768px) and (max-width: 991px) {
		.collection-list-products.bestseller :nth-child(n + 4) {
			display: none;
		}
	}
	@media screen and (max-width: 767px) {
		.collection-list-products.bestseller :nth-child(-n + 4) {
			display: flex;
		}
		.collection-list-products.bestseller {
			grid-template-columns: 1fr 1fr;
		}
	}
	@media screen and (min-width: 1920px) {
		.big-heading {
			font-size: 56px;
		}
	}
	@media screen and (max-width: 991px) {
		.collection-list-products.bestseller {
			grid-template-columns: 1fr 1fr 1fr;
		}
	}
	@media screen and (max-width: 479px) {
		.big-heading {
			line-height: 1.1;
		}
		.big-heading.heart-dektop {
			display: none;
		}
	}

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
