<template>
  <div id="main">
    <div class="content">
      <a v-on:click="changeRoute('/dashboard')" class="button-back"><font-awesome-icon icon="chevron-left"></font-awesome-icon></a>
      <div class="top-img">
        <img src="book-6709160.jpg">
        <div class="title">
          <p>Zaimki osobowe</p>
        </div>
      </div>
      <article>
        <p class="subtitle">Zaimki osobowe</p>
        <p class="description">Zaimki osobowe służą między inny mi do zastąpienia rzeczownika.
          Dzięki nim w łatwy sposób można uniknąć powtórzeń w zdaniach.
        </p>
        <p class="subtitle-smaller">Kilka zasad stosowania zaimków osobowych:</p>
        <ul>
          <li>Występują najczęściej na początku zdania w zdaniach twierdzących i przeczących</li>
          <li>Nie zmieniają swojej formy</li>
          <li>Nie należy pomijać zaimków osobowych w zdaniach, ponieważ użycie podmiotu jest obowiązkowe.
            Brak podmiotu sprawiłby, że nie wiedzielibyśmy kto wykonuje daną czynność,</li>
          <li>Zaimek <b>you</b> oznacza ty lub wy, wszystko zależy od kontekstu zdania. Zaimek ten stosujemy również w wyrażeniach bezosobowych</li>
          <li>Zaimek <b>it</b> jest tłumaczony jako to, ono. Można go stosować określając przedmioty, zwierzęta itp. Za jego pomocą możemy tez określić pogodę, czas lub nawet odległość</li>
        </ul>

        <p class="subtitle-smaller-colored">Lista zaimków osobowych:</p>

        <div class="center-table">
          <table>
            <thead>
            <tr>
              <th>Liczba pojedyncza</th>
              <th>Liczba mnoga</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>I - ja</td>
            </tr>
            <tr>
              <td>You - ty</td>
              <td>We - my</td>
            </tr>
            <tr>
              <td>He - on</td>
              <td>You - wy</td>
            </tr>
            <tr>
              <td>She - ona</td>
              <td>They - oni/one</td>
            </tr>
            <tr>
              <td>It - ono/to</td>
            </tr>
            </tbody>
          </table>
        </div>

        <p class="subtitle-smaller-colored">Zaimki w funkcji dopełnienia:</p>

        <div class="center-table">
          <table>
            <thead>
            <tr>
              <th>Liczba pojedyncza</th>
              <th>Liczba mnoga</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>Me - mnie</td>
            </tr>
            <tr>
              <td>You - ciebie, tobie</td>
              <td>Us - nas, nam</td>
            </tr>
            <tr>
              <td>Him - jego/go, jemu/mu</td>
              <td>You - was, wam</td>
            </tr>
            <tr>
              <td>Her - jej, niej</td>
              <td>Them - ich, im, nich</td>
            </tr>
            <tr>
              <td>It - ono/to</td>
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

export default {
  name: "PersonalPronouns"
}
</script>

<style scoped>

@import '../../styles/style.css';

</style>