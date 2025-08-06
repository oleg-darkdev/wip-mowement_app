<script lang="ts">
	// import { goals } from '$sharedData';
	const features = [
		'Akcje protestu według lat i miast',
		'Uczestnicy ruchu według kolejności alfabetycznej',
		'Chronologia wydarzeń od 1985 do 1992 roku',
		'Archiwum zdjęć',
		'Sklep z pamiątkami'
	];

	// import {  } from '$entities';
</script>

<div class="tab_tab-pane">
	<div class="w-layout-grid tab_content-component">
		<div class="tab_content-left">
			<div class="margin-bottom margin-small">
				<h3 class="tab_heading">
					Misja encyklopedii <br /> "Wolność i Pokój"
				</h3>
			</div>
			<p class="text-size-medium mb-10">
				Stworzenie otwartej, interaktywnej encyklopedii internetowej na temat historii, ideologii,
				listy uczestników i wpływu
				<span class="text-weight-bold">ruchu Wolność i Pokój (WiP) </span> z celem udokumentowania jego
				wkładu w pokojowy opór.
			</p>

			<span class="block">Funkcjonalność interaktywnej encyklopedii:</span>
			<div class="w-richtext mb-10">
				<ul role="list">
					{#each features as feature}
						<li><strong>{feature}</strong></li>
					{/each}
				</ul>
			</div>
		</div>
		<div class="tab_content-right">
			<ul
				aria-label="Accordion Control Group Buttons"
				role="list"
				class="tab_content-list w-list-unstyled"
			>
				<li class="tab_list-item">
					<div role="region" class="tab_item">
						<div class="tab_item-title">
							<h4 class="heading-style-h6">Lata aktywności:</h4>
						</div>
						<div class="tab_item-content">
							<div>1985 - 1992</div>
						</div>
					</div>
				</li>

				<slot />
			</ul>
		</div>
	</div>
</div>
