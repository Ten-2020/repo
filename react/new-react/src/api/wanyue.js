import axios from 'src/libs/axios.js'
export const search = (params) => {
  return axios.post('/wanyue/search', params)
}