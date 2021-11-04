<template>
<div>
  <form v-on:submit="formSubmit">
    <input type="text" v-model="textToTranslate" placeholder="Wprowadz slowo">
    <input type="submit" value="Tlumacz">
    <select v-model="lang">
      <option value="pl">Polski</option>
      <option value="en">Angielski</option>
    </select>
  </form>
</div>
</template>

<script>
export default {
  name: "YandexTranslate",
  data(){
    return{
      textToTranslate:'',

    }
  },

  created() {
    this.lang = "pl";
  },

  methods: {
    formSubmit(e){
      this.$emit('formSubmit', this.textToTranslate, this.lang);
      e.preventDefault();
    }
  }
}
</script>

<style scoped>

</style>