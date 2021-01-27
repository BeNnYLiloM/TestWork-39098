<template>
  <div>
    <div class="navbar">
      <div class="container">
        <div class="navbar__wrap">
          <router-link class="navbar__link" :to="{ name: 'home' }">
            <img class="logo" src="@/assets/img/logo.png" alt="" />
          </router-link>
          <router-link class="navbar__link" :to="{ name: 'cart' }">
            <div class="count">0</div>
            <img src="@/assets/img/cart.svg" alt="" />
          </router-link>
        </div>
      </div>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
@import '@/assets/scss/styles';
</style>
