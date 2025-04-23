<script lang="ts">
	import { navigation } from '$sharedData';
	// import {  } from '$widgets';
	// import {  } from '$entities'
</script>

<header class="navbar_component">
	<div class="navbar_mobile-overlay">
		<nav class="navbar_menu">
			<ul role="list" class="navbar_menu-list w-list-unstyled">
				{#each navigation as { text, link }}
					<li class="navbar_list-item">
						<a href={link} class="navbar_link">{text}</a>
					</li>
				{/each}

				<li class="navbar_list-item lang-switcher">
					<div class="locales-wrapper w-locales-list">
						<div role="list" class="locales-element-wrapper w-locales-items">
							<div
								data-w-id="25a5e808-7b6c-17e0-9d65-8064c0f570aa"
								role="listitem"
								class="navbar2_link w-locales-item"
							>
								<a href="/pl" aria-current="page" class="navbar_link-text language w--current">PL</a
								>
								<div class="tab_link-background"></div>
							</div>
							<div
								data-w-id="25a5e808-7b6c-17e0-9d65-8064c0f570aa"
								role="listitem"
								class="navbar2_link w-locales-item"
							>
								<a href="/en" class="navbar_link-text language">EN</a>
								<div class="tab_link-background"></div>
							</div>
						</div>
					</div>
				</li>
			</ul>
		</nav>
	</div>
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
			<a
				aria-label="Menu Toggle"
				data-w-id="dbfc53cb-3ba4-002f-a7aa-fa81be2b7eb7"
				href="#"
				class="navbar_mobile-menu-toggle w-inline-block"
			>
				<div class="menu-icon">
					<div class="menu-icon_line-top"></div>
					<div class="menu-icon_line-middle">
						<div class="menu-icon_line-middle-inner"></div>
					</div>
					<div class="menu-icon_line-bottom"></div>
				</div>
			</a>
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
						<div class="locales-wrapper w-locales-list">
							<div role="list" class="locales-element-wrapper w-locales-items">
								<div role="listitem" class="navbar2_link w-locales-item">
									<a href="/pl" aria-current="page" class="navbar_link-text language w--current"
										>Pl</a
									>
									<div class="tab_link-background"></div>
								</div>
								<div role="listitem" class="navbar2_link w-locales-item">
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
</style>
