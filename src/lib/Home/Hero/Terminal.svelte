<script lang="ts">
	import Tag from './Tag.svelte';
</script>

<div class="bg-gray-900 p-4 my-4 rounded-lg">
	<div class="flex justify-between items-center">
		<div class="flex space-x-2">
			<div class="w-3 h-3 rounded-full bg-red-500" />
			<div class="w-3 h-3 rounded-full bg-yellow-500" />
			<div class="w-3 h-3 rounded-full bg-green-500" />
		</div>
	</div>

	<div class="rounded-lg text-gray-300 font-consolas p-4 mt-4 bg-gray-800">
		<!-- Terminal Input -->
		<div class="border-b border-gray-700 pb-2 mb-2">
			<span class="text-blue-400">@oabragh</span>
			<span class="text-green-400">[~]</span>
			<span class="text-gray-400">-&gt;</span>
			<span class="text-gray-300">cat about.md</span>
		</div>

		<!-- Terminal Content -->
		<pre class="whitespace-normal leading-relaxed text-sm">
			<Tag name="h2">About me</Tag><br />
			<Tag name="p">Kill yourself (placeholder for my about me)</Tag>
		</pre>
	</div>
</div>
