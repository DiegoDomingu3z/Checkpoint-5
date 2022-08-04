<template>
  <div class="row">
    <div class="col-md-12 p-3">
      <div class="bg-black text-white elevation-3 p-3">
        <div>
          <img class="bg-img" :src="profile.coverImg" alt="" />
        </div>
        <div class="row justify-content-center profile">
          <div class="col-12 d-flex flex-column text-start p-4">
            <img class="profile-img" :src="profile.picture" alt="" />
            {{ profile.class }}
          </div>

          <h3
            class="col-12 text-center border-bottom border-dark border-2 pb-2"
          >
            {{ profile.name }}
            <i
              class="mdi mdi-school-outline"
              v-if="profile.graduated == true"
            ></i>
          </h3>
          <div>
            <span
              ><i class="mdi mdi-account-circle p-3"></i
              >{{ profile.github }}</span
            >
            <span
              ><i class="mdi mdi-account-check p-3"></i
              >{{ profile.linkedin }}</span
            >
            <span
              ><i class="mdi mdi-newspaper-variant p-3"></i
              >{{ profile.resume }}</span
            >
          </div>
          <p class="px-4 pt-4">
            {{ profile.bio }}
          </p>
          <div class="text-end">
            <button
              v-show="profile.id == account.id"
              type="button"
              class="btn border border-1 border-white text-white"
              data-bs-toggle="modal"
              data-bs-target="#edit-modal"
            >
              <i class="mdi mdi-pencil"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { computed } from "@vue/reactivity";
import { AppState } from "../AppState";
export default {
  setup() {
    return {
      profile: computed(() => AppState.profile),
      account: computed(() => AppState.account),
    };
  },
};
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
  border: 1px solid white;
}
</style>