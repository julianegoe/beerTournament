<template>
    <div class="info-container">
            <svg @click="$router.go(-1)" xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="rgb(156,156,156)" class="back-btn bi bi-arrow-left-circle" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
            </svg>
        <h1>{{headline}}</h1>
        <Impressum v-if="type === 'impressum'" />
        <Datenschutz v-if="type === 'datenschutz'" />
    </div>
</template>

<script>
import Impressum from '@/components/Impressum.vue';
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
    display: flex;
    flex-direction: column;
    padding: 4rem 6rem 2rem 6rem;
}
.back-btn {
    cursor: pointer;
    transition: 0.2s ease-in-out;
}

.back-btn:hover {
    transform: scale(1.1);
}

@media screen and (max-width: 980px) {
    .info-container {
    padding: 4rem 1rem;
}
}

</style>