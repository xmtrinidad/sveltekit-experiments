<script lang="ts">
	import { page } from '$app/stores';

	$: console.log($page.params.item);
</script>

<h1>This is the individual item slug</h1>
<p>Item: {$page.params.item}</p>

<style>
	@media (min-width: 576px) {
	}

	@media (min-width: 768px) {
	}

	@media (min-width: 992px) {
	}

	@media (min-width: 1200px) {
	}

	@media (min-width: 1400px) {
	}
</style>
