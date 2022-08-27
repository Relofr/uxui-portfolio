<template>
    <div>
        <p  id="case-studies-title" class="flex code-font">{{ open }}</p>
        <div class="grid2x2">

            <div class="box">
                <Card title="MegaBattles - Tournament Website" text="UX/UI Case Study, Team Project (Work in progress)" :src="heroEsports" route="megabattles" button buttonText="read more" icon="ghost" :alt="`esports tournament website`"/>
            </div>

            <div class="box">
                <Card title="Daily UI" :src="heroDailyUI" route="daily-ui" text="Designs aimed to help sharpen my skills using daily prompts." button buttonText="Read More" iconFab="figma" :alt="`dailyui`"/>
                <!-- Designs aimed to help sharpen my skills using daily prompts -->
            </div>

            <div class="box">
                <Card title="Tracy Aviary" text="UX/UI Case Study, Team Project (Work in progress)" :src="heroTA" route="tracy-aviary" button buttonText="read more" icon="crow" :alt="`tracy aviary`"/>
                <!-- date="July 13th, 2022" -->
            </div>

            <!-- <div class="box disabled">
                <Card title="US Agricultural Department" text="UX/UI Case Study, Solo Project (Work in progress)" :src="heroUSDA" route="usda" button buttonText="read more" icon="carrot" :alt="`usda agricultural department`"/>
            </div> -->
            <!-- <div class="box">
                <Card title="ReClaim App" src="/reclaim/hero-reclaim.png" route="reclaim" :alt="`reclaim`"/>
            </div>
            <div class="box">
                <Card title="UX/UI Portfolio" src="/portfolio/hero-portfolio.png" route="portfolio" :alt="`uxui portfolio`"/>
            </div> -->
        </div>
        <p id="case-studies-title" class="flex code-font">{{ close }}</p>
    </div>
</template>

<script>
import Card from '../components/Card.vue';
import heroDailyUI from '../assets/images/dailyui/hero-dailyui.png';
import heroUSDA from '../assets/images/usda/hero-usda.png';
import heroTA from '../assets/images/tracyaviary/hero-ta.png';
import heroEsports from '../assets/images/esports/esports-hero.jpeg';

export default {
    setup: () => {
        return { heroDailyUI, heroUSDA, heroTA, heroEsports };
    },
    data() {
        return {
            open: "<projects>",
            close: "</projects>"
        }
    },
    components: { Card }
}
</script>

<style lang="less" scoped>
#case-studies-title {
    display: flex;
    justify-content: left;
}

.box:not(:first-child) {
    margin-top: 3.5em;
}

@media (max-width: 800px) {
    text-align: center;
}
</style>