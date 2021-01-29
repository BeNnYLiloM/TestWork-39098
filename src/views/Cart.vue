<template>
  <div class="container">
    <div class="cart-empty" v-if="!products.length">
      Cart is empty
    </div>

    <div class="cart" v-else>
      <CartItem
        v-for="product in products"
        :key="product.id"
        :product="product"
        @sumBlock="changeSum"
      />

      <div class="cart__footer">
        Sum: <span>{{ sum }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import {actionTypes} from '@/store/modules/cart'
import CartItem from '@/components/CartItem'

export default {
  name: 'Cart',
  components: {
    CartItem
  },
  data() {
    return {
      sum: 0
    }
  },
  computed: {
    ...mapState({
      products: state => state.cart.products
    })
  },
  mounted() {
    this.sum = this.products.reduce(
      (summ, product) => summ + product.price * product.counter,
      0
    )
  },
  methods: {
    changeSum({type, price, productId}) {
      if (type === 'increment') {
        this.sum = Number((this.sum + price).toFixed(2))
      } else if (type === 'decrement') {
        this.sum = Number((this.sum - price).toFixed(2))
      }

      this.$store.dispatch(actionTypes.changeCountProduct, {
        changeCounterType: type,
        productId
      })
    }
  }
}
</script>
