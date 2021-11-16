<template>
  <div id="nav">
    <RouterLink :to="{ name: 'Home' }">Home</RouterLink> |
    <RouterLink :to="{ name: 'About' }">About</RouterLink>
  </div>
</template>

<script>
export default {
  name: 'TheNavbar',
};
</script>

<style>
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
