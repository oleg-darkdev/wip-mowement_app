<script lang="ts">
	import { goals } from '$sharedData';
	// import {  } from '$widgets';
	// import {  } from '$entities'
</script>

<div class="tab_tabs-content w-tab-content">
	<div class="tab_tab-pane w-tab-pane w--tab-active">
		<div class="w-layout-grid tab_content-component">
			<div class="tab_content-left">
				<div class="margin-bottom margin-small">
					<!-- <br /> o ruchu	 <br /> "Wolność i Pokój" -->
					<h3 class="tab_heading">Ogólne informacje o ruchu <br /> "Wolność i Pokój"</h3>
				</div>
				<article class="text-size-medium">
					<!-- <div class="margin-bottom margin-small">
						<h3 class="tab_heading">
							O ruchu <br /> "Wolność i Pokój"
						</h3>
					</div> -->
					<p class="text-size-medium mb-10">
						Ruch Wolność i Pokój (WiP) – niezależne ugrupowanie społeczno-polityczne należące do
						nurtu „solidarnościowego”, działające w opozycji wobec władz komunistycznych, w latach
						1985–1992 w Polsce. Większość uczestników Ruchu WiP stanowili studenci i przedstawiciele
						środowisk młodzieżowych (od anarchistów po aktywistów kościelnych).
						<span class="text-weight-bold"
							>Ruch przeprowadził liczne akcje propagandowe i protestacyjne. Liczył w szczytowym
							okresie rozwoju kilkuset członków.
						</span>
					</p>

					<span class="block uppercase">Program ruchu:</span>
					<div class="w-richtext mb-10">
						<ul role="list">
							{#each goals as goal}
								<li><strong>{goal}</strong></li>
							{/each}
						</ul>
					</div>

					<!-- <p><strong>Lorem Ipsum jest tekstem</strong></p>
					<p class="mb-20">
						<a href="/" class="">
							<span>
								<strong
									>Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w przemyśle
									poligraficznym.
								</strong>
							</span>
						</a>
					</p> -->

					<!-- <p class="mb-20">
						<span class="block uppercase">Lorem Ipsum:</span>
						<strong>100 Lorem Ipsum jest tekstem</strong>
						<br />
						<em>13. April – 14. September 2025 - Lorem Ipsum jest tekstem.</em>
						Impulsem do powstania ruchu była obrona szczecińskiego działacza Niezależnego Zrzeszenia
						Studentów (NZS) Marka Adamkiewicza, który za odmowę złożenia przysięgi wojskowej został w
						grudniu 1984 r. skazany i uwięziony w Zakładzie Karnym w Stargardzie. W dniach 17–23 marca
						1985 r. w ramach protestu przeprowadzono w kościele św. Krzysztofa w Podkowie Leśnej głodówkę,
						w której uczestniczyło około dwudziestu osób, przeważnie związanych z NZS.
					</p>

					<p>
						O ideach ruchu pokojowego z protestującymi rozmawiał Jacek Kuroń. Akcja zakończyła się
						konferencją, na której zapowiedziano powołanie ruchu pokojowego, co formalnie stało się
						14 kwietnia w Krakowie.
					</p>

					<p>
						<span class="block uppercase">Lorem Ipsum:</span>
						<strong>
							<em>
								Lorem Ipsum jest tekstem stosowanym: jako przykładowy wypełniacz w przemyśle
								poligraficznym. <br />‍
							</em>
						</strong>
						<em
							>4. Juli – 27. September 2025, Lorem Ipsum jest tekstem stosowanym <br /> jako przykładowy
							wypełniacz w przemyśle poligraficznym. Weekend 2025: 4.–6. Juli 2025
						</em>
					</p> -->

					<p class="mb-10">
						<em
							>W latach 1986–1989 w Gdańsku wydawano poza cenzurą Nieregularnik Ruchu Wolność i
							Pokój „A cappella”.
						</em>
						<strong>
							<em>
								W nieregularniku postulowano idee wolności w świecie bez granic. Wartości ruchu
								miały być osiągane tylko metodami non violence (bez przemocy i negatywnych emocji
								wobec przeciwników)
							</em>
						</strong>
					</p>

					<div class="mb-10">
						<p class="mb-2">
							<span>
								<strong>
									Członkowie ruchu założyli fundację
									<a
										href="https://fundacjawip.wordpress.com/"
										class="info_link-text"
										target="_blank"
									>
										<em>"Fundacja Wolność i Pokój"</em>
									</a> w lutym 2011 r.
								</strong>
							</span>
						</p>
						<div class="">
							<img
								src="images/logo-dark.svg"
								loading="lazy"
								class="h-16 w-32"
								alt="Logo 'Wolność i Pokój'"
							/>
						</div>
						<div class="">
							<p class="footer_text">
								Fundacja Wolność i Pokój <br /> ul. Zielone Zacisze 1/255<br /> 03-294 Warszawa
							</p>
						</div>
						<a href="mailto:fundacjawip@yahoo.com" class="footer_link w-inline-block">
							<div class="info_link-text uppercase"><strong>fundacjawip@yahoo.com</strong></div>
						</a>
						<div class="margin-bottom margin-xsmall">
							<p class="uppercase"><strong>KRS: 0000377302</strong></p>
							<p class="uppercase"><strong>NIP: 525-249-83-21</strong></p>
							<p class="uppercase"><strong>REGON: 14278929</strong></p>
						</div>
						<!-- <a href="tel:+498413051838" class="footer_link w-inline-block">
									<div class="footer_link-text">+49 (0) 841 305-1838</div>
								</a> -->
					</div>
				</article>
			</div>
			<div class="tab_content-right">
				<div class="image-wrapper align-center mb-10">
					<img
						sizes="(max-width: 991px) 90vw, 42vw"
						alt=""
						src="images/about.png"
						loading="lazy"
						class="image"
					/>
				</div>

				<div class="image-wrapper align-center mb-10">
					<!-- <img
						sizes="(max-width: 991px) 90vw, 42vw"
						alt=""
						src="images/about_2.jpg"
						loading="lazy"
						class="image"
					/> -->
					<video
						src="video/interview.mp4"
						class="image"
						autoplay
						muted
						loop
						playsinline
						loading="lazy"
					></video>

					<!--  -->
				</div>

				<!-- <div class="image-wrapper align-center">
					<img
						sizes="(max-width: 991px) 90vw, 42vw"
						alt=""
						src="images/about_3.webp"
						loading="lazy"
						class="image"
					/>
				</div> -->
			</div>
		</div>
	</div>
</div>

<style lang="postcss">
	.info_link-text {
		border-bottom: 1px solid;
		/* color: var(--dark-grey); */
		letter-spacing: 0.5px;
		/* text-transform: uppercase; */
		line-height: 1.2;
		transition: all 0.2s;
	}
	.info_link-text:hover {
		border-bottom-color: var(--white);
		color: var(--dark-grey);
	}
</style>
