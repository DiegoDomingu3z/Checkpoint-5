<template>
<div class="container-fluid bg-grey">

  <div class="row">
    <!-- Profile Details -->
    <div class="col-md-3">
      <Login/>
      <!--  -->
    </div>
    <!-- Main Post Scroll -->
    <div class="col-md-6" v-if="post.length > 0">

        <Create v-if="account.id"/>
      
    <Post v-for="p in post" :key="p.id" :post="p"/>
    </div>
    <div class="col-md-6 text-center p-5" v-else>
      <h1>No post found</h1>
    </div>
    <!--  -->

    <!-- Ads -->
    <div class="col-md-3">
      <Sponsor v-for="s in sponsor" :key="s.linkURL" :sponsor="s"/>
    </div>
    <!--  -->

    <div class="d-flex justify-content-around pb-4">
      <button class="btn text-white border border-white edit" v-if="previous" @click="changePage(previous)"> - Previous Page</button>
      <button class="btn text-white border border-white edit" :disabled="!next" @click="changePage(next)">Next page +</button>
    </div>
  </div>
</div>
</template>


<script>
import { computed, onMounted, watchEffect } from 'vue'
import Pop from '../utils/Pop'
import { logger } from '../utils/Logger'
import {postsService} from '../services/PostsService'
import { AppState } from '../AppState'
import { sponsorsService } from '../services/SponsorsService'
export default {
  name: "Home",
  setup(){
    onMounted(async () => {
      try {
        await postsService.getPost()
      } catch (error) {
        Pop.toast(error.message, 'error')
        logger.log(error)
      }
    }),
    watchEffect(async () => {
      try {
        await postsService.getPost()
      } catch (error) {
        logger.log(error)
      }
    }),
    onMounted(async() => {
      try {
        await sponsorsService.getSponsor()
      } catch (error) {
        Pop.toast(error.message, 'error')
        logger.log(error)
        
      }
    })
    return {
      post: computed(() => AppState.posts),
      sponsor: computed(() => AppState.sponsors),
      next: computed(() => AppState.nextPage),
      previous: computed(() => AppState.previousPage),
      account: computed(() => AppState.account),
      async changePage(url){
        try {
          await postsService.changePage(url)
        } catch (error) {
          Pop.toast(error.message, 'error')
          logger.log(error)
        }
      }
    }
  },
 
}
</script>


<style lang="scss" scoped>


.edit:hover{
    background-color: purple;
}
</style>
