<script lang="ts">
	import Media from '$lib/components/Media.svelte';
	import Rich from '$lib/components/Rich.svelte';
	import Block from '$lib/components/Block.svelte';
	import type { PageData } from './$types'

  export let data: PageData
</script>

{#each data.page.content as block, i}
<Block {block} />
{/each}

<style>
</style>
