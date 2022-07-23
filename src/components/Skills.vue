<template>
    <div data-aos="fade-up" data-aos-delay="80" class="skills-container flex">
        <div class="primary-heading">{{ title }}</div>
        <div class="icons-container">
            <Tooltip :text="`Adobe Illustrator`">
                <img id="icon-image" src="src/assets/icons/ai.png" alt="adobe illustrator">
            </Tooltip>
            <Tooltip :text="`Figma`">
                <img id="icon-image" src="src/assets/icons/figma.png" alt="figma">
            </Tooltip>
            <Tooltip :text="`Github`">
                <img id="icon-image" src="src/assets/icons/github.png" alt="github">
            </Tooltip>
            <Tooltip :text="`Invision`">
                <img id="icon-image" src="src/assets/icons/invision.png" alt="">
            </Tooltip>
            <Tooltip :text="`Miro`">
                <img id="icon-image" src="src/assets/icons/miro.png" alt="">
            </Tooltip>
            <Tooltip :text="`Photoshop`">
                <img id="icon-image" src="src/assets/icons/photoshop.png" alt="">
            </Tooltip>
            <Tooltip :text="`Vue`">
                <img id="icon-image" src="src/assets/icons/vue.png" alt="">
            </Tooltip>
            <Tooltip :text="`Wireframing`">
                <img id="icon-image" src="src/assets/icons/wireframe.png" alt="">
            </Tooltip>
        </div>
    </div>
</template>

<script>
import Tooltip from './Tooltip.vue'
export default {
    data() {
        return {}
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
    margin: 25px 0 0;
}

.icons-container {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    gap: 25px;
    width: 100%;
}

img {
    width: 64px;
    transition: transform .2s ease;
}

img:hover {
    transform: scale(1.2);
}
</style>