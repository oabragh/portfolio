<script>
	import Shell from './Shell.svelte';
</script>

<section class="flex min-h-screen" id="hero">
	<!-- Secondary side -->
	<div class="hidden md:block bg-secondary w-1/2" />

	<!-- Primary side -->
	<div class="py-8 sm:py-16 md:py-24 px-6 bg-primary w-full md:w-1/2">
		<!-- Greeting -->
		<div class="flex items-center">
			<p class="text-2xl text-secondary font-medium">
				<span
					class="inline-block text-lg tracking-wider font-medium bg-primary ml-1 border border-secondary text-secondary px-2 rounded-full"
				>
					Hi! I'm
				</span>
			</p>
			<div class="bg-secondary h-[1px] ml-2 w-12" />
		</div>

		<!-- Name -->
		<h1 class="inline font-bold leading-tight py-1 rounded-md text-5xl text-secondary">
			Omar Abragh
		</h1>

		<!-- About me -->
		<Shell command="cat about.md">
			&lt;<span class="tag">h2</span>&gt;About Me&lt;/<span class="tag">h2</span>&gt; <br />

			&lt;<span class="tag">p</span>&gt;I'm a full-stack developer with a passion for building
			scalable and robust applications. While my expertise extends beyond web development, I enjoy
			working on various projects and exploring different technologies. Apart from coding, I'm an
			anime enthusiast and a cat lover. Currently based in Morocco.&lt;/<span class="tag">p</span
			>&gt;
		</Shell>
	</div>
</section>

<style lang="postcss">
	.tag {
		color: #f8c555;
	}
</style>
