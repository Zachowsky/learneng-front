<template>
  <div class="main">
    <a v-on:click="changeRoute('/dashboard')" class="button-back"><font-awesome-icon icon="chevron-left"></font-awesome-icon></a>
    <p class="title-2">Rzeczowniki policzalne i niepoliczalne</p>
    <div class="row-short">
      <p class="subtitle">Zaznacz rzeczowniki, które są policzalne</p>
      <div class="column">
        <div class="example" v-for="(example, index) in examples" :key="'type'+index">
          <p class="sentence">{{example.noun}}</p>
          <input v-bind:id="index" name="answer" type="checkbox" :value=example.noun>
        </div>
      </div>
      <div class="send-buttons">
        <button class="bn632-hover bn22" v-on:click="checkAnswers">Sprawdź</button>
        <button class="bn632-hover bn23" v-on:click="showAnswers">Pokaż odpowiedzi</button>
        <button class="bn632-hover bn24" v-on:click="clearAnswers">Wyczyść odpowiedzi</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import endpoint from "@/endpoint.json";
import $ from "jquery";
import _ from 'lodash';

export default {
  name: "NounsEx",

  data(){
    return{
      examples: [],
      correct: []
    }
  },

  mounted() {
    this.getNounsData();
  },

  methods: {

    getNounsData(){
      axios.get(`${endpoint.url}/nouns/all`)
          .then((response) => {
            if (response.status === 200) {
              this.examples = response.data;

              for(let i = 0; i < this.examples.length; i++){
                if(this.examples[i].countable === true){
                  this.correct.push(this.examples[i].noun);
                }
              }
            }
          })
    },

    checkAnswers(){
        var answers = $('input[name="answer"]').serializeArray();
        var ans = [];

        for(let i = 0; i < answers.length; i++){
          ans.push(answers[i].value);
        }
         var info = _.isEqual(ans, this.correct)

        if(info){
          this.$swal("Brawo!", "Wszystkie odpowiedzi poprawne", "success")
        }else{
          this.$swal("Błąd!", "Złe odpowiedzi", "error")
        }

    },

    showAnswers() {
      for (let i = 0; i < this.examples.length; i++) {
        if (this.examples[i].countable === true) {
          $('#'+i).prop("checked", true);
        }
      }
    },

    clearAnswers(){
      for (let i = 0; i < this.examples.length; i++) {
          $('#'+i).prop("checked", false);
      }
    }
  }

}
</script>


<style scoped>

@import '../../styles/buttons.css';
@import '../../styles/style.css';
@import '../../styles/translation_style.css';

input{
  min-width: 100px !important;
}

p{
  min-width: 200px !important;
}

.row-short .column{
  padding-top: 0px !important;
  padding-bottom: 10px !important;
}

.subtitle{
  text-align: center;
  font-size: 25px;
  font-weight: 900;
  padding-top: 10px;
}

.correct[type="checkbox"]:after{
  border: 2px solid green;
}

</style>