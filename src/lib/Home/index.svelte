<script lang="ts">
	import { fly, fade } from 'svelte/transition';
	import Terminal from './Terminal.svelte';
	import { afterUpdate } from 'svelte';

	let showGreeting = false;
	let showName = false;
	let showTerminal = false;
	let showButton = false;

	afterUpdate(async () => {
		showGreeting = true;
		await delay(250);
		showName = true;
		await delay(500);
		showTerminal = true;
		await delay(250);
		showButton = true;
	});

	function delay(duration: number) {
		return new Promise((resolve) => {
			setTimeout(resolve, duration);
		});
	}
</script>

<section class="flex min-h-screen" id="hero">
	<!-- Secondary side -->
	<div class="hidden md:block bg-gray-800 w-1/2" />

	<!-- Primary side -->
	<div class="py-8 sm:py-16 md:py-24 px-6 bg-[#2dd4bf] w-full md:w-1/2 overflow-hidden">
		<!-- Greeting -->
		{#if showGreeting}
			<div class="flex items-center transition-all duration-500" in:fly={{ x: -50, duration: 500 }}>
				<p class="text-2xl text-gray-800 font-medium">
					<span
						class="inline-block text-lg tracking-wider font-medium bg-none ml-1 border border-gray-800 px-2 rounded-full"
					>
						Hi! I'm
					</span>
				</p>
				<div class="bg-gray-800 h-[1px] ml-2 w-12" />
			</div>
		{/if}

		<!-- Name -->
		{#if showName}
			<div in:fly={{ x: 50, duration: 500 }}>
				<h1 class="inline font-bold leading-tight py-1 rounded-md text-5xl text-gray-800">
					Omar Abragh
				</h1>
			</div>
		{/if}

		<!-- About me -->
		{#if showTerminal}
			<div in:fly={{ y: 50, duration: 500 }}>
				<Terminal />
			</div>
		{/if}

		<!-- Learn more -->
		{#if showButton}
			<button class="learn-more" in:fly={{ y: -50, duration: 500 }}>Learn More</button>
		{/if}
	</div>
</section>

<style lang="postcss">
	.learn-more {
		@apply border border-gray-800 text-gray-900 text-lg text-center font-mono
			w-full md:w-40 py-2 tracking-wide transition-all hover:text-[#2dd4bf];

		background-image: linear-gradient(to right, rgb(17 24 39) 50%, transparent 50%);
		background-size: 200% 100%;
		background-position: right bottom;
	}

	.learn-more:hover {
		background-position: left bottom;
	}
</style>
