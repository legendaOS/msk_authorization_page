import 

<template>

<div class="pay-auth">
  <menu-button />
  <badge />
  <authorization-component />
</div>

</template>

<script>

import menuButton from './components/menuButton.vue'
import badge from './components/badge.vue'
import authorizationComponent from './components/authorization.vue'

export default {
  name: 'pay-auth',
  data: function (){
    return {
      
    }
  },
  components:{
    menuButton,
    badge,
    authorizationComponent
  }
}
</script>

<style>
  .pay-auth{
    width: 350px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 14px;
    padding: 20px;
    position: relative;
    background-color: #ffffff;
    border-radius: 16px;
    display: flex;
  }

</style>
