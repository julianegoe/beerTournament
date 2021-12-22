<template>
    <BaseModal  @close-modal="$emit('close-modal')">
        <div class="modal-text">
            Du kannst hier nichts verändern.
            <div class="illustration">
                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="rgb(251,186,0)" class="bi bi-emoji-frown-fill" viewBox="0 0 16 16">
                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm-2.715 5.933a.5.5 0 0 1-.183-.683A4.498 4.498 0 0 1 8 9.5a4.5 4.5 0 0 1 3.898 2.25.5.5 0 0 1-.866.5A3.498 3.498 0 0 0 8 10.5a3.498 3.498 0 0 0-3.032 1.75.5.5 0 0 1-.683.183zM10 8c-.552 0-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5S10.552 8 10 8z"/>
            </svg>
            </div>
        </div>
    </BaseModal>
</template>

<script>
import BaseModal from '@/components/Modal/BaseModal.vue';

    export default {
        name: 'PermissionDeniedModal',
        emits: ['close-modal'],
        components: {
            BaseModal
        },
    }
</script>

<style scoped>

.modal-text {
    padding: 1rem;
    font-size: 1.5rem
}

.illustration {
    padding-top: 1rem;
}

</style>