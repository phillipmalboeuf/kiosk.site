<script>
	import { page } from '$app/stores';
  import { content } from '../stores';
</script>

<header>
	<h1>{$content.title}</h1>
	<a href={$content.locale.href}>{$content.locale.label}</a>
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
	}
</style>
