<template>
<div class="main">
  <header>
    <div class="logo">
      <img src="logo.png">
    </div>
    <div class="not_full_page">
    <div class="menu">
      <ul>
        <a>
          <li v-on:click="component= 'grammar'">Gramatyka</li>
        </a>
        <a>
          <li v-on:click="component= 'flashcardTypes'">Fiszki</li>
        </a>
        <a>
          <li v-on:click="component= 'translation-ex'">Tłumaczenie</li>
        </a>
        <a>
          <li v-on:click="component= 'translator'">Translator</li>
        </a>
      </ul>
    </div>
    </div>
    <div class="user">
      <a>Witaj, {{this.sessionData.name}}</a>
      <div class="drop">
        <a v-on:click="changePassword">Zmień hasło</a>
        <a v-on:click="logout">Wyloguj się</a>
      </div>
    </div>
  </header>
  <div class="content">
    <component v-bind:is="component"></component>
  </div>
</div>
</template>

<script>

import Grammar from "@/components/main/Grammar";
import Flashcards from "@/components/main/Flashcards";
import Translator from "@/components/main/Translator";
import FlashcardTypes from "@/components/main/FlashcardTypes";
import axios from "axios";
import endpoint from '../../endpoint.json'
import TranslationEx from "@/components/exercises/TranslationEx";

export default {
  name: "Dashboard",
  components: {
    'grammar': Grammar,
    'flashcards': Flashcards,
    'translator': Translator,
    'flashcardTypes': FlashcardTypes,
    'translation-ex': TranslationEx
  },
  data() {
    return {
        component: 'grammar',
        flashcardTypes: [],
        front: [],
        back: [],
        sessionData:[],
    }
  },

  mounted() {
    this.sessionData = JSON.parse(sessionStorage.getItem('loggedIn'));
    this.getFlashcardTypes();
  },

  methods: {
    getFlashcardTypes(){
      axios.get(`${endpoint.url}/dashboard`)
      .then((response) => {
          if(response.status === 200){
            this.flashcardTypes = response.data;
            sessionStorage.setItem('flashcardTypes', JSON.stringify(this.flashcardTypes));
          }
      })
      .catch(() => {

      });
    },

    async changePassword() {
      if (this.sessionData.password === null) {
        this.$swal({
          position: 'center',
          icon: 'info',
          title: 'Nie możesz zmienić hasła, ponieważ jesteś zalogowany przez Google',
          showConfirmButton: true,
        })
      }else{
        let password = await this.$swal({
          title: 'Hasło musi mieć conajmniej 5 znaków!',
          input: 'text',
          inputPlaceholder: 'Podaj hasło',
          showCloseButton: true,

        });
        if (password.value.length >= 5){

          const userData = {
            email: this.sessionData.email,
            password: password.value,
          }

          await axios.post(`${endpoint.url}/dashboard/password`, userData)
              .then((response) => {
                if(response.status === 200){
                  this.$swal({
                    position: 'center',
                    icon: 'success',
                    title: 'Hasło zostało zmienione',
                    showConfirmButton: false,
                    timer: 2000
                  })
                }
              })
        }else{
          this.$swal({
            position: 'center',
            icon: 'error',
            title: 'Hasło nie spełnia wymagań',
            showConfirmButton: false,
            timer: 2000
          })
        }
        console.log(password.value)
      }
    },

    logout(){
      sessionStorage.removeItem('loggedIn');
      axios.get('/')
          .then((response) => {
            if (response.status === 200) {
              sessionStorage.removeItem('loggedIn');
              this.changeRoute('/');
              this.$swal({

                position: 'center',
                icon: 'info',
                title: 'Pomyślnie wylogowano',
                showConfirmButton: false,
                timer: 1000
              })
            }
          })
          .catch(() => {

          });
    },
  }
}
</script>

<style scoped>

.content{
  width: auto;
}

.main{
  min-height: 100vh;
  background-color: #ffffff;
  overflow: hidden;
}

.logo img{
  max-height: 50px;
  margin-right: 100px;
}

.not_full_page{
  position: center;
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
}

header {
  background: rgba(192, 255, 157, 0.9);
  position: fixed;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: nowrap;
  width: 100%;
  padding: 5px;
  z-index: 99999;
}

header .menu{
  display: inline-grid;
  align-items: center;
}

header a{
  display: inline-grid;
  align-items: center;
  text-decoration: none !important;
  padding-right: 50px;
}

header ul {
  list-style-type: none;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
  margin: auto;
}

header ul li {
  color: black !important;
  font-size: 18px;
  font-weight: 700;
  font-family: cg, Quicksand-Light;
}

header li:hover{
  color: #ffffff !important;
  cursor: pointer;
}

.user a{
  margin-top: 10px;
  font-size: 18px;
  font-weight: 700;
  font-family: cg, Quicksand-Light;
}

.user a:hover{
  color: #ffffff !important;
  cursor: pointer;
}

.drop {
  padding-top: 10px;
  display: none;
  position: absolute;
  z-index: 1;
}

.drop a {
  color: black;
  text-decoration: none;
}

.user:hover .drop{
  padding-top: 10px;
  display: block;
  background: rgba(192, 255, 157, 0.9);
}

</style>