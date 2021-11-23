<template>
<div class="flashcard-types">
  <div class="type" v-for="(type, index) in types" :key="'type'+index" v-on:click="flashcardStart(type.name)">
    <div class="type_info">
      <img src="article.png">
      <p>{{type.name}}</p>
      <p class="description"></p>
    </div>
  </div>
  <div class="type" v-on:click="changeRoute('/dashboard/add')">
    <div class="type_info">
      <img src="add.png">
      <p>Dodaj swój zestaw</p>
      <p class="description"></p>
    </div>
  </div>
</div>
</template>

<script>

import axios from "axios";
import endpoint from '../../endpoint.json'
export default {
  name: "FlashcardTypes",

  data() {
    return{
        types: [],
    }
  },

  mounted() {
    this.types = JSON.parse(sessionStorage.getItem('flashcardTypes'));
  },

  methods: {
    flashcardStart(type){
      axios.post(`${endpoint.url}/dashboard/${type}`)
      .then((response) => {
        if(response.status === 200){
          this.changeRoute('/dashboard/flashcards')
          sessionStorage.setItem('flashcards', JSON.stringify(response.data));
        }
      })
    }
  }
}
</script>

<style scoped>


.flashcard-types{
  display: flex;
  align-items: stretch;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 150px;
}

.type {
  position: relative;
  display: inline-block;
  flex-direction: row;
  justify-content: center;
  width: 30%;
  margin: 35px;
  background-color: white;
  box-sizing: border-box;
  -webkit-box-shadow: 0px 3px 59px -9px rgba(177, 177, 177, 1);
  -moz-box-shadow: 0px 3px 59px -9px rgba(177, 177, 177, 1);
  box-shadow: 0px 3px 59px -9px rgba(177, 177, 177, 1);
}

.type_info img{
  position: relative;
  padding: 30px;
  max-height: 150px;
}

.type_info p{
  display: inline-grid;
  justify-content: center;
  text-align: justify;
  margin-left: 50px;
  margin-right: 50px;
}

.description{
  font-size: 18px;
  color: grey;
}


.type:hover{
  background: rgba(192, 255, 157, 0.9);
  -webkit-transition: all .35s ease;
  -moz-transition: all .35s ease;
  -ms-transition: all .35s ease;
  -o-transition: all .35s ease;
  transition: all .35s ease;
  cursor: pointer;
}

.type_info{
  text-align: center;
  font-family: cg, Quicksand-Light;
  font-weight: 900;
  font-size: 24px;
  line-height: 30px;
  color: #000000;
}


</style>