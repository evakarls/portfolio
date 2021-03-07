<template>
  <div class="min-h-screen flex flex-col justify-center items-center text-center mx-auto">
    <div>
      <div class="my-10">
        <h1 class="text-2xl sm:text-6xl my-8">Hello, I'm Eva 👋</h1>
        <h2 class="text-sm font-light sm:text-4xl">I create beautiful things online.</h2>
      </div>
        <h3 class="font-light text-sm sm:text-4xl my-10">I'm currently building my portfolio but in the meantime you can find me on the platforms below👇</h3>
    </div>
    <div class="text-white text-2xl sm:text-5xl">
      <a
        href="https://github.com/evakarls"
        target="_blank">
        <fa
          class="transform hover:rotate-6 cursor-pointer mx-2"
          :icon="['fab', 'github']"/>
      </a>
      <a
        href="https://www.linkedin.com/in/evakarlsdottir/"
        target="_blank">
        <fa
          class="transform hover:rotate-6 cursor-pointer mx-2"
          :icon="['fab', 'linkedin-in']"/>
      </a>
      <a href="mailto:evakarlsdottir@gmail.com">
      <fa
        class="transform hover:rotate-6 cursor-pointer mx-2"
        :icon="['far', 'envelope']"/>
      </a>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
/* .container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
} */

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
