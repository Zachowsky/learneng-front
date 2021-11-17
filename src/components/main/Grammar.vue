<template>
  <div class="grammar">
  <div class="type">
    <div class="type_info">
      <img src="start.png">
      <p>Początek</p>
      <p class="description"></p>
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
        <p class="description"></p>
        <a v-on:click="changeRoute('/personal-pronouns')">Teoria o zaimkach osobowych, przykłady</a>
        <a v-on:click="changeRoute('/personal-pronouns-ex')">Zadania</a>
      </div>
    </div>

    <div class="type">
      <div class="type_info">
        <img src="hang-clothes.png">
        <p>Rzeczowniki policzalne i niepoliczalne</p>
        <p class="description"></p>
        <a v-on:click="changeRoute('/countable')">Teoria o rzeczownikach policzalnych</a>
        <a v-on:click="changeRoute('/uncountable')">Teoria o rzeczownikach niepoliczalnych</a>
        <a v-on:click="changeRoute('/nouns-ex')">Zadania</a>
      </div>
    </div>

    <div class="type">
      <div class="type_info">
        <img src="tense.png">
        <p>Czasy</p>
        <p class="description"></p>
        <a v-on:click="changeRoute('/present-simple')">Teoria Present Simple</a>
        <a v-on:click="changeRoute('/past-simple')">Teoria Past Simple</a>
        <a v-on:click="changeRoute('/present-continuous')">Teoria Present Continuous</a>
        <a v-on:click="changeRoute('/past-continuous')">Teoria Past Simple</a>
      </div>
    </div>

    <div class="type">
      <div class="type_info">
        <img src="podium.png">
        <p>Stopniowanie</p>
        <p class="description"></p>
        <a v-on:click="changeRoute('/gradation')">Teoria stopniowania</a>
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
  position: relative;
  display: inline-block;
  flex-direction: row;
  justify-content: center;
  width: 48%;
  margin: 10px;
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
  border-top: 1px solid #a1a1a1;

  -webkit-transition: all .35s ease;
  -moz-transition: all .35s ease;
  -ms-transition: all .35s ease;
  -o-transition: all .35s ease;
  transition: all .35s ease;
}

.type_info a:hover{
  background-color: rgba(58, 108, 50, 0.62);
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
  border-bottom: 1px solid #a1a1a1;

}
</style>