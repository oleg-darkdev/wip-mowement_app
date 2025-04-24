<script lang="ts">
	import { slide } from 'svelte/transition';
	import { selectedAppMode } from '$stores/app';
	// import { ProgressPanel } from '$entitiesApp';
</script>

<section class="flex h-full w-full max-w-2xl content-center items-center overflow-hidden">
	<div transition:slide class="h-full w-full px-4">
		<slot />
	</div>
</section>

<style lang="postcss">
</style>
