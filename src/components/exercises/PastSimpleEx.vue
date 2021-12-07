<template>
  <div class="main">
    <a v-on:click="changeRoute('/dashboard')" class="button-back"><font-awesome-icon icon="chevron-left"></font-awesome-icon></a>
    <p class="title-2">Past Simple</p>
    <div class="row-short">
      <div class="column">
        <div class="example" v-for="(example, index) in examples" :key="'type'+index">
          <p class="sentence">{{example.sentence}}</p>
          <input v-bind:id="index" name="answer" type="text" placeholder="Wpisz w odp. formie">
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
  name: "PastSimpleEx",

  data(){
    return{
      examples: [],
    }
  },

  mounted() {
    this.getDataToTranslate("past_simple");
  },

  methods: {
    getDataToTranslate(tense){
      axios.get(`${endpoint.url}/tenses/${tense}`)
          .then((response) => {
            if(response.status === 200){
              this.examples = response.data;
            }
          })
    },

    checkAnswers(){
      var answer = $('input[name="answer"]').serializeArray();

      var correct = 0;

      for(let i = 0; i<this.examples.length; i++){

        if(answer[i].value === this.examples[i].answer){
          $('#'+i).css({"border": "2px solid green"});
          correct++;
        }else{
          $('#'+i).css({"border": "2px solid red"});
        }
      }

      this.$swal("Info", "Poprawne odpowiedzi: "+correct+"/"+this.examples.length, "info")

    },

    showAnswers(){
      for(let i = 0; i<this.examples.length; i++) {
        $('#' + i).val(this.examples[i].answer)
      }
    },

    clearAnswers(){
      for(let i = 0; i<this.examples.length; i++) {
        $('#' + i).val("")
      }
    },

  },
}
</script>

<style scoped>

@import '../../styles/buttons.css';
@import '../../styles/style.css';
@import '../../styles/translation_style.css';

input{
  margin-left: 50px;
  max-width: 250px !important;
  min-width: 250px !important;
}

.column .example p{
  min-width: 600px !important;
  max-width: 600px !important;
}

</style>