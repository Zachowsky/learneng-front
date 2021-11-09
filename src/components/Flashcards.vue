<template>
  <div class="flashcard">
    <div class="flashcard-inner">
      <div class="flashcard-front">
        <p v-bind:value="front">{{front}} </p>
      </div>
      <div class="flashcard-back">
        <p v-bind:value="back">{{back}} </p>
        <div class="play-btn">
          <button v-on:click="translate" type="submit" class="btn btn-success" id="play_btn"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-megaphone-fill" viewBox="0 0 16 16">
            <path d="M13 2.5a1.5 1.5 0 0 1 3 0v11a1.5 1.5 0 0 1-3 0v-11zm-1 .724c-2.067.95-4.539 1.481-7 1.656v6.237a25.222 25.222 0 0 1 1.088.085c2.053.204 4.038.668 5.912 1.56V3.224zm-8 7.841V4.934c-.68.027-1.399.043-2.008.053A2.02 2.02 0 0 0 0 7v2c0 1.106.896 1.996 1.994 2.009a68.14 68.14 0 0 1 .496.008 64 64 0 0 1 1.51.048zm1.39 1.081c.285.021.569.047.85.078l.253 1.69a1 1 0 0 1-.983 1.187h-.548a1 1 0 0 1-.916-.599l-1.314-2.48a65.81 65.81 0 0 1 1.692.064c.327.017.65.037.966.06z"/>
          </svg></button>
        </div>
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
      back: 'WORD',
      front: 'SLOWO',
      synth: window.speechSynthesis,
      voiceList: [],
      selectedVoice: [],
      newSpeech: new window.SpeechSynthesisUtterance()
    }
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

    this.speechEvents()
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

      this.newSpeech.text = `${this.back}`
      this.newSpeech.voice = this.selectedVoice[0];
      this.synth.speak(this.newSpeech)
    },

  }

}
</script>

<style scoped>



.play-btn button {
  width: 60px;
  height: 60px;
}

.play-btn svg {
  width: 35px;
  height: 40px;
}

.flashcard {
  position: absolute;
  width: 528px;
  height: 139px;
  left: 687px;
  top: 410px;

  font-family: cg, Quicksand-Light;
  font-style: normal;
  font-weight: bold;
  font-size: 70px;
  line-height: 87px;
  text-align: center;

  color: #FFFFFF;
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
}

.flashcard-back {
  background-color: #000000;
  color: white;
  transform: rotateY(180deg);
  position: relative;
}
</style>