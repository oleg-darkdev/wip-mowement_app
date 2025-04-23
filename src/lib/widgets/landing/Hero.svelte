<script lang="ts">
	// import {  } from '$shared';
	// import {  } from '$widgets';
	// import {  } from '$entities'
</script>

<section class="section_hero-header">
	<div class="hero-header_slider-component">
		<div class="slider-hero_list-wrapper swiper swiper-01">
			<div class="slider-hero_list swiper-wrapper">
				<div class="slider-hero_list-item swiper-slide">
					<div class="w-dyn-list">
						<div role="list" class="w-dyn-items">
							<div role="listitem" class="w-dyn-item">
								<div class="hero-header_slider-image-wrapper">
									<img
										src="images/banner.jpg"
										alt=""
										sizes="100vw"
										class="hero-header_slider-image"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="hero-header_info-grid">
		<div class="banner-prew-slide-btn hero-header_info-grid-item">
			<div class="button-prev-slide"></div>
		</div>
		<div class="hero-slider-info-block-wrap hero-header_info-grid-item">
			<div class="w-dyn-list">
				<div role="list" class="w-dyn-items">
					<div role="listitem" class="w-dyn-item">
						<div class="hero-header_info-content">
							<div class="margin-bottom margin-xsmall">
								<h1 class="heading-style-h4">Lorem Ipsum jest tekstem</h1>
							</div>
							<div class="margin-bottom margin-tiny">
								<p class="text-size-medium">Został po raz pierwszy użyty w XV w.</p>
							</div>
							<div class="exhibition-date text-size-medium w-embed">
								<p class="exhibition-date">13. Apr 2025 – 14. Sep 2025</p>
							</div>
							<div class="margin-top margin-medium">
								<div class="button-group">
									<a href="/" class="button is-secondary w-inline-block">
										<div class="button-text">Lorem Ipsum</div>
										<div class="button-background"></div>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="banner-next-slide-btn hero-header_info-grid-item">
			<div class="button-next-slide"></div>
		</div>
	</div>
</section>

<style lang="postcss">
	.banner-next-slide-btn {
		grid-area: span 1 / span 1 / span 1 / span 1;
	}

	.hero-slider-info-block-wrap {
		grid-area: span 2 / span 1 / span 2 / span 1;
	}

	.banner-prew-slide-btn {
		grid-area: span 1 / span 1 / span 1 / span 1;
		justify-self: stretch;
	}

	@media screen and (max-width: 991px) {
		.banner-next-slide-btn {
			grid-area: 1/2/2/3;
		}

		.hero-slider-info-block-wrap {
			/* grid-area: 2/1/3/3; */
			display: none;
		}

		.banner-prew-slide-btn {
			grid-area: 1/1/2/2;
		}
	}
</style>
