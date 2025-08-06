<script lang="ts">
	// import {  } from '$shared';
	// import {  } from '$widgets';
	// import {  } from '$entities'
	import { slide } from 'svelte/transition';
</script>

<ul
	transition:slide
	aria-label="Accordion Control Group Buttons"
	role="list"
	class="tab_content-list w-list-unstyled"
>
	<slot />
</ul>

<style lang="postcss">
</style>
