<template>
    <BaseModal header="Turnierbaum wirklich zurücksetzen?" @close-modal="$emit('close-modal')">
    <div class="modal-text">
            Alle Fortschritte werden unwiederbringlich gelöscht.
        <button @click="$emit('confirm-reset')" class="reset-btn">Ja, zurücksetzen</button>
    </div>
    </BaseModal>
</template>

<script>
import BaseModal from '@/components/Modal/BaseModal.vue';

    export default {
        name: 'ConfirmResetModal',
        emits: ['close-modal',
        'confirm-reset'],
        components: {
            BaseModal
        },
    }
</script>

<style scoped>

.modal-text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1rem;
}

.reset-btn{
    max-width: 15rem;
    align-self: center;
    margin-top: 1rem;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    border: none;
    background: #fbba00;
    color: white;
    font-size: 1.5rem;
    cursor: pointer;
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
    transition: 0.2s ease-in-out;
    }

.reset-btn:hover {
    transform: scale(1.05);
}

</style>