<template>
    <div class="modal-header">
        <h2 v-if="header">
        {{ header }}
        </h2>
        <div class="close-btn" @click="$emit('close-modal')">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/>
            <path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/>
        </svg>
        </div>
    </div>
    <hr class="separator">
</template>

<script>
export default {
    name: 'ModalHeader',
    emits: ['close-modal'],
    props: {
        header: {
            required: false,
            default: 'Info',
        }
    }
};
</script>

<style scoped>

h2 {
    margin: 0.5rem 0;
    text-align: left;
}

.modal-header {
    padding: 0 0.5rem;
    background: #3dabb6;
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.close-btn {
    cursor: pointer;
    fill: white;
    transition: 0.2s ease-in-out;
}

.close-btn:hover {
    transform: scale(1.3);
}

.separator {
    margin: 0;
    border: 1px solid #f0f0f0;
}
</style>