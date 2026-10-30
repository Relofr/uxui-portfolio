<template>
    <div class="skills-container flex">
        <h2 class="primary-heading">{{ title }}</h2>
        <div class="inner-container">
            <h3 class="secondary-heading">UX/UI</h3>
            <div class="icons-container">
                <!-- <Tooltip :text="`Figma`"> -->
                <div class="container-box">
                    <img :src="Figma" alt="" aria-hidden="true">
                    <p>Figma</p>
                </div>
                <!-- </Tooltip> -->
                <!-- <Tooltip :text="`Miro`"> -->
                <div class="container-box">
                    <img :src="Miro" alt="" aria-hidden="true">
                    <p>Miro</p>
                </div>
                <!-- </Tooltip> -->
                <!-- <Tooltip :text="`Invision`"> -->
                <div class="container-box">
                    <img :src="Invision" alt="" aria-hidden="true">
                    <p>Invision</p>
                </div>
                <!-- </Tooltip> -->
                <!-- <Tooltip :text="`Photoshop`"> -->
                <div class="container-box">
                    <img :src="Photoshop" alt="" aria-hidden="true">
                    <p>Photoshop</p>
                </div>
                <!-- </Tooltip> -->
                <!-- <Tooltip :text="`Adobe Illustrator`"> -->
                <div class="container-box">
                    <img :src="AdobeIllustrator" alt="" aria-hidden="true">
                    <p>Adobe Illustrator</p>
                </div>
                <!-- </Tooltip> -->
                <!-- <Tooltip :text="`Wireframing`"> -->
                <div class="container-box">
                    <!-- <img id="icon-image" :src="Wireframing" alt=""> -->
                    <fa icon="object-ungroup" />
                    <p>Wireframing</p>
                </div>
                <!-- </Tooltip> -->
            </div>
        </div>
        <div class="inner-container">
            <h3 class="secondary-heading">Front-End Development</h3>
            <div class="icons-container">
                <!-- <Tooltip :text="`Vue.js`"> -->
                <div class="container-box">
                    <img :src="Vue" alt="" aria-hidden="true">
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
                    <img :src="Javascript" alt="" aria-hidden="true">
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
    gap: var(--space-5);
}

.skills-container .primary-heading {
    margin: 0;
}

.inner-container {
    width: 100%;
}

.icons-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: var(--space-3);
    width: 100%;
}

.container-box {
    display: flex;
    align-items: center;
    gap: var(--space-2);
    padding: var(--space-2) var(--space-4);
    border-radius: var(--radius);
    background-color: var(--color-surface-light);
    color: var(--color-ink);
    transition: background-color 0.15s ease, color 0.15s ease;
}

.container-box p {
    margin: 0;
    color: inherit;
    font-family: var(--font-heading);
    font-size: var(--text-sm);
    font-weight: var(--fw-semibold);
}

.container-box:hover {
    background-color: var(--color-ink);
    color: var(--color-heading);
}

img,
svg {
    width: 32px;
    height: 32px;
}

#html5 {
    color: #e96537;
}

#css3 {
    color: #1599d1;
}

@media (max-width: 800px) {
    .skills-container {
        align-items: center;
        text-align: center;
    }

    .icons-container {
        justify-content: center;
    }
}
</style>
