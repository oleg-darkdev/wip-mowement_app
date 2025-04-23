<script lang="ts">
	import { fade, fly } from 'svelte/transition';

	let { data } = $props();
	let showAnswer = $state(false);
</script>

<div  onclick={() => (showAnswer = !showAnswer)} style="background-color:rgb(241,239,238)" class="accordion_accordion">
	<div class="accordion_question">
		<div class="heading-style-h6">
			{data.q}
		</div>

		<div class="accordion_icon w-embed">
			<svg
				width="100%"
				height="100%"
				viewBox="0 0 32 32"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M25.3333 15.667V16.3336C25.3333 16.7018 25.0349 17.0003 24.6667 17.0003H17V24.667C17 25.0351 16.7015 25.3336 16.3333 25.3336H15.6667C15.2985 25.3336 15 25.0351 15 24.667V17.0003H7.3333C6.96511 17.0003 6.66663 16.7018 6.66663 16.3336V15.667C6.66663 15.2988 6.96511 15.0003 7.3333 15.0003H15V7.33365C15 6.96546 15.2985 6.66699 15.6667 6.66699H16.3333C16.7015 6.66699 17 6.96546 17 7.33365V15.0003H24.6667C25.0349 15.0003 25.3333 15.2988 25.3333 15.667Z"
					fill="currentColor"
				></path>
			</svg>
		</div>
	</div>
	<!-- <span class="text-weight-semibold">
												Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w przemyśle
												poligraficznym.
											</span> -->
	{#if showAnswer}
		<div in:fly={{ y: 200 }} out:fade class="accordion_answer">
			<div class="margin-bottom margin-small">
				<div class="margin-bottom margin-large">
					{#each data.a as answer}
						<p class="text-size-medium mb-3">
							{answer}
						</p>
					{/each}
				</div>
			</div>
		</div>
	{/if}
</div>

<style lang="postcss">
</style>
