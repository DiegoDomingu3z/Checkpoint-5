<template>
<div class="container-fluid">

  <div class="row">
    <!-- Profile Details -->
    <div class="col-md-3">
      <Login/>
      <!--  -->
    </div>
    <!-- Main Post Scroll -->
    <div class="col-md-6" v-if="post.length > 0">

        <Create/>
      
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

    <div>
      <button class="btn btn-info" :disabled="!previous" @click="changePage(previous)">Previous Page</button>
      <button class="btn btn-info" :disabled="!next" @click="changePage(next)">Next page</button>
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
