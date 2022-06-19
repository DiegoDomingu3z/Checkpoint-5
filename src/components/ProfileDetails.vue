<template>
    <div class="row">
        <div class="col-md-12 p-3">
            <div class="bg-white elevation-3 p-3">

                <div>
                <img class="bg-img" :src="profile.coverImg" alt="">
                </div>
             <div class="row justify-content-center profile">
      <div class=" col-12 d-flex flex-column text-start p-4">
        <img class="profile-img" :src="profile.picture" alt="" />
        <h3 class="col-12 text-center">
          {{ profile.name }}
        </h3>
        <div><button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#edit-modal">
  Launch demo modal
</button></div>
      </div>
    </div>
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
  height: 20vh;
  width: 100%;
  background-size: cover;
  background-position: center;
  background-color: var(--bs-info);
}
.profile {
  transform: translateY(-10vh);
}
.profile-img {
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 50em;
}
</style>