<script lang="ts">
	import { page } from '$app/stores';
  import { content } from '../stores';

	export let menu = false
</script>

<header class:menu>
	{#if menu}
	<nav>
		<button>Menu</button>
	</nav>
	{/if}
	<h1>{$content.title}</h1>
	<nav>
		{#if menu}
		<a href={$content.locale.href}>Profile</a>
		<button>Panier</button>
		{/if}
		{#if !menu}<a href={$content.locale.href}>{menu ? $content.locale.label.substring(0, 2) : $content.locale.label}</a>{/if}
	</nav>
</header>

<style lang="scss">
	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: var(--step-0);

		h1 {
			margin-bottom: 0;
		}

		a {
			font-size: var(--step-1);
		}

		@media (max-width: 799px) {
			h1 {
				font-size: var(--step-1);
			}

			a {
				font-size: var(--step-0);
			}
		}

		&.menu {
			> nav {
				flex: 1;

				&:last-child {
					text-align: right;
				}
			}

			h1 {
				font-size: var(--step-1);
			}

			a {
				font-size: var(--step-0);
			}
		}
	}
</style>
