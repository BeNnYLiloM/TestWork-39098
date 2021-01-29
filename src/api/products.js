import axios from '@/api/axios'

const getProducts = () => {
  return axios.get(`/products`).then(response => response.data)
}

const getProduct = id => {
  return axios.get(`/products/${id}`).then(response => response.data)
}

export default {
  getProducts,
  getProduct
}
