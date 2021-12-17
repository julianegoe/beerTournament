<template>
    <div class="info-container">
        <h1>{{headline}}</h1>
        <Impressum v-if="type === 'impressum'" />
        <Datenschutz v-if="type === 'datenschutz'" />
    </div>
</template>

<script>
import Impressum from '@/components/Impresum.vue';
import Datenschutz from '@/components/Datenschutz.vue';

    export default {
        name: 'Info',
        components: {
            Impressum,
            Datenschutz,
        },
        props: {
            type: {
                required: false,
            },
            headline: {
                required: false,
            }
        }
}
</script>

<style scoped>

.info-container {
    padding: 2rem 6rem 2rem 6rem;
}

@media screen and (max-width: 980px) {
    .info-container {
    padding: 4rem 1rem;
}
}

</style>