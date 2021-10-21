<template>
  <div class="main">
    <div class="bg">
      <img src="remote-working-gaa49a74d7_1920.jpg">
      <div class="info">Wypełnij formularz rejestracji</div>
      <div class="register_form">
        <div class="reg"><a><p v-on:click="changeRoute('/')">Wróć do strony głównej</p></a></div>
        <div class="formm" style="top: 30px;"><input type="text" placeholder="Imię"></div>
        <div class="formm" style="top: 130px;"><input type="text" placeholder="Nazwisko"></div>
        <div class="formm" style="top: 230px;"><input type="email" placeholder="Email"></div>
        <div class="formm" style="top: 330px;"><input type="password" placeholder="Hasło"></div>
        <div class="formm" style="top: 430px;"><input type="password" placeholder="Powtórz hasło"></div>
        <button class="bn632-hover bn22" v-on:click="changeRoute('/dashboard')"><span>Utwórz konto!</span></button><br>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Register",
}
</script>

<style scoped>

.bn632-hover {
  position: relative;
  left: 113px;
  top: 540px;
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

.register_form{
  position: absolute;
  width: 500px;
  height: 700px;
  left: 1152px;
  top: 147px;
  background: white;
  box-shadow: 0 0 5px 10px #fff;
  border-radius: 10px;
}

.reg{
  padding-top: 5px;
  font-family: cg, Quicksand-Bold;
  font-size: 20px;
  text-align: center;
  color: #0f9100;
  cursor: pointer;
}

.formm{
  position: absolute;
  font-family: cg, Quicksand-Bold;
  font-size: 20px;
  left: 100px;
}
.formm input{
  width: 300px;
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