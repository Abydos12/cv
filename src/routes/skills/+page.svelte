<div
  class="h-full flex flex-col gap-4 lg:gap-8 lg:w-5/6 2xl:w-4/6 m-auto lg:text-lg"
>
  <div class="glass">
    <div
      class="backdrop-brightness-100 dark:backdrop-brightness-150 p-4 lg:p-8 flex justify-between items-center"
    >
      <div class="text-xl lg:text-3xl font-bold" id="resume-app">RESUME WEBSITE</div>
    </div>
    <div class=" p-4 lg:p-8 font-mono">
      <p>
        I built this website in order to showcase my skills in design /
        development / deployment and extend my knowledge of software
        engineering.
      </p>
      <br />
      <span class="text-xl lg:text-2xl mb-2 font-bold">Svelte</span>
      <p>
        This website is built using the framework Svelte. It was for me the
        opportunity to try and learn that framework. I was interested in how
        Svelte is design differently than Angular or React, and wanted to be
        able to compare it with the others that I already tried.
      </p>
      <br />
      <span class="text-xl lg:text-2xl mb-2 font-bold">Tailwindcss</span>
      <p>
        For the styling part, I didn't need a library full of components and
        didn't wanted to write only css. This is why I tried Tailwindcss, which
        is utility based. I also learn Tailwindcss while creating this website.
        Even though I am no graphic designer, I like the 'glassmorphism' and I
        tried to make this effects on this website.
      </p>
      <br />
      <span class="text-xl lg:text-2xl mb-2 font-bold">Deployment</span>
      <p>
        This website is proudly deployed on my personal server (aka, a potato
        computer 🥔 running on Ubuntu, please don't break it)
      </p>
      <p>
        The app has been containerized and deployed using docker and Portainer.
        The build and publication of the image is automated through Github
        Actions, another technology I wanted to try. I used to GitOps with
        Gitlab but never with Github, and this was a good opportunity to finally
        try it.
      </p>
    </div>
  </div>
  <div class="glass">
    <div
      class="backdrop-brightness-100 dark:backdrop-brightness-150 p-4 lg:p-8 flex justify-between items-center"
    >
      <div class="text-xl lg:text-3xl font-bold" id="personal-server">
        PERSONAL SERVER
      </div>
    </div>
    <div class=" p-4 lg:p-8 font-mono">
      <p>
        In 2019, when I was in engineering school, I started to use an computer
        (potato computer but still) as a server. My first ideas about this, was
        to have a (cheap) server for team project and personal projects. Since
        then, I had time to practice a lot on it.
      </p>
      <br />
      <h3 class="text-xl lg:text-2xl mb-2 font-bold">At school</h3>
      <p>
        I used to do a lot of projects for school and most of them were group
        projects. For instance, we needed databases, website hosting,
        application deployment, network administration among other things.
      </p>
      <br />
      <h3 class="text-xl lg:text-2xl mb-2 font-bold">Networks</h3>
      <p>
        The main issue at first was remote access. At the time, I had no control
        of my home router, so no way to open ports. This is how I started to get
        an interest in networks and I learned and discovered a lot about it,
        which include Zerotier and Tailscale. These two are basically P2P VPN, I
        won't explain how it works here, but it's very interesting. Thanks to
        Zerotier, I was able to have multiple P2P networks and it became really
        useful for group projects and remotely managing y server.
      </p>
      <br />
      <span class="text-xl lg:text-2xl mb-2 font-bold"
        >Monitoring and administration</span
      >
      <p>
        I experienced a lot on that server, but here an image of the current
        state. All the applications deployed on the server are containerized. To
        manage them, I use Portainer, an open source application that you can
        self-host. I also use Grafana and Prometheus for system and application
        monitoring. For internet exposed application, I use Traefik for
        reverse-proxy and TLS certificates management.
      </p>
    </div>
  </div>
  <div class="glass">
    <div
      class="backdrop-brightness-100 dark:backdrop-brightness-150 p-4 lg:p-8 flex justify-between items-center"
    >
      <div class="text-xl lg:text-3xl font-bold" id="minepy-metrics">
        PROMETHEUS EXPORTER
      </div>
    </div>
    <div class=" p-4 lg:p-8 font-mono">
      <p>
        I created a prometheus exporter
        <a
          class="underline hover:decoration-red-600 dark:hover:decoration-green-600"
          href="https://github.com/Abydos12/minepy-metrics"
        >
          Minepy-metrics
        </a>
      </p>
      <br />
      <p>
        It is an data exporter that export some Minecraft server information:
        player's stats, vitals, and server info
      </p>
      <br />
      <p>
        <i>
          Disclaimer: I put this project on hold because I have higher
          priorities, but I'll definitely go back on it.
        </i>
      </p>
      <br />
      <p>
        I started this project when I was at the beginning on my journey with
        python. At the time, I was discovering Prometheus, Grafana, learning
        python, docker and playing Minecraft with friends (self-hosted server of
        course). Then I told myself, "That would be nice to have a Grafana
        dashboard with the data of the Minecraft server". I started to search
        for some exporters and found one, but it wasn't exporting everything
        that I wanted. So I started to create my own to challenged myself and
        also learn because I like to learn by practice.
      </p>
      <br />
      <p>Years passed, I'm now with a better Python knowledge and new ideas.</p>
    </div>
  </div>
</div>
