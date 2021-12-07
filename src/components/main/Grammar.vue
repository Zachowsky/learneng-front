<template>
  <div class="grammar">
  <div class="type">
    <div class="type_info">
      <img src="start.png">
      <p>Początek</p>
      <a v-on:click="changeRoute('/tobe')">Odmiana czasownika TO BE</a>
      <a v-on:click="changeRoute('/polite-phrases')">Zwroty grzecznościowe</a>
      <a v-on:click="changeRoute('/greetings')">Przywitania i pożegnania</a>
      <a v-on:click="changeRoute('/start-ex')">Zadania</a>
    </div>
  </div>

    <div class="type">
      <div class="type_info">
        <img src="group.png">
        <p>Zaimki osobowe</p>
        <a v-on:click="changeRoute('/personal-pronouns')">Teoria o zaimkach osobowych</a>
        <a v-on:click="changeRoute('/personal-pronouns-ex')">Sprawdź swoją wiedzę</a>
      </div>
    </div>

    <div class="type">
      <div class="type_info">
        <img src="hang-clothes.png">
        <p>Rzeczowniki policzalne i niepoliczalne</p>
        <a v-on:click="changeRoute('/countable')">Teoria o rzeczownikach policzalnych</a>
        <a v-on:click="changeRoute('/uncountable')">Teoria o rzeczownikach niepoliczalnych</a>
        <a v-on:click="changeRoute('/nouns-ex')">Zadania</a>
      </div>
    </div>

    <div class="type">
      <div class="type_info">
        <img src="tense.png">
        <p>Czasy</p>
        <div class="inline-links"><a v-on:click="changeRoute('/present-simple')">Teoria Present Simple</a><a  v-on:click="changeRoute('/present-simple-ex')">Zadania</a></div>
        <div class="inline-links"><a v-on:click="changeRoute('/past-simple')">Teoria Past Simple</a><a  v-on:click="changeRoute('/past-simple-ex')">Zadania</a></div>
        <div class="inline-links"><a v-on:click="changeRoute('/present-continuous')">Teoria Present Continuous</a><a  v-on:click="changeRoute('/present-continuous-ex')">Zadania</a></div>
        <div class="inline-links"><a v-on:click="changeRoute('/past-continuous')">Teoria Past Simple</a><a v-on:click="changeRoute('/past-simple-ex')">Zadania</a></div>
      </div>
    </div>

    <div class="type">
      <div class="type_info">
        <img src="podium.png">
        <p>Stopniowanie</p>
        <a v-on:click="changeRoute('/gradation')">Teoria stopniowania</a>
        <a v-on:click="changeRoute('/gradation-check')">Sprawdź znajomość słów</a>
        <a v-on:click="changeRoute('/gradation-ex')">Zadania</a>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "Grammar"
}
</script>

<style scoped>

.grammar{
  display: flex;
  align-items: stretch;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 80px;
}

.type {
  width: 48%;
  margin: 10px;
  background-color: white;
  box-sizing: border-box;
  -webkit-box-shadow: 1px 1px 19px -2px rgba(202, 202, 202, 1);
  -moz-box-shadow: 1px 1px 19px -2px rgba(202, 202, 202, 1);
  box-shadow: 1px 1px 19px -2px rgba(202, 202, 202, 1);
}

.type_info img{
  padding: 30px;
  max-height: 150px;
}

.type_info p{
  display: inline-grid;
  text-align: center;
  min-width: 300px;
  max-width: 300px;
}

.description{
  font-size: 15px;
  color: grey;
}

.type_info a{
  color: #000000;
  display: block;
  padding: 0 25px;
  text-align: center;
  text-decoration: none;
  font-size: 18px;
  border-top: 1px solid #c9c9c9;

  -webkit-transition: all .35s ease;
  -moz-transition: all .35s ease;
  -ms-transition: all .35s ease;
  -o-transition: all .35s ease;
  transition: all .35s ease;
}

.type_info a:hover{
  background-color: rgba(138, 255, 116, 0.62);
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

.inline-links{
  border-top: 1px solid #c9c9c9;
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.inline-links a {
  border-top: none;
  margin-left: 130px;
  margin-right: 130px;
}

</style>