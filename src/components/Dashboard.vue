<template>
<div class="main">
  <HeaderDash></HeaderDash>
  <div class="content">
  <div class="type">
    <div class="type_info">Początek</div>
    <div class="dropdown-content">
      <a href="#">Link 1</a>
      <a href="#">Link 2</a>
      <a href="#">Link 3</a>
      <a href="#">Link 4</a>
      <a href="#">Link 5</a>
      <a href="#">Link 6</a>
    </div>
  </div>
  <div class="type">
    <div class="type_info">Zaimki osobowe</div>
    <div class="dropdown-content">
      <a href="#">Link 1</a>
      <a href="#">Link 2</a>
      <a href="#">Link 3</a>
    </div>
  </div>
  <div class="type">
    <div class="type_info">Rzeczowniki policzalne i niepoliczalne</div>
    <div class="dropdown-content">
      <a href="#">Link 1</a>
      <a href="#">Link 2</a>
      <a href="#">Link 3</a>
    </div>

  </div>
  <div class="type">
    <div class="type_info">Czasy</div>
    <div class="dropdown-content">
      <a href="#">Link 1</a>
      <a href="#">Link 2</a>
      <a href="#">Link 3</a>
    </div>
  </div>
  <div class="type">
    <div class="type_info">Stopniowanie</div>
    <div class="dropdown-content">
      <a href="#">Link 1</a>
      <a href="#">Link 2</a>
      <a href="#">Link 3</a>
    </div>
  </div>
  <div class="type">
    <div class="type_info">Przyimki i przedimki</div>
    <div class="dropdown-content">
      <a href="#">Link 1</a>
      <a href="#">Link 2</a>
      <a href="#">Link 3</a>
    </div>

  </div>
  </div>

</div>
</template>

<script>

import HeaderDash from "@/components/HeaderDash";

export default {
  name: "Dashboard",
  components: {HeaderDash},
  data() {
    return {
      components: {
        'my-header': HeaderDash,
      },
    }
  },

}
</script>

<style scoped>

.dropdown-content {

  position: absolute;
  background-color: #f9f9f9;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  top: 150px;
  width: 300px;
  height: 0;
  opacity: 0;
  visibility: hidden;
  z-index: -1;

  -webkit-transition: all .35s ease;
  -moz-transition: all .35s ease;
  -ms-transition: all .35s ease;
  -o-transition: all .35s ease;
  transition: all .35s ease;
}

.dropdown-content a {
  background: #ddd;
  color: #444;
  display: block;
  padding: 0 25px;
  text-align: center;
  text-decoration: none;
  z-index: 9999;

}

.dropdown-content a:hover {
  background-color: #f1f1f1;

}
.type:hover .dropdown-content{
  visibility: visible;
  opacity: 1;
  z-index: 9999;
  height: auto;
}

.type:hover a{
  height: auto;
}

.type{
  display: inline-block;
  flex-direction: row;
  justify-content: center;
  position: relative;
  padding-bottom:150px;
  margin: 130px 0px 0px 160px;
  width: 300px;
  background: rgba(255, 255, 255, 0.7);
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
  border-radius: 20px 20px 0 0 ;
}


.type:hover{
  background: rgba(255, 255, 255, 0.1);
  -webkit-transition: all .35s ease;
  -moz-transition: all .35s ease;
  -ms-transition: all .35s ease;
  -o-transition: all .35s ease;
  transition: all .35s ease;
}

.type_info{
  position: absolute;
  left: 40%;
  top: 20%;
  font-family: cg, Quicksand-Light;
  font-weight: 900;
  font-size: 24px;
  line-height: 30px;
  text-align: center;
  color: #000000;
}

.content{
  width: 80%;
}


.main{
  background-image: linear-gradient(-60deg, #16a085 0%, #f4d03f 100%);
  width: 100%;
  height: 100%;
  overflow: hidden;
}

</style>