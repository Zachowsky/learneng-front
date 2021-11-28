<template>
<div class="main">
  <a v-on:click="changeRoute('/dashboard')" class="button-back"><font-awesome-icon icon="chevron-left"></font-awesome-icon></a>
  <p class="title-2">Podaj stopnie wyższe i najwyższe przymiotników</p>
  <div class="row-short">
    <div class="column">
      <div class="example" v-for="(example, index) in examples" :key="'type'+index">
        <p class="sentence">{{example.normal}}</p>
        <input v-bind:id="'comp'+index" name="comparative" type="text" placeholder="Forma wyższa">
        <input v-bind:id="'sup'+index" name="superlative" type="text" placeholder="Forma najwyższa">
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

export default {
  name: "GradationEx",

  data(){
    return{
      examples: []
    }
  },

  mounted() {
    this.getGradationData();
  },

  methods: {

    getGradationData(){
      axios.get(`${endpoint.url}/gradation/all`)
      .then((response) => {
        if(response.status === 200){
          this.examples = response.data;
        }
      })
    },

    checkAnswers(){

      var comparativeAnswer = $('input[name="comparative"]').serializeArray();
      var superlativeAnswer = $('input[name="superlative"]').serializeArray();

      for(let i = 0; i < this.examples.length; i++){
        if(comparativeAnswer[i].value === this.examples[i].comparative){
          $('#comp'+i).css({"border": "2px solid green"});
        }else{
          $('#comp'+i).css({"border": "2px solid red"});
        }
        if(superlativeAnswer[i].value === this.examples[i].superlative){
          $('#sup'+i).css({"border": "2px solid green"});
        }
        else {
          $('#sup'+i).css({"border": "2px solid red"});
        }
      }
    },

    showAnswers(){
      for(let i = 0; i<this.examples.length; i++) {
        $('#comp' + i).val(this.examples[i].comparative);
        $('#sup' + i).val(this.examples[i].superlative);
      }
    },

    clearAnswers(){
      for(let i = 0; i<this.examples.length; i++) {
        $('#comp' + i).val("");
        $('#sup' + i).val("");
      }
    },
  }
}

</script>

<style scoped>

@import '../../styles/buttons.css';
@import '../../styles/style.css';
@import '../../styles/translation_style.css';


input{
  margin-right: 20px;
}

.sentence{
  max-width: 150px !important;
  min-width: 150px !important;
}

.example input{
  max-width: 250px !important;
  min-width: 250px !important;
}

</style>