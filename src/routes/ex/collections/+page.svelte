<script lang="ts">
	import Media from '$lib/components/Media.svelte';
	import AddToOrder from '$lib/components/AddToOrder.svelte';
	import type { PageData } from './$types'

  export let data: PageData
</script>

<main class="padded">
  <ol class="collections --nostyle">
		{#each data.collections as collection}
		{#if typeof collection !== 'string'}
		<li class="grid">
			<a href="/ex/collections/{collection.identifier}"><h2>{collection.title}</h2></a>
			<a href="/ex/collections/{collection.identifier}">
				<figure>
					<Media media={collection.thumbnail} ar={0.33} />
				</figure>
			</a>
		</li>
		{/if}
		{/each}
	</ol>
</main>

<style lang="scss">
  ol {

		&.collections {
			
			.grid {

				a:last-child {
					grid-column-start: 2;
					grid-column-end: 5;
				}
			}
		}
  }
</style>
