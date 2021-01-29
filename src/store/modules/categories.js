import categoriesApi from '@/api/categories'

const state = {
  data: null,
  isLoading: false,
  error: null,
  products: null
}

export const mutationTypes = {
  getCategoriesStart: '[categories] getCategoriesStart',
  getCategoriesSuccess: '[categories] getCategoriesSuccess',
  getCategoriesFailure: '[categories] getCategoriesFailure',

  getCategoryStart: '[categories] getCategoryStart',
  getCategorySuccess: '[categories] getCategorySuccess',
  getCategoryFailure: '[categories] getCategoryFailure'
}

export const actionTypes = {
  getCategories: '[categories] getCategories',
  getCategory: '[categories] getCategory'
}

const mutations = {
  [mutationTypes.getCategoriesStart](state) {
    state.isLoading = true
    state.data = null
  },
  [mutationTypes.getCategoriesSuccess](state, payload) {
    state.isLoading = false
    state.data = payload
  },
  [mutationTypes.getCategoriesFailure](state) {
    state.isLoading = false
    state.error = 'Something is wrong'
  },

  [mutationTypes.getCategoryStart]() {},
  [mutationTypes.getCategorySuccess](state, payload) {
    state.isLoading = false
    state.products = payload
  },
  [mutationTypes.getCategoryFailure](state) {
    state.isLoading = false
    state.error = 'Something is wrong'
  }
}

const actions = {
  [actionTypes.getCategories](context) {
    return new Promise(resolve => {
      context.commit(mutationTypes.getCategoriesStart)
      categoriesApi
        .getCategories()
        .then(categories => {
          context.commit(mutationTypes.getCategoriesSuccess, categories)
          resolve(categories)
        })
        .catch(() => {
          context.commit(mutationTypes.getCategoriesFailure)
        })
    })
  },

  [actionTypes.getCategory](context, {category: category}) {
    return new Promise(resolve => {
      context.commit(mutationTypes.getCategoryStart)
      categoriesApi
        .getCategory(category)
        .then(categoryData => {
          context.commit(mutationTypes.getCategorySuccess, categoryData)
          resolve(categoryData)
        })
        .catch(() => {
          context.commit(mutationTypes.getCategoryFailure)
        })
    })
  }
}

export default {
  state,
  mutations,
  actions
}
