<script lang="ts">
	// import { slide } from 'svelte/transition'; transition:slide
</script>

<footer class="background-color-gray fixed bottom-0 left-0 h-24 w-full">
	<div class="mx-auto w-full max-w-4xl pb-1 lg:pb-6">
		<div class="mx-auto w-full max-w-lg">
			<div class="mx-auto flex justify-center gap-x-4">
				<slot />
			</div>
		</div>
	</div>
</footer>

<style lang="postcss">
</style>
