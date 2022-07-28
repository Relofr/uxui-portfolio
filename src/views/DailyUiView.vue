<template>
    <div>
        <Section sectionTitle="DailyUI" :src="heroDailyUI" />
        <div class="grid4x4">
            <div v-for="(key, value) in imageData" :key="key">
                <Card :title="value" :src="'/src/assets/images/dailyui/' + key" />
            </div>
        </div>
    </div>
</template>

<script>
import Section from '../components/Section.vue';
import Card from '../components/Card.vue';
import SectionBreak from '../components/SectionBreak.vue';
import heroDailyUI from '../assets/images/dailyui/hero-dailyui.png';
export default {
    data() {
        return {
            imageData: { "Spotify - Apple Watch": 'apple-watch.png', "Spotify Mobile Design": "spotify-mobile.png", "Calculator": "calc.png", "DGD Landing Page": "dgd-landing-page.png", "Dota 2 Leaderboards": "dota-leaderboard.png", "Grid System": "grids.png", "Input Form": "input-form.png", "Dota 2 Wanted Poster": "pudge-poster.png", "Registration Form": "registration-page.png", "Responsive Web Design": "rwd.png", "Responsive Web Design 2": "rwd2.png" }
        }
    },
    setup: () => {
        return { heroDailyUI };
    },
    components: { Section, SectionBreak, Card }
}
</script>

<style lang="less">
.grid4x4 img {
    height: 100% !important;
    max-height: 800px !important;
    object-fit: scale-down !important;
    box-shadow: none !important;
}

.grid4x4 {
    min-height: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    pointer-events: none !important;
}

.grid4x4>div {
    display: flex;
    flex-basis: calc(50% - 40px);
    justify-content: center;
    flex-direction: column;
}

.grid4x4>div>div {
    display: flex;
    justify-content: center;
    flex-direction: row;
}

@media (max-width: 800px) {
    .grid4x4 {
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