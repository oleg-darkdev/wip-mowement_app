<script lang="ts">
	import { PartnersList } from '$entitiesLanding';
	import { partnersList, communityList } from '$sharedData';

	// import {  } from '$entities'
</script>

<div id="" class="tab_component w-tabs">
	<div class="tab_tabs-content w-tab-content">
		<div class="tab_tab-pane">
			<div class="max-w-2xl">
				<div class="margin-bottom">
					<div class="max-width-xlarge">
						<h2 class="heading-style-medium">Podziękowanie</h2>
					</div>
				</div>

				<div class="tab_content-right mb-20">
					<p class="text-size-medium">
						Realizacja tego projektu była możliwa tylko dzięki współpracy społeczności i pomocy
						partnerów.
					</p>
				</div>

				<div class="w-layout-grid tab_content-component exhebitions">
					<div class="tab_content-left">
						<h3 class="tab_heading">Partnerzy.</h3>
						<!-- projektu -->
					</div>
				</div>

				<PartnersList />

				<!-- <div class="w-layout-grid tab_content-component exhebitions">
					<div class="tab_content-left">
						<h3 class="tab_heading">Społeczność.</h3>
					</div>
				</div>

				<PartnersList {communityList} /> -->
			</div>
		</div>
	</div>
</div>

<style lang="postcss">
</style>
