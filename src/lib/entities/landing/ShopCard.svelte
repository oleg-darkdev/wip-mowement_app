<script lang="ts">
	// import {  } from '$shared';
	// import {  } from '$widgets';
	// import {  } from '$entities'

	let { product } = $props();
</script>

<a href="/" target="_blank" role="listitem" class="collection-item-products max-w-sm">
	<div class="link-block-product cc-landingpage w-inline-block">
		<div class="product-meta-wrapper">
			<div class="product-heading-wrapper">
				<h3 class="product-overview-heading">{product.title}</h3>
			</div>
			<div class="product-overview-price-wrapper">
				<div class="product-overview-price-holder main-price">
					{#each product.tags as tag}
					<div class="product-overview-price"><span class="mx-1">{tag}</span></div>
					{/each}
				</div>
				<div class="product-overview-price-holder sold-out">
					<div  class="product-overview-price">
						Cena: <span class="ml-2">{product.price} zl</span>
					</div>
				</div>
			</div>
		</div>
		<div class="product-thumbnail-wrapper">
			<img
				src={product.img}
				loading="lazy"
				alt={product.title}
				class="product-image cc-landingpage"
				sizes="(max-width: 479px) 61vw, (max-width: 767px) 48vw, (max-width: 991px) 31vw, 24vw"
			/>
			<!-- 				
 -->
		</div>
	</div>
</a>

<style lang="postcss">
	.product-overview-price-wrapper {
		flex-direction: column;
		align-items: flex-end;
		margin-left: 6px;
		display: flex;
	}
	.product-image {
		z-index: 0;
		object-fit: cover;
		width: 100%;
		height: 100%;
		display: block;
		position: absolute;
		top: 0%;
		bottom: 0%;
		left: 0%;
		right: 0%;
	}
	.product-image-hover-blend {
		z-index: 1;
		background-color: var(--white-smoke);
		position: absolute;
		top: 0%;
		bottom: 0%;
		left: 0%;
		right: 0%;
	}

	.product-image-wrapper {
		border: 1px solid #000;
		width: 100%;
		position: relative;
		overflow: hidden;
	}

	.zoom-product-image {
		z-index: 0;
		object-fit: cover;
		width: 100%;
		height: 100%;
		position: absolute;
		transform: scale(1.5);
	}

	.product-overview-price-holder {
		align-items: center;
		padding-left: 6px;
		padding-right: 6px;
		display: flex;
	}

	.product-thumbnail-wrapper {
		z-index: 1;
		mix-blend-mode: darken;
		width: 100%;
		padding-bottom: 100%;
		position: relative;
	}

	.product-overview-price {
		font-weight: 500;
	}

	.product-overview-price.off-price {
		text-decoration: line-through;
	}

	.product-overview-price-holder {
		align-items: center;
		padding-left: 6px;
		padding-right: 6px;
		display: flex;
	}

	.product-overview-price-holder.main-price {
		background-color: var(--purple);
	}

	.product-overview-price-holder.off-price {
		opacity: 0.4;
		margin-top: 3px;
		font-size: 13px;
	}

	.product-overview-price-holder.sold-out {
		background-color: var(--black);
		color: var(--white);
		white-space: nowrap;
		margin-top: 6px;
		padding-top: 2px;
		padding-bottom: 2px;
		font-size: 13px;
	}
	.product-overview-price-holder.main-price {
		background-color: var(--purple);
	}

	.product-overview-price-holder.off-price {
		opacity: 0.4;
		margin-top: 3px;
		font-size: 13px;
	}

	.product-overview-price-holder.sold-out {
		background-color: var(--black);
		color: var(--white);
		white-space: nowrap;
		margin-top: 6px;
		padding-top: 2px;
		padding-bottom: 2px;
		font-size: 13px;
	}

	.product-overview-heading {
		color: var(--black);
		text-transform: uppercase;
		margin-top: 0;
		margin-bottom: 0;
		font-size: 17px;
		font-weight: 700;
		line-height: 1.2;
		text-decoration: none;
	}

	.product-overview-heading:hover {
		color: var(--hover-black);
	}

	.product-meta-wrapper {
		z-index: 2;
		justify-content: space-between;
		align-items: flex-start;
		margin-top: 16px;
		margin-bottom: 16px;
		padding-left: 16px;
		padding-right: 16px;
		text-decoration: none;
		display: flex;
		position: relative;
	}

	.product-heading-wrapper {
		flex-direction: column;
		align-items: flex-start;
		margin-top: -2px;
		display: flex;
		position: relative;
	}
	.product-overview-price-wrapper {
		flex-direction: column;
		align-items: flex-end;
		margin-left: 6px;
		display: flex;
	}

	.product-overview-price {
		font-weight: 500;
	}

	.link-block-product {
		z-index: 0;
		background-color: var(--gray);
		outline-color: var(--black);
		outline-offset: 0px;
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
		outline-offset: 0px;
		outline-width: 1px;
		outline-style: solid;
	}

	.link-block-product:focus-visible {
		outline-width: 3px;
	}

	.link-block-product[data-wf-focus-visible] {
		outline-width: 3px;
	}

	.link-block-product.cc-landingpage {
		background-color: var(--gray);
	}

	.collection-item-products {
		width: 100%;
	}

	.heart-dektop {
		background-image: url('/images/heart_black.svg');
		background-position: 50%;
		background-repeat: no-repeat;
		background-size: auto;
		min-width: 33px;
		height: 34px;
		margin-left: -12px;
		display: inline-block;
		position: relative;
	}
	.margin-vertical {
		margin-left: 0;
		margin-right: 0;
	}

	.big-heading {
		text-transform: uppercase;
		margin-top: 0;
		margin-bottom: 0;
		font-size: 50px;
		font-weight: 700;
		line-height: 1.2;
	}

	.collection-list-products {
		grid-column-gap: 0px;
		grid-row-gap: 0px;
		grid-template-rows: auto;
		grid-template-columns: 1fr 1fr 1fr;
		grid-auto-columns: 1fr;
		display: grid;
	}

	.collection-list-products.four-items {
		grid-template-columns: 1fr 1fr 1fr 1fr;
	}

	.collection-list-products.two-items {
		grid-template-columns: 1fr 1fr;
	}

	.collection-list-products.bestseller,
	.collection-list-products.merkliste {
		grid-template-columns: 1fr 1fr 1fr 1fr;
	}

	.big-heading.cc-landing-heading {
		color: var(--black);
		max-width: 800px;
		margin-top: 0;
		margin-bottom: 24px;
		font-size: 78px;
		line-height: 1;
		display: inline-block;
	}

	.big-heading.has__all-caps {
		text-transform: uppercase;
	}

	.big-heading.has__all-caps.cc-zubereitung-heading {
		max-width: 660px;
	}

	.big-heading.margin-bottom.margin-medium.cc-kr-m-heading {
		color: var(--white);
	}

	.big-heading.cc-item-count {
		background-image: linear-gradient(
			to right,
			rgba(222, 212, 255, 0),
			#d3c4ff 50%,
			rgba(222, 212, 255, 0)
		);
		margin-left: -15px;
		margin-right: 7px;
		padding-left: 15px;
		padding-right: 15px;
		display: inline-block;
	}

	.big-heading.is__inline-block.cc-welcome-name {
		margin-right: 12px;
	}

	.big-heading.is__inline-block.cc-eyes {
		margin-left: 12px;
		position: relative;
		top: 3px;
	}

	.big-heading.cc-stores {
		display: inline;
	}

	.big-heading.cc-company-statement {
		border-bottom: 1px solid var(--black);
		padding-bottom: 8px;
		display: inline-block;
	}

	.big-heading.heart-dektop {
		background-image: url('/images/heart_black.svg');
		background-position: 50%;
		background-repeat: no-repeat;
		background-size: auto;
		min-width: 33px;
		height: 34px;
		margin-left: -12px;
		display: inline-block;
		position: relative;
	}

	.heading-wrapper {
		justify-content: flex-start;
		align-items: center;
	}

	.heading-wrapper.is__white-font {
		color: var(--white);
	}

	.heading-wrapper.cc-bestseller {
		flex-wrap: wrap;
	}
	.pw-big-heading.is__inline-block.cc-bestseller-heading,
	.pw-big-heading.is__inline.cc-bestseller-heading {
		margin-right: 16px;
	}

	.heading-wrapper-kitchen {
		text-transform: uppercase;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;
		margin-bottom: 32px;
		display: flex;
	}

	.section.cc-bestseller {
		position: relative;
		overflow: hidden;
	}
	.big-heading.is__inline-block.cc-bestseller-heading,
	.big-heading.is__inline.cc-bestseller-heading {
		margin-right: 16px;
	}

	@media screen and (max-width: 479px) {
		.big-heading.is__inline.cc-bestseller-heading {
			margin-right: 0;
		}

		.heading-wrapper.cc-bestseller {
			position: relative;
		}

		.product-overview-heading {
			font-size: 16px;
		}
	}

	@media screen and (min-width: 1440px) {
		.big-heading.has__all-caps.cc-zubereitung-heading {
			font-size: 62px;
		}
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

		.product-meta-wrapper {
			flex-direction: column;
			justify-content: flex-start;
		}
	}

	@media screen and (max-width: 767px) {
		.product-overview-price-wrapper {
			flex-flow: wrap;
			justify-content: flex-start;
			align-items: center;
			margin-left: 0;
		}

		.product-overview-price-holder {
			margin-bottom: 6px;
		}

		.product-overview-price-holder.main-price {
			margin-right: 6px;
		}

		.product-overview-price-holder.off-price,
		.product-overview-price-holder.sold-out {
			margin-top: 0;
		}
		.product-overview-price-holder {
			margin-bottom: 6px;
		}

		.product-overview-price-holder.main-price {
			margin-right: 6px;
		}

		.product-overview-price-holder.off-price,
		.product-overview-price-holder.sold-out {
			margin-top: 0;
		}

		.collection-list-products.bestseller :nth-child(-n + 4) {
			display: flex;
		}
		.big-heading.cc-landing-heading {
			margin-bottom: 9px;
		}
		.collection-list-products.three-items,
		.collection-list-products.bestseller,
		.collection-list-products.merkliste {
			grid-template-columns: 1fr 1fr;
		}

		.big-heading.cc-item-count {
			font-size: 48px;
			line-height: 1.1;
		}
		.product-heading-wrapper {
			width: 100%;
			margin-bottom: 6px;
			padding-right: 19px;
		}

		.product-heading-wrapper.item-menu,
		.product-heading-wrapper.cc-item-menu {
			padding-right: 0;
		}
	}
	@media screen and (min-width: 1920px) {
		.big-heading {
			font-size: 56px;
		}

		.collection-list-products.bestseller {
			grid-template-columns: 1fr 1fr 1fr 1fr;
		}

		.collection-list-products.specials {
			grid-template-columns: 1fr 1fr 1fr;
		}

		.collection-list-products.merkliste {
			grid-template-columns: 1fr 1fr 1fr 1fr;
		}
	}
	@media screen and (max-width: 991px) {
		.big-heading.cc-landing-heading {
			font-size: 52px;
		}
		.collection-list-products.bestseller,
		.collection-list-products.merkliste {
			grid-template-columns: 1fr 1fr 1fr;
		}
	}

	@media screen and (max-width: 479px) {
		.collection-list-products.bestseller,
		.collection-list-products.merkliste {
			margin-left: -16px;
			margin-right: -16px;
		}

		.product-heading-wrapper {
			padding-right: 0;
			position: static;
		}
		.big-heading {
			line-height: 1.1;
		}

		.big-heading.has__all-caps.cc-cart-heading {
			font-size: 45px;
		}

		.big-heading.heart-dektop {
			display: none;
		}

		.product-meta-wrapper {
			margin-bottom: 8px;
			position: static;
		}
	}
</style>
