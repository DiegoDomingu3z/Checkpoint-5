<template>
  <span class="navbar-text sticky-top">
    <div class="row p-3">
      
    <div class="bg-black elevation-3 p-5 border border-white">

    <button
      class="btn selectable text-white lighten-30 text-uppercase my-2 my-lg-0"
      @click="login"
      v-if="!user.isAuthenticated"
    >
      <div class="text-center">Login</div>
    </button>

    <div class="dropdown my-2 my-lg-0" v-else>
      <div
        class="dropdown-toggle selectable"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        id="authDropdown"
      >
        <div class="text-center" v-if="account.picture">
          <img
            :src="account.picture"
            alt="account photo"
            height="40"
            class="profile-pic"
          />
        </div>
        <div class="text-center p-4">
          <span class="mx-3 text-white">{{ account.name }}</span>
        </div>
      </div>
      <div
        class="dropdown-menu p-0 list-group w-100"
        aria-labelledby="authDropdown"
      >
        <router-link :to="{ name: 'Account' }">
          <div class="list-group-item list-group-item-action hoverable">
            Manage Account
          </div>
        </router-link>
        <div
          class="list-group-item list-group-item-action hoverable text-danger"
          @click="logout"
        >
          <i class="mdi mdi-logout"></i>
          logout
        </div>
      </div>
    </div>
    <div class="pt-5"  v-if="account.id">
      <i class="mdi mdi-account-circle"></i><span class="px-4"> {{account.github}}</span>
    </div>
    <div class="pt-5" v-if="account.id">
      <i class="mdi mdi-account-check"></i><span class="px-4"> {{account.linkedin}}</span>
    </div>
    <div class="pt-5"  v-if="account.id">
      <i class="mdi mdi-newspaper-variant"></i><span class="px-4">{{account.resume}}</span>
    </div>
    </div>
    </div>
  </span>
</template>


<script>
import { computed } from "@vue/reactivity";
import { AppState } from "../AppState";
import { AuthService } from "../services/AuthService";
export default {
  setup() {
    return {
      user: computed(() => AppState.user),
      account: computed(() => AppState.account),
      async login() {
        AuthService.loginWithPopup();
      },
      async logout() {
        AuthService.logout({ returnTo: window.location.origin });
      },
      account: computed(() => AppState.account)
    };
  },
};
</script>


<style lang="scss" scoped>
.dropdown-menu {
  user-select: none;
  display: block;
  transform: scale(0);
  transition: all 0.15s linear;
}
.dropdown-menu.show {
  transform: scale(1);
}
.hoverable {
  cursor: pointer;
}

.profile-pic{
    width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 50em;
}
</style>
