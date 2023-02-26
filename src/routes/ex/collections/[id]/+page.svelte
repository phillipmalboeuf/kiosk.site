<script lang="ts">
	import Media from '$lib/components/Media.svelte';
	import Rich from '$lib/components/Rich.svelte';
	import Block from '$lib/components/Block.svelte';
	import type { PageData } from './$types'

  export let data: PageData
</script>

<center>
  <h1>{data.collection.title}</h1>
</center>

<figure>
  <Media media={data.collection.thumbnail} ar={0.2} />
</figure>

<ol class="--nostyle">
  {#each data.collection.products as product}
  <li>{JSON.stringify(product.value)}</li>
  {/each}
</ol>

<style>
  ol {
  }
</style>
