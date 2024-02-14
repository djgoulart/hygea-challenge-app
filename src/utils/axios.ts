import axios from 'axios'

let API_URL = 'https://hygea-challenge-backend.onrender.com/'

if (__DEV__) {
  API_URL = 'http://10.0.2.2:3333/'
}

export const api = axios.create({
  baseURL: API_URL,
})
