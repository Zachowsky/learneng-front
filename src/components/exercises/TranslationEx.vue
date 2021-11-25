<template>
  <div class="translation">
    <div class="type" v-on:click="changeRoute('/dashboard/present-simple-translation')">
      <div class="type_info">
        <img src="start.png">
        <p>Present Simple</p>
        <p class="description">
          Ćwiczenia z tłumaczenia zdań w czasie Present Simple z języka angielskiego na polski oraz w drugą stronę.
        </p>
      </div>
    </div>

    <div class="type" v-on:click="changeRoute('/dashboard/past-simple-translation')">
      <div class="type_info">
        <img src="group.png">
        <p>Past Simple</p>
        <p class="description">Ćwiczenia z tłumaczenia zdań w czasie Past Simple z języka angielskiego na polski oraz w drugą stronę.</p>
      </div>
    </div>

    <div class="type" v-on:click="changeRoute('/dashboard/present-continuous-translation')">
      <div class="type_info">
        <img src="hang-clothes.png">
        <p>Present Continuous</p>
        <p class="description">Ćwiczenia z tłumaczenia zdań w czasie Present Continuous z języka angielskiego na polski oraz w drugą stronę.</p>
      </div>
    </div>

    <div class="type" v-on:click="changeRoute('/dashboard/past-continuous-translation')">
      <div class="type_info">
        <img src="tense.png">
        <p>Past Continuous</p>
        <p class="description">Ćwiczenia z tłumaczenia zdań w czasie Past Continuous z języka angielskiego na polski oraz w drugą stronę.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TranslationEx"
}
</script>

<style scoped>

.translation{
  display: flex;
  align-items: stretch;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 150px;
}

.type {
  position: relative;
  display: inline-block;
  flex-direction: row;
  justify-content: center;
  width: 30%;
  margin: 35px;
  background-color: white;
  box-sizing: border-box;
  -webkit-box-shadow: 0px 3px 59px -9px rgba(177, 177, 177, 1);
  -moz-box-shadow: 0px 3px 59px -9px rgba(177, 177, 177, 1);
  box-shadow: 0px 3px 59px -9px rgba(177, 177, 177, 1);
}

.type_info img{
  position: relative;
  padding: 30px;
  max-height: 150px;
}

.type_info p{
  display: inline-grid;
  justify-content: center;
  text-align: justify;
  margin-left: 50px;
  margin-right: 50px;
}

.description{
  font-size: 18px;
  color: grey;
}

.type:hover{
  background: rgba(192, 255, 157, 0.9);
  -webkit-transition: all .35s ease;
  -moz-transition: all .35s ease;
  -ms-transition: all .35s ease;
  -o-transition: all .35s ease;
  transition: all .35s ease;
  cursor: pointer;
}

.type_info{
  text-align: center;
  font-family: cg, Quicksand-Light;
  font-weight: 900;
  font-size: 24px;
  line-height: 30px;
  color: #000000;
}


</style>