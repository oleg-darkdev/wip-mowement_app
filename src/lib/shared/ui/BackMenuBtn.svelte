<script lang="ts">
	// import {  } from '$shared';
	// import {  } from '$widgets';
	import { selectedMenu, welcomeScreen } from '$stores/app';
</script>

<button
	onclick={() => {
		$selectedMenu = 0;
		$welcomeScreen = false;
	}}
	class="button {$selectedMenu == 0 ? 'is-secondary': 'is-primary'} mt-8"
	><div class="button-text">
		<img src="{$selectedMenu == 0 ? 'images/menu-dark.svg': 'images/menu-light.svg'}" class="h-10 w-10" alt="" />
	</div>
	<div class="button-background"></div>
</button>

<style lang="postcss">
</style>
