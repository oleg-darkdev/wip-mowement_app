<script lang="ts">
	import { partnersList } from '$sharedData';

	// import {  } from '$shared';
	// import {  } from '$widgets';
	// import {  } from '$entities'
</script>

<div class="">
	<div class="partners-logos">
		{#each partnersList as { img, title, link }}
			<a href="/" target="_blank" class="link-block w-inline-block m-1">
				<img src={img} loading="lazy" alt="" class="footer-image" />
			</a>
		{/each}
	</div>
</div>

<style lang="postcss">
	.footer-image {
		height: 4rem;
	}
	.partners-logos {
		grid-column-gap: 0;
		grid-row-gap: 0;
		grid-template-rows: auto;
		/* grid-template-columns: 1fr 1fr 1fr; */
		grid-auto-columns: 1fr;
		display: grid;
	}

	@media screen and (min-width: 1020px) {
		.partners-logos {
			grid-template-columns: 1fr 1fr 1fr 1fr;
		}
	}
	@media screen and (max-width: 991px) {
		.partners-logos {
			grid-template-columns: 1fr 1fr 1fr;
		}
	}

	@media screen and (max-width: 479px) {
		.partners-logos {
			grid-template-columns: 1fr 1fr;
		}
	}
</style>
