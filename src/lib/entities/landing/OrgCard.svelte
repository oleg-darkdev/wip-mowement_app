<script lang="ts">
	// import {  } from '$shared';
	// import {  } from '$widgets';
	// import {  } from '$entities'

	let { title, localisation, anchor, abbr, shortDesc, id, desc } = $props();
</script>

<li id={anchor} class="legal_list-item">
	<div role="region" class="legal_item">
		<div class="legal_item-title">
			<h3 class="heading-style-h6"><span class='mr-4'>{id}.</span> {abbr}</h3>
			<div class="text-size-medium w-embed">
				<p class="">
					<em>{title}</em> <strong>{localisation}</strong>
				</p>
			</div>
		</div>
		<div class="legal_item-content">
			<div>
				{shortDesc}
			</div>
		</div>
	</div>
</li>

<style lang="postcss">
</style>
