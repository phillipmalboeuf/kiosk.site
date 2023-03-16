<script lang="ts">
	import Media from '$lib/components/Media.svelte';
	import AddToOrder from '$lib/components/AddToOrder.svelte';
	import type { PageData } from './$types'

  export let data: PageData
</script>

<main class="padded">
<center>
  <h1>{data.collection.title}</h1>
</center>

<figure>
  <Media media={data.collection.thumbnail} ar={0.2} />
</figure>

<ol class="--nostyle grid grid--fourths">
  {#each data.collection.products as { value }}
  {@const product = typeof value !== 'string' && value}
  <li>
    <a href="/ex/products/{product.identifier}?collection={data.collection.identifier}">
      <figure>
        <Media media={product.thumbnail || data.collection.thumbnail} ar={1} />
      </figure>
      <h4>{product.title}<br><small><u>Plus d'info</u></small></h4>
    </a>
    <AddToOrder {product} hideBundleProducts />
  </li>
  {/each}
</ol>
</main>

<style>
  ol {
    padding: var(--step-1);
  }
</style>
