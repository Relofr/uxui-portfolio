<template>
    <div class="page-spacer">
        <Section sectionTitle="eSports Tournament Website" :src="heroEsports" />

        <Overview title="Project Overview"
            about=""
            description="Our goal was to focus on the user path for both donations and daily admissions. In addition, we wanted to emphasize across the site that yearly memberships come with great benefits and should be considered."
            role="UX/UI Designer" date="August 10th, 2022" team="Kyle Hatch, Stetson Stokes, Christian Weidle"
            tools="Figma, Miro, Adobe CC, Google Drive/Form, Invision"
            problem="As young gamers look to start making money doing what they love they are faced with the difficult task of navigating tournaments. There are hidden fees, large skill gaps and limited prize pools that cause stress and confusion for young gamers."
            solution=".
" />

        <SectionBreak title="UI Analysis & User Research" />

        <Section sectionTitle="Competitive analysis & surveys" contentOne="I started out exploring other websites that offer similar services to find out what users liked and disliked about the platform, and what they wished was available. I conducted a survey, sorted the data, grouped and prioritized tasks that would be the most impactful." />
        <Section showImage :src2="survey1" />
        <Section showImage :src2="survey2" />
        <Section showImage :src2="survey3" />
        <Section showImage :src2="survey4" />
        <Section dot showImage :src2="Gather" sectionTitle="Sorting our data" contentOne="content" />
        <Section dot showImage :src2="Group" sectionTitle="Group" contentOne="content" />
        <Section dot showImage :src2="Evaluate" sectionTitle="Evaluate" contentOne="content" />

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
import Overview from '../components/Overview.vue';

import heroEsports from '../assets/images/esports/esports-hero.png';
import Group from '../assets/images/esports/group.jpg';
import Evaluate from '../assets/images/esports/evaluate.jpg';
import featureBrainstorm from '../assets/images/esports/feature-brainstorm.jpg';
import featurePrio from '../assets/images/esports/feature-prioritization.jpg';
import Gather from '../assets/images/esports/gather.jpg';
import journeyMap from '../assets/images/esports/journey-map.jpg';
import survey1 from '../assets/images/esports/survey-1.png';
import survey2 from '../assets/images/esports/survey-2.png';
import survey3 from '../assets/images/esports/survey-3.png';
import survey4 from '../assets/images/esports/survey-4.png';

export default {
    data() {
        return {}
    },
    setup: () => {
        return { heroEsports, Evaluate, featureBrainstorm, featurePrio, Gather, Group, journeyMap, survey1, survey2, survey3, survey4 };
    },
    components: { Section, SectionBreak, Overview }
}
</script>

<style>
</style>