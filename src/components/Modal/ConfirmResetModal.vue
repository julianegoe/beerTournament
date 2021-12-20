<template>
    <BaseModal header="Möchtest du deinen Turnierbaum wirklich zurücksetzen?" @close-modal="$emit('close-modal')">
    <div class="modal-text">
         Alle Fortschritte werden unwiderbringlich gelöscht.
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
    padding: 1rem;
}

button{
 margin-top: 1rem;
 padding: 0.5rem 1rem;
 border-radius: 5px;
 border: none;
 background: #fbba00;
 color: white;
 font-size: 1.5rem;
 cursor: pointer;
 box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
}

</style>