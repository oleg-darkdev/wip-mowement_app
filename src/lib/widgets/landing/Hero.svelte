<script lang="ts">
	import { NextStepBtnLanding, PrevStepBtnLanding } from '$sharedUi';
	// import {  } from '$widgets';
	import { DemoWarningCard } from '$entitiesLanding';

	let { readyToUse = $bindable() } = $props();
</script>

<section class="section_hero-header">
	<div class="hero-header_slider-component">
		<div class="slider-hero_list-wrapper swiper swiper-01">
			<div class="slider-hero_list swiper-wrapper">
				<!-- <div class="slider-hero_list-item swiper-slide">
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
				</div> -->
				<div class="slider-hero_list-item swiper-slide">
					<div class="w-dyn-list">
						<div role="list" class="w-dyn-items">
							<div role="listitem" class="w-dyn-item">
								<div class="hero-header_slider-image-wrapper">
									<video
										src="video/banner_0.1.mp4"
										class="hero-header_slider-image"
										autoplay
										muted={readyToUse ? true : true}
										loop
										playsinline
									></video>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<DemoWarningCard bind:readyToUse />
	<!-- <div class="hero-header_info-grid">
		<PrevStepBtnLanding />

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
		<NextStepBtnLanding />
	</div> -->
</section>

<style lang="postcss">
	.hero-slider-info-block-wrap {
		grid-area: span 2 / span 1 / span 2 / span 1;
	}
	.hero-header_info-grid-item {
		border-top: 2px solid var(--black);
		border-right: 2px solid var(--black);
	}

	@media screen and (max-width: 991px) {
		.hero-header_info-grid-item {
			background-color: var(--white);
			border-top-width: 0;
			border-right-width: 0;
		}

		.hero-slider-info-block-wrap {
			/* grid-area: 2/1/3/3; */
			display: none;
		}
	}
</style>
