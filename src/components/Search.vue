<template>
  <div class="row">
    <form @submit.prevent="searchPost">
      <div class="">
        <input
          v-model="search"
          class="search bg"
          type="text"
          placeholder="Search"
        /><span
          ><button class="btn">
            <i class="mdi mdi-magnify fs-2 text-white"></i></button
        ></span>
      </div>
    </form>
  </div>
</template>


<script>
import { computed, ref } from "@vue/reactivity";
import { postsService } from "../services/PostsService";
import { logger } from "../utils/Logger";
import Pop from "../utils/Pop";
import { AppState } from "../AppState";
export default {
  setup() {
    const search = ref("");
    return {
      search,
      async searchPost() {
        try {
          logger.log("searching", search.value);
          await postsService.searchPost(`${search.value}`);
        } catch (error) {
          Pop.toast(error.message, "error");
          logger.log(error);
        }
      },
      post: computed(() => AppState.posts),
    };
  },
};
</script>


<style lang="scss" scoped>
.search {
  border-radius: 20em;
  height: 40px;
  width: 200px;
}

.bg {
  background: #1c1e21;
}
</style>