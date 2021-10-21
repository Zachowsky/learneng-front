<template>
<div class="main">
  <HeaderDash></HeaderDash>
  <div class="flashcard">
    <div class="flashcard-inner" >
      <div class="flashcard-front">
        <p>SLOWO</p>
      </div>
      <div class="flashcard-back">
        <p>WORD</p>
      </div>
    </div>
  </div>
</div>

</template>

<script>
import HeaderDash from "@/components/HeaderDash";
export default {
  name: "Flashcards",
  components: {HeaderDash}
}
</script>

<style scoped>
.main{
  background-image: linear-gradient(-60deg, #16a085 0%, #f4d03f 100%);
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.flashcard {
  position: absolute;
  width: 528px;
  height: 139px;
  left: 687px;
  top: 410px;

  font-family: cg, Quicksand-Light;
  font-style: normal;
  font-weight: bold;
  font-size: 70px;
  line-height: 87px;
  text-align: center;

  color: #FFFFFF;
}

.flashcard-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
}

.flashcard:hover .flashcard-inner {
  transform: rotateY(180deg);
}

.flashcard-front, .flashcard-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.flashcard-front {
  color: black;
}

.flashcard-back {
  background-color: #000000;
  color: white;
  transform: rotateY(180deg);
}
</style>