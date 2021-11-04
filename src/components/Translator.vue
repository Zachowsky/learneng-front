<template>
  <div class="main">
<HeaderDash></HeaderDash>
    <div class="transl">
      <YandexTranslate v-on:formSubmit="translateText"></YandexTranslate>
      <h1>{{translatedText}}</h1>
    </div>
  </div>
</template>
<script>

import HeaderDash from "@/components/HeaderDash";
import YandexTranslate from "@/components/YandexTranslate";

export default {
  name: "Translator",
  components: {YandexTranslate, HeaderDash},

  data: function (){
    return {
      translatedText:''
    }
  },

  methods: {
    translateText:function(text, lang){
      this.$http.get('https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20211104T151508Z.0e4ca85b2359bd38.0495cf6c5eab432be51c684bb810095ba4626d27&lang='+lang+'&text='+text)
      .then((response) => {
        this.translatedText = response.body.text[0];
      })
    }
  }
}
</script>



<style scoped>

.main{
  background-image: linear-gradient(-60deg, #16a085 0%, #f4d03f 100%);
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.transl{
  position: absolute;
  width: 100%;
  height: 100%;
  top: 200px;
  text-align: center;
}
</style>