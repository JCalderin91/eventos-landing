<template>
  <div class="search-form-wrap2">
    <form class="clearfix" action="#">
      <div class="input-field-wrap pull-left">
        <input @input="whatchKeywords()" v-model="request.keywords" class="search-form-input" name="key-word" placeholder="Buscar palabra" type="text" />
      </div>
      <div class="select-field-wrap pull-left">
        <select class="search-form-select" name="categories">
          <option class="options" value="all">Todas</option>
          <option v-for="category in categories" :key="category.id" class="options" :value="category.id">{{category.nombre_servicio}}</option>
        </select>
      </div>
      <div class="select-field-wrap pull-left">
        <select v-model="request.location" class="search-form-select" name="categories">
          <option class="options" value="all">Todas</option>
          <option v-for="location in locations" :key="location.id" class="options" :value="location.id">{{location.name}}</option>
        </select>
      </div>
      <div class="submit-field-wrap pull-left">
        <button :title="title" :disabled="isLoading || !formValid" @click.prevent="makeSearch()" class="search-form-submit bgblue-1 white">
          <span v-if="!isLoading">Buscar</span>
          <i v-else class="fa fa-spinner spinner"></i>
        </button>
      </div>
    </form>
    <!--  -->
  </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex'
export default {
  data: () => ({
    categories: [],
    locations: [],    
    isLoading: false,
  }),
  mounted(){
    this.getCategories()
      .then( res => this.categories = res )
      .catch( err => console.log(err) )
    this.getLocations()
      .then( res => this.locations = res )
      .catch( err => console.log(err) )

    if(!this.$route.params.results){
      this.clearRequest()     
    }
  },
  methods: {
    ...mapActions(['search', 'getCategories', 'getLocations']),
    ...mapMutations(['clearResults','clearRequest']),
    makeSearch(){
      this.isLoading = true
      this.search(this.request)
        .then(res => {
          if (this.$route.name === 'home')
            this.$router.push({name:'results', params: {results: res.data}})
        })
        .finally(() => this.isLoading = false)
    },
    whatchKeywords(){
      if(this.request.keywords == '') this.clearResults()
    }
  },
  computed: {
    ...mapState(['request']),
    formValid(){
      return this.request.keywords !== '' ? true : false
    },
    title(){
      return this.request.keywords !== '' ? 'Buscar' : 'Debe ingresar una palabra a buscar'
    }
  }
}
</script>

<style lang="scss" scope>
  .input-field-wrap input{
    background-color: #eee;
  }
  .spinner{
    font-size: 20px !important;
  }
  .search-form-submit{
    span{
      color: white;
    }
  }
  button.search-form-submit:disabled{
    opacity: 0.4;
    cursor: no-drop;
  }
</style>