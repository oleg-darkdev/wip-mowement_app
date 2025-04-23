<script lang="ts">
	import { selectedAppMode, stepInstruction } from '$stores/app';

	const nextStep = () => {
		$stepInstruction++;
		$selectedAppMode.progress++;
	};
</script>

<button onclick={nextStep} class="button is-icon is-primary is-primary mt-8"
	><div class="button-text">
		<img src="images/right.svg" class="h-10 w-10" alt="" />
	</div>
	<div class="button-background"></div>
</button>

<style lang="postcss">
</style>
