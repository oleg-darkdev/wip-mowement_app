<script lang="ts">
	// import {  } from '$shared';
	// import {  } from '$widgets';
	// import {  } from '$entities';

	import { balance } from '$stores/app';
</script>

<header class="background-color-gray mb-6 w-full">
	<div class="mx-auto max-w-2xl">
		<h2 class="heading-style-medium text-center">
			<!-- Zebrane: -->
			{$balance}
			<span
				><img
					src="/images/dove-icon_black.svg"
					class="-ml-2 h-10 w-6 pb-2 lg:-ml-6 lg:h-20 lg:w-14"
					alt=""
				/></span
			>
		</h2>
	</div>
</header>

<style lang="postcss">
</style>
