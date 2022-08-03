<template>
    <div>
        <p  id="case-studies-title" class="flex primary-heading">Case Studies</p>
        <div class="grid2x2">
            <div class="box">
                <Card title="Tracy Aviary" text="UX/UI Case Study, Team Project (Work in progress)" :src="heroTA" route="tracy-aviary" button buttonText="read case study" icon="crow"/>
                <!-- date="July 13th, 2022" -->
            </div>
            <div class="box">
                <Card title="Daily UI" :src="heroDailyUI" route="daily-ui" text="Designs aimed to help sharpen my skills using daily prompts." button buttonText="View designs" iconFab="figma"/>
                <!-- Designs aimed to help sharpen my skills using daily prompts -->
            </div>
            <div class="box disabled">
                <Card title="US Agricultural Department" text="UX/UI Case Study, Solo Project (Work in progress)" :src="heroUSDA" route="usda" button buttonText="read case study" icon="carrot" />
            </div>
            <!-- <div class="box">
                <Card title="ReClaim App" src="/reclaim/hero-reclaim.png" route="reclaim" />
            </div>
            <div class="box">
                <Card title="UX/UI Portfolio" src="/portfolio/hero-portfolio.png" route="portfolio" />
            </div> -->
        </div>
    </div>
</template>

<script>
import Card from '../components/Card.vue'
import heroDailyUI from '../assets/images/dailyui/hero-dailyui.png'
import heroUSDA from '../assets/images/usda/hero-usda.png'
import heroTA from '../assets/images/tracyaviary/hero-ta.png'
export default {
    setup: () => {
        return { heroDailyUI, heroUSDA, heroTA };
    },
    data() {
        return {

        }
    },
    components: { Card }
}
</script>

<style lang="less" scoped>
#case-studies-title {
    display: flex;
    justify-content: center;
}

.grid2x2 {
    // min-height: 100%;
    // display: flex;
    // flex-wrap: wrap;
    // justify-content: space-between;
}

.grid2x2>div {
    // display: flex;
    // flex-basis: calc(50% - 40px);
    // flex-direction: column;
}

.grid2x2>div>div {
    // display: flex;
    // justify-content: center;
    // flex-direction: row;
}

@media (max-width: 800px) {
    
}
</style>