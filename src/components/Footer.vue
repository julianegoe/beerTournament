<template>
    <footer>
        <div class="footer-content">
            <RouterLink :to="{name: 'Info', params: {
                type: 'datenschutz',
                headline: 'Datenschutzerklärung',
            }}">Datenschutz</RouterLink>
        </div>
        <div class="footer-content">
            <RouterLink :to="{name: 'Info', params: {
                type: 'impressum',
                headline: 'Impressum',
            }}">Impressum</RouterLink>
        </div>
    </footer>
</template>

<script>
import info from '@/infotext/infotext.json';

    export default {
        name: 'Footer',
        data() {
            return {
                info: JSON.parse(JSON.stringify(info)),
            }
        },
    }
</script>

<style scoped>

footer {
    flex-shrink: 0;
    position: absolute;
    bottom: 0;
    display: flex;
    justify-content: flex-end;
    width: 100%;
    background: #ececec;
}

.footer-content {
    padding: 0.2rem;
    font-size: 0.75rem;
    cursor: pointer;
    color: #3a3b39;
}

.footer-content:hover {
    color: #9c9c9c;
}

</style>