<template>
    <div>
        <Section sectionTitle="USDA Redesign" :src="heroUSDA" />

        <SectionBreak title="UI Analysis & User Research" />

        <Section showImage sectionTitle="Title" contentOne="content" />

        <SectionBreak title="Definition" />
        <Section showImage sectionTitle="Title" contentOne="content" />

        <SectionBreak title="Ideation" />
        <Section showImage sectionTitle="Title" contentOne="content" />

        <SectionBreak title="Prototyping" />
        <Section showImage sectionTitle="Title" contentOne="content" />

        <SectionBreak title="Testing" />
        <Section showImage sectionTitle="Title" contentOne="content" />

        <SectionBreak title="Conclusion" />
        <Section showImage sectionTitle="Title" contentOne="content" />

    </div>
</template>

<script>
import Section from '../components/Section.vue';
import SectionBreak from '../components/SectionBreak.vue';
import heroUSDA from '../assets/images/usda/hero-usda.png';
export default {
    data() {
        return {}
    },
    setup: () => {
        return { heroUSDA };
    },
    components: { Section, SectionBreak }
}
</script>

<style>
</style>