import axios from 'src/libs/axios.js'
export const search = ({ author, name }) => {
  return axios.post('/wanyue/search', {
    author: author,
    name: name,
  })
}