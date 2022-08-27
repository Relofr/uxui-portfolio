<template>
    <div class="page-spacer">
        <Section heroTitle="" sectionTitle="MegaBattles - Making gaming easier" :src="heroEsports" />
        <Overview title="Project Overview" about="Gamers are frustrated by attempting to navigate & find tournaments"
            description="Our goal was to focus on the user path for both donations and daily admissions. In addition, we wanted to emphasize across the site that yearly memberships come with great benefits and should be considered."
            role="UX Research, UI Design, Interaction Design, Prototyping" date="August 24th, 2022" team="Kyle Hatch, Stetson Strokes, Christian Weidle"
            tools="Figma, Miro, Adobe CC, Github, Netlify, VSC, Trello"
            problem="As young gamers look to start making money doing what they love they are faced with the difficult task of navigating tournaments. There are hidden fees, large skill gaps and limited prize pools that cause stress and confusion for young gamers."
            solution="Create an easy
to use tournament website for all types of gamers" />

        <SectionBreak title="User Research" />

        <Section sectionTitle="Indusrty Analysis"
            contentOne="The gaming industry is ever-booming, and more people than ever are intrested in exploring Esports"
            contentTwo="...it's estimated that the number of those who play games via PC, consoles, tablets, and smartphones will surpass 3 billion this year and amount to 3.32 billion by 2024 - Marketer, Newzoo" />

        <Section isColumn sectionTitle="Surveys" showImage :src2="esportsSurvey" contentOne="We did an online survey using Google Forms to get a better understanding of the industry and common frustrations" />

        <Section showDot isColumn showImage sectionTitle="Sorting our data"
            contentOne="We started out exploring competitors that offer similar services to find out what users liked/disliked, and what they wished was available. I conducted a survey, grouped & sorted the data, and prioritized tasks that would be the most impactful" contentTwo="I took all of our responses to our survey, and created sticky notes in Miro so we could get a better visual and start learning from our data"
            :src2="esportsData" />
            <Section isColumn showImage :src2="featureBrainstorm" contetOne="" />

            <Section isColumn showImage :src2="featurePrio" sectionTitle="Feature Prioritization" contentOne="We put our data into a feature prioritization matrix, and started working out what was most important. This helped us see what was missing, and what would help users the most" />

            <Section showDot sectionTitle="Key Insights from Surveys" contentOne="Users were frustrated when looking for local tournaments, registering, and hosting" contentTwo="Users were using multiple websites when searching for a tournament" contentThree="A lot of websites didn't feel safe to use"/>


        <Section showImage isColumn :src2="userInsight" sectionTitle="User Insight"
            contentOne="After gathering quantitative results from our survey, we interviewed a mixed bag of gamers, some former and current Esports players. They provided further insights about their opinions on Esports and on competetive gaming" />

        <Section showImage isColumn :src2="esportsPersona" sectionTitle="User Persona" contentOne="Our user persona focuses on a young gamer that is looking to get his name out there in the gaming community. He is an 18 year old with a lot of excitment about joining local tournaments. He doesn't have very much experience with the local gaming community, and is unsure of where to start" />

        <SectionBreak title="Definition & Ideation" />

        <Section showDot isColumn showImage :src2="journeyMap" sectionTitle="User Journey Map"
            contentOne="Tyler wants to register for a local Super Smash Brothers tournament. He would prefer a tournament with a prize pool and wonders if there are any available this month"
            contentTwo="After gathering our research and learning more about our users, we then put together and journey map of a typical users experience from the moment they come to our website, to when they register for a tournament. This was a great way to walk in the users shoes and empathize with thier emotional states during their journey"
            contentThree="Tyler initially is very excited to see the local tournaments and to sign up, he begins by searching online, but starts to feel overwhelmed. He then finds MegaBattles, searches for local Super Smash Brothers tournaments, and is easily able to just what he's looking for. Tyler finishes his experience on the website feeling releived, but knows he needs to go practice!" />

        <Section showImage isColumn :src2="userFlow" sectionTitle="User Flow"
            contentOne="The user flow focuses on the key feature of the website, and what we found was lacking in others, registering for a tournament " />

        <SectionBreak title="Develop Phase" />
        <Section showImage :src2="esportsLowfi" sectionTitle="Low-Fidelity"
            contentOne="We sketched out some designs in Figma and played around with the layout of the cards, navigation, footer, etc" />
        <Section isColumn showImage :src2="esportsAB" sectionTitle="User Testing"
            contentOne="Before we went into high-fidelity, we wanted to test our app with our users to make sure the flow and design made sense. Our tests found that navigating throughout the app was pretty straightforward, so we focused our user testing on refining the tournament cards, this included the design of the cards, placement of buttons, and what information was most important to keep included on the cards." />
        <Section isColumn showImage :src2="esportsAB2" sectionTitle="" contentOne="We also focued on refining our nav and drop-down menus. We wanted to further simplfy the process of finding games and tournaments.
