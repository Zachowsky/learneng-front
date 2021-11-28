<template>
<div class="main">
  <a v-on:click="changeRoute('/dashboard')" class="button-back"><font-awesome-icon icon="chevron-left"></font-awesome-icon></a>
  <p class="title-2">Stopniowanie przymiotników</p>
  <div class="row-short">
    <div class="column">
      <div class="example-3">
        <div class="try">
          <p class="title-smaller">Podaj przymiotnik w <b>formie podstawowej</b>, a system sprawdzi, czy odpowiedź jest poprawna!</p>
          <div class="align-center">
            <input type="text" name="noun" v-model="adjective">
            <button class="bn632-hover bn22" v-on:click="checkIfAdjective(adjective)">Sprawdź</button>
          </div>
        </div>
        <div class="try">
          <p class="title-smaller">Podaj przymiotnik w <b>formie wyższej</b>, a system sprawdzi, czy odpowiedź jest poprawna!</p>
          <div class="align-center">
            <input type="text" name="noun" v-model="comparative">
            <button class="bn632-hover bn22" v-on:click="checkIfComparative(comparative)">Sprawdź</button>
          </div>
        </div>
        <div class="try">
          <p class="title-smaller">Podaj przymiotnik w <b>formie najwyższej</b>, a system sprawdzi, czy odpowiedź jest poprawna!</p>
          <div class="align-center">
            <input type="text" name="noun" v-model="superlative">
            <button class="bn632-hover bn22" v-on:click="checkIfSuperlative(superlative)">Sprawdź</button>
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
  name: "GradationCheckWords",

  data(){
    return{
      adjective: "",
      comparative: "",
      superlative: "",
    }
  },

  methods: {
    checkIfAdjective(word) {

      axios.get(`${endpoint.url}/gradation/check/${word}`)
          .then((response) => {
            if (response.status === 200) {
              if (response.data === 'JJ') {
                this.$swal("Brawo!", "Podano przymiotnik w formie podstawowej!", "success")
              } else {
                this.$swal("Nie udało się!", "Wprowadzone słowo jest niepoprawne!", "error")
              }
            }
          })
          .catch(() => {
            this.$swal("Ups!", "Coś poszło nie tak", "error")
          })

    },
    checkIfComparative(word) {

      axios.get(`${endpoint.url}/gradation/check/${word}`)
          .then((response) => {
            if (response.status === 200) {
              if (response.data === 'JJR') {
                this.$swal("Brawo!", "Podano przymiotnik w formie wyższej!", "success")
              } else {
                this.$swal("Nie udało się!", "Wprowadzone słowo jest niepoprawne!", "error")
              }
            }
          })
          .catch(() => {
            this.$swal("Ups!", "Coś poszło nie tak", "error")
          })
    },

    checkIfSuperlative(word) {

      axios.get(`${endpoint.url}/gradation/check/${word}`)
          .then((response) => {
            if (response.status === 200) {
              if (response.data === 'JJS') {
                this.$swal("Brawo!", "Podano przymiotnik w formie najwyższej!", "success")
              } else {
                this.$swal("Nie udało się!", "Wprowadzone słowo jest niepoprawne!", "error")
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

.column .example-3 .title-smaller {
  min-width: 950px;
  text-align: left;

}

.column .example-3 input {
margin-left: 150px;

}

</style>