import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    menuopen: false,
    Modal: false,
    ModalType: '',
    server: 'http://eventos.wen:8080/',
    base: window.origin,
    searchResults: [],
    request: {
      keywords: '',
      category: 'all',
      location: 'all'
    },
  },
  mutations: {
    setRequest(state, request){     
      state.request = request
    },
    toggleMenu(state, value){     
      state.menuopen = (value == false) ? false : !state.menuopen
    },
    toggleModal(state, type){
      state.menuopen = false
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
    getCombo(context, id){
      return new Promise((resolve, reject) => {
        axios.get(context.state.server+'api/service-combos/'+id)
        .then( res => {
          resolve(res.data)
        })
        .catch( err => reject(err))
      })
    },
    getProvider(context, id){
      return new Promise((resolve, reject) => {
        axios.get(context.state.server+'api/profile/'+id)
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
