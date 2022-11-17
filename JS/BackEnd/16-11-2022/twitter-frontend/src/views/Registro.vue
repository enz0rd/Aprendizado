<template>
    <div class="registro">
      <v-container>
        <v-row align-content="center" justify="center">
          <v-col cols="10" sm="6">
            <v-card>
              <v-card-title> Registro </v-card-title>
              <v-card-text>
                <v-text-field label="Username" v-model="user.name"> </v-text-field>
                <v-text-field type="email" label="E-mail" v-model="user.email"> </v-text-field>
                <v-text-field type="password" label="Senha" v-model="user.password"> </v-text-field>
                <v-btn @click="checkForm">Registrar</v-btn>
                <v-btn @click="voltar">Voltar</v-btn>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </template>

  <script>
// eslint-disable no-unused-vars
import axios from 'axios'

export default {
  data() {
    return {
        errors: [],
        user: {
        name: '',
        email: '',
        password: ''
      }
    }
  },
  methods: {
    async registrar() {
      localStorage.setItem('user.name', this.email);
      localStorage.setItem('user.email', this.email);
      localStorage.setItem('user.password', this.password);
      const resposta = await axios.post('http://localhost:3000/users', {
        name: this.user.name,
        email: this.user.email,
        password: this.user.password,
      });
      alert('Sucesso')
      console.log(resposta)
    },

    async voltar() {
      this.$router.push('/login')
    },
    
    async checkForm (e) {
      if (this.user.name && this.validEmail(this.user.email) && (this.user.password.length > 4)) {
        this.registrar();
      }

      this.errors = [];

      if (!this.user.name) {
        this.errors.push('O nome é obrigatório.');
        alert(this.errors)
      } else {
        if (!this.user.email) {
          this.errors.push('O email é obrigatório.');
          alert(this.errors)
        } else if (!this.validEmail(this.user.email)) {
          this.errors.push('Use um email válido.');
          alert(this.errors)
        } else {
          if (!this.user.password) {
            this.errors.push('A senha é obrigatória.');
            alert(this.errors)
          } else if (this.user.password.length < 4){
            this.errors.push('Insira uma senha com mais de 4 caracteres.');
            alert(this.errors)
          }
        }
      }
      e.preventDefault();
    },
    validEmail: function (email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
  }
}

</script>