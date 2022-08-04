<template>
  <div class="col-md-12 p-3">
    <div
      class="bg-black text-light elevation-5 rounded border-secondary border"
    >
      <div class="row p-2">
        <div class="col-md-6">
          <img
            @click="goToProfile"
            class="img-fluid profile-pic hoverable"
            :src="post.creator.picture"
            alt=""
          />
          <span class="p-2">{{ post.creator.name }}</span>
          <span>
            <i
              class="mdi mdi-school-outline"
              v-if="post.creator.graduated == true"
            ></i
          ></span>
          <div class="pt-3">
            <p>Posted: {{ new Date(post.createdAt).toLocaleString() }}</p>
          </div>
        </div>
        <div class="col-md-6 text-end">
          <button class="btn" v-show="account.id == post.creator.id">
            <i
              class="mdi mdi-delete text-white hoverable fs-5"
              @click="deletePost"
            ></i>
          </button>
        </div>
      </div>
      <div class="row">
        <div class="col-12 px-4 pb-3">
          {{ post.body }}
        </div>
        <div>
          <img
            class="img-fluid img-post"
            v-if="post.imgUrl"
            :src="post.imgUrl"
            alt=""
          />
        </div>
      </div>
      <div v-if="post.likeIds.includes(account.id)" class="col-12 text-end p-3">
        <i
          class="mdi mdi-cards-heart p-2 heart btn text-danger"
          v-if="account.id"
          @click="postLike(post.id)"
        ></i
        ><span>{{ post.likes.length }}</span>
      </div>
      <div v-else class="col-12 text-end p-3">
        <i
          class="mdi mdi-cards-heart-outline p-2 heart btn text-white"
          v-if="account.id"
          @click="postLike(post.id)"
        ></i
        ><span>{{ post.likes.length }}</span>
      </div>
    </div>
  </div>
</template>


<script>
import { computed } from "@vue/reactivity";
import { router } from "../router";
import { postsService } from "../services/PostsService";
import { logger } from "../utils/Logger";
import Pop from "../utils/Pop";
import { AppState } from "../AppState";
export default {
  props: { post: { type: Object, required: true } },
  setup(props) {
    return {
      async postLike(id) {
        try {
          await postsService.postLike(id);
          logger.log("liking in controller");
        } catch (error) {
          Pop.toast(error.message, "error");
          logger.log(error);
        }
      },
      async deletePost() {
        try {
          if (await Pop.confirm()) {
            await postsService.deletePost(props.post.id);
          }
        } catch (error) {
          Pop.toast(error.message, "error");
          logger.log(error);
        }
      },
      goToProfile() {
        router.push({
          name: "Profile",
          params: { id: props.post.creatorId },
        });
      },
      account: computed(() => AppState.account),
      profile: computed(() => AppState.profile),
      likes: computed(() => AppState.likes),
    };
  },
};
</script>


<style lang="scss" scoped>
.profile-pic {
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 50em;
  border: 1px solid white;
}

.img-post {
  height: 400px;
  width: 100%;
}
.hoverable {
  cursor: pointer;
}
.hoverable:hover {
  transform: scale(1.1);
}

.heart:hover {
  transform: scale(1.35);
}
</style>