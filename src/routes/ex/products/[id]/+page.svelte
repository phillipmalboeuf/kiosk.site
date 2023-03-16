<script lang="ts">
	import Media from '$lib/components/Media.svelte';
	import Rich from '$lib/components/Rich.svelte';
	import Block from '$lib/components/Block.svelte';
	import type { PageData } from './$types'
  import AddToOrder from '$lib/components/AddToOrder.svelte'

  export let data: PageData
</script>

<main class="padded">
  {#if data.collection}
  <nav>
    <a href="/ex/collections/{data.collection.identifier}"><u>Retour aux {data.collection.title}</u></a>
  </nav>
  {:else}
  <nav>
    <a href="/ex/products"><u>Retour au produits</u></a>
  </nav>
  {/if}

  <center class="padded">
    <h1>{data.product.title}</h1>
  </center>

  <section class="grid grid--halves">
    <aside>
      {#each [(data.product.thumbnail || data.collection?.thumbnail), ...data.product.uploads ? data.product.uploads.map(upload => upload.upload) : []] as media}
      <figure>
        <Media {media} ar={1} />
      </figure>
      {/each}
    </aside>
    <article>
      <!-- <h2>{data.product.title}</h2> -->
      <AddToOrder product={data.product} />
      <br>
      <Rich text={data.product.description} />
    </article>
  </section>

  <!-- <figure>
    <Media media={data.collection.thumbnail} ar={0.2} />
  </figure>

  <ol class="--nostyle grid grid--fourths">
    {#each data.collection.products as { value }}
    {@const product = typeof value !== 'string' && value}
    <li>
      <a href="/products/{product.id}?collection={data.collection.id}">
        <figure>
          <Media media={product.thumbnail || data.collection.thumbnail} ar={1} />
        </figure>
        <h4>{product.title}<br><small><u>Plus d'info</u></small></h4>
      </a>
      <AddToOrder {product} hideBundleProducts />
    </li>
    {/each}
  </ol> -->
</main>

<style>
</style>
