<template>
    <div class="page-spacer">
        <Section heroTitle="MEGABATTLES" sectionTitle="Making gaming easier" :src="heroEsports" />
        <Overview title="Project Overview" about="Gamers are frustrated by attempting to navigate & find tournaments"
            description="Our goal was to focus on the user path for both donations and daily admissions. In addition, we wanted to emphasize across the site that yearly memberships come with great benefits and should be considered."
            role="UX/UI Designer" date="August 24th, 2022" team="Kyle Hatch, Stetson Strokes, Christian Weidle"
            tools="Figma, Miro, Adobe CC, Github, Netlify, VSC, Trello"
            problem="As young gamers look to start making money doing what they love they are faced with the difficult task of navigating tournaments. There are hidden fees, large skill gaps and limited prize pools that cause stress and confusion for young gamers."
            solution="Create an easy
to use tournament website for all types of gamers" />

        <SectionBreak title="User Research" />

        <Section sectionTitle="Indusrty Analysis"
            contentOne="The gaming industry is ever-booming, and more people than ever are intrested in exploring Esports"
            contentTwo="...it's estimated that the number of those who play games via PC, consoles, tablets, and smartphones will surpass 3 billion this year and amount to 3.32 billion by 2024 - Marketer, Newzoo" />

        <Section showDot showImage sectionTitle="Research Data"
            contentOne="I started out exploring other websites that offer similar services to find out what users liked and disliked about the platform, and what they wished was available. I conducted a survey, grouped & sorted the data, and prioritized tasks that would be the most impactful"
            :src2="survey1" />

        <Section showImage :src2="survey2" />
        <Section showImage :src2="survey3" />
        <Section showImage :src2="survey4" />

        <Section showDot showImage :src2="Gather" sectionTitle="Sorting our data" contentOne="" />
        <Section showDot showImage :src2="Group" sectionTitle="Group" contentOne="" />
        <Section showDot showImage :src2="Evaluate" sectionTitle="Evaluate" contentOne="" />

        <Section showImage isColumn :src2="userInsight" sectionTitle="User Insight"
            contentOne="After gathering quantitative results from our survey, we interviewed a mixed bag of gamers, some former and current Esports players. They provided further insights about their opinions on Esports and on competetive gaming" />

        <Section showImage isColumn :src2="esportsPersona" sectionTitle="User Persona" />

        <SectionBreak title="Definition & Ideation" />

        <Section showDot isColumn showImage :src2="journeyMap" sectionTitle="User Journey Map"
            contentOne="Tyler wants to register for a local Super Smash Brothers tournament. He would prefer a tournament with a prize pool and wonders if there are any available this month"
            contentTwo="After gathering our research and learning more about our users, we then put together and journey map of a typical user’s experience from the moment they come on our website to when they register for a tournament. This was a great way to walk in the users’ shoes and empathize with thier emotional states during their journey" />

        <Section showImage isColumn :src2="userFlow" sectionTitle="User Flow" contentOne="" />

        <SectionBreak title="Prototyping" />
        <Section showImage :src2="esportsLowfi" sectionTitle="Low-Fidelity" contentOne="" />

        <SectionBreak title="Testing" />
        <Section isColumn showImage :src2="esportsAB" sectionTitle="A/B Tests"
            contentOne="We focused our user testing on refining the tournament cards. This included the design of the cards, placement of buttons, and the information included on the cards" />
        <Section isColumn showImage :src2="esportsAB2" sectionTitle="" contentOne="We also focued on refining our nav and drop-down menus. We wanted to further simplfy the process of finding games and tournaments. 
The Leaderboards section was added to give gamers more reasons to use our services and compete" />
        <Section showDot links showImage isColumn :src2="esportsHifi" sectionTitle="High-Fidelity"
            contentOne="high-fidelity designs showing our homepage, current tournaments page, and the light/dark mode along with the mobile version of the app"
            contentTwo="I also built out this design in code, and hosted it online. While programming this website I kept Responsive Web design in mind, so it's accessible on mobile, tablet, and desktop"
            linkOne="https://github.com/Relofr/esports-vite" linkOneText="Github" iconFab="github"
            linkTwo="https://zesty-sunburst-7adc10.netlify.app/" linkTwoText="MegaBattles" icon2="up-right-from-square"
            sizeFab="lg" size2="lg" />
        <!-- <Section showImage isColumn :src2="esportsAllDevices" sectionTitle="" contentOne="" /> -->

        <div class="even-columns centered">
            <div><img id="esports-gif" :src="esportsGif" alt="megabattles gif"></div>
            <div><img :src="esportsAllDevices" alt="megabattles all devices"></div>
        </div>

        <SectionBreak title="Final Thoughts" />
        <Section isColumn showDot showImage sectionTitle="Future Iterations"
            contentOne="Add a larger selection of games" contentTwo="Include a ranking system with the leaderboard"
            contentThree="Create 3 of your OWN tournaments and invite friends for free"
            contentFour="Premium features for paying members, such as unlimted tournament creation" />

        <Section isColumn showDot showImage sectionTitle="What I learned"
            contentOne="There is a large market for this type of website"
            contentTwo="Most gamers look for certain items to build trust with a website" contentThree="" />

    </div>
</template>

<script>
import Section from '../components/Section.vue';
import SectionBreak from '../components/SectionBreak.vue';
import Overview from '../components/Overview.vue';

import userInsight from '../assets/images/esports/esports-userinsight.png'
import userFlow from '../assets/images/esports/esports-userflow.png'
import heroEsports from '../assets/images/esports/esports-hero.png';
import Group from '../assets/images/esports/group.jpg';
import esportsPersona from '../assets/images/esports/esports-persona.png';
import esportsHifi from '../assets/images/esports/esports-hifi.png';
import esportsLowfi from '../assets/images/esports/esports-lowfi.png';
import esportsGif from '../assets/images/esports/esports-gif.gif';
import esportsMacbook from '../assets/images/esports/esports-macbook.png';
import esportsAllDevices from '../assets/images/esports/esports-alldevices.png';
import esportsAB from '../assets/images/esports/esports-ab.png';
import esportsAB2 from '../assets/images/esports/esports-ab2.png';
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
        return { heroEsports, Evaluate, featureBrainstorm, featurePrio, Gather, Group, journeyMap, survey1, survey2, survey3, survey4, userInsight, esportsPersona, userFlow, esportsLowfi, esportsHifi, esportsAB, esportsAB2, esportsGif, esportsAllDevices, esportsMacbook };
    },
    components: { Section, SectionBreak, Overview }
}
</script>

<style>
#esports-gif {
    border-radius: 12%;
    max-width: 50%;
    height: auto;
    background-color: transparent;
}

.centered {
    align-items: center;
}
</style>