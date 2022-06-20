<template>
    <div class="row p-3">
        <div class="col-md-12 bg-grey elevation-5 border border-1 border-white">
            <div class="row">
                <div class="col-md-2 py-4 "><img  class="img-fluid profile-pic" :src="account.picture" alt="" ></div>
                <div class="col-md-10 p-3">
                    <form @submit.prevent="">
                        <textarea class="border border-2 border-dark col-md-12" required cols="55" rows="3" placeholder="  Share what's happening" v-model="postData.body"></textarea>
                        <input class="border border-2 border-dark" required type="text" placeholder="Img Url" v-model="postData.imgUrl">
                    </form>
                </div>
                <div class="col-md-12 text-end fs-4 post">
                    <i class="mdi mdi-post p-3 hoverable" @click="createPost"><span>Post</span></i>
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
import { router } from '../router'
export default {
    props: {post: {type: Object, required: true}},
    setup(props){
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
            
            account: computed(() => AppState.account),
            profile: computed(() => AppState.profile)
        }
    }
}
</script>


<style lang="scss" scoped>

.profile-pic{
    width: 75px;
  height: 75px;
  object-fit: cover;
  border-radius: 50em;
  border: 1px solid white
}

.hoverable {
  cursor: pointer;
}

.post:hover{
    transform: scale(1.009);
}

</style>