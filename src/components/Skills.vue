<template>
    <div class="skills-container flex">
        <div class="primary-heading">{{ title }}</div>
        <div>
            <p class="secondary-heading">UX/UI</p>
            <div class="icons-container">
                <Tooltip :text="`Figma`">
                    <img id="icon-image" :src="Figma" alt="figma">
                </Tooltip>
                <Tooltip :text="`Miro`">
                    <img id="icon-image" :src="Miro" alt="">
                </Tooltip>
                <Tooltip :text="`Invision`">
                    <img id="icon-image" :src="Invision" alt="">
                </Tooltip>
                <Tooltip :text="`Photoshop`">
                    <img id="icon-image" :src="Photoshop" alt="">
                </Tooltip>
                <Tooltip :text="`Adobe Illustrator`">
                    <img id="icon-image" :src="AdobeIllustrator" alt="adobe illustrator">
                </Tooltip>
                <Tooltip :text="`Wireframing`">
                    <img id="icon-image" :src="Wireframing" alt="">
                </Tooltip>
            </div>
        </div>
        <div>
            <p class="secondary-heading">Front-End Development</p>
            <div class="icons-container">
                <Tooltip :text="`Vue.js`">
                    <img id="icon-image" :src="Vue" alt="">
                </Tooltip>
                <Tooltip :text="`HTML`">
                    <fa id="html5" :icon="['fab', 'html5']"></fa>
                </Tooltip>
                <Tooltip :text="`CSS`">
                    <fa id="css3" :icon="['fab', 'css3-alt']"></fa>
                </Tooltip>
                <Tooltip :text="`Javascript`">
                    <img id="icon-image" :src="Javascript" alt="">
                </Tooltip>
                <Tooltip :text="`Github`">
                    <fa id="icon-image" :icon="['fab', 'github']"></fa>
                </Tooltip>
            </div>
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
import Javascript from '../assets/icons/javascript.png'
import Wireframing from '../assets/icons/wireframe.png'

export default {
    setup: () => {
        return { AdobeIllustrator, Figma, Github, Invision, Miro, Photoshop, Vue, Javascript, Wireframing };
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

<style lang="less" scoped>
.skills-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 25px 0 0;
    gap: 25px;
}

.icons-container {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 25px;
    width: 100%;
}

img, svg {
    width: 64px;
    transition: transform .2s ease;
}

svg {
    font-size: 64px;
}

#html5 {
    color: #e96537;
}

#css3 {
    color: #1599d1;
}

#js {
    color: #f2d323
}

img:hover, svg:hover {
    transform: scale(1.2);
}
</style>