<template>
    <div class="ta">
        <Section sectionTitle="Tracy Aviary UX/UI Redesign" :src="heroTA" />

        <Overview
            title="Project Overview"
            about="Tracy Aviary inspires curiosity and caring for birds and nature through education and conservation."
            description="Our goal was to focus on the user path for both donations and daily admissions. In addition, we wanted to emphasize across the site that yearly memberships come with great benefits and should be considered."
            role="UX/UI Designer" date="July 13th, 2022" team="Kyle Hatch, Amanda Fuller, John Kennedy"
            tools="Figma, Miro, Adobe CC, Google Drive, Invision"
            problem="Tracy Aviary is struggling to get repeat customers to visit the sanctuary, and few people purchase memberships or offer yearly donations. Continued lack of donation and low membership sales may leave Tracy Aviary unsustainable."
            solution="Our goal was to focus on the user path for both donations and daily admissions. In addition, we wanted to emphasize across the site that yearly memberships come with great benefits and should be considered.
" />
        <SectionBreak title="UI Analysis & User Research" />

        <Section :src2="taDesktop" showImage sectionTitle="Where to begin"
            contentOne="At first glance, the site looks properly taken care of." contentTwo="There are some obvious UX/UI changes that need to be made, but without knowing exactly what we needed to fix, we decided to create a survey to find out more." />

        <Section showImage :src2="surveyPie" sectionTitle="Survey Data"
            contentOne="We created a survey that went over how often they visit the aviary, why they visit, how their experience was, how they purchased tickets, and if they have ever donated." />

        <Section showImage :src2="taWhyVisit" sectionTitle=""
        contentOne="Hello" contentTwo=""/>

        <Section showImage :src2="taAffinity" sectionTitle="Organizing our data"
        contentOne="Hello" contentTwo=""/>

        <Section showImage :src2="prioritizationMatrix" sectionTitle=""
        contentOne="Based on the survey results, I decided to focus on the ticket purchases and donation flow of the website, which ended up needing an update." />

        


        <SectionBreak title="Definition" />
        <SectionBreak title="Ideation" />
        <SectionBreak title="Prototyping" />
        <SectionBreak title="Testing" />
        <SectionBreak title="Conclusion" />
    </div>
</template>

<script>
import Section from '../components/Section.vue';
import SectionBreak from '../components/SectionBreak.vue';
import Overview from '../components/Overview.vue';
import heroTA from '../assets/images/tracyaviary/hero-ta.png';
import taDesktop from '../assets/images/tracyaviary/ta-desktop.png';
import surveyPie from '../assets/images/tracyaviary/survey-pie.png';
import taWhyVisit from '../assets/images/tracyaviary/ta-whyvisit.png';
import taAffinity from '../assets/images/tracyaviary/ta-affinity.png';
import prioritizationMatrix from '../assets/images/tracyaviary/prioritization-matrix.png';

export default {
    setup: () => {
        return { heroTA, taDesktop, surveyPie, taWhyVisit, taAffinity, prioritizationMatrix };
    },
    components: { Section, SectionBreak, Overview }
}
</script>

<style>
</style>