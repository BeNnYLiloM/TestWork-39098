import axios from '@/api/axios'

const getCategories = () => {
  return axios.get('/products/categories').then(response => response.data)
}

const getCategory = category => {
  return axios
    .get(`/products/category/${category}`)
    .then(response => response.data)
}

export default {
  getCategories,
  getCategory
}
