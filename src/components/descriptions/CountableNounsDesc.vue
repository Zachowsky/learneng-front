<template>
  <div id="main">
    <div class="content">
      <a v-on:click="changeRoute('/dashboard')" class="button-back"><font-awesome-icon icon="chevron-left"></font-awesome-icon></a>
      <div class="top-img">
        <img src="tea-time-3240766.jpg">
        <div class="title">
          <p>Rzeczowniki policzalne</p>
        </div>
      </div>
      <article>
        <p class="subtitle">Rzeczowniki policzalne</p>
        <p class="description">W skrócie opisują one elementy, które możemy policzyć.
          Występują zarówno w liczbie pojedynczej i mnogiej.
          Przed rzeczownikami w liczbie pojedynczej należy dodać przedimek <b>„a”</b> lub <b>„an”</b>(gdy rzeczownik zaczyna się na samogłoskę).
          Jeśli natomiast chcemy zapytać o ilość, należy użyć pytania <b>„How many?”</b>
        </p>

        <p class="subtitle-smaller-colored">Przykłady:</p>

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
              <td>One dog/ A dog</td>
              <td>Two dogs</td>
            </tr>
            <tr>
              <td>One cat/ A cat</td>
              <td>Two cats</td>
            </tr>
            <tr>
              <td>One man/ A man</td>
              <td>Two men</td>
            </tr>
            <tr>
              <td>One idea/ An idea</td>
              <td>Two ideas</td>
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
  name: "Nouns"
}
</script>

<style scoped>

@import '../../styles/style.css';

</style>