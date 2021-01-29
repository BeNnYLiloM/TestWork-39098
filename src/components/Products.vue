<template>
  <div>
    <Loader v-if="isLoading" />

    <ErrorMessage v-else-if="error" :message="error" />

    <div class="products" v-else>
      <Product
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>

<script>
import Product from '@/components/Product'
import {mapState} from 'vuex'
import {actionTypes} from '@/store/modules/products'
import ErrorMessage from '@/components/ErrorMessage'
import Loader from '@/components/Loader'

export default {
  name: 'Products',
  components: {
    Product,
    ErrorMessage,
    Loader
  },
  computed: {
    ...mapState({
      isLoading: state => state.products.isLoading,
      products: state => state.products.data,
      error: state => state.products.error
    })
  },
  mounted() {
    this.$store.dispatch(actionTypes.getProducts)
  }
}
</script>
