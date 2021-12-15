<template>
  <div class="home">
    Dieser Turnierbaum ist noch in der Entwicklung und noch nicht personalisiert...
    <Tree />
  </div>
</template>

<script>
import Tree from '@/components/Tree.vue';

export default {
  name: 'Home',
  components: { Tree }
}
</script>
<style scoped>

.home {
  display: flex;
  flex-direction: column;
}

</style>
