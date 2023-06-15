<script>
	import Terminal from './Terminal.svelte';
</script>

<section class="flex min-h-screen" id="hero">
	<!-- Secondary side -->
	<div class="hidden md:block bg-gray-800 w-1/2" />

	<!-- Primary side -->
	<div class="py-8 sm:py-16 md:py-24 px-6 bg-[#2dd4bf] w-full md:w-1/2">
		<!-- Greeting -->
		<div class="flex items-center">
			<p class="text-2xl text-gray-800 font-medium">
				<!-- Stylish name tag -->
				<span
					class="inline-block text-lg tracking-wider font-medium bg-none ml-1 border border-gray-800 text-gray-800 px-2 rounded-full"
				>
					Hi! I'm
				</span>
			</p>
			<div class="bg-gray-800 h-[1px] ml-2 w-12" />
		</div>

		<!-- Name -->
		<h1 class="inline font-bold leading-tight py-1 rounded-md text-5xl text-gray-800">
			Omar Abragh
		</h1>

		<!-- About me -->
		<Terminal />
	</div>
</section>
