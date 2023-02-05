<script lang="ts">
  import type { PageData } from '../../routes/$types'
  import Media from './Media.svelte'
  import Rich from './Rich.svelte'

  export let block: PageData['page']['content'][0]
  export let small: boolean = undefined
</script>

<section id={block.id} class:grid={!small && block.blockType === 'Text'} class:small>
	{#if block.blockType === 'Text'}
	<main>
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
			min-height: 100vh;
			align-items: flex-start;

			main {
				position: sticky;
				top: var(--step-0);

				@media (max-width: 799px) {
					position: static;
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

	ul {
		grid-template-columns: repeat(var(--number), 1fr);

		@media (max-width: 799px) {
			grid-template-columns: 1fr;
		}
	}
</style>