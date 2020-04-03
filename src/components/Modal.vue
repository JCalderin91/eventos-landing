<template>
  <transition name="fade" mode="out-in">
    <div v-if="Modal" @click="closeModal($event)" data-modal="true" class="modal fade show" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
      aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content card">
          <h4 @click="toggleModal()" class="close">&times;</h4>
          <User-form v-if="ModalType == 'user-register' "/>
          <Provider-form v-if="ModalType == 'provider-register' "/>
          <Login-form v-if="ModalType == 'login-form' "/>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { mapMutations, mapState } from "vuex";
import UserForm from '@/components/UserForm'
import ProviderForm from '@/components/ProviderForm'
import LoginForm from '@/components/LoginForm'
export default {
  components: {UserForm, ProviderForm, LoginForm},
  methods:{
    ...mapMutations(['toggleModal']),
    closeModal(event){
      if(event.target.dataset.modal == 'true'){
        this.toggleModal()
      }
      
    }
  },
  computed: {
    ...mapState(['Modal', 'ModalType'])
  }
}
</script>

<style lang="scss" scope>
  .fade.show{
    display: block;
    padding-right: 21px;
    background-color: rgba(0,0,0,.5)
  }
  .modal-content.card{
    padding-top: 35px;
  }
  .close{
    position: absolute;
    right: 14px;
    top: 8px;
    color: red !important;
    cursor: pointer;
    &:hover{
      transform: scale(1.1);
    }
  }
</style>