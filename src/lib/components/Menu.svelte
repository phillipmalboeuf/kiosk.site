<script lang="ts">
	import { page } from '$app/stores';
  import { fade, fly } from 'svelte/transition'
  import { content } from '../stores';
  import Icon from './Icon.svelte';

	export let visible = false
</script>

<button on:click={() => visible = true}>Menu</button>

{#if visible}
<nav class="padded" transition:fly={{ x: -111 }}>
  <div class="grid grid--full">
    <button class="button--none" on:click={() => visible = false}><Icon k='close' /> {$content.close}</button>
    {#each $content.links as { href, label }, i}
    <a {href} class="h1"
      on:click={() => visible = false}
      transition:fly={{ x: -40, delay: 50 * (i+1) }}>{label}</a>
    {/each}
  </div> 
</nav>
{/if}

<style lang="scss">
  nav {
    position: fixed;
    z-index: 40;
    inset: 0;
    right: auto;
    width: 95vw;
    height: var(--vh);
    max-width: var(--step-6);

    color: var(--chartreuse);
    background-color: var(--green);
  }
</style>