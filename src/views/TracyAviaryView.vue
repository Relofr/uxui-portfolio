<template>
    <div class="page-spacer white-bg">
        <Section sectionTitle="Tracy Aviary UX/UI Redesign" :src="heroTA" />

        <Overview 
            title="Project Overview"
            about="Tracy Aviary inspires curiosity and caring for birds and nature through education and conservation."
            description="Our goal was to focus on the user path for both donations and daily admissions. In addition, we wanted to emphasize across the site that yearly memberships come with great benefits and should be considered"
            role="UX/UI Designer" 
            date="July 13th, 2022" 
            team="Kyle Hatch, Amanda Fuller, John Kennedy"
            tools="Figma, Miro, Adobe CC, Google Drive, Invision"
            problem="Tracy Aviary is struggling to get repeat customers to visit the sanctuary, and few people purchase memberships or offer yearly donations. Continued lack of donation and low membership sales may leave Tracy Aviary unsustainable"
            solution="Our goal was to focus on the user path for both donations and daily admissions. In addition, we wanted to emphasize across the site that yearly memberships come with great benefits and should be considered"
        />

        <SectionBreak 
            title="UI Analysis & User Research" 
        />

        <Section 
            showDot 
            :src2="taDesktop" 
            showImage 
            sectionTitle="Where to begin"
            contentOne="At first glance, the site looks properly taken care of"
            contentTwo="There are some obvious UX/UI changes that need to be made, but without knowing exactly what I needed to fix, I decided to create a survey to find out more about our users and their experience" 
        />

        <Section 
            showDot 
            showImage 
            :src2="surveyPie" 
            sectionTitle="Survey Data"
            contentOne="We created a survey that went over how often they visit the aviary, why they visit, how their experience was, how they purchased tickets, and if they have ever donated" 
        />

        <Section 
            showDot 
            showImage 
            isColumn 
            :src2="taWhyVisit" 
            sectionTitle="What brings our customers in?"
            contentOne="" 
            contentTwo="" 
        />

        <Section 
            showDot 
            showImage 
            isColumn 
            :src2="taAffinity" 
            sectionTitle="Organizing our data" 
            contentOne=""
            contentTwo="" 
        />

        <Section 
            showDot 
            showImage 
            isColumn 
            :src2="taUserInsight" 
            sectionTitle="User Insights" 
            contentOne="" 
        />

        <Section 
            showDot 
            showImage 
            :src2="taUserInterviewNotes" 
            sectionTitle="User Interviews"
            contentOne="The ability to purchase tickets and to make a donation to the aviary is confusing and difficult to navigate"
            contentTwo="This was due to having poor contrast between text and background, not having a grid system in place, and a poor hierarchy of elements" 
        />

        <SectionBreak 
            title="Definition"
        />

        <Section 
            showDot 
            showImage 
            isColumn 
            :src2="taUserFlow" 
            sectionTitle="Updated User Flow"
            contentOne="" 
        />

        <Section 
            showDot 
            showImage 
            isColumn 
            :src2="taUserJourney" 
            sectionTitle="User Journey Map"
            contentOne="Bronson is looking to purchase Admission tickets online"
            contentTwo="The membership page is scattered and confusing to navigate"
            contentThree="Bronson is happy to have found the Membership option, so he has access all year and won't have to purchase tickets online anymore" 
        />

        <SectionBreak 
            title="Ideation" 
        />

        <Section 
            showImage 
            isColumn 
            :src2="prioritizationMatrix" 
            sectionTitle="Feature Prioritization Matrix"
            contentOne="My team and I sorted through our data from a Like/Wish/What If scenario and put it into a Feature Prioritization Matrix. Based on the data, we saw that purchasing tickets online, and donating was where our users had the most struggle, and since it's a big part of the non-profit, we decided to tackle those things first." 
        />

        <SectionBreak title="Wireframes" />
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
import taUserJourney from '../assets/images/tracyaviary/ta-userjourney.png';
import taUserFlow from '../assets/images/tracyaviary/ta-userflow.jpg';
import taUserInsight from '../assets/images/tracyaviary/ta-userinsight.jpg';
import taUserInterviewNotes from '../assets/images/tracyaviary/ta-userinterviewnotes.jpg';
import prioritizationMatrix from '../assets/images/tracyaviary/prioritization-matrix.png';

export default {
    setup: () => {
        return { heroTA, taDesktop, surveyPie, taWhyVisit, taAffinity, taUserFlow, prioritizationMatrix, taUserInterviewNotes, taUserInsight, taUserJourney };
    },
    components: { Section, SectionBreak, Overview }
}
</script>

<style>
</style>