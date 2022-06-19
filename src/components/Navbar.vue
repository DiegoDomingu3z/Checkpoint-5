<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark px-3 sticky">
    <div class="col-10">
    <router-link class="navbar-brand d-flex" :to="{ name: 'Home' }">
      Home
    </router-link>
    </div>
   
    <div class="collapse navbar-collapse" id="navbarText text-end col-2">
     <Search/>
    </div>
  </nav>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style scoped>
a:hover {
  text-decoration: none;
}
.nav-link {
  text-transform: uppercase;
}
.navbar-nav .router-link-exact-active {
  border-bottom: 2px solid var(--bs-success);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}
</style>
