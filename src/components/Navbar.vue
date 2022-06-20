<template>
  <nav class=" container-fluid navbar navbar-expand navbar-dark bg-primary sticky-top font">
    <div class="col-9">
    <router-link class="navbar-brand  d-flex" :to="{ name: 'Home' }">
      <h1>Network</h1>
    </router-link>
    </div>
   
    <div class="collapse navbar-collapse col-3 " id="navbarText text-end ">
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

.font{
  font-family: monospace;
}
</style>
