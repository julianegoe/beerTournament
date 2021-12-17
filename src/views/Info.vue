<template>
    <div class="info-container">
        <h1>{{headline}}</h1>
        <div>{{paragraph}}</div>
    </div>
</template>

<script>
    export default {
        name: 'Info',
    props: {
        paragraph: {
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
    padding-top: 2rem;
}

</style>