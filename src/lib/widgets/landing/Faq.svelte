<script lang="ts">
	import { faq } from '$sharedData';
	import { FaqCard } from '$entitiesLanding';
</script>

<section id="faq" class="section_tab-visit background-color-gray">
	<div class="padding-section-large">
		<div class="padding-global">
			<div class="w-layout-grid tab_content-component exhebitions">
				<div class="tab_content-left">
					<h3 class="tab_heading">Odpowiedzi <br /> i pytania.</h3>
				</div>
			</div>
			<div class="margin-top margin-xxlarge">
				<div class="accordion_list">
					<div class="w-layout-grid accordion_list-grid">
						{#each faq as data}
							<FaqCard {data} />
						{/each}
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<style lang="postcss">
</style>
