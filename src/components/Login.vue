<template>
<div class="main">
  <div class="bg">
    <img src="remote-working-gaa49a74d7_1920.jpg">
    <div class="info">Podaj dane logowania lub zaloguj się za pomocą Google</div>
    <div class="login_form">
      <div class="reg">
        <a><p v-on:click="changeRoute('/')">Wróć do strony głównej</p></a>
        <a><p v-on:click="changeRoute('/register')">Nie masz konta? Zarejestruj się!</p></a>
      </div>
      <div class="formm">
        <input type="email" placeholder="Email">
        <input type="password" placeholder="Hasło">
      </div>

      <button class="bn632-hover bn22" v-on:click="changeRoute('/dashboard')"><span>Zaloguj się</span></button><br>
      <button class="bn632-hover bn22" v-on:click="changeRoute('/login')"><span>Google</span></button>


    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "Login",
}
</script>

<style scoped>


.bn632-hover {
  position: relative;
  left: 113px;
  top: 220px;
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

.reg{
  padding-top: 5px;
  font-family: cg, Quicksand-Bold;
  font-size: 20px;
  text-align: center;
  color: #0f9100;
  cursor: pointer;
  z-index: 99999;
}

.login_form{
  position: absolute;
  width: 500px;
  height: 550px;
  left: 1152px;
  top: 187px;
  background: white;
  box-shadow: 0 0 5px 10px #fff;
  border-radius: 10px;
}

.formm{
  position: absolute;
  font-family: cg, Quicksand-Bold;
  font-size: 20px;
  left: 100px;
}

.formm input{
  position: relative;
  width: 300px;
  top: -30px;
  padding: 15px 0;
  text-align: center;
  margin: 40px 0 0;
  border: none;
  border-bottom: 3px solid #0f9100;
  outline: none;
  z-index: 999999;
}

::placeholder {
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 36px;
  text-align: center;

  color: rgba(114, 164, 101, 0.5);
}
.main{
  height: 100%;
  overflow: hidden;
}
.info{
  position: absolute;
  width: 799px;
  height: 175px;
  left: 120px;
  top: 140px;
  font-family: cg, Quicksand-Light;
  font-style: normal;
  font-weight: normal;
  font-size: 68px;
  line-height: 90px;
  text-align: center;

  color: #183018;
}

</style>