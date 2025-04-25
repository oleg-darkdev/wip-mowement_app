<script lang="ts">
	let { link, text } = $props();
</script>

<a
	href="/app"
	class="std-button black w-inline-block is__bigger max-w-lg transform transition delay-150 duration-300 ease-in-out hover:translate-x-8"
>
	<div class="button flex max-w-lg flex-row justify-between">
		<div class="button-text">Do sklepiku</div>

		<img src="/images/arrow.svg" loading="lazy" alt="arrow" class="button-arrow white" />
	</div>
</a>

<style lang="postcss">
	.button-arrow {
		width: 28px;
		height: 21px;
		margin-left: 10px;
		display: inline;
	}

	.button-arrow.white {
		filter: invert();
	}

	.std-button {
		background-color: var(--honeydew);
		color: var(--black);
		text-transform: uppercase;
		cursor: pointer;
		border: 1px solid #000;
		border-radius: 0;
		margin-left: 0;
		margin-right: 0;
		padding: 18px 32px;
		text-decoration: none;
		position: relative;
	}

	.std-button:hover {
		color: var(--black);
		background-color: #cdfabe;
	}
	/* 
	.std-button.is__black {
		background-color: var(--black);
		color: var(--white);
		border-style: none;
	}

	.std-button.is__black:hover {
		background-color: var(--hover-black);
	}

	.std-button.is__black.has__arrow {
		margin-right: 0;
		display: flex;
	}

	.std-button.is__black.is__bigger.is__100.margin-top-small {
		margin-top: 16px;
	}

	.std-button.is__black.is__bigger.is__100.is__not-active {
		border-color: var(--grey);
		background-color: var(--grey);
	}

	.std-button.newsletter-button,
	.std-button.is__100pct {
		width: 100%;
	}

	.std-button.cc-buy-button {
		margin-right: 16px;
		display: none;
	}

	.std-button.buy-button {
		text-align: center;
		width: 100%;
	}

	.std-button.buy-button:hover {
		color: var(--white-smoke);
	}

	.std-button.login {
		text-align: center;
		width: 100%;
		padding-top: 22px;
		padding-bottom: 22px;
	}

	.std-button.login.cc-registration-button {
		margin-top: 32px;
	}

	.std-button.login.is__violet:hover {
		background-color: #cdbdfc;
	}

	.std-button.login.is__violet.has__no-borders {
		border-style: none;
	}

	.std-button.login.black:hover {
		background-color: var(--hover-black);
	}

	.std-button.login.black.cc-register {
		margin-top: 32px;
	}

	.std-button.login.is__dark-grey,
	.std-button.login.cc-guest-button {
		background-color: var(--hover-grey);
	}

	.std-button.login.cc-guest-button:hover {
		background-color: #ccc;
	}

	.std-button.is__violet {
		background-color: var(--purple);
	}

	.std-button.is__violet:hover {
		color: var(--black);
		background-color: #c5b6f2;
	}

	.std-button.is__violet.cc-registration-button {
		margin-top: 32px;
	}

	.std-button.is__violet.is__passiv {
		border-style: none;
	}
 */
	.std-button.black {
		background-color: var(--black);
		color: var(--white);
	}

	.std-button.black:hover {
		background-color: var(--hover-black);
	}

	.std-button.is__bigger {
		padding-top: 21px;
		padding-bottom: 21px;
	}

	.std-button.is__grey {
		background-color: var(--hover-grey);
	}

	.std-button.is__grey:hover {
		background-color: #ccc;
	}

	.std-button.is__grey:active {
		background-color: #b3b3b3;
	}

	.std-button.is__red {
		background-color: var(--crimson);
		color: var(--white);
	}

	.std-button.is__red:hover {
		background-color: #ff4c73;
	}

	.std-button.is__red:active {
		background-color: #cc0e37;
	}

	.std-button.is__white:hover {
		background-color: var(--hover-grey);
	}

	.std-button.passiv {
		background-color: rgba(0, 0, 0, 0);
		border-color: #ccc;
	}

	.std-button.passiv:hover {
		border-color: var(--black);
		background-color: var(--hover-grey);
	}
</style>
