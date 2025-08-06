<script lang="ts">
	import {
		localOrgs,
		worldwideOrgs,
		allOrgs,
		activistsListCount,
		cities,
		allYears,
		records_1985,
		records_1986,
		records_1987,
		records_1988,
		records_1989,
		records_1990,
		records_1991,
		records_1992,
		activistsList
	} from '$sharedData';

	import {
		RiotsActions,
		Faq,
		SupportUs,
		OrganisationsList,
		Mapa,
		CitiesList,
		AboutShort,
		AboutLong,
		Hero,
		Header,
		Footer,
		ActivistsList,
		AppPreview,
		Shop,
		Stats
	} from '$widgetsLanding';

	import { SummaryActionsCard, SummaryCitiesCard, SummaryOrgsCard, BtnWithArrow } from '$sharedUi';

	// import { SEO } from '$sharedUtils';

	let { showFullList } = $state(false);
	let readyToUse = $state(false);
</script>

<svelte:head>
	<title>Wolność i Pokój</title>
	<meta name="description" content="" />
</svelte:head>

<!-- <SEO title="Home" /> -->

<Header />
<Hero bind:readyToUse />

{#if readyToUse}
	<section id="o-ruchu" class="overflow-hidden">
		<div class="padding-section-large">
			<div class="padding-global">
				<div class="container-large">
					<AboutShort>
						<SummaryActionsCard />

						<SummaryCitiesCard {cities} />

						<SummaryOrgsCard text="lokalni" orgs={localOrgs} />

						<SummaryOrgsCard text="międzynarodowi" orgs={worldwideOrgs} />
					</AboutShort>

					<AboutLong />
				</div>
			</div>
		</div>
	</section>

	<section id="" class="background-color-gray overflow-hidden">
		<div class="padding-global">
			<div class="container-large">
				<div class="padding-section-large">
					<div class="legal-content_content-wrapper">
						<div class="margin-bottom">
							<div class="max-width-xlarge">
								<h3 class="tab_heading">Informacje o projekcie <br /> w liczbach.</h3>
							</div>
						</div>
						<div id="" class="tab_component w-tabs">
							<div class="tab_tabs-content w-tab-content">
								<div class="tab_tab-pane">
									<Stats />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	<section
		id="aplikacja"
		style="
	background-color: var(--black);
	color: var(--white);"
		class="overflow-hidden"
	>
		<div class="padding-global">
			<div class="container-large">
				<div class="padding-section-large">
					<div class="legal-content_content-wrapper">
						<AppPreview />
					</div>
				</div>
			</div>
		</div>
	</section>

	<section class="background-color-gray py-10">
		<Shop>
			<BtnWithArrow text="Full " link="/" />
		</Shop>
	</section>

	<div id="akcji-oporu" class="">
		<div class="padding-section-large">
			<div class="padding-global">
				<div class="container-large">
					<div class="margin-bottom margin-xxlarge">
						<div class="max-width-xlarge">
							<h2 class="heading-style-medium">Lista z {allYears.length} akcji oporu.</h2>
						</div>
					</div>

					<RiotsActions
						shortDesc="Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w przemyśle
						poligraficznym. Został po raz pierwszy użyty w XV w. przez nieznanego drukarza do
						wypełnienia tekstem próbnej książki."
						year="1985"
						anchor="akcji-1985"
						riotsRecords={records_1985}
					/>

					<RiotsActions
						shortDesc="Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w przemyśle
						poligraficznym. Został po raz pierwszy użyty w XV w. przez nieznanego drukarza do
						wypełnienia tekstem próbnej książki."
						year="1986"
						anchor="akcji-1986"
						riotsRecords={records_1986}
					/>

					<RiotsActions
						shortDesc="Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w przemyśle
						poligraficznym. Został po raz pierwszy użyty w XV w. przez nieznanego drukarza do
						wypełnienia tekstem próbnej książki."
						year="1987"
						anchor="akcji-1987"
						riotsRecords={records_1987}
					/>

					<RiotsActions
						shortDesc="Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w przemyśle
						poligraficznym. Został po raz pierwszy użyty w XV w. przez nieznanego drukarza do
						wypełnienia tekstem próbnej książki."
						year="1988"
						anchor="akcji-1988"
						riotsRecords={records_1988}
					/>

					<RiotsActions
						shortDesc="Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w przemyśle
						poligraficznym. Został po raz pierwszy użyty w XV w. przez nieznanego drukarza do
						wypełnienia tekstem próbnej książki."
						year="1989"
						anchor="akcji-1989"
						riotsRecords={records_1989}
					/>

					<RiotsActions
						shortDesc="Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w przemyśle
						poligraficznym. Został po raz pierwszy użyty w XV w. przez nieznanego drukarza do
						wypełnienia tekstem próbnej książki."
						year="1990"
						anchor="akcji-1990"
						riotsRecords={records_1990}
					/>

					<RiotsActions
						shortDesc="Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w przemyśle
						poligraficznym. Został po raz pierwszy użyty w XV w. przez nieznanego drukarza do
						wypełnienia tekstem próbnej książki."
						year="1991"
						anchor="akcji-1991"
						riotsRecords={records_1991}
					/>

					<RiotsActions
						shortDesc="Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w przemyśle
						poligraficznym. Został po raz pierwszy użyty w XV w. przez nieznanego drukarza do
						wypełnienia tekstem próbnej książki."
						year="199z"
						anchor="akcji-1992"
						riotsRecords={records_1992}
					/>
				</div>
			</div>
		</div>
	</div>

	<SupportUs />

	<section id="" class="background-color-gray overflow-hidden">
		<div class="padding-global">
			<div class="container-large">
				<div class="padding-section-large">
					<div class="legal-content_content-wrapper">
						<div class="margin-bottom">
							<div class="max-width-xlarge">
								<h2 class="heading-style-medium">Geografia ruchu</h2>
							</div>
						</div>

						<OrganisationsList {localOrgs} {worldwideOrgs} />

						<CitiesList {cities} />

						<Mapa />
					</div>
				</div>
			</div>
		</div>
	</section>

	<section id="uczestniki" class="overflow-hidden">
		<div class="padding-section-large">
			<div class="padding-global">
				<div class="container-large">
					<div class="margin-bottom margin-xxlarge">
						<div class="max-width-xlarge">
							<h2 class="heading-style-medium">
								Niepełna lista {activistsListCount} <br /> uczestników ruchu.
							</h2>
						</div>
						<div class="tab_content-right">
							<p class="text-size-medium">
								Ruch liczył w szczytowym okresie rozwoju kilkuset członków.
							</p>
						</div>
					</div>
					{#each showFullList ? activistsList : activistsList.slice(0, 3) as { title, data }}
						<ActivistsList activistsList={data} {title} />
					{/each}

					<button
						onclick={() => {
							showFullList = !showFullList;
							if (!showFullList) location.href = `/#uczestniki`;
						}}
						class="button is-primary mt-8"
						><div class="button-text">
							{showFullList ? 'Ukryj' : `Wyświetl pozostałe`}
							litery alfabetu
						</div>
						<div class="button-background"></div>
					</button>
				</div>
			</div>
		</div>
	</section>

	<Faq />

	<Footer />
{/if}

<style lang="postcss">
</style>
