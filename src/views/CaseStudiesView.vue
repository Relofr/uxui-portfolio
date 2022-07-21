<template>
    <div>
        <p data-aos="fade-up" data-aos-delay="80" id="case-studies-title" class="flex primary-heading">Case Studies</p>

        <div class="grid2x2">
            <div class="box">
                <Card title="Tracy Aviary UX/UI" date="July 13th, 2022" src="/tracyaviary/hero-ta.png"
                    route="tracy-aviary" />
            </div>
            <div class="box">
                <Card title="USDA Redesign" date="April 16th, 2022" src="/usda/hero-usda.png" route="usda" />
            </div>
            <!-- <div class="box">
                <Card title="ReClaim App" src="/reclaim/hero-reclaim.png" route="reclaim" />
            </div>
            <div class="box">
                <Card title="UX/UI Portfolio" src="/portfolio/hero-portfolio.png" route="portfolio" />
            </div> -->
            <div class="box">
                <Card title="DailyUI" src="/dailyui/hero-dailyui.png" route="daily-ui" />
            </div>
        </div>
    </div>
</template>

<script>
import Card from '../components/Card.vue'
export default {
    data() {
        return {

        }
    },
    components: { Card }
}
</script>

<style lang="less">
#case-studies-title {
    display: flex;
    justify-content: center;
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

.grid2x2>div>div {
    display: flex;
    justify-content: center;
    flex-direction: row;
}

@media (max-width: 800px) {
    .grid2x2 {
        display: flex;
        flex-direction: column;

        .col {
            width: 100%;
            margin: 0 0 25px 0;
            justify-content: center;
            display: flex;
        }
    }
}
</style>