<script lang="ts">
	// import {  } from '$shared';
	// import {  } from '$widgets';
	// import {  } from '$entities'

	let { title, progress = $bindable(), finalStep } = $props();
</script>

<ul
	aria-label="Accordion Control Group Buttons"
	role="list"
	class="tab_content-list w-list-unstyled w-full"
>
	<li class="tab_list-item w-full">
		<div role="region" class="tab_item w-full">
			<div class="tab_item-title">
				<h4 class="heading-style-h6">{title}</h4>
			</div>
			<div class="tab_item-content">
				<div>
					<span class="hidden-sm"> progres </span><span>{progress}</span> /
					<span>{finalStep}</span>
				</div>
			</div>
		</div>
	</li>
</ul>

<style lang="postcss">
	.tab_item {
		
	}
</style>
