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
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  box-sizing: border-box;

}

</style>
