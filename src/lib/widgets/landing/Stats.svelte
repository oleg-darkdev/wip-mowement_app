<script lang="ts">
	import { StatCard } from '$sharedUi';
	import { stats } from '$sharedData';
	// import {  } from '$entities'

	
</script>

<div id="" class="tab_component w-tabs">
	<div class="tab_tabs-content w-tab-content">
		<div class="tab_tab-pane">
			<div class="kr-m-values-layout">
				{#each stats as stat}
					<StatCard {stat} />
				{/each}
			</div>
		</div>
	</div>
</div>

<style lang="postcss">
	.kr-m-values-layout {
		grid-column-gap: 16px;
		grid-row-gap: 16px;
		grid-template-rows: auto;
		grid-template-columns: 1fr 1fr 1fr 1fr;
		grid-auto-columns: 1fr;
		align-items: start;
		display: grid;
	}

	@media screen and (max-width: 767px) {
		.kr-m-values-layout {
			grid-template-rows: auto auto;
			grid-template-columns: 1fr 1fr;
		}
	}

	@media screen and (max-width: 479px) {
		.kr-m-values-layout {
			grid-column-gap: 0px;
			grid-row-gap: 0px;
			grid-template-rows: auto auto;
			grid-template-columns: 1fr 1fr;
			margin-right: -1px;
		}
	}
</style>
