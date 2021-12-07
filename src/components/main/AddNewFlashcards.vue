<template>
<div class="main">
  <FlashMessage :position="'right bottom'"></FlashMessage>
  <a v-on:click="changeRoute('/dashboard')" class="button-back"><font-awesome-icon icon="chevron-left"></font-awesome-icon></a>
  <div class="flash-inputs">
    <div class="input-row">
    <input class="add-input" oninput="this.value = this.value.toUpperCase()" type="text" name="en" value="" placeholder="Słówko po ang."/>
    <input class="add-input" oninput="this.value = this.value.toUpperCase()" type="text" name="pl" value="" placeholder="Tłumaczenie"/><a id="add" class="add"><font-awesome-icon icon="plus"></font-awesome-icon></a>
  </div>
  </div>
  <div class="add-btn">
    <button class="bn632-hover bn22" id="click">Dodaj fiszki!</button>
  </div>
</div>
</template>

<script>

import $ from 'jquery';
import axios from "axios";
import endpoint from "@/endpoint.json";
export default {
  name: "AddNewFlashcards",

  data(){
    return{
      selectedType: ''
    }
  },

  mounted() {

    var vm = this;
    var fieldCounter = 1;

    $(document).ready(function (){
      var max = 15;
      $($('#add')).click(function(){
        if(fieldCounter <= max){
          $($('.flash-inputs')).append(
              '<div style="display: flex; align-items: center; justify-content: center;">' +
              '<input class="add-input" oninput="this.value = this.value.toUpperCase()" type="text" value="" name="en" placeholder="Słówko po ang."/>' +
              '<input class="add-input" oninput="this.value = this.value.toUpperCase()" type="text" value="" name="pl" placeholder="Tłumaczenie"/><a class="remove_button">-</a>' +
              '</div>');
          fieldCounter++;
        }
        })
      $($('.flash-inputs')).on('click', '.remove_button', function(e){
        e.preventDefault();
          $(this).parent('div').remove();
          fieldCounter--;
      });
      })

    $('#click').on('click', function (){

      var fr = $('input[name="en"]').serializeArray();
      var bc = $('input[name="pl"]').serializeArray();
      var empty = false;

      let time = new Date().toLocaleTimeString();

      const flashcard = {
        type: 'WŁASNE ' + time,
        flashcard: []
      }

      for(let j=0; j<fieldCounter; j++){
        empty = fr[j].value === '' || bc[j].value === '';
      }

      for(let i=0; i<fieldCounter; i++) {
        flashcard.flashcard.push({front: fr[i].value, back: bc[i].value})
      }

      if(empty === false){
        axios.post(`${endpoint.url}/dashboard/add/`, flashcard)
            .then((response) => {
              if(response.status === 200){
                vm.$swal({
                  position: 'center',
                  icon: 'success',
                  title: 'Pomyślnie dodano fiszki!',
                  showConfirmButton: false,
                  timer: 1500
                })
              }
            })
      }else{
        vm.$swal({
          position: 'center',
          icon: 'error',
          title: 'Niektóre pola są puste!',
          showConfirmButton: false,
          timer: 1500
        })
      }
    })
    },
}
</script>

<style scoped>

@import '../../styles/style.css';
@import '../../styles/style2.css';
@import '../../styles/buttons.css';

</style>