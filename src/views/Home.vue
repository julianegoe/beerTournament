<template>
  <div class="home">
    <AltTree />
  </div>
</template>

<script>
import AltTree from '@/components/AltTree.vue';

export default {
  name: 'Home',
  components: { AltTree }
}
</script>
<style scoped>

.home {
  display: flex;
  flex-direction: column;
}

</style>
