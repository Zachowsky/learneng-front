<template>
  <div id="main">
    <div class="content">
      <a v-on:click="changeRoute('/dashboard')" class="button-back"><font-awesome-icon icon="chevron-left"></font-awesome-icon></a>
      <div class="top-img">
        <img src="tea-time-3240766.jpg">
        <div class="title">
          <p>Przywitania i pożegnania</p>
        </div>
      </div>
      <article>
        <p class="subtitle">Przywitania i pożegnania</p>
        <p class="description">
          Zaczynając naukę języka angielskiego, jednymi z pierwszych  zwrotów jakie poznajemy są powitania i pożegnania.
          Istnieje kilka zasad dotyczących tych wyrażeń. Nie z każdym wypada się przywitać i pożegnać tak samo.
          Ważne jest, aby pamiętać w jakich sytuacjach i do kogo mamy zwracać się mniej lub bardziej formalnie.
        </p>
        <p class="subtitle-smaller-colored">Formalne przywitania:</p>
        <div class="center-table">
          <table>
           <tbody>
           <tr>
             <td>Good morning.</td>
             <td>Dzień dobry. (rano)</td>
           </tr>
           <tr>
             <td>Good afternoon.</td>
             <td>Dzień dobry. (po południu)</td>
           </tr>
           <tr>
             <td>Good evening.</td>
             <td>Dobry wieczór. (rano)</td>
           </tr>
           <tr>
             <td>Hello!</td>
             <td>Witam!</td>
           </tr>
           <tr>
             <td>Nice to meet you.</td>
             <td>Miło mi Pana/Panią poznać.</td>
           </tr>
           <tr>
             <td>It is pleasure to meet you.</td>
             <td>Miło mi Pana/Panią poznać.</td>
           </tr>
           </tbody>
          </table>
        </div>
        <p class="subtitle-smaller-colored">Nieformalne przywitania</p>

          <div class="center-table">
            <table>
              <tbody>
              <tr>
                <td>Hi!</td>
                <td>Cześć!</td>
              </tr>
              <tr>
                <td>Hey!</td>
                <td>Hej!</td>
              </tr>
              <tr>
                <td>Hi there.</td>
                <td>Cześć.</td>
              </tr>
              <tr>
                <td>How are you doing?</td>
                <td>Co u ciebie?</td>
              </tr>
              <tr>
                <td>Long time no see!</td>
                <td>Dawno się nie widzieliśmy!</td>
              </tr>
              <tr>
                <td>Morning!</td>
                <td>Dzieńdoberek!</td>
              </tr>
              <tr>
                <td>What's up?</td>
                <td>Jak leci?</td>
              </tr>
              </tbody>
            </table>
          </div>
        <p class="description">
          W przypadku pożegnań wygląda to identycznie.
          Wszystko zależy od tego z kim rozmawiamy i w jakiej sytuacji się znajdujemy.
        </p>

        <p class="subtitle-smaller-colored">Formalne pożegnania:</p>
        <div class="center-table">
          <table>
            <tbody>
            <tr>
              <td>Good night.</td>
              <td>Dobranoc.</td>
            </tr>
            <tr>
              <td>Goodbye.</td>
              <td>Do widzenia.</td>
            </tr>
            <tr>
              <td>Have a great day.</td>
              <td>Miłego dnia.</td>
            </tr>
            <tr>
              <td>I look forward to see you again soon.</td>
              <td>Mam nadzieję, że wkrótce spotkam się ponownie.</td>
            </tr>
            <tr>
              <td>It was nice to see you.</td>
              <td>Miło było Pana/Panią widzieć.</td>
            </tr>
            <tr>
              <td>It was nice meeting you.</td>
              <td>Miło było Pana/Panią poznać.</td>
            </tr>
            </tbody>
          </table>
        </div>
        <p class="subtitle-smaller-colored">Nieformalne pożegnania:</p>

        <div class="center-table">
          <table>
            <tbody>
            <tr>
              <td>Bye!</td>
              <td>Cześć!</td>
            </tr>
            <tr>
              <td>Later!</td>
              <td>Na razie!</td>
            </tr>
            <tr>
              <td>Catch you later!</td>
              <td>Do zobaczenia później!</td>
            </tr>
            <tr>
              <td>See you later.</td>
              <td>Do zobaczenia później.</td>
            </tr>
            <tr>
              <td>Take care!</td>
              <td>Trzymaj się!</td>
            </tr>
            <tr>
              <td>Tll next time.</td>
              <td>Do następnego razu!</td>
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
  name: "Greetings"
}
</script>

<style scoped>

@import '../../styles/style.css';

</style>