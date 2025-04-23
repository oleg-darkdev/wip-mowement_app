<script lang="ts">
	import { selectedMenu, welcomeScreen } from '$stores/app';
</script>

<button onclick={() => ($selectedMenu = 2)} class="button {$selectedMenu == 2 ? 'is-secondary': 'is-primary'} mt-8"
	><div class="button-text">
		<img src="{$selectedMenu == 2 ? 'images/shop-dark.svg': 'images/shop-light.svg'}" class="h-10 w-10" alt="" />
	</div>
	<div class="button-background"></div>
</button>

<style lang="postcss">
</style>
