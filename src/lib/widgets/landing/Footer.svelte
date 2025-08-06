<script lang="ts">
	// otherLinks
	import { navigation, navigationNgo, partnersList } from '$sharedData';
	// import {  } from '$widgets';
	// import {  } from '$entities'
</script>

<footer id="kontakt" class="section_footer overflow-hidden">
	<div class="w-layout-grid footer_component">
		<div class="padding-global">
			<div class="container-large">
				<div class="w-layout-grid footer_row">
					<div id="" class="footer_grid footer_card-large">
						<div class="footer_card-content-top margin-bottom margin-large">
							<div class="footer_link-list">
								<div class="margin-bottom margin-large">
									<img
										src="images/logo-light.svg"
										loading="lazy"
										class="h-16 w-32"
										alt="Logo 'Wolność i Pokój'"
									/>
								</div>
								<div class="margin-bottom margin-xsmall">
									<h4 class="heading-style-h6">Kontakt</h4>
								</div>
								<div class="margin-bottom margin-xsmall">
									<p class="footer_text">
										Fundacja Wolność i Pokój <br /> ul. Zielone Zacisze 1/255<br /> 03-294 Warszawa
									</p>
								</div>
								<a href="mailto:fundacjawip@yahoo.com" class="footer_link w-inline-block">
									<div class="footer_link-text">fundacjawip@yahoo.com</div>
								</a>
								<div class="margin-bottom margin-xsmall">
									<p class="footer_text">KRS: 0000377302</p>
									<p class="footer_text">NIP: 525-249-83-21</p>
									<p class="footer_text">REGON: 14278929</p>
								</div>
								<!-- <a href="tel:+48" class="footer_link w-inline-block">
									<div class="footer_link-text">+48</div>
								</a> -->
							</div>
						</div>
						<div class="footer_card-content-bottom">
							<div class="footer_text">
								Development by <a
									href="https://oleg-darkdev.vercel.app/"
									target="_blank"
									class="footer_link"
								>
									<span class="footer_link-text">Oleg Medvedev</span>
								</a>
							</div>
							<!-- <div class="footer_text">
								Build by <a href="/ target="_blank" class="footer_link">
									<span class="footer_link-text">Lorem imopsum</span>
								</a>
							</div> -->
							<div class="footer_text">Copyright © 2005-2025, Fundacja Wolność i Pokój</div>
						</div>
					</div>
					<div class="footer_card-small">
						<div class="footer_link-list">
							<div class="margin-bottom margin-xsmall">
								<h4 class="heading-style-h6">Encyklopedia</h4>
							</div>
							{#each navigation as { text, link }}
								<a href="/{link}" class="footer_link w-inline-block">
									<div class="footer_link-text">{text}</div>
								</a>
							{/each}
						</div>
						<div class="footer_link-list">
							<div class="margin-bottom margin-xsmall">
								<h4 class="heading-style-h6">O Fundacji</h4>
							</div>
							{#each navigationNgo as { text, link }}
								<a href={link} target="_blank" class="footer_link w-inline-block">
									<div class="footer_link-text">{text}</div>
								</a>
							{/each}
						</div>
						<!-- <div class="footer_link-list">
							<div class="margin-bottom margin-xsmall">
								<h4 class="heading-style-h6">Lorem Ipsum</h4>
							</div>
							{#each navigationNgo as { text, link }}
								<a href="/{link}" class="footer_link w-inline-block">
									<div class="footer_link-text">{text}</div>
								</a>
							{/each}
						</div> -->
					</div>
					<!-- footer_card-small  -->
					<div class="bottom px-8 pb-4">
						<!-- <div class="footer_link-list">
							<div class="margin-bottom margin-xsmall">
								<h4 class="heading-style-h6">Przydatne odnośniki</h4>
							</div>

							{#each otherLinks as { text, link }}
								<a href="/{link}" class="footer_link w-inline-block">
									<div class="footer_link-text">{text}</div>
								</a>
							{/each}
						</div>
						<div class="footer_link-list">
							<div class="margin-bottom margin-xsmall">
								<h4 class="heading-style-h6">Lorem Ipsum</h4>
							</div>
							<a href="/" class="footer_link w-inline-block">
								<div class="footer_link-text">Lorem Ipsum</div>
							</a>
						</div> -->
						<div class="footer_link-list">
							<div class="margin-bottom margin-xsmall">
								<h4 class="heading-style-h6">Partnerzy projektu</h4>
							</div>
							<div class="flex w-full flex-row flex-wrap justify-between">
								{#each partnersList as { img, title, link }}
									<a href={link} target="_blank" class="link-block w-inline-block m-1">
										<img src={img} loading="lazy" alt="" class="footer-image" />
									</a>
								{/each}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</footer>

<style lang="postcss">
	.footer_grid {
		grid-area: 1/1/3/2;
	}
	.footer_card-small.bottom:before {
		content: '';
		display: block;
		position: absolute;
		width: 100vw;
		top: 0;
		left: 0;
		height: 2px;
		background-color: #e5e4e0;
	}

	.section_footer {
		background-color: var(--black);
		color: var(--white);
	}
	.footer_component {
		grid-column-gap: 2rem;
		grid-row-gap: 2rem;
		grid-template-rows: auto;
		grid-template-columns: 1fr;
	}
	.footer_row {
		grid-column-gap: 0rem;
		grid-row-gap: 0rem;
		grid-template-columns: 0.75fr 1fr;
	}
	.footer_card-large {
		border-right: 2px solid var(--grey);
		flex-direction: column;
		grid-template-rows: auto;
		grid-template-columns: 1fr 1fr;
		grid-auto-columns: 1fr;
		justify-content: space-between;
		align-items: stretch;
		padding-top: 4rem;
		padding-bottom: 4rem;
		padding-right: 2rem;
		display: flex;
	}
	.footer_card-small {
		grid-column-gap: 0rem;
		grid-row-gap: 0rem;
		grid-template-rows: auto;
		grid-template-columns: 1fr 1fr 1fr;
		grid-auto-columns: 1fr;
		align-items: stretch;
		padding-top: 4rem;
		padding-bottom: 4rem;
		padding-left: 2rem;
		display: grid;
	}
	.footer_card-small.bottom {
		position: relative;
	}
	.footer_link-list {
		flex-direction: column;
		grid-template-rows: auto;
		grid-template-columns: 100%;
		grid-auto-columns: 100%;
		place-items: flex-start start;
		display: flex;
	}
	.footer_link {
		padding-top: 0.5rem;
		padding-bottom: 0.5rem;
		text-decoration: none;
	}
	.footer_link-text {
		border-bottom: 1px solid var(--dark-grey);
		color: var(--dark-grey);
		letter-spacing: 0.5px;
		text-transform: uppercase;
		line-height: 1.2;
		transition: all 0.2s;
	}
	.footer_link-text:hover {
		border-bottom-color: var(--white);
		color: var(--white);
	}
	.footer_text {
		color: var(--dark-grey);
		letter-spacing: 0.5px;
		text-transform: uppercase;
		padding-top: 0.5rem;
		padding-bottom: 0.5rem;
		line-height: 1.3;
	}
	.footer-image {
		height: 4rem;
	}

	@media screen and (max-width: 991px) {
		.footer_row {
			grid-row-gap: 0rem;
			grid-template-columns: 1fr;
		}
		.footer_card-large {
			border-bottom: 2px solid var(--grey);
			border-right-style: none;
		}
		.footer_card-small {
			padding-left: 0;
		}
		.footer_card-small.bottom {
			border-top: 2px solid var(--grey);
		}
		.footer_card-content-bottom {
			margin-top: 2.5rem;
		}
	}

	@media screen and (max-width: 767px) {
		.footer_component {
			grid-column-gap: 1.5rem;
			grid-row-gap: 1.5rem;
		}
		.footer_card-large {
			grid-template-columns: 1fr;
		}
	}

	@media screen and (max-width: 479px) {
		.footer_card-small {
			grid-column-gap: 2rem;
			grid-row-gap: 2rem;
			flex-direction: column;
			display: flex;
		}
	}

	@media screen and (max-width: 991px) {
		.footer_card-small.bottom:before {
			display: none;
		}
	}
</style>
