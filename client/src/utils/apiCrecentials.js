import axios from 'axios'
import VueAxios from 'vue-axios'
import Vue from 'vue'

Vue.use(VueAxios, axios)

export const API = axios.create({
  baseURL: `http://localhost:8081/api/`,
  headers: {
    Authorization: 'Bearer {token}'
  }
})
