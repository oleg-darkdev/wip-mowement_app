<script lang="ts">
	import { productslIst } from '$sharedData';
	import { ShopCard } from '$entitiesLanding';
</script>

<!-- <div id="" class="tab_component w-tabs"> -->
<!-- <div class="tab_tabs-content w-tab-content"> -->
<div class="padding-global-shop">
	<div class="container-large">
		<div class="tab_tab-pane">
			<div class="mb-10">
				<div class="max-width-xlarge lg:pl-0 md:pl-0 pl-6">
					<h2 class="heading-style-medium ">
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

			<!-- <div class="lg:pl-0 md:pl-0 pl-6"><slot /></div> -->
		</div>
	</div>
</div>

<!-- </div> -->
<!-- </div> -->

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
		/* grid-template-columns: 1fr 1fr 1fr; */
		grid-auto-columns: 1fr;
		display: grid;
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
	@media screen and (min-width: 1020px) {
		.collection-list-products.bestseller {
			grid-template-columns: 1fr 1fr 1fr 1fr;
		}
	}
	@media screen and (max-width: 991px) {
		.collection-list-products.bestseller {
			grid-template-columns: 1fr 1fr 1fr;
		}
	}
	@media screen and (max-width: 479px) {
		.padding-global-shop {
			padding: 0;
		}
		.big-heading {
			line-height: 1.1;
		}
		.big-heading.heart-dektop {
			min-width: 20px;
			height: 26px;
			margin-left: 4px;
		}
		.collection-list-products.bestseller {
			grid-template-columns: 1fr 1fr;
		}
	}
</style>
