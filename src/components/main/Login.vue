<template>
<div class="main">
  <FlashMessage :position="'right bottom'"></FlashMessage>
  <div class="login">
    <div class="row">
      <div class="column_50">
        <p class="info">Podaj dane logowania lub zaloguj się za pomocą Google</p>
      </div>
      <div class="column_50">
        <div class="login_form form">
            <a><p v-on:click="changeRoute('/')">Wróć do strony głównej</p></a>
            <a><p v-on:click="changeRoute('/register')">Nie masz konta? Zarejestruj się!</p></a>
            <input v-model="form.email" type="email" placeholder="Email">
            <input v-model="form.password" type="password" placeholder="Hasło">
          <button class="bn632-hover bn22" v-on:click="signIn"><span>Zaloguj się</span></button>
          <button v-google-signin-button="clientId" class="bn632-hover bn22">Google</button>

        </div>
      </div>
    </div>
    </div>
</div>
</template>

<script>

import axios from 'axios'
import endpoint from '../../endpoint.json'
import { required } from 'vuelidate/lib/validators'
import GoogleSignInButton from 'vue-google-signin-button-directive'

export default {

  directives: {
    GoogleSignInButton,
  },

  name: "Login",

  data(){
    return{
      form: {
        email:'',
        password:'',
      },

      clientId: 'YOUR GOOGLE CLIENT ID',
    }
  },

  validations: {
    form:{
      email:{required},
      password: {required}
    }
  },


  methods:{

    signIn(){

      this.$v.form.$touch();
      if(this.$v.form.$error){
        this.$swal("Błąd", "Niektóre pola są puste", "error")
      }else{
        axios.post(`${endpoint.url}/login`, this.form)
            .then((response) =>{
              if(response.status === 200) {
                sessionStorage.setItem('loggedIn', JSON.stringify(response.data))
                this.changeRoute("/dashboard");
              }
            })
            .catch(() => {
              this.$swal("Błąd", "Błędne dane logowania", "error")
            })
      }
    },

    OnGoogleAuthSuccess(idToken) {
      axios.get(`${endpoint.url}/google/${idToken}`)
          .then((response) => {
            if (response.status === 200) {
              sessionStorage.setItem('loggedIn', JSON.stringify(response.data))
              this.changeRoute("/dashboard")
            }
          })
          .catch(() => {

          });
    },

    OnGoogleAuthFail(error) {
      console.log(error)
    },
  }
}
</script>

<style scoped>

.login{
  min-height: 100vh;
  background-image: url('../../../public/remote-working-gaa49a74d7_1920.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: left;
}

.row{
  max-width: 1500px;
  margin-left: auto;
  margin-right: auto;
}

.row .column_50{
  max-width: 50%;
  min-width: 50%;
  position: relative;
  margin-top: 30px;
  margin-right: 200px;
}

.login .row{
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  padding-top: 100px;
}

.login_form.form{
  display: inline-grid;
  align-items: center;
  justify-content: center;
  font-family: cg, Quicksand-Bold;
  font-size: 20px;
}

.login_form.form input{
  position: relative;
  width: 300px;
  padding: 12px 0;
  margin: auto;
  text-align: center;
  border: none;
  border-bottom: 3px solid #0f9100;
  outline: none;
  z-index: 999999;
}

.login_form.form button{
  margin: auto;
}

.login_form.form p,a{
  font-family: cg, Quicksand-Bold;
  font-size: 20px;
  text-align: center;
  color: #0f9100;
  cursor: pointer;
  z-index: 99999;
}

.login_form{
  min-width: 500px;
  min-height: 600px;
  background: white;
  box-shadow: 0 0 5px 10px #fff;
  border-radius: 10px;
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
  font-family: cg, Quicksand-Light;
  font-style: normal;
  font-weight: normal;
  font-size: 68px;
  line-height: 90px;
  text-align: center;

  color: #183018;
}


.bn632-hover {
  position: relative;
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