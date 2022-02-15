<template>
  <div>
    <div class="form">
      <textarea class="translate-input" v-model="textToTranslate" spellcheck="false"  type="text" placeholder="Wpisz coś"></textarea>
      <textarea class="translate-input" v-model="translatedText" spellcheck="false" type="text" placeholder="Tłumaczenie"></textarea>
    </div>
  <div class="buttons">
    <select v-model="language">
      <option value="pl">Polski</option>
      <option value="en">Angielski</option>
    </select>
    <button class="btn btn-success" v-on:click="translateText(textToTranslate, language)"> Tłumacz </button>
  </div>
</div>
</template>

<script>
export default {
  name: "Translator",
  data(){
    return{
      translatedText: '',
      textToTranslate:'',
      language: '',
    }
  },

  created() {
    this.language = "pl";
  },

  methods: {

    translateText:function(text, language){
      this.$http.get('https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.202'+
          '11104T151508Z.0e4ca85b2359bd38.0495cf6c5eab432be51c684bb810095ba4626d27&lang='+language+'&text='+text)
          .then((response) => {
            this.translatedText = response.body.text[0];
          })
    }
  },
}


</script>

<style scoped>

.form{
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 200px;
  font-family: cg, Quicksand-Light !important;
}

.translate-input{
  padding: 50px;
  margin: 50px;
  font-size: 30px;
  -webkit-box-shadow: -3px 10px 38px 1px rgba(203, 203, 203, 1);
  -moz-box-shadow: -3px 10px 38px 1px rgba(203, 203, 203, 1);
  box-shadow: -3px 10px 38px 1px rgba(203, 203, 203, 1);
  border-radius: 20px;
  border-color: transparent;
  resize: none;


}

.translate-input:focus{
  outline: none;
}

.buttons{
  display: grid;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-family: cg, Quicksand-Light !important;
}

.buttons select{
  border-radius: 5px;
  padding: 10px;
}

.btn{
  align-items: center;
  margin-top: 20px;
  font-size: 20px;
  width: 100%;
  padding: 10px;
}

</style>