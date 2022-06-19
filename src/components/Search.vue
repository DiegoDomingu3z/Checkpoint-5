<template>
    <div class="row">
        <form @submit.prevent="searchPost">
        <input  v-model="search" class="form-control search" type="text" placeholder="Search">
        <button><i class="mdi mdi-magnify fs-2"></i></button>
        </form>
        
    </div>
</template>


<script>
import { computed, ref } from '@vue/reactivity'
import { postsService } from '../services/PostsService'
import { logger } from '../utils/Logger'
import Pop from '../utils/Pop'
import { AppState } from '../AppState'
export default {
    setup(){
        const search = ref("");
        return {
            search,
            async searchPost(){
                try {
                    logger.log('searching', search.value)
                    await postsService.searchPost(`${search.value}`)
                } catch (error) {
                    Pop.toast(error.message, 'error')
                    logger.log(error)
                }
            },
            post: computed(() => AppState.posts)
        }
    }
}
</script>


<style lang="scss" scoped>
.search{
    border-radius: 50em;
}

</style>