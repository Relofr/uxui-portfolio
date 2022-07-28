<template>
    <div>
        <Section sectionTitle="DailyUI" :src="heroDailyUI" />
        <div  class="grid4x4">

            <div>
                <Card title="Spotify - Apple Watch" :src="appleWatch" />
            </div>

            <div>
                <Card title="Spotify Mobile Design" :src="spotifyMobile" />
            </div>

            <div>
                <Card title="Calculator" :src="calc" />
            </div>

            <div>
                <Card title="DGD Landing Page" :src="dgdLandingPage" />
            </div>

            <div>
                <Card title="Dota 2 Leaderboard" :src="dotaLeaderboard" />
            </div>

            <div>
                <Card title="Grid System" :src="grids" />
            </div>

            <div>
                <Card title="Input Form with " :src="inputForm" />
            </div>

            <div>
                <Card title="Dota 2 Wanted Poster" :src="pudgePoster" />
            </div>

            <div>
                <Card title="Registration Form" :src="registrationForm" />
            </div>

            <div>
                <Card title="Responsive Web Design" :src="rwd" />
            </div>

            <div>
                <Card title="Responsive Web Design 2" :src="rwd2" />
            </div>
        </div>
    </div>
</template>

<script>
import Section from '../components/Section.vue';
import Card from '../components/Card.vue';
import SectionBreak from '../components/SectionBreak.vue';
import heroDailyUI from '../assets/images/dailyui/hero-dailyui.png';
import appleWatch from '../assets/images/dailyui/apple-watch.png';
import calc from '../assets/images/dailyui/calc.png';
import dgdLandingPage from '../assets/images/dailyui/dgd-landing-page.png';
import dotaLeaderboard from '../assets/images/dailyui/dota-leaderboard.png';
import grids from '../assets/images/dailyui/grids.png';
import inputForm from '../assets/images/dailyui/input-form.png';
import pudgePoster from '../assets/images/dailyui/pudge-poster.png';
import registrationForm from '../assets/images/dailyui/registration-page.png';
import rwd from '../assets/images/dailyui/rwd.png';
import rwd2 from '../assets/images/dailyui/rwd2.png';
import spotifyMobile from '../assets/images/dailyui/spotify-mobile.png';
export default {
    data() {
        return {}
    },
    setup: () => {
        return { heroDailyUI, appleWatch, calc, dgdLandingPage, dotaLeaderboard, grids, inputForm, pudgePoster, registrationForm, rwd, rwd2, spotifyMobile };
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