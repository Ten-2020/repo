import axios from 'src/libs/axios.js'
export const search = (params) => {
  return axios.post('/wanyue/search', params)
}
export const edit = (params) => {
  return axios.post('/wanyue/edit', params)
}
export const fresh = (params) => {
  return axios.post('/wanyue/fresh', params)
}