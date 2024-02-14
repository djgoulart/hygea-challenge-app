import axios from 'axios'

// 'https://hygea-challenge-backend.onrender.com/users'

export const api = axios.create({
  baseURL: 'http://10.0.2.2:3333/',
})
