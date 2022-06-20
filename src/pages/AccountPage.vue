<template>
  <div class="container-fluid">
    <div class="row bg-grey">
      <div class="col-md-3">
        <Login/>
      </div>
      <div class="col-md-6 p-3">
      <div class="bg-black text-white elevation-3 p-3">
        <div>
          <img class="bg-img" :src="account.coverImg" alt="" />
        </div>
        <div class="row justify-content-center profile">
          <div class="col-12 d-flex flex-column text-start p-4">
            <img class="profile-img" :src="account.picture" alt=""/>
             {{account.class}}
            </div>

            <h3 class="col-12 text-center border-bottom border-dark border-2 pb-2">
              {{ account.name }}
              <i
                class="mdi mdi-school-outline"
                v-if="account.graduated == true"
              ></i>
            </h3>
            <div>
            <span><i class="mdi mdi-pencil p-3"></i>{{account.github}}</span>
            <span><i class="mdi mdi-pencil p-3"></i>{{account.linkedin}}</span>
            <span><i class="mdi mdi-pencil p-3"></i>{{account.resume}}</span>
            </div>
            <p class="px-4 pt-4">
              {{ account.bio }}
            </p>
            <div class="text-end">
              <button
                v-show="account.id == account.id"
                type="button"
                class="btn border border-1 border-white text-white"
                data-bs-toggle="modal"
                data-bs-target="#edit-modal">
                <i class="mdi mdi-pencil"></i>
              </button>
            </div>
          
        </div>
      </div>
      {{}}
    </div>
    <div class="col-3">
      <Sponsor v-for="s in sponsor" :key="s.linkURL" :sponsor="s"/>
    </div>
    </div>
  </div>
  <Modal id="edit-modal">
        <template #header>Edit Profile </template>
        <template #body> <EditForm/> </template>
    </Modal>
</template>

<script>
import { computed, onMounted } from 'vue'
import { AppState } from '../AppState'
import Pop from '../utils/Pop'
import { logger } from '../utils/Logger'
import { accountService } from '../services/AccountService'
import { sponsorsService } from '../services/SponsorsService'
import { postsService } from '../services/PostsService'
import { useRoute } from 'vue-router'
export default {
  name: 'Account',
  setup() {
    onMounted(async () => {
      try {
        await accountService.getAccount()
      } catch (error) {
        Pop.toast(error.message)
        logger.log(error)
      }
      });
      onMounted(async() => {
      try {
        await sponsorsService.getSponsor()
      } catch (error) {
        Pop.toast(error.message, 'error')
        logger.log(error)
        
      }
    });
    return {
      
      account: computed(() => AppState.account),
      sponsor: computed(() => AppState.sponsors),
      post: computed(() => AppState.posts)
    }
  }
}
</script>

<style scoped>
.bg-img {
  height: 28vh;
  width: 100%;
  background-size: cover;
  background-position: center;
  background-color: var(--bs-dark);
}
.profile {
  transform: translateY(-10vh);
}
.profile-img {
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 50em;
   border: 1px solid white
}

</style>
