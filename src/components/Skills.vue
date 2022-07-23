<template>
    <div data-aos="fade-up" data-aos-delay="80" class="skills-container flex">
        <div class="primary-heading">{{ title }}</div>
        <div class="icons-container">
            <Tooltip :text="`Adobe Illustrator`">
                <img id="icon-image" :src="AdobeIllustrator" alt="adobe illustrator">
            </Tooltip>
            <Tooltip :text="`Figma`">
                <img id="icon-image" :src="Figma" alt="figma">
            </Tooltip>
            <Tooltip :text="`Github`">
                <img id="icon-image" :src="Github" alt="github">
            </Tooltip>
            <Tooltip :text="`Invision`">
                <img id="icon-image" :src="Invision" alt="">
            </Tooltip>
            <Tooltip :text="`Miro`">
                <img id="icon-image" :src="Miro" alt="">
            </Tooltip>
            <Tooltip :text="`Photoshop`">
                <img id="icon-image" :src="Photoshop" alt="">
            </Tooltip>
            <Tooltip :text="`Vue`">
                <img id="icon-image" :src="Vue" alt="">
            </Tooltip>
            <Tooltip :text="`Wireframing`">
                <img id="icon-image" :src="Wireframing" alt="">
            </Tooltip>
        </div>
    </div>
</template>

<script>
import Tooltip from './Tooltip.vue'
import AdobeIllustrator from '../assets/icons/ai.png'
import Figma from '../assets/icons/figma.png'
import Github from '../assets/icons/github.png'
import Invision from '../assets/icons/invision.png'
import Miro from '../assets/icons/miro.png'
import Photoshop from '../assets/icons/photoshop.png'
import Vue from '../assets/icons/vue.png'
import Wireframing from '../assets/icons/wireframe.png'

export default {
    setup: () => {
        return { AdobeIllustrator, Figma, Github, Invision, Miro, Photoshop, Vue, Wireframing };
    },
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