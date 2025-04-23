<script lang="ts">
	import { selectedAppMode, stepInstruction } from '$stores/app';

	const prevStep = () => {
		$stepInstruction--;
		$selectedAppMode.progress--;
	};
</script>

<button onclick={prevStep} class="button is-icon is-secondary mt-8"
	><div class="button-text"><img src="images/left.svg" class="h-10 w-10" alt="" /></div>
	<div class="button-background"></div>
</button>

<style lang="postcss">
</style>
