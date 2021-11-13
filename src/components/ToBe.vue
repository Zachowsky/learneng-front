<template>
<div id="main">
  <div class="content">
    <a v-on:click="changeRoute('/dashboard')" class="button-back"><font-awesome-icon icon="chevron-left"></font-awesome-icon></a>
    <div class="top-img">
      <img src="book-1870000.jpg">
      <div class="title">
        <p>Odmiana czasownika TO BE</p>
      </div>
    </div>
    <article>

      <p class="subtitle"> Czasownik TO BE </p>
      <p class="description">
        Czasownik "To Be"(być) w języku angielskim jest niezbędnym i jednym z najważniejszych wyrażeń gramatycznych.
        Używamy go praktycznie codziennie, gdy rozmawiamy z  drugą osobą.
      </p>
      <p class="subtitle-smaller"> Odmiana w Present Simple </p>
      <div class="center-table">
        <table>
          <thead>
          <tr>
            <th>Odmiana</th>
            <th>Skrót</th>
            <th>Tłumaczenie</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>I am</td>
            <td>I'm</td>
            <td>Ja jestem</td>
          </tr>
          <tr>
            <td>You are</td>
            <td>You're</td>
            <td>Ty jesteś</td>
          </tr>
          <tr>
            <td>He is</td>
            <td>He's</td>
            <td>On jest</td>
          </tr>
          <tr>
            <td>She is</td>
            <td>She's</td>
            <td>Ona jest</td>
          </tr>
          <tr>
            <td>It is</td>
            <td>It's</td>
            <td>Ono/to jest</td>
          </tr>
          <tr>
            <td>We are</td>
            <td>We're</td>
            <td>My jesteśmy</td>
          </tr>
          <tr>
            <td>You are</td>
            <td>You're</td>
            <td>Wy jesteście</td>
          </tr>
          <tr>
            <td>They are</td>
            <td>They're</td>
            <td>Oni/one są</td>
          </tr>
          </tbody>
        </table>
      </div>

      <p class="subtitle-smaller"> Odmiana w Past Simple </p>

      <div class="center-table">
        <table>
          <thead>
          <tr>
            <th>Odmiana</th>
            <th>Tłumaczenie</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>I was</td>
            <td>Ja byłem/byłam</td>
          </tr>
          <tr>
            <td>You were</td>
            <td>Ty byłeś</td>
          </tr>
          <tr>
            <td>He was</td>
            <td>On był</td>
          </tr>
          <tr>
            <td>She was</td>
            <td>Ona była</td>
          </tr>
          <tr>
            <td>It was</td>
            <td>Ono/to było</td>
          </tr>
          <tr>
            <td>We were</td>
            <td>My byliśmy/byłyśmy</td>
          </tr>
          <tr>
            <td>You were</td>
            <td>Wy byliście/byłyście</td>
          </tr>
          <tr>
            <td>They were</td>
            <td>Oni byli/One były</td>
          </tr>
          </tbody>
        </table>
      </div>

      <p class="subtitle-smaller"> Pytania z TO BE </p>

      <div class="center-table">
        <table>
          <thead>
          <tr>
            <th>Pytanie</th>
            <th>Tłumaczenie</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>Am I?</td>
            <td>Czy ja jestem?</td>
          </tr>
          <tr>
            <td>Are you?</td>
            <td>Czy ty jesteś?</td>
          </tr>
          <tr>
            <td>Is he?</td>
            <td>Czy on jest?</td>
          </tr>
          <tr>
            <td>Is she?</td>
            <td>Czy ona jest?</td>
          </tr>
          <tr>
            <td>Is it?</td>
            <td>Czy ono/to jest?</td>
          </tr>
          <tr>
            <td>Are we?</td>
            <td>Czy my jesteśmy?</td>
          </tr>
          <tr>
            <td>Are you?</td>
            <td>Czy wy jesteście?</td>
          </tr>
          <tr>
            <td>Are they?</td>
            <td>Czy oni/one są?</td>
          </tr>
          </tbody>
        </table>
      </div>
      <p class="subtitle-smaller"> Pytania z TO BE w Past Simple </p>
      <div class="center-table">
        <table>
          <thead>
          <tr>
            <th>Pytanie</th>
            <th>Tłumaczenie</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>Was I?</td>
            <td>Czy ja byłem/byłam?</td>
          </tr>
          <tr>
            <td>Were you?</td>
            <td>Czy ty byłeś/byłaś?</td>
          </tr>
          <tr>
            <td>Was he?</td>
            <td>Czy on był?</td>
          </tr>
          <tr>
            <td>Was she?</td>
            <td>Czy ona była?</td>
          </tr>
          <tr>
            <td>Was it?</td>
            <td>Czy ono/to było?</td>
          </tr>
          <tr>
            <td>Were we?</td>
            <td>Czy my byliśmy/byłyśmy?</td>
          </tr>
          <tr>
            <td>Were you?</td>
            <td>Czy wy byliście/byłyście?</td>
          </tr>
          <tr>
            <td>Were they?</td>
            <td>Czy oni/one byli/były?</td>
          </tr>
          </tbody>
        </table>
      </div>

      <p class="subtitle-smaller"> Przeczenia z TO BE </p>
      <div class="center-table">
        <table>
          <thead>
          <tr>
            <th>Przeczenie</th>
            <th>Skrót</th>
            <th>Tłumaczenie</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>I am not</td>
            <td>I’m not </td>
            <td>Ja nie jestem</td>
          </tr>
          <tr>
            <td> You are not</td>
            <td> You're not/You aren't</td>
            <td> Ty nie jesteś</td>
          </tr>
          <tr>
            <td> He is not</td>
            <td> He's not/He isn't</td>
            <td> On nie jest</td>
          </tr>
          <tr>
            <td> She is not</td>
            <td> She's not/She isn't</td>
            <td> Ona nie jest</td>
          </tr>
          <tr>
            <td> It is not</td>
            <td> It's not/It isn't</td>
            <td> Ono/to nie jest</td>
          </tr>
          <tr>
            <td> We are not</td>
            <td> We're not/We aren't</td>
            <td> My nie jesteśmy</td>
          </tr>
          <tr>
            <td> You are not</td>
            <td> You're not/You aren't</td>
            <td> Wy nie jesteście</td>
          </tr>
          <tr>
            <td> They are not</td>
            <td> They're not/They aren't</td>
            <td> Oni/one nie są</td>
          </tr>
          </tbody>
        </table>
      </div>

      <p class="subtitle-smaller"> Przeczenia z TO BE w Past Simple </p>
      <div class="center-table">

        <table>
          <thead>
          <tr>
            <th>Przeczenie</th>
            <th>Skrót</th>
            <th>Tłumaczenie</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>I was not</td>
            <td>I wasn't </td>
            <td>Ja nie byłem/byłam</td>
          </tr>
          <tr>
            <td> You were not</td>
            <td> You weren't</td>
            <td> Ty nie byłeś/byłaś</td>
          </tr>
          <tr>
            <td> He was not</td>
            <td> He wasn't</td>
            <td> On nie był</td>
          </tr>
          <tr>
            <td> She was not</td>
            <td> She wasn't</td>
            <td> Ona nie była</td>
          </tr>
          <tr>
            <td> It was not</td>
            <td> It wasn't</td>
            <td> Ono/to nie było</td>
          </tr>
          <tr>
            <td> We were not</td>
            <td> We weren't</td>
            <td> My nie byliśmy/byłyśmy</td>
          </tr>
          <tr>
            <td> You were not</td>
            <td> You weren't</td>
            <td> Wy nie byliście/byłyście</td>
          </tr>
          <tr>
            <td> They were not</td>
            <td> They weren't</td>
            <td> Oni/one nie byli/były</td>
          </tr>
          </tbody>
        </table>
      </div>
    </article>
    <a href="#main" id="button"><font-awesome-icon icon="chevron-up"></font-awesome-icon></a>
  </div>
