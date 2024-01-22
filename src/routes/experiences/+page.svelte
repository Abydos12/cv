<script>
  import pythonLogo from "$lib/icons/python-logo.svg";
  import typescriptLogo from "$lib/icons/typescript-logo.svg";
  import IconTag from "$lib/components/IconTag.svelte";
</script>

<div class="h-full">
  <div class="glass p-4 lg:p-8">
    <div class="text-3xl lg:text-4xl">
      September 2019 - September 2022 (3 years)
    </div>
    <div class="text-lg lg:text-3xl font-mono">Software Engineer</div>
    <p class="flex-1 mt-4 text-lg"></p>
  </div>

  <div>
    <div><code>September 2019 - September 2022 (3 years)</code></div>
    <div>Full Stack Developer (Apprenticeship)</div>
    <div>Société Générale</div>
    <ul class="list-disc list-inside">
      <li>Tools design and development for trading room operators.</li>
      <li>
        Web application development (REST architecture) with Python / Javascript
        (Typescript)
      </li>
      <li>Automation scripts</li>
    </ul>
  </div>
  <IconTag label="Python" logo={pythonLogo} />
  <IconTag label="Typescript" logo={typescriptLogo} />
</div>
