<template>
<div class="container-fluid">

  <div class="row">
    <!-- Profile Details -->
    <div class="col-md-3">
      <Login/>
      <!--  -->
    </div>
    <!-- Main Post Scroll -->
    <div class="col-md-6">
        <Create/>
      
    <Post v-for="p in post" :key="p.id" :post="p"/>
      
    </div>
    <!--  -->

    <!-- Ads -->
    <div class="col-md-3">
      <Sponsor v-for="s in sponsor" :key="s.linkURL" :sponsor="s"/>
    </div>
    <!--  -->

    <div>
      <button class="btn btn-info" @click="changePage(previous)">Previous Page</button>
      <button class="btn btn-info" @click="changePage(next)">Next page</button>
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

</style>
