<script lang="ts">
	export let command: string;
</script>

<div class="bg-secondary p-4 my-4 rounded-lg">
	<p class="text-primary font-ogyxen mb-2">$ {command}</p>
	<pre class="rounded-lg text-sm mt-4 text-gray-300 font-ogyxen p-4 bg-black whitespace-normal">
		<slot />
	</pre>
</div>
