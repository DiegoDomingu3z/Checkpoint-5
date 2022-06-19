<template>
    <div class="row p-3">
        <div class="col-md-12 bg-white elevation-3">
            <div class="row">
                <div class="col-md-2 py-4 "><img class="img-fluid profile-pic" :src="account.picture" alt="" ></div>
                <div class="col-md-10 p-3">
                    <form @submit.prevent="">
                        <textarea required cols="55" rows="3" placeholder="  Share what's happening" v-model="postData.body"></textarea>
                        <input required type="text" placeholder="Img Url" v-model="postData.imgUrl">
                    </form>
                </div>
                <div class="col-md-12 text-end fs-4">
                    <i class="mdi mdi-post p-3 selectable" @click="createPost">Post</i>
                </div>
            </div>
        </div>
        
    </div>
</template>


<script>
import { computed, ref } from 'vue'
import { postsService } from '../services/PostsService'
import { logger } from '../utils/Logger'
import Pop from '../utils/Pop'
import { AppState } from '../AppState'
export default {
    setup(){
        const postData = ref({});
        return{
            postData,
             async createPost(){
                try {
                    await postsService.createPost(postData.value)
                    postData.value = {};
                } catch (error) {
                    Pop.toast('You just created a Post!')
                    Pop.toast(error.message, 'error')
                    logger.log(error)
                }
            },
            account: computed(() => AppState.account)
        }
    }
}
</script>


<style lang="scss" scoped>

.profile-pic{
    width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 50em;
}
</style>