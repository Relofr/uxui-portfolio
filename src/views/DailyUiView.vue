<template>
    <div class="page-spacer">
        <Section sectionTitle="DailyUI" :src="heroDailyUI" />
        <div class="grid4x4">
            <div v-for="(key, value) in imageData" :key="key">
                <Card :text="value" :src="key" :alt="`dailyui`" />
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
import lockscreenPixel6 from '../assets/images/dailyui/lockscreen-pixel6.png';
import calc from '../assets/images/dailyui/calc.png';
import photoShare2 from '../assets/images/dailyui/photographySPA.png';
import photoShare from '../assets/images/dailyui/onlinephotoshare.png';
import dgdLandingPage from '../assets/images/dailyui/dgd-landing-page.png';
import dgdVinyl from '../assets/images/dailyui/dgd-vinyl.png';
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
        return {
            imageData: {
                "Lockscreen - Pixel 6": lockscreenPixel6,
                "Spotify Mobile Design": spotifyMobile,
                "DGD Landing Page": dgdLandingPage,
                "DGD Vinyl - Add To Cart": dgdVinyl,
                "PhotoShare Concept - Wireframe": photoShare2,
                "PhotoShare Concept - High Fidelity": photoShare,
                "Spotify - Apple Watch": appleWatch,
                "Dota 2 Leaderboards": dotaLeaderboard,
                "Calculator": calc,
                "Grid System": grids,
                "Input Form": inputForm,
                "Dota 2 Wanted Poster": pudgePoster,
                "Registration Form": registrationForm,
                "Responsive Web Design": rwd,
                "Responsive Web Design 2": rwd2
            }
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
    .list-content {
        align-items: center;
        text-align: center;
    }
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