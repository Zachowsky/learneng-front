<template>
  <div id="main">
    <div class="content">
      <a v-on:click="changeRoute('/dashboard')" class="button-back"><font-awesome-icon icon="chevron-left"></font-awesome-icon></a>
      <div class="top-img">
        <img src="book-6709160.jpg">
        <div class="title">
          <p>Czas Present Simple</p>
        </div>
      </div>
      <article>
        <p class="subtitle"> Opis</p>
        <p class="description">
          Present Simple, czyli czas teraźniejszy prosty jest jednocześnie najczęściej używanym oraz najbardziej podstawowym czasem w języku angielskim.
          Używamy go tak naprawdę ciągle, mówiąc o naszych nawykach, sytuacjach niezmiennych.
          Jego wygląd zależy od użytego czasownika. Według mnie znajomość prostego słownictwa oraz Present Simple w zupełności wystarczy do dogadania się z drugą osobą.
        </p>

        <p class="subtitle-smaller-colored">Budowa:</p>
        <p class="description">Czas ten jest zdecydowanie najprostszy w tworzeniu, ponieważ do konstrukcji zdania potrzebujemy czasownika w formie podstawowej i osobę wykonującą czynność:</p>
        <div class="center-table">
          <table>
            <tbody>
            <tr>
              <td>PODMIOT    +     CZASOWNIK W I FORMIE</td>
            </tr>
            </tbody>
          </table>
        </div>
        <p class="subtitle-smaller-colored">Przykład:</p>
        <div class="center-table">
          <table>
            <thead>
            <tr>
              <th>Zdanie</th>
              <th>Tłumaczenie</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>I go to school.</td>
              <td>Ja chodzę do szkoły.</td>
            </tr>
            </tbody>
          </table>
        </div>
        <p class="description">Ważną rzeczą jest również fakt, iż w <b>III osobie liczby pojedynczej</b> należy do czasownika dodać końcówkę <b>-s</b>.
          W przypadkach kiedy czasownik kończy się na <b>s, z, x, sh, ch</b> lub pojedyncze <b>o</b> zamiast <b>-s</b> musimy dodać <b>-es</b>.
          Natomiast podczas gdy czasownik kończy się na literę <b>-y</b> zamieniamy <b>-y</b> na <b>i</b> i dodajemy <b>-es</b>. Jeżeli jednak przed <b>-y</b> znajduje się <b>spółgłoska</b> to dodajemy tylko <b>-es bez zamiany</b>.
        </p>
        <p class="subtitle-smaller-colored">Przykłady czasowników:</p>
        <div class="center-table">
          <table>
            <thead>
            <tr>
              <th>Bezokolicznik</th>
              <th>III osoba</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>Write</td>
              <td>Writes</td>
            </tr>
            <tr>
              <td>Read</td>
              <td>Reads</td>
            </tr>
            <tr>
              <td>Do</td>
              <td>Does</td>
            </tr>
            <tr>
              <td>Wish</td>
              <td>Wishes</td>
            </tr>
            <tr>
              <td>Fly</td>
              <td>Flies</td>
            </tr>
            <tr>
              <td>Say</td>
              <td>Says</td>
            </tr>
            </tbody>
          </table>
        </div>
        <p class="description"><b>Szczególnym czasownikiem jest czasownik have, który w 3 osobie liczby pojedynczej przyjmuje formę has.</b></p>
        <p class="description">Jak to bywa w czasach prostych, czasownikiem głównym może być też „to be”. Posiada on inną formę dla każdej osoby. </p>
        <p class="subtitle-smaller-colored">Przykład zdania z TO BE:</p>
        <div class="center-table">
          <table>
            <thead>
            <tr>
              <th>Zdanie</th>
              <th>Tłumaczenie</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>I am a student.</td>
              <td>Ja jestem uczniem.</td>
            </tr>
            <tr>
              <td>You are tired.</td>
              <td>Ty jesteś zmęczony.</td>
            </tr>
            <tr>
              <td>He is busy.</td>
              <td>On jest zajęty.</td>
            </tr>
            </tbody>
          </table>
        </div>
        <p class="subtitle-smaller"> Pytania i przeczenia:</p>
        <p class="description">Do tworzenia pytań w czasie Present Simple potrzebny jest <b>operator do</b>.
          W trzeciej osobie dodajemy do niego końcówkę <b>-es</b> oraz <b>nie dodajemy</b> tej końcówki do czasownika głównego.
        </p>
        <p class="subtitle-smaller-colored">Przykłady tworzenia pytań ogólnych:</p>
        <div class="center-table">
          <table>
            <thead>
            <tr>
              <th>Zdanie</th>
              <th>Tłumaczenie</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>Do you like me?</td>
              <td>Czy ty mnie lubisz?</td>
            </tr>
            <tr>
              <td>Does she like him?</td>
              <td>Czy ona go lubi?</td>
            </tr>
            </tbody>
          </table>
        </div>
        <p class="description">Możemy też tworzyć bardziej rozwinięte pytania używając słów pytających takich jak: <b>What, Who, How</b> itp.</p>
        <div class="center-table">
          <table>
            <thead>
            <tr>
              <th>Zdanie</th>
              <th>Tłumaczenie</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>What do you have for dinner?</td>
              <td>Co masz na obiad?</td>
            </tr>
            <tr>
              <td>How does she make this?</td>
              <td>Jak ona to zrobiła?</td>
            </tr>
            </tbody>
          </table>
        </div>

        <p class="description">Jeśli głównym czasownikiem jest to be, nie używamy już operatora do. Pytania z użyciem tego czasownika są tworzone poprzez tzw. <b>inwersję</b>:</p>
        <div class="center-table">
          <table>
            <thead>
            <tr>
              <th>Zdanie</th>
              <th>Tłumaczenie</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>Are you tired?</td>
              <td>Czy jesteś zmęczony?</td>
            </tr>
            <tr>
              <td>Am I a student?</td>
              <td>Czy jestem studentem?</td>
            </tr>
            </tbody>
          </table>
        </div>

        <p class="description">W przeczeniach również używamy operatora <b>do/does</b>, ale dodajemy do niego słówko <b>not</b></p>
        <div class="center-table">
          <table>
            <thead>
            <tr>
              <th>Zdanie</th>
              <th>Tłumaczenie</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>I do not/don't go there.</td>
              <td>Ja tam nie idę.</td>
            </tr>
            <tr>
              <td>He does not/doesn't like this.</td>
              <td>On tego nie lubi.</td>
            </tr>
            </tbody>
          </table>
        </div>
        <p class="description">Przeczenia z użyciem czasownika to be tworzymy analogicznie, lecz bez operatora do/does</p>
        <div class="center-table">
          <table>
            <thead>
            <tr>
              <th>Zdanie</th>
              <th>Tłumaczenie</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>Pawel is not busy.</td>
              <td>Pawel nie jest zajęty.</td>
            </tr>
            </tbody>
          </table>
        </div>
        <p class="subtitle-smaller"> Zastosowanie:</p>
        <p class="description">Czasu teraźniejszego prostego używamy gdy mówimy o naszych nawykach, czynnościach powtarzalnych. Stosujemy go również w przypadku mowy o uczuciach, stanach lub  długotrwałych ciągle trwających.</p>

        <p class="subtitle-smaller-colored">Przykłady:</p>
        <div class="center-table">
          <table>
            <thead>
            <tr>
              <th>Zdanie</th>
              <th>Tłumaczenie</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>I do my homework <b>every day</b>.</td>
              <td>Robię pracę domową codziennie.</td>
            </tr>
            <tr>
              <td>He usually goes swimming <b>on weekends</b>.</td>
              <td>On zazwyczaj chodzi pływać w weekendy.</td>
            </tr>
            </tbody>
          </table>
        </div>

        <p class="description">Używamy wtedy wyrażeń, które służą do opisywania częstotliwości wykonywania danej czynności.</p>
        <div class="center-table">
          <table>
            <thead>
            <tr>
              <th>Wyrażenie</th>
              <th>Tłumaczenie</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>Always</td>
              <td>Zawsze</td>
            </tr>
            <tr>
              <td>Usually</td>
              <td>Zazwyczaj</td>
            </tr>
            <tr>
              <td>Often</td>
              <td>Często</td>
            </tr>
            <tr>
              <td>Never</td>
              <td>Nigdy</td>
            </tr>
            <tr>
              <td>Sometimes</td>
              <td>Czasami</td>
            </tr>
            <tr>
              <td>Every day</td>
              <td>Codziennie</td>
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
  name: "Tenses"
}
</script>

<style scoped>

@import '../../styles/style.css';

</style>