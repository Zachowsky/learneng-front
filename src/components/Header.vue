<template>
  <div>
    <header>
        <div class="not_full_page">
          <div class="logo">
            <a href="#main"><img src="logo.png"></a>
          </div>
          <div class="default_menu">
            <ul>
              <a href="#about">
                <li>O nas</li>
              </a>
              <a href="#contact">
                <li>Kontakt</li>
              </a>
            </ul>
          </div>
        </div>
    </header>
  </div>

</template>

<script>

import $ from 'jquery';

export default {
  data: () => ({
    dialog: false,
    drawer: null,
    path: '',
  }),

  mounted(){

    $('body').scroll(function() {
      var scrollTop = $(this).scrollTop();
      if(scrollTop > 100) {
        $('header').addClass('header_onScroll');
      }else{
        $('header').removeClass('header_onScroll');
      }
    });
  },
}
</script>

<style scoped>
template {
  margin: 0;
  border: none;
  border-radius: 0px;
  overflow-x: hidden;
  min-height: 100vh;
}

img{
  display: block;
  width: 100%;
  height: auto;
}

header {
  position: fixed;
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: nowrap;
  width: 100%;
  padding: 5px;
  margin: 0;
  z-index: 99999;
  transition: 0.5s;
}

.header_onScroll{
  background-color: rgba(125, 187, 102, 0.72);
  backdrop-filter: blur(25px);
  transition: 0.5s;
}

.header_onScroll .logo{
  width: 90px;
  transition: 0.5s;
}

.default_menu a {
  text-decoration: none !important;
}

.not_full_page {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: nowrap;
  padding: 8px 0;
  width: 100%;
  margin: 0;
  max-width: 1500px;
}

.logo {
  width: 120px;
  margin: -10px;
  transition: 0.5s;
  display: flex;
  justify-content: flex-start;
  align-items: center;
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
  font-size: 18px;
  font-weight: 900;
}

li:hover{
  color: #183018 !important;
  cursor: pointer;
}

h1, h2, h3, h4, h5, h6, p, span, ul, li, a, div {
  font-family: cg, Quicksand-Light;

}
</style>
