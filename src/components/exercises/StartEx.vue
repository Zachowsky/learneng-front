<template>
  <div class="main">
    <a v-on:click="changeRoute('/dashboard')" class="button-back"><font-awesome-icon icon="chevron-left"></font-awesome-icon></a>
    <p class="title-2">Podstawy</p>
    <div class="row-short">
      <div class="column">
        <div class="example-3">
          <div class="try">
            <p class="title-smaller">Podaj <b>rzeczownik</b>, a system sprawdzi, czy odpowiedź jest poprawna!</p>
            <div class="align-center">
              <input type="text" name="noun" v-model="noun">
              <button class="bn632-hover bn22" v-on:click="checkIfNoun(noun)">Sprawdź</button>
            </div>
          </div>
          <div class="try">
            <p class="title-smaller">Podaj <b>czasownik</b>, a system sprawdzi, czy odpowiedź jest poprawna!</p>
            <div class="align-center">
            <input type="text" name="verb" v-model="verb">
            <button class="bn632-hover bn22" v-on:click="checkIfVerb(verb)">Sprawdź</button>
            </div>
          </div>
          <div class="try">
            <p class="title-smaller">Podaj <b>przymiotnik</b>, a system sprawdzi, czy odpowiedź jest poprawna!</p>
            <div class="align-center">
              <input type="text" name="adjective" v-model="adjective">
              <button class="bn632-hover bn22" v-on:click="checkIfAdjective(adjective)">Sprawdź</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import endpoint from "@/endpoint.json";

export default {
  name: "StartEx",

  data(){
    return{
      verb: "",
      adjective: "",
      noun: "",

    }
  },

  methods: {

    checkIfNoun(word) {

      axios.get(`${endpoint.url}/start-ex/${word}`)
          .then((response) => {
            if (response.status === 200) {
              if (response.data.includes('NN') ) {
                this.$swal("Brawo!", "Podano poprawny rzeczownik!", "success")
              } else {
                this.$swal("Nie udało się!", "Wprowadzone słowo nie jest rzeczownikiem!", "error")
              }
            }
          })
          .catch(() => {
            this.$swal("Ups!", "Coś poszło nie tak", "error")
          })
    },

    checkIfAdjective(word) {

      axios.get(`${endpoint.url}/start-ex/${word}`)
          .then((response) => {
            if (response.status === 200) {
              if (response.data.includes('JJ')) {
                this.$swal("Brawo!", "Podano przymiotnik!", "success")
              } else {
                this.$swal("Nie udało się!", "Wprowadzone słowo nie jest przymiotnikiem!", "error")
              }
            }
          })
          .catch(() => {
            this.$swal("Ups!", "Coś poszło nie tak", "error")
          })
    },
    checkIfVerb(word) {

      axios.get(`${endpoint.url}/start-ex/${word}`)
          .then((response) => {
            if (response.status === 200) {
              if (response.data.includes('VB')) {
                this.$swal("Brawo!", "Podano poprawny czasownik!", "success")
              } else {
                this.$swal("Nie udało się!", "Wprowadzone słowo nie jest czasownikiem!", "error")
              }
            }
          })
          .catch(() => {
            this.$swal("Ups!", "Coś poszło nie tak", "error")
          })
    },
  }
}
</script>

<style scoped>


@import '../../styles/buttons.css';
@import '../../styles/style.css';
@import '../../styles/translation_style.css';

</style>