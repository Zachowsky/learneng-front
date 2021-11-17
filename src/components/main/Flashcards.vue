<template>
  <div>
<a v-on:click="changeRoute('/dashboard')" class="button-back"><font-awesome-icon icon="chevron-left"></font-awesome-icon></a>
  <div class="content">
  <div class="flashcard">
    <div class="flashcard-inner">
      <div class="flashcard-front">
        <p id="front">{{this.front[0]}}</p>
      </div>
      <div class="flashcard-back">
        <p id="back">{{this.back[0]}}</p>
          <a v-on:click="translate" type="submit" id="play_btn"><font-awesome-icon icon="play-circle"></font-awesome-icon></a>
      </div>
    </div>
  </div>
    <div class="buttons">
      <button id="next" class="btn-outline-primary">NASTĘPNY</button>
      <button id="1" class="btn-outline-success">UMIEM :)</button>
      <button id="0" class="btn-outline-danger">NIE UMIEM :(</button>
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

    this.cards = JSON.parse(sessionStorage.getItem('flashcards'));
    for(let i = 0; i < this.cards.length; i++){
      this.front[i] = this.cards[i].front;
      this.back[i] = this.cards[i].back;
    }

    var fr = this.front;
    var bc = this.back;
    var i = 1;

    $(document).on('click', '#next', function () {
      if(i === fr.length){
        i = 0;
      }
      $('#front').text(fr[i]);
      $('#back').text(bc[i]);
      i++;

      return false;
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
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
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
  color: black;
  background-image: url('../../../public/paper.jpg');
}

.flashcard-back {
  display: flex;
  position: relative;
  justify-content: space-evenly;
  background-image: url('../../../public/paper.jpg');
  color: black;
  transform: rotateY(180deg);
}

</style>