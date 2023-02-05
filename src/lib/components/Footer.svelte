<script>
	import { page } from '$app/stores';
  import { content } from '../stores';
</script>

<footer>
	<button class="button--dark button--tight">{$content.support.title}</button>
	<a href="mailto:{$content.contact.email}"><u>{$content.contact.title}</u></a>
</footer>

<style>
	footer {
		display: flex;
		justify-content: space-between;
		align-items: center;
    padding: var(--step-0);
	}
</style>
