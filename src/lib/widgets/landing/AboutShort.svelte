<script lang="ts">
	import { goals } from '$sharedData';
	// import {  } from '$entities';
</script>

<div class="tab_tab-pane">
	<div class="w-layout-grid tab_content-component">
		<div class="tab_content-left">
			<div class="margin-bottom margin-small">
				<h3 class="tab_heading">
					O ruchu <br /> "Wolność i Pokój"
				</h3>
			</div>
			<p class="text-size-medium mb-10">
				Ruch Wolność i Pokój (WiP) – niezależne ugrupowanie społeczno-polityczne należące do nurtu
				„solidarnościowego”, działające w opozycji wobec władz komunistycznych, w latach 1985–1992 w
				Polsce. Większość uczestników Ruchu WiP stanowili studenci i przedstawiciele środowisk
				młodzieżowych (od anarchistów po aktywistów kościelnych).
				<span class="text-weight-bold"
					>Ruch przeprowadził liczne akcje propagandowe i protestacyjne. Liczył w szczytowym okresie
					rozwoju kilkuset członków.
				</span>
			</p>

			<span class="block uppercase">Program:</span>
			<div class="w-richtext">
				<ul role="list">
					{#each goals as goal}
						<li><strong>{goal}</strong></li>
					{/each}
				</ul>
			</div>

			<!-- <p class="my-10">
				<span class="block uppercase">Lorem Ipsum:</span>
				<strong>
					<em>
						Lorem Ipsum jest tekstem stosowanym: jako przykładowy wypełniacz w przemyśle
						poligraficznym. <br />‍
					</em>
				</strong>
				<em
					>4. Juli – 27. September 2025, Lorem Ipsum jest tekstem stosowanym <br /> jako przykładowy
					wypełniacz w przemyśle poligraficznym. Weekend 2025: 4.–6. Juli 2025
				</em>
			</p>
			<p class="my-10">
				<span class="block uppercase">Lorem Ipsum:</span>
				<strong>
					<em>
						Lorem Ipsum jest tekstem stosowanym: jako przykładowy wypełniacz w przemyśle
						poligraficznym. <br />‍
					</em>
				</strong>
				<em
					>4. Juli – 27. September 2025, Lorem Ipsum jest tekstem stosowanym <br /> jako przykładowy
					wypełniacz w przemyśle poligraficznym. Weekend 2025: 4.–6. Juli 2025
				</em>
			</p> -->
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
