<template>
    <form action="">
        <div class="col-md-12">
                <div>
                <img class="bg-img" :src="profile.coverImg" alt="">
                </div>
             <div class="row justify-content-center profile">
      <div class=" col-12 d-flex flex-column text-start p-4">
        <img class="profile-img" :src="profile.picture" alt="" />
        <h6 class="border-bottom border-2 border-dark p-2">
          {{ profile.name }}
        </h6>
      </div>
        <div class="row">
            <div class="col-6">
                <label for="">Profile Img Url</label>
                  <input class="form-control" type="text" placeholder="Url..." v-model="account.picture">
            </div>
            <div class="col-6">
                <label for="">Cover Image Url</label>
                  <input class="form-control" type="text" placeholder="Url..." v-model="accountData.coverImg">
            </div>
        </div>
            <div class="row p-3">
                 <div class="col-6">
                <label for="">Github</label>
                  <input class="form-control" type="text" placeholder="Url..." v-model="accountData.github">
            </div>
            <div class="col-6">
                <label for="">Resume</label>
                  <input class="form-control" type="text" placeholder="Url..." v-model="accountData.resume">
            </div>
            </div>
            <div class="row">
                <div class="col-8">
                     <label for="">Linkedin</label>
                  <input class="form-control" type="text" placeholder="Url..." v-model="accountData.linkedin">
                </div>
                <div class="col-4">
                    <label>Graduated</label>
                  <input class="custom-checkbox" type="checkbox" v-model="accountData.graduated" >
                </div>
            </div>
            <div class="col-12 p-4 text-end">
           <button class="btn btn-secondary me-3">Cancel</button>
           <button class="btn btn-success" @click.prevent="editAccount">Submit</button>
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
export default {
    setup(){
        const accountData = ref({});
        watchEffect(() => {
            AppState.account;
            accountData.value = { ...AppState.account}
        })
        return {
            accountData,
            async editAccount(){
                try {
                    await accountService.editAccount(accountData.value)
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