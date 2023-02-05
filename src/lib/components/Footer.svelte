<script lang="ts">
    import { enhance } from '$app/forms';
	import { page } from '$app/stores'
	import { fade, fly } from 'svelte/transition'

  import { content } from '../stores'
  import Icon from './Icon.svelte'
  import Overlay from './Overlay.svelte'
	
	let amount: string = '5'
  let interval: string = 'one-time'
  let consent: string = 'week'
	let success = false
  let waiting = false

	let open = false
</script>

<footer>
	<button class="button--dark button--tight" on:click={() => open = true}>{$content.support.title}</button>
	<a href="mailto:{$content.contact.email}"><u>{$content.contact.title}</u></a>

	<Overlay bind:open>
	<aside class="padded" transition:fly={{ y: -100 }}>
		{#if success}
		<h2>{$content.success.title}</h2>
		{:else}
		<form class="padded flex flex--middle flex--col flex--tight" action="?/support" method="POST" use:enhance={() => {
			waiting = true
			return async ({ result, update }) => {
				waiting = false
				if (result.type === 'success') {
					success = true
				}
			}
		}}>
			<h3>{$content.support.title}</h3>
			<!-- <div class="flex flex--tight">
				<input type="radio" name="amount" class="group" bind:group={amount} value="5" id="5">
				<label for="5">5$</label>
				<input type="radio" name="amount" class="group" bind:group={amount} value="20" id="20">
				<label for="20">20$</label>
				<input type="radio" name="amount" class="group" bind:group={amount} value="100" id="100">
				<label for="100">100$</label>
			</div> -->

			<!-- <div>
				<input type="radio" name="interval" bind:group={interval} value="one-time" id="one-time">
				<label for="one-time">{#if interval === "one-time"}<Icon k="hand" />{/if} {$content.support.interval.one_time}</label>
				<input type="radio" name="interval" bind:group={interval} value="month" id="month">
				<label for="month">{#if interval === "month"}<Icon k="hand" />{/if} {$content.support.interval.monthly}</label>
				<input type="radio" name="interval" bind:group={interval} value="year" id="year">
				<label for="year">{#if interval === "year"}<Icon k="hand" />{/if} {$content.support.interval.yearly}</label>
			</div> -->

			<div class="flex flex--middle flex--tight">
				<label for="email" aria-label="Email address"><Icon k="at" /></label>
				<input type="email" name="email" id="email" value="phil+4@phils.computer" placeholder={$content.support.email} required>
			</div>

			<div>{$content.support.consent}</div>

			<div>
				<!-- <input type="radio" name="consent" bind:group={consent} value="never" id="never">
				<label for="never">{#if consent === "never"}<Icon k="hand" />{/if} {$content.support.consent_interval.never}</label> -->
				<input type="radio" name="accepts_notices" bind:group={consent} value="week" id="week">
				<label for="week">{#if consent === "week"}<Icon k="hand" />{/if} {$content.support.consent_interval.week}</label>
				<input type="radio" name="accepts_notices" bind:group={consent} value="month" id="month">
				<label for="month">{#if consent === "month"}<Icon k="hand" />{/if} {$content.support.consent_interval.month}</label>
			</div>
			<div></div>
			<div><button class="button--dark" type="submit">{#if waiting}{$content.success.waiting}{:else}{$content.support.cta}{/if}</button></div>
		</form>
		{/if}
	</aside>
	</Overlay> 
</footer>

<style lang="scss">
	footer {
		display: flex;
		justify-content: space-between;
		align-items: center;
    padding: var(--step-0);
		row-gap: var(--step--1);

		@media (max-width: 799px) {
			flex-wrap: wrap;
			justify-content: center;
		}
	}

	aside {
		border-radius: var(--step-0);
		background-color: var(--light);
	}
</style>
