import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    Modal: false,
    ModalType: '',
    baseUrl: 'http://eventos-back.wen:8080/',
    searchResults: [],
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
  },
  actions: {
    search(context, payload){
      return new Promise((resolve, reject) => {
        axios.get(context.state.baseUrl+'api/search-services', {params: payload})
        .then( res => {
          context.commit('search', res.data)
          resolve(res)
        } )
        .catch( err => reject(err))
      })
    }
  },
  modules: {
  }
})
