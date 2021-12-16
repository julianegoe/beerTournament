<template>
  <div class="home">
      Das ist nicht mein Baum
    <Tree :owned="false" />
  </div>
</template>

<script>
import Tree from '@/components/Tree.vue';

export default {
  name: 'UserTree',
  components: { Tree }
}
</script>
<style scoped>

.home {
  display: flex;
  flex-direction: column;
}

</style>
