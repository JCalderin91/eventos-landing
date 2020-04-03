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
            <!-- <p>Filtros</p>
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
            <br> -->

            <p>Resultados de busqueda: {{searchResults.length}} </p>
            <!-- ************************* -->
            <transition-group name="fade" mode="out-in" class="section-items row" tag="div">
              <div class="col-md-6 mb-3" v-for="result in searchResults" :key="result.id">
                <Item :item="result"/>
              </div>
            </transition-group>

            <div v-if="searchResults.length == 0" class="no-search">
              <img src="images/search.png" />
            </div>

          </div>
        </div>
        <div class="col-md-4">
          <div class="card">
            Mapa
          </div>
        </div>
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
    console.log(this.$router)
    if(this.$route.params.results){
      this.search(this.$route.params.results)
    }else{
      this.clearResults()     
      this.clearRequest()     
    }
  },
  methods:{
    ...mapMutations(['clearResults','clearRequest','search'])
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
  .no-search{
    display: flex;
    justify-content: center;
    img{
      width: 300px
    }
  }

</style>