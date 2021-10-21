<template>
  <header>
    <div class="line"></div>
    <div class="default_menu">
      <ul>
        <a v-on:click="changeRoute('/dashboard')">
          <li>Gramatyka</li>
        </a>
        <a v-on:click="changeRoute('/flashcards')">
          <li>Fiszki</li>
        </a>
        <a v-on:click="changeRoute('/translate')">
          <li>Tłumaczenie</li>
        </a>
        <a v-on:click="changeRoute('/googleTranslate')">
          <li>Translator</li>
        </a>
        <a>
          <li>Witaj, User</li>
        </a>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderDash"
}
</script>

<style scoped>

header {
  overflow: hidden;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  width: 100%;
  padding-top: 15px;
  z-index: 99999;
}

header ul {
  list-style-type: none;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
}

header ul li {
  color: white !important;
  padding: 0 20px;
  font-size: 22px;
  font-weight: 700;
  font-family: cg, Quicksand-Light;
}

li:hover{
  color: #183018 !important;
  cursor: pointer;
}

.default_menu {
  margin-right: -100px;
}
.default_menu a {
  text-decoration: none !important;
  margin-left:  180px;
}

.line{
  position: absolute;
  width: 100%;
  height: 0px;
  top: 90px;
  border: 2px solid rgba(35, 35, 35, 0.51);
}

</style>