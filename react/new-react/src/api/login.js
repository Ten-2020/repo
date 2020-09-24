import axios from 'src/libs/axios.js'
export const login = ({ username, password }) => {
  return axios.post('/api/login', {
    username: username,
    password: password,
  })
}