<template>
  <div>
    <div class="navbar">
      <div class="container">
        <div class="navbar__wrap">
          <router-link class="navbar__link" :to="{name: 'home'}">
            <img class="logo" src="@/assets/img/logo.svg" alt="" />
          </router-link>
          <router-link class="navbar__link" :to="{name: 'cart'}">
            <div class="count" :class="{['_active']: cart.length}">
              {{ cart.length }}
            </div>
            <img src="@/assets/img/cart.svg" alt="" />
          </router-link>
        </div>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: 'App',
  computed: {
    ...mapState({
      cart: state => state.cart.products
    })
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/styles';
</style>
