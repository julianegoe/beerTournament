<template>
    <div :class="classObj" class="modal-overlay">
    <slot />
    </div>
</template>

<script>
    export default {
        name: 'ModalOverlay',
        
    }
</script>

<style scoped>

.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 1000;
    background-color: rgba(0,0,0,0.4);
}

</style>