<template>
<div id="main">
  <div class="content">
    <a v-on:click="changeRoute('/dashboard')" class="button-back"><font-awesome-icon icon="chevron-left"></font-awesome-icon></a>
    <div class="top-img">
      <img src="tea-time-3240766.jpg">
      <div class="title">
        <p>Rzeczowniki niepoliczalne</p>
      </div>
    </div>
    <article>
      <p class="subtitle">Rzeczowniki niepoliczalne</p>
      <p class="description">
        Rzeczowniki niepoliczalne, krótko mówiąc, opisują rzeczy, których nie jesteśmy w stanie policzyć.
        Są to zazwyczaj przedmioty lub pojęcia i cechy, które są zbyt małe lub niemożliwe do policzenia jak np.: ciecze, gazy, włosy itp..
        Zazwyczaj nie posiadają one formy mnogiej.
      </p>

      <p class="subtitle-smaller-colored">Przykłady</p>

      <div class="center-table">
        <table>
          <thead>
          <tr>
            <th>Rzeczownik</th>
            <th>Tłumaczenie</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>Tea</td>
            <td>Herbata</td>
          </tr>
          <tr>
            <td>Water</td>
            <td>Woda</td>
          </tr>
          <tr>
            <td>Sugar</td>
            <td>Cukier</td>
          </tr>
          <tr>
            <td>Love</td>
            <td>Miłość</td>
          </tr>
          <tr>
            <td>Fear</td>
            <td>Strach</td>
          </tr>
          <tr>
            <td>Air</td>
            <td>Powietrze</td>
          </tr>
          </tbody>
        </table>
      </div>

      <p class="description">Zasadą jest też fakt, iż <b>nie można używać przedimków</b> a/an razem z rzeczownikami niepoliczalnymi.
        Do określania tego typu słów służą wyrażenia takie jak:<b> much, a lot of, a bit of</b> itp..
        Można też użyć określenia miary jak np.: <b>1kg of, an hour of, 1L of</b> itp.. Jeśli natomiast chcemy zapytać o
        ilość wyrażaną przez rzeczownik niepoliczalny musimy użyć sformułowania <b>„How much?”</b>.
      </p>

      <p class="subtitle-smaller-colored">Przykłady:</p>

      <div class="center-table">
        <table>
          <thead>
          <tr>
            <th>Przykład</th>
            <th>Tłumaczenie</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>There has been a lot of research.</td>
            <td>Przeprowadzono wiele badań.</td>
          </tr>
          <tr>
            <td>He gave me a great advice.</td>
            <td>Udzielił mi świetnej rady.</td>
          </tr>
          <tr>
            <td>How much coffee do you want?</td>
            <td>Ile chcesz kawy?</td>
          </tr>
          <tr>
            <td>You need to add 1 spoon of sugar.</td>
            <td>Musisz dodać 1 łyżkę cukru.</td>
          </tr>
          </tbody>
        </table>
      </div>
      <p class="description">
        Możemy napotkać również sytuacje, w których rzeczownik jest policzalny w innym języku i niepoliczalny w języku angielskim.
      </p>

      <p class="subtitle-smaller-colored">Przykłady:</p>
      <div class="center-table">
        <table>
          <thead>
          <tr>
            <th>Rzeczownik</th>
            <th>Tłumaczenie</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>Advice</td>
            <td>Rada</td>
          </tr>
          <tr>
            <td>Bread</td>
            <td>Chleb</td>
          </tr>
          <tr>
            <td>Furniture</td>
            <td>Meble</td>
          </tr>
          <tr>
            <td>Information</td>
            <td>Informacja</td>
          </tr>
          <tr>
            <td>News</td>
            <td>Wiadomości</td>
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
  name: "UncountableNounsDesc"
}
</script>

<style scoped>

@import '../../styles/style.css';

</style>