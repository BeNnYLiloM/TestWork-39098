<template>
  <div>
    <Loader v-if="isLoading" />

    <ErrorMessage v-else-if="error" :message="error" />

    <div class="categories" v-else>
      <div
        class="categories__item"
        :class="{['_active']: activeCategory === 'all'}"
        data-category="all"
        @click="selectedCategory"
      >
        all
      </div>
      <div
        class="categories__item"
        :class="{['_active']: activeCategory === category}"
        v-for="category in categories"
        :key="category"
        :data-category="category"
        @click="selectedCategory"
      >
        {{ category }}
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import {actionTypes} from '@/store/modules/categories'
import {
  mutationTypes,
  actionTypes as productsActionTypes
} from '@/store/modules/products'
import Loader from '@/components/Loader'
import ErrorMessage from '@/components/ErrorMessage'

export default {
  name: 'Categories',
  data() {
    return {
      activeCategory: 'all'
    }
  },
  components: {
    Loader,
    ErrorMessage
  },
  computed: {
    ...mapState({
      isLoading: state => state.categories.isLoading,
      categories: state => state.categories.data,
      error: state => state.categories.error,
      products: state => state.categories.products
    })
  },
  mounted() {
    this.$store.dispatch(actionTypes.getCategories)
  },
  methods: {
    selectedCategory(e) {
      const category =
        e.target.dataset.category === 'all' ? '' : e.target.dataset.category

      if (category === '') {
        this.activeCategory = 'all'
        this.$store.dispatch(productsActionTypes.getProducts)
      } else {
        this.activeCategory = category
        this.$store.commit(mutationTypes.getProductsStart)
        this.$store.dispatch(actionTypes.getCategory, {
          category
        })
      }
    }
  },
  watch: {
    products() {
      this.$store.commit(mutationTypes.getProductsSuccess, this.products)
    }
  }
}
</script>
