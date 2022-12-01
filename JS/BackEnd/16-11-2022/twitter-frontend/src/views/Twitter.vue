<template>
  <v-card>
    Página Inicial
    <v-divider></v-divider>
    <v-col cols="12" sm="10" md="8" lg="6" xl="4">
      <v-card-text>
        <v-textarea counter label="Twitte agora!" v-model="tweet"></v-textarea>
        <v-btn @click="twittar">Publicar</v-btn>
      </v-card-text>
    </v-col>
    <v-row v-for="post in posts" :key="post.id">
      <v-col cols="12" sm="10" md="8" lg="6" xl="4">
        <v-card class="tweet">
          {{ `${post.message}` }}
          <v-chip>{{ `criado em ${post.createdAt} ` }}</v-chip>
        </v-card>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      tweet: '',
      posts: [],
    };
  },
  async mounted() {
    const resposta = await axios.get('http://localhost:3000/posts');
    this.posts = resposta.data;
  },
  methods: {
    async twittar() {
      localStorage.setItem('tweet', this.tweet);
      if (this.tweet == "") {
        alert('Digite algo')
      } else {
        const resposta = await axios.post('http://localhost:3000/posts', {
          message: this.tweet,
        });
        alert('Publicado')
        console.log(resposta)
      }
      console.log(localStorage.getItem('user.name'))
    }
  }
};
</script>

<style>
.tweet {
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 15px;
  flex-wrap: wrap;
  word-wrap: break-word;
}
</style>