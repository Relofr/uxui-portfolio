<template>
    <div>
        <Section sectionTitle="DailyUI" :src="heroDailyUI" />

        <Section :src2="appleWatch" showImage sectionTitle="Spotify - Apple Watch"
            contentOne="Made in Figma" contentTwo="" />

        <Section :src2="spotifyMobile" showImage sectionTitle="Spotify Mobile Design"
            contentOne="Made in Figma" contentTwo="" />

        <Section :src2="calc" showImage sectionTitle="Calculator"
            contentOne="Made in Figma" contentTwo="" />

        <Section :src2="dgdLandingPage" showImage sectionTitle="DGD Landing Page"
            contentOne="Made in Figma" contentTwo="" />

        <Section :src2="dotaLeaderboard" showImage sectionTitle="Dota 2 Leaderboards"
            contentOne="Made in Figma" contentTwo="" />

        <Section :src2="grids" showImage sectionTitle="Grid"
            contentOne="Made in Figma" contentTwo="" />

        <Section :src2="inputForm" showImage sectionTitle="Input Form"
            contentOne="Made in Figma" contentTwo="" />

        <Section :src2="pudgePoster" showImage sectionTitle="Dota 2 - Pudge Wanted Poster"
            contentOne="Made in Figma" contentTwo="" />

        <Section :src2="registrationForm" showImage sectionTitle="Registration Form"
            contentOne="Made in Figma" contentTwo="" />

        <Section :src2="rwd" showImage sectionTitle="Responsive Web Design"
            contentOne="Made in Figma" contentTwo="" />

        <Section :src2="rwd2" showImage sectionTitle="RWD 2"
            contentOne="Made in Figma" contentTwo="" />
    </div>
</template>

<script>
import Section from '../components/Section.vue';
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
    components: { Section, SectionBreak }
}
</script>

<style>
</style>