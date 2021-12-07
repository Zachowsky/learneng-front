<template>
  <div class="main">
    <a v-on:click="changeRoute('/dashboard')" class="button-back"><font-awesome-icon icon="chevron-left"></font-awesome-icon></a>
    <p class="title-2">Podstawy</p>
    <div class="row-short">
      <div class="column">
         <div class="example-3">
           <p class="title-smaller">Uzupełnij odmianę TO BE w czasie Present Simple</p>
           <div class="center-table">
             <table>
               <thead>
               <tr>
                 <th>Liczba pojedyncza</th>
                 <th>Liczba mnoga</th>
               </tr>
               </thead>
               <tbody>
               <tr>
                 <td><input id="0" name="be" type="text" placeholder="I"></td>
                 <td><input id="1" name="be" type="text" placeholder="WE"></td>
               </tr>
               <tr>
                 <td><input id="2" name="be" type="text" placeholder="YOU"></td>
                 <td><input id="3" name="be" type="text" placeholder="YOU"></td>
               </tr>
               <tr>
                 <td><input id="4" name="be" type="text" placeholder="HE/SHE/IT"></td>
                 <td><input id="5" name="be" type="text" placeholder="THEY"></td>
               </tr>
               </tbody>
             </table>
           </div>
           <div class="send-buttons">
             <button class="bn632-hover bn22" v-on:click="checkToBe()">Sprawdź</button>
             <button class="bn632-hover bn23" v-on:click="showToBe()">Pokaż odpowiedzi</button>
             <button class="bn632-hover bn24" v-on:click="clearToBe()">Wyczyść odpowiedzi</button>
           </div>
         </div>
        <div class="lines"></div>
        <div class="example">
          <p class="sentence">Jak zwrócisz się do mężczyzny, gdy nie znasz jego stanu cywilnego?</p>
          <input id="p0" type="text" name="phrase">
        </div>
        <div class="example">
          <p class="sentence">Jak zwrócisz się do kobiety niezamężnej?</p>
          <input id="p1" type="text" name="phrase">
        </div>
        <div class="example">
          <p class="sentence">Jak zwrócisz się do mężczyzny z wyrazami szacunku?</p>
          <input id="p2" type="text" name="phrase">
        </div>
        <div class="send-buttons">
          <button class="bn632-hover bn22" v-on:click="checkPhrases()">Sprawdź</button>
          <button class="bn632-hover bn23" v-on:click="showPhrases()">Pokaż odpowiedzi</button>
          <button class="bn632-hover bn24" v-on:click="clearPhrases()">Wyczyść odpowiedzi</button>
        </div>
        <div class="lines"></div>
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
import $ from "jquery";

export default {
  name: "StartEx",

  data(){
    return{
      verb: "",
      adjective: "",
      noun: "",

      toBeAnswer: ["AM", "ARE", "ARE", "ARE", "IS", "ARE"],
      phrasesAnswer: ["Mr","Miss","Sir"]
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

    checkToBe(){
      var answer = $('input[name="be"]').serializeArray();

      for(let i = 0; i<this.toBeAnswer.length; i++){
        if(answer[i].value === this.toBeAnswer[i]){
          $('#'+i).css({"border": "2px solid green"});
        }
        else{
          $('#'+i).css({"border": "2px solid red"});
        }
      }
    },

    checkPhrases(){
      var answer = $('input[name="phrase"]').serializeArray();

      for(let i = 0; i<this.phrasesAnswer.length; i++){
        if(answer[i].value === this.phrasesAnswer[i]){
          $('#p'+i).css({"border": "2px solid green"});
        }
        else{
          $('#p'+i).css({"border": "2px solid red"});
        }
      }
    },

    showToBe(){
      for(let i = 0; i<this.toBeAnswer.length; i++) {
        $('#' + i).val(this.toBeAnswer[i])
      }
    },

    showPhrases(){
      for(let i = 0; i<this.phrasesAnswer.length; i++) {
        $('#p' + i).val(this.phrasesAnswer[i])
      }
    },

    clearToBe(){
      for(let i = 0; i<this.toBeAnswer.length; i++) {
        $('#' + i).val("")
      }
    },

    clearPhrases(){
      for(let i = 0; i<this.phrasesAnswer.length; i++) {
        $('#p' + i).val("")
      }
    },
  }
}
</script>

<style scoped>


@import '../../styles/buttons.css';
@import '../../styles/style.css';
@import '../../styles/translation_style.css';

.column .example-3 input{
  margin: 0 !important;
}

.send-buttons button{
  margin-top: 5px;
  margin-bottom: 10px;
}

.column .example input{
  min-width: 150px;
  max-width: 150px;
  text-align: center;
}

.column .example p{
  min-width: 700px;
}



.lines {
  border-top: 1px solid #b8b8b8;
  width: 100%;
}

.try button{
  font-size: 15px;
}



</style>