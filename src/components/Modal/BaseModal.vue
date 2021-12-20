<template>
    <ModalOverlay>
        <div class="modal">
            <ModalHeader @close-modal="$emit('close-modal')" :header="header" />
            <slot />
        </div>
    </ModalOverlay>
</template>

<script>
import ModalOverlay from '@/components/Modal/ModalOverlay.vue';
import ModalHeader from '@/components/Modal/ModalHeader.vue';

    export default {
        name: 'BaseModal',
        emits: ['close-modal'],
        props: {
            header: {
                default: 'Info',
            },
        },
        components: {
            ModalOverlay,
            ModalHeader
        }
    }
</script>

<style scoped>

.modal {
    aspect-ratio: 2 / 1;
    z-index: 2000;
    width: 40%;
    border-radius: 5px;
    background: white;
    margin: 4rem auto;
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
}

@media screen and (max-width: 980px) {
    .modal {
        width: 90%;
    }
}

</style>