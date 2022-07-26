<template>
    <div class="grid2x2">
        <div class="social-links">
            <a href="https://github.com/Relofr" target="_blank">
                <fa :icon="['fab', 'github']" :size="'5x'"></fa>
                <p class="secondary-heading">Github</p>
            </a>
            <a href="https://www.linkedin.com/in/kyle-hatch/" target="_blank">
                <fa :icon="['fab', 'linkedin']" :size="'5x'"></fa>
                <p class="secondary-heading">LinkedIn</p>
            </a>
            <a href="mailto:ky13h4tch@gmail.com" target="_blank">
                <fa icon="envelope" size="5x"></fa>
                <p class="secondary-heading">Email</p>
            </a>
        </div>
        <div>
            <ContactForm />
        </div>
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
.social-icons {
    // display: flex;
    // align-content: center;
    // justify-content: space-around;
    // text-align: center;
}

.social-icons a {
    display: flex;
    align-items: center;
    gap: 20px;
}

.social-icons svg {
    transition: transform .2s ease;
    color: var(--secondary-background-color)
}

a {
    color: var(--primary-text-color)
}

.social-icons svg:hover {
    transform: scale(1.2);
}

.grid2x2 {
    min-height: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
}

.grid2x2>div {
    display: flex;
    flex-basis: calc(50% - 40px);
    justify-content: center;
    flex-direction: column;
}
</style>