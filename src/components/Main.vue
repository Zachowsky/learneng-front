<template>
  <div id="main">
    <Header></Header>
    <div>
      <div class="bg"><img src="remote-working-gaa49a74d7_1920.jpg"></div>
      <div class="tekst">Darmowa strona do nauki podstaw języka angielskiego!
        <div class="begin">Rozpocznij już teraz!
          <br><br><button class="bn632-hover bn22" v-on:click="changeRoute('/register')"><span>Zarejestruj się!</span></button><br>
          <button class="bn632-hover bn22" v-on:click="changeRoute('/login')"><span>Zaloguj się!</span></button>
        </div>
      </div>
    </div>
    <div id="about">
      <div class="line" style="top: 1100px"></div>
      <div class="img1"><img src="laptop-g5e84be185_1280.png"></div>
      <div class="opis" style="top: 1150px; text-align: left;">Efektywna i szybka nauka języka</div>
      <div class="opis2" style="top: 1250px; text-align: left;">Dzięki przygotowanym materiałom nauka stanie się łatwa i przyjemna. Wystarczy, że założysz darmowe konto!</div>
      <div class="line" style="top: 1480px"></div>
      <div class="img2"><img src="man-g0117e4490_1280.png"></div>
      <div class="opis" style="top: 1530px; left: 567px; text-align: right;" >Jesteśmy najlepsi na rynku</div>
      <div class="opis2" style="top: 1630px; left: 360px; text-align: right;">Opinie naszych użytkowników sugerują, iż można zaufać naszej stronie! </div>

    </div>
    <div id="contact">
      <div class="line" style="top: 1860px"></div>
<!--      <form action="" method="get" onsubmit="">-->
      <div class="img3"><img src="aeroplane-g10339e186_1920.jpg" style="opacity: 0.6"></div>
      <div class="opis3" style="top: 1950px">Skontaktuj się z nami!</div>
      <div class="formm" style="top: 2000px"><input type="text" placeholder="Imię"></div>
      <div class="formm" style="top: 2100px"><input type="email" placeholder="Email"></div>
      <div class="formm" style="top: 2200px"><input type="text" placeholder="Wiadomość"></div>
      <button class="bn632-hover bn22" style="left: 1140px; top: 440px">Wyślij</button>
<!--      </form>-->
      <div class="line" style="top: 2550px"></div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";
export default {
  name: "Main",
  components: {Header},
  data() {
    return {
      components: {
        'my-header': Header,
      },
    }
  },
}
</script>

<style scoped>


#main{
  overflow: hidden;
}
#contact{
  width: 100%;
  height: 780px;
  left: 1200px;
}
#about{
  width: 100%;
  height: 905px;
}

.tekst{
  position: absolute;
  width: 799px;
  height: 175px;
  left: 202px;
  top: 140px;

  font-family: cg, Quicksand-Light;
  font-style: normal;
  font-weight: normal;
  font-size: 68px;
  line-height: 90px;

  color: #183018;
}

.begin{
  position: absolute;
  width: 393px;
  height: 50px;
  left: 1200px;
  top: 333px;
  text-align: center;
  font-family: cg, Quicksand-Light;
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-height: 50px;

  color: #183018;
}


.bn632-hover {
  position: relative;
  width: 250px;
  font-size: 20px;
  font-weight: 900;
  color: #fff;
  cursor: pointer;
  margin: 10px;
  height: 70px;
  text-align:center;
  border: none;
  background-size: 300% 100%;
  border-radius: 50px;
  moz-transition: all .4s ease-in-out;
  -o-transition: all .4s ease-in-out;
  -webkit-transition: all .4s ease-in-out;
  transition: all .4s ease-in-out;
}

.bn632-hover:hover {
  background-position: 100% 0;
  moz-transition: all .4s ease-in-out;
  -o-transition: all .4s ease-in-out;
  -webkit-transition: all .4s ease-in-out;
  transition: all .4s ease-in-out;
}

.bn632-hover:focus {
  outline: none;
}

.bn632-hover.bn22 {
  background-image: linear-gradient(
      to right,
      #0ba360,
      #3cba92,
      #30dd8a,
      #2bb673
  );
  box-shadow: 0 4px 15px 0 rgba(23, 168, 108, 0.75);
}

.line{

  position: absolute;
  width: 1291px;
  height: 0px;
  left: 301px;
  border: 1px solid #787878;
}

.opis{
  position: absolute;
  width: 463px;
  height: 36px;
  left: 888px;

  font-family: cg, Quicksand-Light;
  font-style: normal;
  font-weight: bold;
  font-size: 29px;
  line-height: 36px;

  color: #000000;
}

.opis2{
  position: absolute;
  width: 669px;
  height: 108px;
  left: 888px;

  font-family:  cg, Quicksand-Light;
  font-style: normal;
  font-weight: bold;
  font-size: 29px;
  line-height: 36px;

  color: #636363;
}

.opis3{
  position: absolute;
  width: 420px;
  height: 50px;
  left: 1070px;

  font-family: cg, Quicksand-Light;
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-height: 50px;
  /* identical to box height */

  text-align: center;

  color: #000000;
}

.formm{
  position: absolute;
  font-family: cg, Quicksand-Bold;
  font-size: 20px;
  left: 1026px;
}
.formm input{
  width: 500px;
  padding: 15px 0;
  text-align: center;
  margin: 40px 0 0;
  border: none;
  border-bottom: 3px solid #0f9100;
  outline: none;

}

::placeholder {
  font-style: normal;
  font-weight: bold;
  font-size: 25px;
  line-height: 36px;
  text-align: center;

  color: rgba(114, 164, 101, 0.5);
}

.img1 img{
  position: absolute;
  width: 330px;
  height: 272px;
  left: 403px;
  top: 1151px;
}

.img2 img{
  position: absolute;
  width: 310px;
  height: 290px;
  left: 1120px;
  top: 1520px;
}

.img3 img{
  position: absolute;
  width: 450px;
  height: 299.3px;
  left: 415px;
  top: 2050px;
}


</style>