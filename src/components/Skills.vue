<template>
    <div class="skills-container flex">
        <div class="primary-heading">{{ title }}</div>
        <div>
            <p class="secondary-heading">UX/UI</p>
            <div class="icons-container">
                <!-- <Tooltip :text="`Figma`"> -->
                <div class="container-box">
                    <img id="icon-image" :src="Figma" alt="figma">
                    <p>Figma</p>
                </div>
                <!-- </Tooltip> -->
                <!-- <Tooltip :text="`Miro`"> -->
                <div class="container-box">
                    <img id="icon-image" :src="Miro" alt="">
                    <p>Miro</p>
                </div>
                <!-- </Tooltip> -->
                <!-- <Tooltip :text="`Invision`"> -->
                <div class="container-box">
                    <img id="icon-image" :src="Invision" alt="">
                    <p>Invision</p>
                </div>
                <!-- </Tooltip> -->
                <!-- <Tooltip :text="`Photoshop`"> -->
                <div class="container-box">
                    <img id="icon-image" :src="Photoshop" alt="">
                    <p>Photoshop</p>
                </div>
                <!-- </Tooltip> -->
                <!-- <Tooltip :text="`Adobe Illustrator`"> -->
                <div class="container-box">
                    <img id="icon-image" :src="AdobeIllustrator" alt="adobe illustrator">
                    <p>Adobe Illustrator</p>
                </div>
                <!-- </Tooltip> -->
                <!-- <Tooltip :text="`Wireframing`"> -->
                <div class="container-box">
                    <!-- <img id="icon-image" :src="Wireframing" alt=""> -->
                    <fa icon="vector-square" />
                    <p>Wireframing</p>
                </div>
                <!-- </Tooltip> -->
            </div>
        </div>
        <div>
            <p class="secondary-heading">Front-End Development</p>
            <div class="icons-container">
                <!-- <Tooltip :text="`Vue.js`"> -->
                <div class="container-box">
                    <img id="icon-image" :src="Vue" alt="">
                    <p>Vue.js</p>
                </div>
                <!-- </Tooltip> -->
                <!-- <Tooltip :text="`HTML`"> -->
                <div class="container-box">
                    <fa id="html5" :icon="['fab', 'html5']"></fa>
                    <p>HTML</p>
                </div>
                <!-- </Tooltip> -->
                <!-- <Tooltip :text="`CSS`"> -->
                <div class="container-box">
                    <fa id="css3" :icon="['fab', 'css3-alt']"></fa>
                    <p>CSS</p>
                </div>
                <!-- </Tooltip> -->
                <!-- <Tooltip :text="`Javascript`"> -->
                <div class="container-box">
                    <img id="icon-image" :src="Javascript" alt="">
                    <p>Javascript</p>
                </div>
                <!-- </Tooltip> -->
                <!-- <Tooltip :text="`Github`"> -->
                <div class="container-box">
                    <fa id="icon-image" :icon="['fab', 'github']"></fa>
                    <p>Github</p>
                </div>
                <!-- </Tooltip> -->
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

img,
svg {
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

img:hover,
svg:hover {
    // transform: scale(1.2);
}

.container-box {
    box-sizing: content-box;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    border: 2px solid #000;
    font-weight: 600;
    text-align: center;
    border-radius: 5px;
    transition: all .15s ease;
    // width: fit-content;
    padding: 5px 15px;
    color: black;
    gap: 8px;
}

.container-box:hover {
    background-color: #000;
    border: 2px solid #000;
    color: white;
    // transform: scale(1.2);
}
</style>