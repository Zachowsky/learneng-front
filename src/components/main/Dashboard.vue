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
          <li v-on:click="component= 'translate'">Tłumaczenie</li>
        </a>
        <a>
          <li v-on:click="component= 'Translator'">Translator</li>
        </a>
      </ul>
    </div>
    </div>
    <div class="user">
      <p>Witaj, User</p>
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

export default {
  name: "Dashboard",
  components: {
    'grammar': Grammar,
    'flashcards': Flashcards,
    'Translator': Translator,
    'flashcardTypes': FlashcardTypes,
  },
  data() {
    return {
        component: 'grammar',
        flashcardTypes: [],
        front: [],
        back: [],
    }
  },

  mounted() {
    this.getFlashcardTypes();
  },

  methods: {
    getFlashcardTypes(){
      axios.get(`${endpoint.url}/dashboard`)
      .then((response) => {
          if(response.status === 200){
            this.flashcardTypes = response.data;
            console.log(this.flashcardTypes)
            sessionStorage.setItem('flashcardTypes', JSON.stringify(this.flashcardTypes));
          }
      }).catch(() => {

      });
    }
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

.user p{
  margin-top: 10px;
  margin-right: 50px;
  font-size: 18px;
  font-weight: 700;
  font-family: cg, Quicksand-Light;

}

.logo img{
  max-height: 50px;
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
  padding-left: 100px;
  padding-right: 100px;

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


</style>