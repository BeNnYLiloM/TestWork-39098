<template>
  <div class="product">
    <div class="product__img">
      <img :src="product.image" alt="" />
    </div>
    <div class="product__body">
      <div class="product__title">
        {{ product.title }}
      </div>
      <div class="product__desc">
        {{ product.description }}
      </div>
    </div>
    <div class="product__footer">
      <div class="product__price">{{ product.price }} Rub</div>
      <button class="product__btn" @click="buy" :disabled="inCart">
        <span v-if="inCart">In Cart</span>
        <span v-else>Buy</span>
      </button>
    </div>
  </div>
</template>

<script>
import {actionTypes} from '@/store/modules/cart'
import {mapState} from 'vuex'

export default {
  name: 'Product',
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  computed: {
    ...mapState({
      productsInCart: state => state.cart.products
    }),
    inCart() {
      return this.productsInCart.find(item => item.id === this.product.id)
        ? true
        : false
    }
  },
  methods: {
    buy(e) {
      e.target.setAttribute('disabled', true)
      this.product.counter = 1
      this.$store.dispatch(actionTypes.addToCart, this.product)
    }
  }
}
</script>
