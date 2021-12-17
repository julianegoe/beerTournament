<template>
  <div class="overview">
      <slot></slot>
  </div>
</template>

<script>

export default {
  name: 'OverviewLayout',
}
</script>
<style scoped>

.overview {
  position: relative;
  top: 2rem;
  left: 0;
  right: 0;
  bottom: 0;
  box-sizing: border-box;
  background: #f1f1f1;

}

</style>
