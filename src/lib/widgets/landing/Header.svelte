<script lang="ts">
	import { slide } from 'svelte/transition';

	import { navigation } from '$sharedData';
	// import {  } from '$widgets';
	// import {  } from '$entities'

	let showMenu = $state(true);
</script>

<header class="navbar_component">
	{#if showMenu}
		<div class="navbar_mobile-overlay" transition:slide>
			<nav class="navbar_menu">
				<ul role="list" class="navbar_menu-list w-list-unstyled">
					{#each navigation as { text, link }}
						<li
							onclick={() => {
								showMenu = !showMenu;
								location.href = link;
							}}
							class="navbar_list-item navbar_link-text"
						>
							{text}
						</li>
					{/each}
					<!-- .locales-wrapper {} -->
					<li class="navbar_list-item lang-switcher">
						<div class="locales-wrapper">
							<div role="list" class="locales-element-wrapper">
								<div role="listitem" class="navbar2_link">
									<a href="/pl" aria-current="page" class="navbar_link-text language w--current"
										>PL</a
									>
									<div class="tab_link-background"></div>
								</div>
								<div role="listitem" class="navbar2_link">
									<a href="/en" class="navbar_link-text language">EN</a>
									<div class="tab_link-background"></div>
								</div>
							</div>
						</div>
					</li>
				</ul>
			</nav>
		</div>
	{/if}

	<div class="navbar_mobile">
		<div class="navbar_mobile-container">
			<a
				href="/pl"
				aria-label="Logo"
				aria-current="page"
				class="navbar_logo-link w-nav-brand w--current"
			>
				<img
					src="images/logo-dark.svg"
					class="h-8 w-32"
					loading="lazy"
					alt="Logo 'Wolność i Pokój'"
				/>
			</a>
			<button
				onclick={() => (showMenu = !showMenu)}
				aria-label="Menu Toggle"
				class="navbar_mobile-menu-toggle w-inline-block"
			>
				<div class="menu-icon">
					<div class="menu-icon_line-top"></div>
					<div class="menu-icon_line-middle">
						<div class="menu-icon_line-middle-inner"></div>
					</div>
					<div class="menu-icon_line-bottom"></div>
				</div>
			</button>
		</div>
	</div>

	<div class="navbar_desktop">
		<div class="navbar_desktop-container">
			<a
				href="/"
				aria-label="Logo"
				aria-current="page"
				class="navbar_logo-link w-nav-brand w--current"
			>
				<img
					src="images/logo-dark.svg"
					class="h-8 w-32"
					loading="lazy"
					alt="Logo 'Wolność i Pokój'"
				/>
			</a>
			<nav class="navbar_menu">
				<ul role="list" class="navbar_menu-list w-list-unstyled">
					{#each navigation as { text, link }}
						<li class="navbar_list-item">
							<a href={link} class="navbar2_link w-inline-block">
								<div class="navbar_link-text">{text}</div>
								<div class="tab_link-background"></div>
							</a>
						</li>
					{/each}

					<li class="navbar_list-item lang-switcher">
						<div class="locales-wrapper">
							<div role="list" class="locales-element-wrapper">
								<div role="listitem" class="navbar2_link">
									<a href="/pl" aria-current="page" class="navbar_link-text language w--current"
										>Pl</a
									>
									<div class="tab_link-background"></div>
								</div>
								<div role="listitem" class="navbar2_link">
									<a href="/en" class="navbar_link-text language">EN</a>
									<div class="tab_link-background"></div>
								</div>
							</div>
						</div>
					</li>
				</ul>
			</nav>
			<div class="button-group hide">
				<a href="#" class="button is-small w-button">En</a>
			</div>
		</div>
	</div>
</header>

<style lang="postcss">
	.locales-element-wrapper {
		grid-column-gap: 1rem;
		grid-row-gap: 1rem;
		align-items: center;
		display: flex;
		position: relative;
	}
	.locales-element-wrapper.sw1 {
		grid-column-gap: 1rem;
		grid-row-gap: 1rem;
	}

	.lang-switcher {
	}
	.navbar_component {
		z-index: 3;
		border-bottom: 2px solid var(--black);
		background-color: var(--white);
		padding-left: 5%;
		padding-right: 5%;
		position: relative;
	}
	.navbar_mobile-overlay {
		z-index: 1;
		background-color: #cccac6;
		display: none;
		position: fixed;
		inset: 0%;
	}
	.navbar_menu-list {
		justify-content: space-between;
		align-self: auto;
		align-items: center;
		margin-bottom: 0;
		list-style-type: none;
		display: flex;
	}
	.navbar_list-item {
		margin-bottom: 0;
		padding-left: 1rem;
		padding-right: 1rem;
	}
	.navbar_list-item.lang-switcher {
		margin-left: 2rem;
	}
	.navbar_list-item.lang-switcher.none {
		display: none;
	}
	.navbar_link {
		letter-spacing: 0.5px;
		text-transform: uppercase;
		border-bottom: 4px solid #0000;
		padding-top: 0.5rem;
		padding-bottom: 0.5rem;
		font-size: 0.875rem;
		font-weight: 600;
		display: block;
	}
	.navbar_link.w--current {
		border-bottom-width: 4px;
		border-bottom-color: var(--black);
	}
	.navbar_mobile {
		z-index: 2;
		align-items: center;
		width: 100%;
		height: auto;
		min-height: auto;
		display: none;
		position: relative;
		inset: 0% 0% auto;
	}
	.navbar_mobile-container {
		justify-content: space-between;
		align-items: center;
		width: 100%;
		height: 100%;
		margin-left: auto;
		margin-right: auto;
		display: flex;
	}
	.navbar_logo-link {
		margin-top: 1rem;
		margin-bottom: 1rem;
	}
	.navbar_mobile-menu-toggle {
		display: block;
	}
	.navbar_desktop {
		z-index: 1;
		border-bottom: 2px solid var(--black);
		background-color: var(--white);
		align-items: flex-end;
		width: 100%;
		height: auto;
		min-height: auto;
		padding-left: 5%;
		padding-right: 5%;
		display: flex;
		position: fixed;
		inset: 0% 0% auto;
	}
	.navbar_desktop-container {
		justify-content: space-between;
		align-items: flex-end;
		width: 100%;
		max-width: 80rem;
		height: 100%;
		margin-left: auto;
		margin-right: auto;
		display: flex;
	}

	.navbar2_link {
		background-color: #0000;
		border-bottom: 4px solid #0000;
		flex: none;
		padding: 0.5rem 0;
		position: relative;
		overflow: visible;
	}
	.navbar2_link.w--current {
		border-bottom-width: 4px;
		border-bottom-color: var(--black);
		background-color: #0000;
	}
	.navbar2_link.w--current:focus-visible,
	.navbar2_link.w--current[data-wf-focus-visible] {
		outline-color: var(--black);
		outline-offset: 0px;
		outline-width: 2px;
		outline-style: solid;
	}
	.navbar_link-text {
		letter-spacing: 1px;
		text-transform: uppercase;
		font-size: 0.875rem;
		font-weight: 600;
	}
	.navbar_link-text.language {
		opacity: 0.5;
		display: block;
	}
	.navbar_link-text.language.w--current {
		opacity: 1;
	}
	.navbar1_component {
		border-bottom: 2px solid var(--black);
		background-color: var(--white);
		align-items: center;
		width: 100%;
		height: auto;
		min-height: 4.5rem;
		padding-left: 5%;
		padding-right: 5%;
		display: flex;
		position: fixed;
	}
	.navbar1_container {
		justify-content: space-between;
		align-items: flex-end;
		width: 100%;
		height: 100%;
		margin-left: auto;
		margin-right: auto;
		display: flex;
	}
	.navbar1_menu {
		align-items: center;
		display: flex;
		position: static;
	}
	.navbar1_link {
		letter-spacing: 0.5px;
		text-transform: uppercase;
		padding: 0.5rem 1rem;
		font-size: 0.875rem;
		font-weight: 600;
	}
	.navbar1_link.w--current {
		color: var(--black);
	}
	.navbar1_menu-button {
		padding: 0;
	}

	@media screen and (max-width: 991px) {
		.menu-icon {
			flex-direction: column;
			justify-content: center;
			align-items: center;
			width: 48px;
			height: 48px;
			margin-right: -0.5rem;
			padding-bottom: 0;
			padding-right: 0;
			display: flex;
		}
		.menu-icon_line-top {
			background-color: var(--black);
			width: 35px;
			height: 2px;
			padding-bottom: 0;
			padding-right: 0;
		}
		.menu-icon_line-middle {
			background-color: var(--black);
			justify-content: center;
			align-items: center;
			width: 35px;
			height: 2px;
			margin-top: 8px;
			margin-bottom: 8px;
			padding-bottom: 0;
			padding-right: 0;
			display: flex;
		}
		.menu-icon_line-middle-inner {
			width: 4px;
			height: 0;
			padding-bottom: 0;
			padding-right: 0;
		}
		.menu-icon_line-bottom {
			background-color: var(--black);
			width: 35px;
			height: 2px;
			padding-bottom: 0;
			padding-right: 0;
		}

		.menu-icon1 {
			flex-direction: column;
			justify-content: center;
			align-items: center;
			width: 48px;
			height: 48px;
			margin-right: -0.5rem;
			padding-bottom: 0;
			padding-right: 0;
			display: flex;
		}
		.menu-icon1_line-top {
			background-color: var(--black);
			width: 24px;
			height: 2px;
			padding-bottom: 0;
			padding-right: 0;
		}
		.menu-icon1_line-middle {
			background-color: var(--black);
			justify-content: center;
			align-items: center;
			width: 24px;
			height: 2px;
			margin-top: 6px;
			margin-bottom: 6px;
			padding-bottom: 0;
			padding-right: 0;
			display: flex;
		}
		.menu-icon1_line-bottom {
			background-color: var(--black);
			width: 24px;
			height: 2px;
			padding-bottom: 0;
			padding-right: 0;
		}
		.locales-element-wrapper.sw1 {
			justify-content: center;
			margin-top: 2.5rem;
		}

		.navbar_component {
			padding-left: 2rem;
			padding-right: 2rem;
		}
		.navbar_mobile-overlay {
			background-color: var(--grey);
			/* display: none; */
		}
		.navbar_menu {
			flex-direction: column;
			justify-content: center;
			height: 100%;
			padding-top: 0;
			display: flex;
		}
		.navbar_menu-list {
			flex-direction: column;
			padding-top: 2rem;
			padding-bottom: 2rem;
		}
		.navbar_list-item {
			margin-bottom: 0.5rem;
		}
		.navbar_list-item.lang-switcher {
			margin-left: 0;
		}
		.navbar_link {
			border-bottom-width: 2px;
			padding-bottom: 0;
			font-size: 3rem;
		}
		.navbar_link.w--current {
			border-bottom-width: 2px;
		}
		.navbar_mobile {
			border-bottom: 2px solid var(--black);
			background-color: var(--white);
			padding-left: 5%;
			padding-right: 5%;
			display: flex;
			position: fixed;
		}
		.navbar_mobile-container {
			display: flex;
		}
		.navbar_logo-link {
			margin-top: 1.5rem;
			margin-bottom: 1.5rem;
		}
		.navbar_desktop {
			display: none;
		}
		.navbar_link-text {
			font-size: 1.25rem;
		}

		.navbar1_container {
			align-items: center;
		}
		.navbar1_menu {
			background-color: var(--white);
			-webkit-text-fill-color: inherit;
			background-clip: border-box;
			border-bottom: 1px solid #000;
			padding: 1rem 5% 2rem;
			position: absolute;
			overflow: auto;
		}
		.navbar1_menu.is-page-height-tablet {
			height: 100dvh;
			padding-top: 2.5rem;
			padding-bottom: 6.5rem;
			transition: height 0.5s;
		}
		.navbar1_link {
			justify-content: center;
			width: auto;
			padding: 0.75rem 0;
			font-size: 1.125rem;
			display: flex;
		}
		.navbar1_menu-button.w--open {
			background-color: #0000;
		}
	}

	@media screen and (max-width: 767px) {
		.navbar_component {
			z-index: 999;
		}
		.navbar_link {
			font-size: 2rem;
		}
		.navbar_logo-link {
			padding-left: 0;
		}
		.navbar1_component {
			height: auto;
			min-height: 4rem;
		}
		.navbar1_menu.is-page-height-tablet {
			padding-bottom: 6rem;
		}
	}

	@media screen and (max-width: 479px) {
		.navbar_link {
			font-size: 2rem;
		}
		.navbar_mobile-container {
			align-items: center;
		}
	}
</style>
