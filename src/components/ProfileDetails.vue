<template>
    <div class="row">
        <div class="col-md-12">
            <div>
                <img class="bg-img" :src="profile.coverImg" alt="">
            </div>
        </div>
        
        
    </div>

</template>


<script>
import { computed } from '@vue/reactivity'
import { AppState } from '../AppState'
export default {
    setup(){
        return {
            profile: computed(() => AppState.profile)
        }
    }
}
</script>


<style lang="scss" scoped>

.bg-img {
  height: 25vh;
  width: 100%;
  background-size: cover;
  background-position: center;
  background-color: var(--bs-info);
}
</style>