<template>
  <div class="main">
    <a v-on:click="changeRoute('/dashboard')" class="button-back"><font-awesome-icon icon="chevron-left"></font-awesome-icon></a>
    <p class="title-2">Zaimki osobowe</p>
    <div class="row-short">
      <div class="column">
        <div class="example-2">
          <p class="title-smaller">Podaj zaimek osobowy, a system sprawdzi, czy odpowiedź jest poprawna!</p>
          <input v-model="word" style="text-transform: uppercase" type="text" name="pronoun">
        </div>
      </div>
      <div class="send-buttons">
        <button class="bn632-hover bn22" v-on:click="checkIfPronoun(word)">Sprawdź</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import endpoint from "@/endpoint.json";

export default {
  name: "PersonalPronounsEx",

  data(){
    return{
      word: '',
    }
  },

  methods:{
    checkIfPronoun(word){

      axios.get(`${endpoint.url}/personal-pronouns-ex/${word}`)
      .then((response) => {
          if(response.status === 200){

            if(response.data === 'PRP'){
              this.$swal("Brawo!", "Podano poprawny zaimek osobowy!", "success")
            }else{
              this.$swal("Nie udało się!", "Wprowadzone słowo nie jest zaimkiem osobowym!", "error")
            }
          }
      })
          .catch(() => {
            this.$swal("Ups!", "Coś poszło nie tak", "error")
          })
    }
  }
}
</script>

<style scoped>

@import '../../styles/buttons.css';
@import '../../styles/style.css';
@import '../../styles/translation_style.css';

</style>