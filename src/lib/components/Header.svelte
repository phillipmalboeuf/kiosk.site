<script>
	import { page } from '$app/stores';
  import { content } from '../../routes/+layout.svelte';
</script>

<header>
	{$content.title}
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
		padding: var(--step-0);
	}
</style>
