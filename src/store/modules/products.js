import productsApi from '@/api/products'

const state = {
  data: [],
  isLoading: false,
  error: null,
  product: null
}

export const mutationTypes = {
  getProductsStart: '[products] getProductsStart',
  getProductsSuccess: '[products] getProductsSuccess',
  getProductsFailure: '[products] getProductsFailure',

  getProductStart: '[products] getProductStart',
  getProductSuccess: '[products] getProductSuccess',
  getProductFailure: '[products] getProductFailure'
}

export const actionTypes = {
  getProducts: '[products] getProducts',
  getProduct: '[products] getProduct'
}

const mutations = {
  [mutationTypes.getProductsStart](state) {
    state.isLoading = true
    state.data = []
  },
  [mutationTypes.getProductsSuccess](state, payload) {
    state.isLoading = false
    state.data = [...state.data, ...payload]
  },
  [mutationTypes.getProductsFailure](state) {
    state.isLoading = false
    state.error = 'Something is wrong'
  },

  [mutationTypes.getProductStart](state) {
    state.isLoading = true
    state.product = null
  },
  [mutationTypes.getProductSuccess](state, payload) {
    state.isLoading = false
    state.data = payload
  },
  [mutationTypes.getProductFailure](state) {
    state.isLoading = false
    state.error = 'Something is wrong'
  }
}

const actions = {
  [actionTypes.getProducts](context) {
    return new Promise(resolve => {
      context.commit(mutationTypes.getProductsStart)
      productsApi
        .getProducts()
        .then(products => {
          context.commit(mutationTypes.getProductsSuccess, products)
          resolve(products)
        })
        .catch(() => {
          context.commit(mutationTypes.getProductsFailure)
        })
    })
  },
  [actionTypes.getProduct](context, id) {
    return new Promise(resolve => {
      context.commit(mutationTypes.getProductStart)
      productsApi
        .getProduct(id)
        .then(product => {
          context.commit(mutationTypes.getProductSuccess, product)
          resolve(product)
        })
        .catch(() => {
          context.commit(mutationTypes.getProductFailure)
        })
    })
  }
}

export default {
  state,
  mutations,
  actions
}
