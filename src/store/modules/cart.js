const state = {
  products: []
}

export const mutationTypes = {
  addProductToCart: '[cart] addProductToCart',
  removeProductFromCart: '[cart] removeProductFromCart',
  incrementProduct: '[cart] incrementProduct',
  decrementProduct: '[cart] decrementProduct'
}

export const actionTypes = {
  addToCart: '[cart] addToCart',
  removeFromCart: '[cart] removeFromCart',
  changeCountProduct: '[cart] changeCountProduct'
}

const mutations = {
  [mutationTypes.addProductToCart](state, product) {
    state.products.push(product)
  },
  [mutationTypes.removeProductFromCart](state, product) {
    const index = state.products.findIndex(item => item.id === product.id)

    state.products.splice(index, 1)
  },
  [mutationTypes.incrementProduct](state, productId) {
    const index = state.products.findIndex(item => item.id === productId)

    state.products[index].counter++
  },
  [mutationTypes.decrementProduct](state, productId) {
    const index = state.products.findIndex(item => item.id === productId)

    state.products[index].counter--
  }
}

const actions = {
  [actionTypes.addToCart](context, product) {
    context.commit(mutationTypes.addProductToCart, product)
  },
  [actionTypes.removeFromCart](context, product) {
    context.commit(mutationTypes.removeProductFromCart, product)
  },
  [actionTypes.changeCountProduct](context, data) {
    switch (data.changeCounterType) {
      case 'increment':
        context.commit(mutationTypes.incrementProduct, data.productId)
        break

      case 'decrement':
        context.commit(mutationTypes.decrementProduct, data.productId)
        break

      default:
        break
    }
  }
}

export default {
  state,
  mutations,
  actions
}
