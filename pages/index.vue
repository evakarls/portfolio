<template>
  <main class="min-h-screen flex flex-col justify-center items-center text-center">
    <section>
      <div class="my-10">
        <h1 class="text-2xl sm:text-6xl my-8">Hello, I'm Eva 👋</h1>
        <h2 class="text-sm font-light sm:text-4xl">I create beautiful things online.</h2>
      </div>
        <h3 class="font-light text-sm sm:text-4xl my-10">I'm currently building my portfolio but in the meantime you can find me on the platforms here below</h3>
        <div class="motion-safe:animate-bounce text-4xl sm:text-5xl mb-5">👇</div>
    </section>

    <ul class="flex text-white text-2xl sm:text-5xl space-x-6">
      <li>
        <a href="https://github.com/evakarls">
          <fa class="transform hover:rotate-6 cursor-pointer" aria-hidden="true" :icon="['fab', 'github']"/>
          <span class="sr-only">Github</span>
        </a>
      </li>
      <li>
        <a href="https://codepen.com/evakarls">
          <fa class="transform hover:rotate-6 cursor-pointer" aria-hidden="true" :icon="['fab', 'codepen']"/>
          <span class="sr-only">Codepen</span>
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/evakarlsdottir/">
          <fa class="transform hover:rotate-6 cursor-pointer" aria-hidden="true" :icon="['fab', 'linkedin-in']"/>
          <span class="sr-only">LinkedIn</span>
        </a>
      </li>
      <li>
        <a href="mailto:eva@evakarls.com">
          <fa class="transform hover:rotate-6 cursor-pointer" aria-hidden="true" :icon="['far', 'envelope']"/>
          <span class="sr-only">Email</span>
        </a>
      </li>
    </ul>
  </main>
</template>
