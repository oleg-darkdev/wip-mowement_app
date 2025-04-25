<script lang="ts">
	import { selectedMenu } from '$stores/app';
</script>

<button
	onclick={() => ($selectedMenu = 1)}
	class="button {$selectedMenu == 1 ? 'is-secondary' : 'is-primary'} is-small is-icon mt-8"
	><div class="button-text">
		<img
			src={$selectedMenu == 1 ? 'images/play-dark.svg' : 'images/play-light.svg'}
			class="h-10 w-10"
			alt=""
		/>
	</div>
	<div class="button-background"></div>
</button>

<style lang="postcss">
</style>
