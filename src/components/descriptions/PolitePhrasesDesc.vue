<template>
<div id="main">
  <div class="content">
    <a v-on:click="changeRoute('/dashboard')" class="button-back"><font-awesome-icon icon="chevron-left"></font-awesome-icon></a>
    <div class="top-img">
      <img src="book-6709160.jpg">
      <div class="title">
        <p>Zwroty grzecznościowe</p>
      </div>
    </div>
    <article>
      <p class="subtitle"> Zwroty grzecznościowe</p>
      <p class="description">
        Korzystanie ze zwrotów grzecznościowych jest nieodzownym elementem każdego języka,
        niezależnie czy rozmawiamy z osobami, które znamy od dawna, czy z kimś kogo dopiero poznaliśmy.
        W każdym kraju zasady te mogą się nieco różnić, dlatego warto znać zwroty z języka angielskiego.
      </p>

      <p class="subtitle-smaller">Podstawowe zwroty grzecznościowe:</p>
      <p class="subtitle-smaller-colored">Mr. (Pan)</p>
      <p class="description">To skrót od Mister. Używamy go przed imieniem i nazwiskiem lub samym nazwiskiem. Jest to zwrot „Pan”. Używamy go niezależnie od stanu cywilnego osoby, do której się zwracamy.</p>
      <div class="center-table">
        <table>
          <tbody>
          <tr>
            <td>This is <b>Mr.</b> Jackson.</td>
            <td>To jest Pan Jackson.</td>
          </tr>
          </tbody>
        </table>
      </div>
      <p class="subtitle-smaller-colored">Ms. (Pani)</p>
      <p class="description">Skrót oznaczający „Pani”. Jest to najbezpieczniejsza forma wobec kobiety, ponieważ możemy go użyć gdy nie jesteśmy pewni statusu cywilnego </p>
      <div class="center-table">
        <table>
          <tbody>
          <tr>
            <td>This is <b>Ms.</b> Rodriguez.</td>
            <td>To jest Pani Rodriguez.</td>
          </tr>
          </tbody>
        </table>
      </div>
      <p class="subtitle-smaller-colored">Mrs. (Pani)</p>
      <p class="description">Skrót, który również oznacza „Pani” jednak możemy go użyć tylko w przypadku kobiet zamężnych oraz w wyjątkowych sytuacjach do wdów.</p>
      <div class="center-table">
        <table>
          <tbody>
          <tr>
            <td>Good morning  <b>Mrs.</b> Smith.</td>
            <td>Dzień dobry Pani Smith.</td>
          </tr>
          </tbody>
        </table>
      </div>
      <p class="subtitle-smaller-colored">Miss. (Pani)</p>
      <p class="description">Kolejny zwrot dla Pań, tym razem użyjemy go do kobiet niezamężnych.</p>
      <div class="center-table">
        <table>
          <tbody>
          <tr>
            <td>Hello <b>Miss</b> Cash.</td>
            <td>Witam Panno Cash.</td>
          </tr>
          </tbody>
        </table>
      </div>
      <p class="subtitle-smaller-colored">Sir (Szanowny Pan)</p>
      <p class="description">Sir jest kolejnym określeniem mężczyzny, jednak ma ono więcej szacunku .</p>
      <div class="center-table">
        <table>
          <tbody>
          <tr>
            <td>Is this your luggage, <b>Sir</b>?</td>
            <td>Czy to pański bagaż, szanowny panie?</td>
          </tr>
          </tbody>
        </table>
      </div>
      <p class="subtitle-smaller-colored">madam (Szanowna Pani)</p>
      <p class="description">Jest to jedyny zwrot pisany małą literą. Jest to odpowiednik zwrotu Sir dla kobiet.</p>
      <div class="center-table">
        <table>
          <tbody>
          <tr>
            <td>Is this your luggage, <b>madam</b>?</td>
            <td>Czy to pani bagaż, szanowna pani?</td>
          </tr>
          </tbody>
        </table>
      </div>
    </article>
  </div>
  <a href="#main" id="button"><font-awesome-icon icon="chevron-up"></font-awesome-icon></a>
</div>
</template>

<script>
export default {
  name: "PolitePhrases"
}
</script>

<style scoped>

@import '../../styles/style.css';

</style>