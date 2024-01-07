<script>
	import typescriptLogo from '$lib/icons/typescript-logo.svg';
	import pythonLogo from '$lib/icons/python-logo.svg';
	import IconTag from '$lib/components/IconTag.svelte';
</script>

<h2 class="text-2xl font-bold">
	<span
		class="bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-black dark:to-zinc-200"
	>
		Corporate experiences
	</span>
</h2>

<div>
	<div><code>September 2019 - September 2022 (3 years)</code></div>
	<div>Full Stack Developer (Apprenticeship)</div>
	<div>Société Générale</div>
	<ul class="list-disc list-inside">
		<li>Tools design and development for trading room operators.</li>
		<li>Web application development (REST architecture) with Python / Javascript (Typescript)</li>
		<li>
			Automation scripts
		</li>
	</ul>
</div>
<IconTag logo={pythonLogo} label="Python" />
<IconTag logo={typescriptLogo} label="Typescript" />
