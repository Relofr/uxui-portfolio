<template>
    <div data-aos="fade-up" data-aos-delay="80" class="skills-container flex">
        <div class="primary-heading">{{ title }}</div>
        <div class="icons-wrapper">
            <div class="skills-icons" v-for="(key, value) in skills" :key="value">
                <Tooltip :text="value">
                    <img id="icon-image" :src="`/src/assets/icons/` + key" :alt="value">
                </Tooltip>
            </div>
        </div>
    </div>
</template>

<script>
import Tooltip from './Tooltip.vue'
export default {
    data() {
        return {
            skills: { "Figma": "figma.png", "Invision": "invision.png", "Miro": "Miro.png", "Wireframing": "wireframe.png", "Photoshop": "photoshop.png", "Adobe Illustrator": "ai.png", "Vue.js": "vue.png", "Github": "github.png" }
        }
    },
    props: {
        title: {
            type: String
        }
    },
    components: { Tooltip }
}
</script>

<style scoped>
.skills-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

#icon-image {
    width: 64px;
}

.icons-wrapper {
    display: flex;
    gap: 35px;
    flex-wrap: wrap;
    margin: 25px 0 0;
}

img {
    transition: transform .2s ease;
}

img:hover {
    transform: scale(1.2);
}
</style>