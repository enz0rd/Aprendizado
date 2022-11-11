<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

  </header>

  <main>
        <div class="fields">
          <label for="email">Email:</label>
          <input type="email" v-model="email" id="email">
          <br>
          <label for="password">Password:</label>
          <input type="password" v-model="password" id="password">
        </div>
        <br>
        <button @click="login">Entrar</button>
  </main>
</template>

<script>
  export default {
    methods: {
      async login() {
        console.log("deu certo")
      }
    }
  }
</script>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
