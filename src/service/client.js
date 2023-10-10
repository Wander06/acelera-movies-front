import axios from 'axios'

const url = process.env.URL || 'http://localhost:9000'

export async function loginUser (login) {
  return axios.post(`${url}/login`, login)
}
