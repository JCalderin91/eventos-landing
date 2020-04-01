<template>
  <div class="search-form-wrap2">
    <form class="clearfix" action="#">
      <div class="input-field-wrap pull-left">
        <input v-model="request.keywords" class="search-form-input" name="key-word" placeholder="enter keyword" type="text" />
      </div>
      <div class="select-field-wrap pull-left">
        <select class="search-form-select" name="categories">
          <option class="options" value="all-categories">all categories</option>
          <option class="options" value="america">business</option>
          <option class="options" value="canada">free lancing</option>
          <option class="options" value="france">web development</option>
          <option class="options" value="germane ">designing</option>
          <option class="options" value="russia">wordpress</option>
          <option class="options" value="china">bootstrap</option>
        </select>
      </div>
      <div class="select-field-wrap pull-left">
        <select class="search-form-select" name="categories">
          <option class="options" value="all-categories">all Locations</option>
          <option class="options" value="america">business</option>
          <option class="options" value="canada">free lancing</option>
          <option class="options" value="france">web development</option>
          <option class="options" value="germane ">designing</option>
          <option class="options" value="russia">wordpress</option>
          <option class="options" value="china">bootstrap</option>
        </select>
      </div>
      <div class="submit-field-wrap pull-left">
        <input @click.prevent="makeSearch()" class="search-form-submit bgblue-1 white" name="key-word" type="submit" />
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data: () => ({
    request: {
      keywords: '',
      category: 'all',
      location: 'all'
    }
  }),
  methods: {
    ...mapActions(['search']),
    makeSearch(){
      this.search(this.request)
    }
  }
}
</script>

<style lang="scss" scope>
  .input-field-wrap input{
    background-color: #eee;
  }
</style>