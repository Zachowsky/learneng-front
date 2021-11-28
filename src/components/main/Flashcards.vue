<template>
  <div>
<a v-on:click="changeRoute('/dashboard')" class="button-back"><font-awesome-icon icon="chevron-left"></font-awesome-icon></a>
  <div class="content">
  <div class="flashcard">
    <div class="flashcard-inner">
      <div class="flashcard-front">
        <p id="front" style="text-transform: uppercase">{{this.front[0]}}</p>
      </div>
      <div class="flashcard-back">
        <p id="back" style="text-transform: uppercase">{{this.back[0]}}</p>
          <a v-on:click="translate" type="submit" id="play_btn"><font-awesome-icon icon="play-circle"></font-awesome-icon></a>
      </div>
    </div>
  </div>
    <div class="buttons">
      <button id="1" class="bn632-hover bn22"> UMIEM :)</button>
      <button id="0" class="bn632-hover bn23"> NIE UMIEM :(</button>
    </div>
  </div>

  </div>
</template>


<script>
import $ from 'jquery';

export default {
  name: "Flashcards",

  data () {
    return {
      isLoading: true,
      cards: [],
      front: [],
      back: [],
      synth: window.speechSynthesis,
      voiceList: [],
      selectedVoice: [],
      newSpeech: new window.SpeechSynthesisUtterance()
    }
  },


  created() {

    var vm = this;
    this.cards = JSON.parse(sessionStorage.getItem('flashcards'));
    for(let i = 0; i < this.cards.length; i++){
      this.front[i] = this.cards[i].front;
      this.back[i] = this.cards[i].back;
    }

    var fr = this.front;
    var bc = this.back;
    var i = 1;
    var correct = 0;

    $(document).on('click', '#1', function () {
      if(i === fr.length){
        i = 0;
        correct = correct+1;
        vm.$swal("Info", "Statystyki: "+correct+"/"+vm.cards.length, "info")
        correct = 0;
      }
      $('#front').text(fr[i]);
      $('#back').text(bc[i]);
      i++;
      correct = correct+1;
    });

    $(document).on('click', '#0', function () {
      if(i === fr.length){
        i = 0;
        vm.$swal("Info", "Statystyki: "+correct+"/"+vm.cards.length, "info")
        correct = 0;
      }
      $('#front').text(fr[i]);
      $('#back').text(bc[i]);
      i++;
    });
  },

  mounted () {

    $(document).ready(function(){
      $('.flashcard-front').on('click', function(){
        $(this).parent('.flashcard-inner').addClass('flashcard_rotate');
      });

      $('.flashcard-back').on('click', function(){
        $(this).parent('.flashcard-inner').removeClass('flashcard_rotate');
      });

      $('#play_btn').on('click', function(e){
        e.stopPropagation();
      });
    });


    this.voiceList = this.synth.getVoices()

    if (this.voiceList.length) {
      this.isLoading = false
    }

    this.synth.onvoiceschanged = () => {
      this.voiceList = this.synth.getVoices()
    }

    this.speechEvents();
  },

  methods: {

    speechEvents () {
      this.newSpeech.onstart = () => {
        this.isLoading = true
      }

      this.newSpeech.onend = () => {
        this.isLoading = false
      }
    },

    translate (event) {

      event.preventDefault();

      this.selectedVoice = this.voiceList.filter(function (el){
        if(el.name === 'Google UK English Male'){
          return el
        }
      })

      this.newSpeech.text = `${$('#back').text()}`
      this.newSpeech.voice = this.selectedVoice[0];
      this.synth.speak(this.newSpeech)

    },
  }
}

</script>

<style scoped>

@import '../../styles/style.css';
@import '../../styles/buttons.css';

.content{
  display: grid;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.buttons{
  font-family: cg, Quicksand-Light;
  font-size: 20px;
  margin: 10px auto auto;
}

.buttons button{
  margin-left: 5px;
  margin-right: 5px;
}

#play_btn{
  display: flex;
  align-self: center;
  border-radius: 50%;
}

#play_btn:hover{
  background-color: #0ba360;
}

.flashcard {
  width: 400px;
  height: 100px;
  margin-bottom: 10px;
  margin-top: auto;

  font-family: cg, Quicksand-Light;
  font-weight: 900;
  font-size: 50px;
  color: #FFFFFF;
}

.flashcard:hover{
  cursor: pointer;
}

.flashcard p{
  margin-top: 10px;
}

.flashcard-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;

}

.flashcard_rotate{
  transform: rotateY(180deg);
}

.flashcard-front, .flashcard-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.flashcard-front {
  border-radius: 50px;
  color: black;
  background-color: #e5e5e5;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  border: 1px solid black;
}

.flashcard-back {
  display: flex;
  position: relative;
  justify-content: space-evenly;
  color: black;
  background-color: #e5e5e5;
  border-radius: 50px;
  transform: rotateY(180deg);
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  border: 1px solid black;
}

</style>