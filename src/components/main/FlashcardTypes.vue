<template>
<div class="flashcard-types">
  <div class="type" v-for="(type, index) in types" :key="'type'+index" v-on:click="flashcardStart(type.name)">
    <div class="type_info">
      <img  src="start.png">
      <p>{{type.name}}</p>
      <p class="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos enim fugiat harum modi nulla odio!
        Commodi excepturi minima molestias quaerat quod voluptatibus? Dolores impedit laboriosam minus modi quos,
        ratione suscipit?</p>
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
  justify-content: space-around;
  margin-top: 80px;
}

.type {
  position: relative;
  display: inline-block;
  flex-direction: row;
  justify-content: center;
  width: 30%;
  margin: 10px;
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
  font-size: 15px;
  color: grey;
}

.type_info a{
  color: #000000;
  display: block;
  padding: 0 25px;
  text-align: center;
  text-decoration: none;
  font-size: 18px;
  border-top: 1px solid #a1a1a1;

  -webkit-transition: all .35s ease;
  -moz-transition: all .35s ease;
  -ms-transition: all .35s ease;
  -o-transition: all .35s ease;
  transition: all .35s ease;
}

.type_info a:hover{
  background-color: rgba(58, 108, 50, 0.62);
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
  border-bottom: 1px solid #a1a1a1;

}


</style>