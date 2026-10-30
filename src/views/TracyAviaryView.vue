<template>
    <div class="page-spacer white-bg">
        <Section sectionTitle="Tracy Aviary: UX/UI Redesign" :src="heroTA" alt="cardinal perched on a branch" />

        <Overview 
            title="Project Overview"
            about="Tracy Aviary is a nonprofit that inspires curiosity and caring for birds and nature through education and conservation."
            description="Our goal was to focus on the user path for both donations and daily admissions. In addition, we wanted to emphasize across the site that yearly memberships come with great benefits and should be considered"
            role="UX/UI Designer (nonprofit client)" 
            date="July 13th, 2022" 
            team="Kyle Hatch, Amanda Fuller, John Kennedy"
            tools="Figma, Miro, Adobe CC, Google Drive, Invision"
            problem="Tracy Aviary is struggling to get repeat customers to visit the sanctuary, and few people purchase memberships or offer yearly donations. Continued lack of donation and low membership sales may leave Tracy Aviary unsustainable"
            solution="Simplify buying admission online, offer memberships at the moment visitors are already purchasing tickets, and make donating clear and easy to start"
            outcome="Research, a redesigned admission flow, and new donation designs are complete. This case study is still in progress."
        />

        <SectionBreak title="User Research" icon="book" />

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
            compact 
            :src2="taWhyVisit" 
            sectionTitle="What brings our customers in?"
            contentOne="Entertainment and visiting with family were the top reasons people came (50% each), followed by personal education (30%)" 
            contentTwo="One in ten respondents had never visited, and one didn’t know what Tracy Aviary was" 
        />

        <Section 
            showDot 
            showImage 
            isColumn 
            compact 
            :src2="taAffinity" 
            sectionTitle="Organizing our data" 
            contentOne="We grouped every survey response in Miro by visit frequency, experience, amenities, tickets, group size, site feedback, donations, and age"
            contentTwo="Most respondents visited rarely or had never been, nearly all bought day passes at the box office instead of online, and only one had ever donated" 
        />

        <Section 
            showDot 
            showImage 
            isColumn 
            compact 
            :src2="taUserInsight" 
            sectionTitle="User Insights" 
            contentOne="Interviews confirmed what the survey suggested: buying tickets online felt unreliable. Visitors described it as ‘hit or miss’ and said they wished purchasing admission was more straightforward" 
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
            title="Definition & Ideation" icon="file-pen"
        />

        <Section 
            showDot 
            showImage 
            isColumn 
            compact 
            :src2="taUserFlow" 
            sectionTitle="Updated User Flow"
            contentOne="The original admission flow went straight from Plan Your Visit to Products and Payment. Our updated flow adds a membership decision after choosing tickets, so visitors see the value of a membership at the moment they’re already buying" 
        />

        <Section 
            showDot 
            showImage 
            isColumn 
            compact 
            :src2="taUserJourney" 
            sectionTitle="User Journey Map"
            contentOne="Bronson is looking to purchase Admission tickets online"
            contentTwo="The membership page is scattered and confusing to navigate"
            contentThree="Bronson is happy to have found the Membership option, so he has access all year and won't have to purchase tickets online anymore" 
        />

        <Section 
            showImage 
            isColumn 
            compact 
            :src2="prioritizationMatrix" 
            sectionTitle="Feature Prioritization Matrix"
            contentOne="My team and I sorted through our data from our 'Like/Wish/What-If' scenario and put it into a Feature Prioritization Matrix. Based on the data, we saw that purchasing tickets online, and donating was where our users had the most struggle, and since it's a big part of the non-profit, we decided to tackle those things first."
        />

        <SectionBreak title="Develop Phase" icon="wrench" />

        <Section 
            showDot 
            showImage 
            isColumn 
            :src2="taDesktopGrid" 
            sectionTitle="Ways to give"
            contentOne="Donation options such as Monthly Giving, Education Programs, Conservation Projects, and Memorial Benches are laid out in a simple, scannable grid, so supporters can quickly find the cause that matters to them" 
        />

        <Section 
            showDot 
            showImage 
            isColumn 
            :src2="taDesktopDonation" 
            sectionTitle="A simpler donation form"
            contentOne="The donation form is broken into short steps, starting with personal information, with clearly marked required fields and an option to reuse it as the billing address"
            contentTwo="Clear Back and Continue buttons keep supporters oriented as they move through the process" 
        />
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
import taDesktopGrid from '../assets/images/tracyaviary/ta-desktop-grid.png';
import taDesktopDonation from '../assets/images/tracyaviary/ta-desktop-donation.png';
import prioritizationMatrix from '../assets/images/tracyaviary/prioritization-matrix.png';

export default {
    setup: () => {
        return { heroTA, taDesktop, surveyPie, taWhyVisit, taAffinity, taUserFlow, prioritizationMatrix, taUserInterviewNotes, taUserInsight, taUserJourney, taDesktopGrid, taDesktopDonation };
    },
    components: { Section, SectionBreak, Overview }
}
</script>

<style>
</style>