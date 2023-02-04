<script lang="ts">
  import type { PageData } from '../../routes/$types'
  import Media from './Media.svelte'
  import Rich from './Rich.svelte'

  export let block: PageData['page']['content'][0]
  export let column: boolean = undefined
</script>

<section id={block.id} class:column>
	{#if 'title' in block}
	{#if block.title}<h3>{block.title}</h3>{/if}
	{/if}
	{#if block.blockType === 'Text'}
	{#if block.media}
	<figure>
		<Media media={block.media} />
	</figure>
	{/if}
	<Rich text={block.text} />
	{:else if block.blockType === 'Button'}
	<center>
		<a href={block.link} class="button">{block.cta}</a>
	</center>
	{:else if block.blockType === 'Blocks'}
	<ul class="--nostyle">
	{#each block.columns as column}
		<li>
			<svelte:self block={column} {column} />
		</li>
	{/each}
	</ul>
	{/if}
</section>


<style lang="scss">
	section {
		padding: var(--step-0);

    &.column {
      padding: 0;

      h3 {
        font-size: var(--step-0);
        font-weight: bold;
      }
    }
	}

  
</style>