<template>
    <div>
        <Section sectionTitle="DailyUI" :src="heroDailyUI" />
    </div>
</template>

<script>
import Section from '../components/Section.vue';
import SectionBreak from '../components/SectionBreak.vue';
import heroDailyUI from '../assets/images/dailyui/hero-dailyui.png';
export default {
    data() {
        return {}
    },
    setup: () => {
        return { heroDailyUI };
    },
    components: { Section, SectionBreak }
}
</script>

<style>
</style>