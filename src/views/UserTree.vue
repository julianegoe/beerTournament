<template>
  <div class="home">
    <Tree />
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
