<script lang="ts">
  import { onMount } from 'svelte'
  import { DateTime } from 'luxon'
  import { PUBLIC_API_URL } from '$env/static/public'
  import { crossfade, fade, fly } from 'svelte/transition'
  import { items, bar, interval, kiosk } from '$lib/stores'
  import type { Kiosk, Product } from '$lib/payload-types'

  import Icon from './Icon.svelte'
  import Overlay from './Overlay.svelte'
  // import Plans from './Plans.svelte'
  import OrderItems from './OrderItems.svelte'
  // import Checkout from './Checkout.svelte'
  // import Kiosks from './Kiosks.svelte'

  let checkout = false
</script>

<a href="/order" class="button" data-sveltekit-preload-data="off" on:click|preventDefault={() => bar.set(!$bar)}>Panier</a>

<Overlay side full={checkout} bind:open={$bar}>
  {#if !checkout}
  <form class="flex flex--col flex--spaced" action="" on:submit|preventDefault={() => {
    checkout = true
  }} transition:fly={{ x: 100 }}>
    <div>
      <OrderItems />
    </div>
    
    <div>
      <fieldset>
        <!-- <Plans /> -->
      </fieldset>
      <!-- <label class="flex flex--spaced flex--middle" for="kiosk"><span>Disponible chez</span> <small>{DateTime.now().set({ weekday: 4 }).plus({ days: $kiosk?.minimum_order_days || 14 }).setLocale('fr').toLocaleString({ weekday: 'long', month: 'long', day: '2-digit' })}</small></label> -->
      <!-- <Kiosks /> -->
      <button class="button--full button--dark" type="submit">Procéder au paiement</button>
    </div>
    
  </form>
  {:else}
  <!-- <Checkout bind:checkout /> -->
  {/if}
</Overlay>

<style lang="scss">
  form {
    padding: var(--step-0);
    background-color: white;
    // border-left: 3px solid;
    font-size: var(--step-0);
    text-align: left;

    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    min-height: 100%;
  }

  fieldset {
    border: none;
    padding: var(--step-0) var(--step-1);
  }
</style>