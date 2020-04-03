import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    Modal: false,
    ModalType: '',
    server: 'http://eventos-back.wen:8080/',
    base: 'http://localhost:8081/',
    searchResults: [],
    request: {
      keywords: '',
      category: 'all',
      location: 'all'
    },
  },
  mutations: {
    toggleModal(state, type){
      state.ModalType = type      
      state.Modal = !state.Modal
    },
    toggleModalType(state, type){
      state.ModalType = type
    },
    search(state, res){
      state.searchResults = res
    },
    clearResults(state){
      state.searchResults = []
    },
    clearRequest(state){
      state.request = {
        keywords: '',
        category: 'all',
        location: 'all'
      }
    },
  },
  actions: {
    search(context, payload){
      return new Promise((resolve, reject) => {
        axios.get(context.state.server+'api/search-services', {params: payload})
        .then( res => {
          context.commit('search', res.data)
          resolve(res)
        } )
        .catch( err => reject(err))
      })
    },
    getCategories(context){
      return new Promise((resolve, reject) => {
        axios.get(context.state.server+'api/categories')
        .then( res => {
          resolve(res.data)
        })
        .catch( err => reject(err))
      })
    },
    getLocations(context){
      return new Promise((resolve, reject) => {
        axios.get(context.state.server+'api/locations')
        .then( res => {
          resolve(res.data)
        })
        .catch( err => reject(err))
      })
    },
    getLastServices(context){
      return new Promise((resolve, reject) => {
        axios.get(context.state.server+'api/latest-services')
        .then( res => {
          resolve(res.data)
        })
        .catch( err => reject(err))
      })
    },
    getService(context, id){
      return new Promise((resolve, reject) => {
        axios.get(context.state.server+'api/search-services/'+id)
        .then( res => {
          resolve(res.data)
        })
        .catch( err => reject(err))
      })
    },
  },
  modules: {
  }
})
