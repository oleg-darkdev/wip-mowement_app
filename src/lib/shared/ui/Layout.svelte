<script lang="ts">
	// import {  } from '$widgetsLanding';
	import {} from '$sharedData';
	import '../../../app/app.css';

	let { children } = $props();
</script>

<div class="page-wrapper">
	<main class="main-wrapper">
		{@render children()}
	</main>
</div>

<style lang="postcss">
</style>
