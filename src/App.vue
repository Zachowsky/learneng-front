<template>
        <router-view/>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>

img{
  pointer-events: none;
}
@font-face {
  font-family: "cg";
  src: local("cg"), url(./fonts/Quicksand-Light.ttf) format("truetype");
}

body, html {
  height: 100%;
  margin: 0;
}

::-webkit-scrollbar
{
  width: 15px;
  background-color: rgba(11, 163, 54, 0.51);
}

::-webkit-scrollbar-thumb
{
  background-color: rgba(4, 82, 49, 0.59);
  border-radius: 10px;
}


</style>