</div>
</template>

<script>

import { library } from '@fortawesome/fontawesome-svg-core'
import { faChevronUp, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import $ from "jquery";

library.add(faChevronUp, faChevronLeft);
export default {
  name: "ToBe",

  mounted() {

    $('body').scroll(function() {
      if ($('body').scrollTop() > 350) {
        $('#button').addClass('show');
      } else {
        $('#button').removeClass('show');
      }
    });
  }
}

</script>

<style scoped>

#main{
  height: auto;
  width: auto;
  background-color: #ffffff;
  font-family: cg, Quicksand-Light;
}

.content{
  padding-bottom: 20px;
}

.top-img{
  display: flex;
  position: relative;
  overflow: hidden;
}

.top-img img {
  display: inline-block;
  width: 70%;
  margin: auto;
  object-fit: cover;
  filter: brightness(.5);
}

.title{
  position: absolute;
  top: 50%;
  left: 50%;
  width: 50%;
  text-align: center;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 45px;

}

article{
  width: 70%;
  padding: 10px;
  margin: 15px auto auto;
  background-color: white;
  font-size: 25px;
  text-align: justify;
  -webkit-box-shadow: 1px 5px 15px 2px rgba(123, 123, 123, 1);
  -moz-box-shadow: 1px 5px 15px 2px rgba(123, 123, 123, 1);
  box-shadow: 1px 5px 15px 2px rgba(123, 123, 123, 1);
}

article .description{
  padding: 20px 50px;
}

article .subtitle{
  font-size: 36px;
  padding-left: 50px;
  font-weight: 900;
}

article .subtitle-smaller{
  font-size: 28px;
  padding-left: 50px;
  margin-top: 30px;
  margin-bottom: 30px;
  font-weight: 700;
}

.center-table{
  display: grid;
  align-items: center;
  justify-content: center;
}

.center-table table {
  text-align: center;
  width: 800px;
  border-collapse: collapse;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(0,0,0,0.1);
}

.center-table th, td {
  padding: 15px;
  background-color: rgba(255,255,255,0.2);
  color: #000000;
}

.center-table th {
  text-align: center;
}

.center-table thead th{
  background-color: #afe38e;
}

#button {
  display: inline-block;
  background-color: #afe38e;
  width: 50px;
  height: 50px;
  text-align: center;
  position: fixed;
  bottom: 30px;
  right: 30px;
  transition: background-color .3s,
  opacity .5s, visibility .5s;
  opacity: 0;
  visibility: hidden;
  z-index: 9999;
  border-radius: 40%;
  font-size: 34px;
  color: #095018;
}

.button-back{
  display: inline-block;
  background-color: #afe38e;
  width: 50px;
  height: 50px;
  margin: 20px;
  text-align: center;
  position: fixed;
  z-index: 9999;
  border-radius: 40%;
  font-size: 34px;
  color: #095018;
}
.button-back:hover{
  cursor: pointer;
  background-color: #aeef80;
}

#button:hover{
  cursor: pointer;
  background-color: #aeef80;
}

#button.show {
  opacity: 1;
  visibility: visible;
}

</style>