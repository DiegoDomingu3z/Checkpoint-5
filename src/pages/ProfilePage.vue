<template>
    
       

        <div class="row container-fluid">

        <div class="col-md-3">
            {{account.name}}
        </div>
        
        <div class="col-md-6">
            <div>
                <ProfileDetails/>
                <Create v-show="profile.id == account.id"/>
                <Post v-for="p in post" :key="p.id" :post="p"/>
            </div>
        </div>

        <div class="col-md-3">
            <Sponsor  v-for="s in sponsor" :key="s" :sponsor="s"/>
        </div>

        
        
        
        </div>
       
    <Modal id="edit-modal">
        <template #header>Edit Profile </template>
        <template #body> <EditForm/> </template>
    </Modal>
</template>


<script>
import { computed, onMounted } from 'vue'
import Pop from '../utils/Pop'
import { logger } from '../utils/Logger'
import { profilesService} from '../services/ProfilesService'
import { useRoute } from 'vue-router'
import { AppState } from '../AppState'
import { sponsorsService } from '../services/SponsorsService'
import { postsService } from '../services/PostsService'
export default {
    setup(){
        const route = useRoute()
        onMounted(async() => {
            try {
                AppState.posts = [];
                await postsService.getPost({creatorId: route.params.id})
                await profilesService.getProfile(route.params.id);
                 await sponsorsService.getSponsor()
            } catch (error) {
                Pop.toast(error.message, 'error')
                logger.log(error)
            }
        })
        return {
            profile: computed(() => AppState.profile),
            post: computed(() => AppState.posts),
            sponsor: computed(() => AppState.sponsors),
            account: computed(() => AppState.account)
        }
    }
}
</script>


<style lang="scss" scoped>


</style>