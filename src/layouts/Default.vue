<template>
  <TheNavbar />
  <RouterView />
</template>

<script>
import TheNavbar from '@/components/TheNavbar.vue';

export default {
  name: 'DefaultLayout',
  components: { TheNavbar },
};
</script>
