<template>
    <form @submit.prevent="editAccount">
        <div class="col-md-12">
                <div>
                <img class="bg-img" :src="account.coverImg" alt="">
                </div>
             <div class="row justify-content-center profile">
      <div class=" col-12 d-flex flex-column text-start p-4">
        <img class="profile-img" :src="account.picture" alt="" />
        <h6 class="border-bottom border-3 border-dark p-2">
          {{ account.name }}
        </h6>
      </div>
        <div class="row">
            <div class="col-6">
                <label for="">Profile Img Url</label>
                  <input class="form-control  border-3 border-dark" type="text" placeholder="Url..." v-model="account.picture">
            </div>
            <div class="col-6">
                <label for="">Cover Image Url</label>
                  <input class="form-control  border-3 border-dark" type="text" placeholder="Url..." v-model="accountData.coverImg">
            </div>
        </div>
            <div class="row p-3">
                 <div class="col-6">
                <label for="">Github</label>
                  <input class="form-control  border-3 border-dark" type="text" placeholder="Url..." v-model="accountData.github">
            </div>
            <div class="col-6">
                <label for="">Resume</label>
                  <input class="form-control  border-3 border-dark" type="text" placeholder="Url..." v-model="accountData.resume">
            </div>
            </div>
            <div class="row">
                <div class="col-4">
                     <label for="">Linkedin</label>
                  <input class="form-control  border-3 border-dark" type="text" placeholder="Url..." v-model="accountData.linkedin">
                </div>
                <div class="col-4">
                     <label for="">Class</label>
                  <input class="form-control  border-3 border-dark" type="text" placeholder="Class..." v-model="accountData.class">
                </div>
                <div class="col-4">
                    <label>Graduated</label>
                  <input class="custom-checkbox  border-3 border-dark" type="checkbox" v-model="accountData.graduated" >
                </div>
            <div class="col-12">
                <label for="">Bio</label>
                <textarea class="form-control  border-3 border-dark" name="" id="" cols="30" rows="3" placeholder="Bio..." v-model="accountData.bio">
                </textarea>
            </div>
            </div>
            <div class="col-12 p-4 text-end">
           <button class="btn btn-info border-white me-3"  data-bs-dismiss="modal"
            aria-label="Close">Cancel</button>
           <button class="btn btn-dark border-white">Submit</button>
            </div>

    </div>
        </div>
    </form>
</template>


<script>
import { computed, ref } from '@vue/reactivity'
import { AppState } from '../AppState'
import Pop from '../utils/Pop'
import { logger } from '../utils/Logger'
import { accountService } from '../services/AccountService'
import { watchEffect } from '@vue/runtime-core'
import { Modal } from 'bootstrap'
export default {
    setup(){
        const accountData = ref({});
        watchEffect(() => {
            AppState.account;
            accountData.value = {...AppState.account}
        })
        return {
            accountData,
            async editAccount(){
                try {
                    await accountService.editAccount(accountData.value);
                    Modal.getOrCreateInstance(document.getElementById('edit-modal')).hide();
          Pop.toast('Successfully Edited')
                } catch (error) {
                  Pop.toast(error.message, 'error')
                  logger.log(error)  
                }
            },
            
            profile: computed(() => AppState.profile),
            account: computed(() => AppState.account)
        }
    }
}
</script>


<style lang="scss" scoped>

.bg-img {
  height: 10vh;
  width: 100%;
  background-size: cover;
  background-position: center;
  background-color: var(--bs-info);
}
.profile {
  transform: translateY(-7vh);
}
.profile-img {
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 50em;
}

 .custom-checkbox{
      width: 100px;
      height:30px;
      cursor: pointer;
    
      
  }

</style>