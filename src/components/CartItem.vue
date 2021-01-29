<template>
  <div class="cart__item">
    <div class="cart__item-img">
      <img :src="product.image" alt="" />
    </div>
    <div class="cart__item-content">
      <div class="cart__item-title">{{ product.title }}</div>
      <div class="cart__item-desc">{{ product.description }}</div>
    </div>
    <div class="cart__item-count">
      <button class="cart__item-minus" @click="decrement">
        <img src="@/assets/img/minus.svg" alt="" />
      </button>
      <input type="text" v-model="countProduct" disabled />
      <button class="cart__item-plus" @click="increment">
        <img src="@/assets/img/plus.svg" alt="" />
      </button>
    </div>
    <div class="cart__item-right">
      <div class="cart__item-price">{{ product.price }} Rub</div>
      <button class="cart__item-del" @click="deleteProduct">Delete</button>
    </div>
  </div>
</template>

<script>
import {actionTypes} from '@/store/modules/cart'

export default {
  name: 'CartItem',
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      countProduct: this.product.counter
    }
  },
  methods: {
    increment() {
      this.countProduct++
      this.$emit('sumBlock', {
        type: 'increment',
        price: this.product.price,
        productId: this.product.id
      })
    },
    decrement() {
      if (this.countProduct > 1) {
        this.countProduct--
        this.$emit('sumBlock', {
          type: 'decrement',
          price: this.product.price,
          productId: this.product.id
        })
      }
    },
    deleteProduct() {
      this.$store.dispatch(actionTypes.removeFromCart, this.product)
    }
  }
}
</script>
