<script lang="ts">
  import { content } from '$lib/stores'
  import { onMount } from 'svelte'
  import { fade, fly } from 'svelte/transition'
  import Icon from './Icon.svelte'

  export let open = false
  export let side = false
  export let full = false
</script>

{#if open}
<aside class="flex flex--center flex--middle" class:side class:full>
  <button class="back" transition:fade on:click={() => open = false} aria-label={$content.close} />
  <button class="close" transition:fade on:click={() => open = false} aria-label={$content.close}>
    <Icon k="close" />
  </button>
  <slot />
</aside>
{/if}

<style lang="scss">
  aside {
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: var(--vh);
    z-index: 15;
    overflow-y: auto;
    transition: width 666ms;

    > button.back {
      position: fixed;
      inset: 0;
      z-index: -1;
      background-color: rgba(251, 251, 251, 0.88);
      -webkit-backdrop-filter: blur(8px);
      backdrop-filter: blur(8px);

      border: none;
      border-radius: 0;
    }

    > button.close {
      position: fixed;
      z-index: 1;
      top: var(--step--2);
      right: var(--step--2);

      background: transparent;
      border: none;

      @media (max-width: 799px) {
        top: 0;
        right: 0;
      }
    }

    &.side {
      width: var(--step-6);
      left: auto;
      right: 0;

      > button.back {
        display: none;
      }

      @media (max-width: 799px) {
        width: 96vw;
      }
    }

    &.full {
      width: 95vw;
    }
  }
</style>