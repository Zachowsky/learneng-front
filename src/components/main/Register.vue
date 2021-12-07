<template>
  <div class="main">
    <FlashMessage :position="'right bottom'"></FlashMessage>
    <div class="register">
      <div class="row">
        <div class="column_50">
          <p class="info">Wypełnij formularz rejestracji</p>
        </div>
        <div class="column_50">
          <div class="register_form form">
            <a><p v-on:click="changeRoute('/')">Wróć do strony głównej</p></a>

            <input type="text" v-model="form.name" placeholder="Imię">
            <input type="text" v-model="form.surname" placeholder="Nazwisko">
            <input type="email" v-model="form.email" placeholder="Email">
            <input type="password" v-model="form.password" placeholder="Hasło">
            <input type="password" v-model="form.password2" placeholder="Powtórz hasło">

            <button class="bn632-hover bn22" v-on:click="register"><span>Utwórz konto!</span></button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import axios from "axios";
import endpoint from "@/endpoint.json";
import { required, minLength, email, sameAs, alpha} from 'vuelidate/lib/validators'

export default {

  name: "Register",

  data() {
    return {
      form: {
        name: '',
        surname: '',
        email: '',
        password: '',
        password2: '',
      }
    }
  },

  validations: {
    form:{
      name: { required, alpha, min: minLength(3)},
      surname: { required, alpha, min: minLength(3)},
      email: { required, email },
      password: {required, min: minLength(5) },
      password2: {sameAsPassword: sameAs('password') }
    }
  },

  methods: {
    register(){

      this.$v.form.$touch();
      if (this.$v.form.$error) {
        this.$swal("Błąd", "Niektóre pola są puste", "error")
      }else{
        axios.post(`${endpoint.url}/register`, this.form)
            .then((response) => {
              if(response.status === 200){
                this.$swal("Udało się", "Konto zostało założone", "success")
                this.changeRoute('/login');
              }
            })
            .catch(()=>{
              this.$swal("Uwaga", "Użytkownik o podanym adresie email juz istnieje.", "warning")
            })
      }
    }
  }
}
</script>

<style scoped>

.main {
  overflow-y: hidden;
  height: 100%;
}
.register{
  min-height: 100vh;
  background-image: url('../../../public/remote-working-gaa49a74d7_1920.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: left;
}

.row{
  max-width: 1700px;
  margin-left: auto;
  margin-right: auto;
}

.row .column_50{
  max-width: 50%;
  min-width: 50%;
  position: relative;
  margin-top: 30px;
}

.register .row{
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  padding-top: 100px;
}

.register_form{
  min-width: 500px;
  min-height: 650px;
  position: absolute;
  background: white;
  box-shadow: 0 0 5px 10px #fff;
  border-radius: 10px;
  margin-left: 200px;
}

.register_form.form{
  display: inline-grid;
  align-items: center;
  justify-content: center;
  padding-top: 5px;
  font-family: cg, Quicksand-Bold;
  font-size: 20px;
  text-align: center;
  color: #0f9100;
}
.register_form.form input{
  max-width: 300px;
  min-width: 250px;
  text-align: center;
  margin: auto;
  border: none;
  border-bottom: 3px solid #0f9100;
  outline: none;
}

.register_form p{
  cursor: pointer;
}

::placeholder {
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 36px;
  text-align: center;

  color: rgba(114, 164, 101, 0.5);
}

.info{
  font-family: cg, Quicksand-Light;
  font-style: normal;
  font-weight: normal;
  font-size: 68px;
  line-height: 90px;
  text-align: center;

  color: #183018;
}


.bn632-hover {
  width: 250px;
  height: 70px;
  font-size: 20px;
  font-weight: 900;
  color: #fff;
  cursor: pointer;
  margin: 10px;
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

@media only screen and (max-width:767px){

  .row .column_50{
    min-width:100%;
    max-width:100%;
  }
}



</style>