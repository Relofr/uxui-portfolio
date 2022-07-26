<template>
    <div class="contact-container">
        <ContactForm />
    </div>
</template>

<script setup>
import Button from '../components/Button.vue';
import Section from '../components/Section.vue';
import ContactForm from '../components/ContactForm.vue';
</script>

<script>
export default {
    data() {
        return {}
    },
    components: { Button }
}
</script>

<style lang="less" scoped>
.contact-container {
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>