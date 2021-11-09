<template>
  <div id="main">
    <Header></Header>
    <div class="start">
      <div class="row">
        <div class="column_50">
          <p class="text">Darmowa strona do nauki podstaw języka angielskiego!</p>
        </div>
        </div>
      <div class="row">
        <div class="column_50"></div>
        <div class="column_50 align_right">
          <div>
          <p class="begin">Rozpocznij już teraz!</p>
          <button class="bn632-hover bn22" v-on:click="changeRoute('/register')"><span>Zarejestruj się!</span></button>
          <button class="bn632-hover bn22" v-on:click="changeRoute('/login')"><span>Zaloguj się!</span></button>
          </div>
        </div>
      </div>
    </div>
    <div id="about">
      <div class="row lines">
            <div class="column_40">
             <img src="laptop-g5e84be185_1280.png">
            </div>

            <div class="column_60">
              <div class="description" style="text-align: right;">Efektywna i szybka nauka języka</div>
              <div class="description2" style="text-align: right; margin: auto; margin-right: 0 !important;">Dzięki przygotowanym materiałom nauka stanie się łatwa i przyjemna. Wystarczy, że założysz darmowe konto!</div>
            </div>
      </div>
    </div>
      <div class="row lines">
        <div class="column_60 ">
          <div class="description" style="text-align: left;" >Jesteśmy najlepsi na rynku</div>
          <div class="description2" style="text-align: left;">Opinie naszych użytkowników sugerują, iż można zaufać naszej stronie! </div>
        </div>
        <div class="column_40">
          <img src="man-g0117e4490_1280.png">
        </div>
      </div>

    <div id="contact" class="full_height">
      <div class="row lines">
        <div class="column_50 center_img">
          <img class="form_img" src="aeroplane-g10339e186_1920.jpg" style="opacity: 0.6">
        </div>
        <div class="column_50 form">
          <div class="description3" >Skontaktuj się z nami!</div>
          <input type="text" placeholder="Imię">
          <input type="email" placeholder="Email">
          <input type="text" placeholder="Wiadomość">
          <button class="bn632-hover bn22">Wyślij</button>
        </div>
      </div>
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

.start{
  min-height: 100vh;
  background-image: url('../../public/remote-working-gaa49a74d7_1920.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: left;
}
.row{
  max-width: 1500px;
  margin-left: auto;
  margin-right: auto;
  padding: 70px 0;
}

.start .row{
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  padding: 150px 30px 0;

}

.row .column_50{
  max-width: 50%;
  min-width: 50%;
  position: relative;
}

.row .column_60{
  max-width: 60%;
  min-width: 60%;
  position: relative;
  padding: 50px 50px;
}

.row .column_40{
  max-width: 40%;
  min-width: 40%;
  position: relative;
  padding: 0 100px;
}

.row img{
  max-width: 90%;
}

.lines{
  border-bottom: 1px solid #787878;

}

.start .row .column_50.align_right{
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  margin-top: -100px;
}


.start .row .column_50.align_right div{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 400px;
  margin-right: 0;
}

.text{

  font-family: cg, Quicksand-Light;
  font-style: normal;
  font-weight: normal;
  font-size: 68px;
  line-height: 90px;
  color: #183018;
}

.begin{
  text-align: center;
  font-family: cg, Quicksand-Light;
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-height: 50px;

  color: #183018;
}

.bn632-hover {
  font-family: cg, Quicksand-Light;
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

.description{

  font-family: cg, Quicksand-Light;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 36px;
  color: #000000;
  margin-bottom: 30px;
  margin-top: 40px;
}

.description2{
  font-family:  cg, Quicksand-Light;
  font-style: normal;
  font-weight: bold;
  font-size: 26px;
  line-height: 32px;
  max-width: 700px;
  color: #636363;
}

.description3{

  font-family: cg, Quicksand-Light;
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-height: 50px;

  text-align: center;

  color: #000000;
}

.row .column_50 input{
  font-family: cg, Quicksand-Bold;
  font-size: 20px;
  max-width: 500px;
  min-width: 500px;
  padding: 15px 0;
  text-align: center;
  margin: 40px 0 0;
  border: none;
  border-bottom: 3px solid #0f9100;
  outline: none;
}

.row .column_50 .form_img{
  max-width: 600px;
  margin: auto;
}
.row .column_50.center_img{
  display: flex;
  justify-content: center;
  align-items: center;
}

.row .column_50.form{
  display: inline-grid;
  align-items: center;
  justify-content: center;
}

.row .column_50 button{
  margin: 40px auto auto;
}

#contact.full_height{
  min-height: 80vh;
  align-items: center;
}

::placeholder {
  font-style: normal;
  font-weight: bold;
  font-size: 25px;
  line-height: 36px;
  text-align: center;

  color: rgba(114, 164, 101, 0.5);
}

  @media only screen and (max-width:767px){
    .row .column_60{
      min-width:100%;
      max-width:100%;
    }

    .row .column_40{
      min-width:100%;
      max-width:100%;
    }

    .row .column_50{
      min-width:100%;
      max-width:100%;
    }
  }

</style>