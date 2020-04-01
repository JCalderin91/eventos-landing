<template>
  <section>
    <div class="section-form">
      <div class="container">
        <Search-form/>
      </div>
    </div>
    <div class="container section-body">
      <div class="row">
        <div class="col-md-8">
          <div class="card bgwhite">
            <p>Filtros</p>
            <div class="row">
              <div class="col-md-6">
                <select class="listing-search-select">
                  <option>ALL CATEGORIES</option>
                  <option>ALL CATEGORIES</option>
                  <option>ALL CATEGORIES</option>
                </select>
              </div>
              <div class="col-md-6">
                <select class="listing-search-select">
                  <option>ALL CATEGORIES</option>
                  <option>ALL CATEGORIES</option>
                  <option>ALL CATEGORIES</option>
                </select>
              </div>
            </div>
            <br>
            <p>{{searchResults.length}} Resultados</p>

            <!-- ************************* -->

            <div class="section-items row">
              <div class="col-md-6 mb-3" v-for="result in searchResults" :key="result.id">
                <Item :item="result"/>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4">Mapa</div>
      </div>
    </div>
  </section>
</template> 


<script>
import SearchForm from '@/components/SearchForm'
import Item from '@/components/Item'
import { mapState, mapMutations } from 'vuex';

export default {
  components: { SearchForm, Item },

  mounted(){
    console.log('asdasdasdasd');  
    this.clearResults()     
  },
  methods:{
    ...mapMutations(['clearResults'])
  },
  computed: {
    ...mapState(['searchResults'])
  },
}
</script>

<style lang="scss" scope>
  .section-form{
    background-color: white;
  }
  .section-body{
    margin-top: 30px;
  }
  .section-items{
    max-height: 800px;
    overflow-y: scroll;
    margin-top: 30px;
  }

</style>