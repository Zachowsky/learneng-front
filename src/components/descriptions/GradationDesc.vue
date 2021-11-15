<template>
  <div id="main">
    <div class="content">
      <a v-on:click="changeRoute('/dashboard')" class="button-back"><font-awesome-icon icon="chevron-left"></font-awesome-icon></a>
      <div class="top-img">
        <img src="book-6709160.jpg">
        <div class="title">
          <p>Stopniowannie przymiotników</p>
        </div>
      </div>
      <article>
        <p class="subtitle">Stopniowanie</p>
        <p class="description">W skrócie, stopniowanie przymiotników jest mechanizmem, który pozwala nam dostosować intensywność wybranej cechy.
          Można wyróżnić 3 podstawowe stopnie:
        </p>

        <ul>
          <li><b>Stopień równy (positive)</b> – oznacza on przymiotnik w formie podstawowej, big, small</li>
          <li><b>Stopień wyższy (comparative)</b> – używamy, gdy chcemy powiedzieć, że coś jest bardziej intensywne niż normalnie, smaller, bigger</li>
          <li><b>Stopień najwyższy (superlative)</b> – używamy, gdy chcemy wyróżnić nasz przymiotnik na tle innych, gdy wiemy że coś jest „naj”</li>
        </ul>

        <p class="description">Przymiotniki można podzielić na stopniowane <b>regularnie i nieregularnie</b>.
          Nieregularne musimy zapamiętać, ponieważ nie obejmują je żadne zasady.
          Jeśli chodzi o pozostałe przymiotniki, należy przestrzegać reguł dostosowanych w zależności od sylab.
        </p>

        <p class="subtitle-smaller-colored">Przymiotniki jednosylabowe:</p>
        <ul>
          <li>Przymiotniki te stopniujemy poprzez dodanie końcówki <b>-er</b> w stopniu wyższym oraz <b>-est</b> oraz <b>the</b> na początek w najwyższym.</li>
          <li>Jeżeli przymiotnik zakończony jest na <b>-e</b> to dodajemy na koniec tylko <b>-r</b> oraz <b>-st</b>. </li>
          <li>Jeśli przymiotnik zakończony jest na -y, następuje zamiana -y na -i oraz dodajemy końcówki -er i -est. </li>
          <li>Jeśli przymiotnik ma na jego końcu sekwencja spółgłoska-samogłoska-spółgłoska. Wtedy następuje podwojenie ostatniej spółgłoski oraz dodanie standardowych końcówek -er i -est.</li>
        </ul>
        <div class="center-table">
          <table>
            <thead>
            <tr>
              <th>Positive (Stopień równy)</th>
              <th>Comparative (Stopień wyższy)</th>
              <th>Superlative (Stopień najwyższy)</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>Old</td>
              <td>Older</td>
              <td>The oldest</td>
            </tr>
            <tr>
              <td>Tall</td>
              <td>Taller</td>
              <td>The tallest</td>
            </tr>
            <tr>
              <td>Dry</td>
              <td>Drier</td>
              <td>The driest</td>
            </tr>
            <tr>
              <td>Nice</td>
              <td>Nicer</td>
              <td>The nicest</td>
            </tr>
            <tr>
              <td>Hot</td>
              <td>Hotter</td>
              <td>The hottest</td>
            </tr>
            </tbody>
          </table>
        </div>
        <p class="subtitle-smaller-colored">Przymiotniki dwusylabowe:</p>
        <ul>
          <li>Przymiotniki te stopniujemy podobnie, albowiem dodajemy końcówkę <b>-er</b> do stopnia wyższego oraz <b>-est</b> dla stopnia najwyższego,
            jednak również należy pamiętać o kilku zasadach.</li>
          <li>Jeżeli przymiotnik jest zakończony na <b>-ow</b> oraz <b>-er</b> to dodajemy standardowe końcówki <b>-er</b> oraz <b>-est</b>.</li>
          <li>Jeżeli przymiotnik jest zakończony na <b>-y</b> zamieniamy literę <b>y</b> na <b>i</b> oraz dodajemy <b>-er</b> i <b>-est</b>.</li>
          <li>Jeżeli przymiotnik jest zakończony na <b>-e</b> lub <b>-le</b>, to wtedy dodajemy końcówki <b>-r</b> oraz <b>-st</b>.</li>
        </ul>

        <div class="center-table">
          <table>
            <thead>
            <tr>
              <th>Positive (Stopień równy)</th>
              <th>Comparative (Stopień wyższy)</th>
              <th>Superlative (Stopień najwyższy)</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>Happy</td>
              <td>Happier</td>
              <td>The happiest</td>
            </tr>
            <tr>
              <td>Busy</td>
              <td>Busier</td>
              <td>The busiest</td>
            </tr>
            <tr>
              <td>Simple</td>
              <td>Simpler</td>
              <td>The simplest</td>
            </tr>
            <tr>
              <td>Narrow</td>
              <td>Narrower</td>
              <td>The narrowest</td>
            </tr>
            </tbody>
          </table>
        </div>

        <p class="subtitle-smaller-colored">Stopniowanie opisowe:</p>
        <ul>
          <li>Stopniowanie opisowe polega na dodawaniu słów „more” do stopnia wyższego oraz „the most” to stopnia najwyższego. </li>
          <li>Stosujemy tą zasadę do niektórych przymiotników dwusylabowych oraz z trzema i więcej sylabami. Stopniowanie to możemy zastosować zarówno „w dół” jak i „w górę.  </li>
          <li>Gdy chcemy powiedzieć, że danej cechy jest mniej lub najmniej powinniśmy zamienić „more” i „the most” na odpowiednio „less” oraz „the least”.</li>
        </ul>

        <div class="center-table">
          <table>
            <thead>
            <tr>
              <th>Positive (Stopień równy)</th>
              <th>Comparative (Stopień wyższy)</th>
              <th>Superlative (Stopień najwyższy)</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>Important</td>
              <td>More important</td>
              <td>The most important</td>
            </tr>
            <tr>
              <td>Expensive</td>
              <td>More expensive</td>
              <td>The most expensive</td>
            </tr>
            <tr>
              <td>Beautiful</td>
              <td>More beautiful</td>
              <td>The most beautiful</td>
            </tr>
            <tr>
              <td>Modern</td>
              <td>More modern</td>
              <td>The most modern</td>
            </tr>
            </tbody>
          </table>
        </div>

        <div class="center-table">
          <table>
            <thead>
            <tr>
              <th>Positive (Stopień równy)</th>
              <th>Comparative (Stopień wyższy)</th>
              <th>Superlative (Stopień najwyższy)</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>Important</td>
              <td>Less important</td>
              <td>The least important</td>
            </tr>
            <tr>
              <td>Expensive</td>
              <td>Less expensive</td>
              <td>The least expensive</td>
            </tr>
            <tr>
              <td>Beautiful</td>
              <td>Less beautiful</td>
              <td>The least beautiful</td>
            </tr>
            <tr>
              <td>Modern</td>
              <td>Less modern</td>
              <td>The least modern</td>
            </tr>
            </tbody>
          </table>
        </div>

        <p class="subtitle-smaller-colored">Stopniowanie przymiotników nieregularnych:</p>

        <p class="description">W języku angielskim nie wszystkie przymiotniki możemy stopniować dodając określone końcówki.
          W przypadku przymiotników nieregularnych musimy się nauczyć zasad ich odmiany.
        </p>
        <p class="subtitle-smaller-colored">Przykłady:</p>
        <div class="center-table">
          <table>
            <thead>
            <tr>
              <th>Positive (Stopień równy)</th>
              <th>Comparative (Stopień wyższy)</th>
              <th>Superlative (Stopień najwyższy)</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>Bad</td>
              <td>Worse</td>
              <td>The worst</td>
            </tr>
            <tr>
              <td>Good</td>
              <td>Better</td>
              <td>The best</td>
            </tr>
            <tr>
              <td>Little</td>
              <td>Less</td>
              <td>The least</td>
            </tr>
            <tr>
              <td>Many</td>
              <td>More</td>
              <td>The most</td>
            </tr>
            <tr>
              <td>Much</td>
              <td>More</td>
              <td>The most</td>
            </tr>
            </tbody>
          </table>
        </div>

        <p class="subtitle-smaller-colored">Przymiotniki bez stopniowania:</p>

        <p class="description">
          Istnieją również przymiotniki, których nie da się stopniować,
          ponieważ określają one cechy nie podlegające stopniowaniu.
          Do ich grona możemy zaliczyć takie, które określają cechy skrajne, stany absolutne oraz przymiotniki klasyfikujące.
        </p>
        <p class="subtitle-smaller-colored">Przykłady:</p>
        <div class="center-table">
          <table>
            <thead>
            <tr>
              <th>Przymiotnik</th>
              <th>Tłumaczenie</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>Dead</td>
              <td>Martwy</td>
            </tr>
            <tr>
              <td>Digital</td>
              <td>Cyfrowy</td>
            </tr>
            <tr>
              <td>Excellent</td>
              <td>Doskonały</td>
            </tr>
            <tr>
              <td>Gigantic</td>
              <td>Gigantyczny</td>
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
  name: "Gradation"
}
</script>

<style scoped>

@import '../../styles/style.css';

</style>