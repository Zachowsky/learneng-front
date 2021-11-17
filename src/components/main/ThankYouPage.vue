<template>
<div class="main">
  <font-awesome-icon icon="check-circle" class="check"></font-awesome-icon>
  <div class="info">
    <p class="title">Dziękujemy!</p>
    <p class="title-smaller">Twoja wiadomość została wysłana pomyślnie.</p>
  </div>
  <div class="bttn">
    <button class="btn btn-outline-success" v-on:click="changeRoute('/')">Wróć na stronę główną</button>
  </div>

</div>
</template>

<script>
export default {
  name: "ThankYouPage"
}
</script>

<style scoped>

.main{
  display: grid;
  justify-content: center;
  align-items: center;
}

.check{
  margin-top: 100px;
  margin-right: auto;
  margin-left: auto;
  font-size: 70px;
  color: #0f9100;
}

.info{
  font-family: cg, Quicksand-Light;
  display: grid;
  align-items: center;
  justify-content: center;
  padding-top: 30px;
  text-align: center;
}

.bttn{
  margin-left: auto;
  margin-right: auto;
}

.title{
  margin-right: auto;
  margin-left: auto;
  font-size: 50px;
  font-weight: 900;
}

.title-smaller{
  font-size: 30px;
}

</style>