<template>
    <div class="Twitter">
      <v-card>Twitter
        {{ posts }}
      </v-card>
    </div>
  </template>
  <script>
  import axios from 'axios';

  export default {
    data() {
      return {
        posts: [],
      };
    },
    async mounted() {
      const resposta = await axios.get('http://localgost:3000/posts')
      this.posts = resposta.data;
    },
  }
</script>