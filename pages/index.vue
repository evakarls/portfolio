<template>
  <main class="min-h-screen flex flex-col justify-center items-center text-center">
    <section>
      <div class="my-10">
        <h1 class="text-2xl sm:text-6xl my-8">Hello, I'm Eva 👋</h1>
        <h2 class="text-sm font-light sm:text-4xl">I create beautiful things online.</h2>
      </div>
        <h3 class="font-light text-sm sm:text-4xl my-10">I'm currently building my portfolio but in the meantime you can find me on the platforms below</h3>
        <div class="motion-safe:animate-bounce text-4xl sm:text-5xl mb-5">👇</div>
    </section>

    <ul class="flex text-white text-2xl sm:text-5xl space-x-6">
      <li><a href="https://github.com/evakarls"><fa class="transform hover:rotate-6 cursor-pointer" :icon="['fab', 'github']"/></a></li>
      <li><a href="https://codepen.com/evakarls"><fa class="transform hover:rotate-6 cursor-pointer" :icon="['fab', 'codepen']"/></a></li>
      <li><a href="https://www.linkedin.com/in/evakarlsdottir/"><fa class="transform hover:rotate-6 cursor-pointer" :icon="['fab', 'linkedin-in']"/></a></li>
      <li><a href="mailto:eva@evakarls.com"><fa class="transform hover:rotate-6 cursor-pointer" :icon="['far', 'envelope']"/></a></li>
    </ul>
  </main>
</template>
