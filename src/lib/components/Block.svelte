<script lang="ts">
  import type { PageData } from '../../routes/(site)/$types'
  import Media from './Media.svelte'
  import Rich from './Rich.svelte'

  export let block: PageData['page']['content'][0]
  export let small: boolean = undefined
</script>

<section id={block.id} class:grid={!small && block.blockType === 'Text'} class:small>
	{#if block.blockType === 'Text'}
	<main class:full={!block.media}>
		{#if block.title}<h3>{block.title}</h3>{/if}
		<Rich text={block.text} />
	</main>
	{#if block.media}
	<figure>
		<Media media={block.media} />
	</figure>
	{/if}
	{:else if block.blockType === 'Button'}
	<center>
		<a href={block.link} class="button">{block.cta}</a>
	</center>
	{:else if block.blockType === 'CollectionsList'}
	{#if block.title}<h4>{block.title}</h4>{/if}
	<ol class="collections --nostyle">
		{#each block.collections as collection}
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
	{:else if block.blockType === 'Blocks'}
	{#if block.title}<h3>{block.title}</h3>{/if}
	<ul class="grid --nostyle" style="--number: {block.number}">
	{#each block.columns as column}
		<li>
			<svelte:self block={column} small={!!column} />
		</li>
	{/each}
	</ul>
	{/if}
</section>


<style lang="scss">
	section {
		padding: var(--step-0);

		&.grid {
			// min-height: 100vh;
			align-items: flex-start;

			main {
				position: sticky;
				top: var(--step-0);

				@media (max-width: 799px) {
					position: static;
				}

				&.full {
					grid-column-start: 2;
					grid-column-end: 4;
				}
			}
			
			figure {
				grid-column-start: 2;
				grid-column-end: 5;

				@media (max-width: 799px) {
					grid-column-start: 1;
					grid-column-end: 2;
				}
			}
		}

    &.small {
      padding: 0;

      h3 {
        font-size: var(--step-0);
        font-weight: bold;
      }
    }
	}

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

	ul {
		grid-template-columns: repeat(var(--number), 1fr);

		@media (max-width: 799px) {
			grid-template-columns: 1fr;
		}
	}
</style>