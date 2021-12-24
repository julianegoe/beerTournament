<template>
    <div class="close-btn" @click="$emit('close')">
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/>
            <path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/>
        </svg>
    </div>
</template>

<script>
    export default {
        name: 'CloseButton',
        emits: ['close'],
    }
</script>

<style scoped>

.close-btn {
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 0 0.2rem;
    transition: 0.2s ease-in-out;
}

.close-btn:hover {
    transform: scale(1.3);
}

</style>