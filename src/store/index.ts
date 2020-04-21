import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

axios.defaults.baseURL = 'http://eventos.wen:8080/';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

export default new Vuex.Store({
  state: {
    serverUrl: 'http://eventos.wen:8080/',
    accessToken: localStorage.getItem('accessToken') || null,
    user: {},
    menuopen: false,
    Modal: false,
    ModalType: '',
    base: window.origin,
    searchResults: [],
    request: {
      keywords: '',
      category: 'all',
      location: 'all'
    },
    isLogged: false,
    centerMapResults: null,
  },
  mutations: {
    toggleMenu(state, value) {
      state.menuopen = (value == false) ? false : !state.menuopen
    },
    toggleModal(state, type) {
      state.menuopen = false
      state.ModalType = type
      state.Modal = !state.Modal
    },
    clearRequest(state) {
      state.request = {
        keywords: '',
        category: 'all',
        location: 'all'
      }
    },
    toggleModalType: (state, type) => state.ModalType = type,
    setCenterMapResults: (state, center) => state.centerMapResults = center,
    setRequest: (state, request) => state.request = request,
    search: (state, res) => state.searchResults = res,
    clearResults: (state) => state.searchResults = [],
    setToken: (state, accessToken) => state.accessToken = accessToken,
    setUser: (state, user) => state.user = user,
    destroyToken: (state) => state.accessToken = null,
    destroyUser: (state) => state.user = {},
  },
  actions: {
    search(context, payload) {
      return new Promise((resolve, reject) => {
        axios.get('api/search-services', {
            params: payload
          })
          .then(res => {
            context.commit('search', res.data)
            resolve(res)
          })
          .catch(err => reject(err))
      })
    },
    getCategories(context) {
      return new Promise((resolve, reject) => {
        axios.get('api/categories')
          .then(res => {
            resolve(res.data)
          })
          .catch(err => reject(err))
      })
    },
    getLocations(context) {
      return new Promise((resolve, reject) => {
        axios.get('api/locations')
          .then(res => {
            resolve(res.data)
          })
          .catch(err => reject(err))
      })
    },
    getLastServices(context) {
      return new Promise((resolve, reject) => {
        axios.get('api/latest-services')
          .then(res => {
            resolve(res.data)
          })
          .catch(err => reject(err))
      })
    },
    getService(context, id) {
      if (context.state.accessToken !== null)
        axios.defaults.headers.common['Authorization'] = 'bearer ' + context.state.accessToken;

      return new Promise((resolve, reject) => {
        axios.get('api/search-services/' + id)
          .then(res => {
            resolve(res.data)
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    getCombo(context, id) {
      if (context.state.accessToken !== null)
        axios.defaults.headers.common['Authorization'] = 'bearer ' + context.state.accessToken;

      return new Promise((resolve, reject) => {
        axios.get('api/service-combos/' + id)
          .then(res => {
            resolve(res.data)
          })
          .catch(err => reject(err))
      })
    },
    getProvider(context, id) {
      return new Promise((resolve, reject) => {
        axios.get('api/profile/' + id)
          .then(res => {
            resolve(res.data)
          })
          .catch(err => reject(err))
      })
    },
    login(context, payload) {
      return new Promise((resolve, reject) => {
        axios.post('api/auth/login-front/', payload)
          .then(({
            data
          }) => {
            localStorage.setItem('accessToken', data.access_token)
            context.commit('setToken', data.access_token)
            context.commit('setUser', data.user)
            resolve(data)
          })
          .catch(err => reject(err))
      })
    },

    logout(context) {
      axios.defaults.headers.common['Authorization'] = 'bearer ' + context.state.accessToken;
      return new Promise((resolve, reject) => {
        axios.post('api/auth/logout/')
          .then(({
            data
          }) => {
            localStorage.removeItem('accessToken')
            resolve(data)
          })
          .catch(err => reject(err))
          .finally(() => {
            context.commit('destroyToken')
            context.commit('destroyUser')
          })
      })
    },

    me(context) {
      axios.defaults.headers.common['Authorization'] = 'bearer ' + context.state.accessToken;
      return new Promise((resolve, reject) => {
        axios.post('api/auth/me/')
          .then(({
            data
          }) => {
            context.commit('setUser', data)
            resolve(data)
          })
          .catch(err => {
            if (err.response.status == 401) {
              context.commit('destroyToken')
              context.commit('destroyUser')
            }
            reject(err)
          })
      })
    },

    registerProvider(context, payload) {
      return new Promise((resolve, reject) => {
        axios.post('api/users/', payload)
          .then(res => {
            resolve(res.data)
          })
          .catch(err => reject(err.response))
      })
    },
    registerClient(context, payload) {
      return new Promise((resolve, reject) => {
        axios.post('api/auth/register-client/', {
            ...payload,
            'password_confirmation': payload.verifyPassword
          })
          .then(({
            data
          }) => {
            localStorage.setItem('accessToken', data.access_token)
            context.commit('setToken', data.access_token)
            context.commit('setUser', data.user)
            resolve(data)
          })
          .catch(err => reject(err.response))
      })
    },
  },
  getters: {
    loggedIn: state => state.accessToken !== null,
  }
})