The Leaderboards section was added to give gamers more reasons to use our services and compete" />
        <Section showDot links showImage isColumn :src2="esportsHifi" sectionTitle="High-Fidelity"
            contentOne="high-fidelity designs showing our homepage, current tournaments page, and the light/dark mode along with the mobile version of the app"
            contentTwo="I also built out this design in code, and hosted it online. While programming this website I kept Responsive Web Design in mind, so it's accessible on mobile, tablet, and desktop"
            contentThree="I wanted to keep the user base in mind when it came to decided our color theme. Because the majority of gamers use dark theme on everything, I decided to keep that as the default, but still have vibrant colors that pop to evoke feelings of energy and excitement when hosting/joining a tournament"
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
            contentOne="Add a larger selection of games, more filters, and ways to set up prize pools"
            contentTwo="Include a ranking system with the leaderboard"
            contentThree="Create your own tournaments and invite friends for free"
            contentFour="Premium features for paying members, such as unlimted tournament creation, hosting, prize pools etc" />

        <Section isColumn showDot showImage sectionTitle="What I learned"
            contentOne="There is a large market for this type of website, and a lot of potential to create an 'all in one' tournament website so users don't feel frustrated"
            contentTwo="This project was really fun to work on, I had a lot of creative freedom and it was so much fun creating a new product instead of doing a redesign. I lead the way in designing the UI, and writing the code for the website" />

    </div>
</template>

<script>
import Section from '../components/Section.vue';
import SectionBreak from '../components/SectionBreak.vue';
import Overview from '../components/Overview.vue';

import userInsight from '../assets/images/esports/esports-userinsight.png'
import userFlow from '../assets/images/esports/esports-userflow.png'
import heroEsports from '../assets/images/esports/esports-hero.jpeg';
import esportsData from '../assets/images/esports/esports-data.png';
import esportsSurvey from '../assets/images/esports/esports-survey.png';
import esportsPersona from '../assets/images/esports/esports-persona.png';
import esportsHifi from '../assets/images/esports/esports-hifi.png';
import esportsLowfi from '../assets/images/esports/esports-lowfi.png';
import esportsGif from '../assets/images/esports/esports-gif.gif';
import esportsMacbook from '../assets/images/esports/esports-macbook.png';
import esportsAllDevices from '../assets/images/esports/esports-alldevices.png';
import esportsAB from '../assets/images/esports/esports-ab.png';
import esportsAB2 from '../assets/images/esports/esports-ab2.png';
import featureBrainstorm from '../assets/images/esports/feature-brainstorm.jpg';
import featurePrio from '../assets/images/esports/feature-prioritization.jpg';
import journeyMap from '../assets/images/esports/journey-map.jpg';

export default {
    data() {
        return {}
    },
    setup: () => {
        return { heroEsports, featureBrainstorm, featurePrio, journeyMap, esportsData, esportsSurvey, userInsight, esportsPersona, userFlow, esportsLowfi, esportsHifi, esportsAB, esportsAB2, esportsGif, esportsAllDevices, esportsMacbook };
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