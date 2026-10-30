<template>
    <div class="page-spacer">
        <Section sectionTitle="Dota Lore + Match Scout" :src="loreHome" alt="dota lore home page" />

        <Overview title="Project Overview"
            about="A live Dota 2 lore site paired with Match Scout, a match analytics tool that turns dense match telemetry into readable charts and comparisons."
            description="I designed and built the product solo, from the visual design and information architecture through to the API integrations and deployment. It's live at dotalore.com."
            role="Product Design, Front-End Development" date="2026 – Present" team="Kyle Hatch (solo)"
            tools="Vue 3, Claude Code, Stratz GraphQL API, OpenDota REST API, Cloudflare Workers, AWS Polly"
            problem="A Dota 2 match produces a huge amount of data: damage, gold, experience, kills and events for ten players, minute by minute. Raw, it's hard to read, and it's easy to misread when data is missing or incomplete."
            solution="A focused analytics view that highlights what decided the match, especially the laning phase, with clear charts, side-by-side comparisons, and honest empty and partial-data states."
            outcome="Shipped and live at dotalore.com, with an automatic fallback between two match data APIs so the tool keeps working if one source is unavailable." />

        <SectionBreak title="Match Scout" icon="chart-line" />

        <Section showDot isColumn showImage :src2="heroDota" sectionTitle="Making match data readable"
            contentOne="Dense match telemetry becomes toggleable, overlaid Hero Damage, Net Worth, Level, and Win Probability lines, with an accessible color palette and event markers like runes."
            contentTwo="The match summary shows all ten players grouped by party, with their role, K/D, and net worth, next to the key laning numbers: net worth and XP leads at 10:00, kills, first blood, and top performers."
            contentThree="Hover states are linked across both teams, and individual sections have shareable links."
            contentFour="Clear empty and partial-data states mean missing data never shows up as wrong data." />

        <Section showDot isColumn showImage :src2="laneBreakdown" sectionTitle="Lane breakdowns"
            contentOne="Lane matchup cards in the sidebar summarize each lane at 10:00, and open into a head-to-head view of the heroes in that lane."
            contentTwo="A lane breakdown compares net worth, last hits, denies, experience, hero damage, and runes side by side, and calls out moments like the first kill and when the lead flipped."
            contentThree="Player cards compare each hero's stats at 10:00 with the full match, so you can see how the laning phase shaped the rest of the game." />

        <SectionBreak title="Lore Library" icon="book" />

        <Section showDot isColumn showImage :src2="heroesGrid" sectionTitle="Browsing heroes"
            contentOne="Every hero gets a card with their title, primary attribute, role tags, and a short description, so you can scan the roster at a glance." />

        <Section showDot isColumn showImage :src2="heroDetail" sectionTitle="Hero pages"
            contentOne="Each hero page brings together the hero's details, roles, and full lore."
            contentTwo="Heroes mentioned in a hero's lore are linked, so you can follow the story from one character to the next." />

        <SectionBreak title="Engineering" icon="wrench" />

        <Section showDot links sectionTitle="Under the hood"
            contentOne="Integrated the Stratz GraphQL and OpenDota REST APIs with an automatic fallback, so the tool keeps working if one source is unavailable."
            contentTwo="Browser caching keeps repeat lookups fast and reduces API calls."
            contentThree="A serverless text-to-speech feature, built with Cloudflare Workers and AWS Polly."
            linkOne="https://dotalore.com" linkOneText="dotalore.com" icon="up-right-from-square" size="lg"
            linkTwo="https://www.dotalore.com/scout/laning/9063477463" linkTwoText="Example match analysis" icon2="chart-line" size2="lg" />
    </div>
</template>

<script>
import Section from '../components/Section.vue';
import SectionBreak from '../components/SectionBreak.vue';
import Overview from '../components/Overview.vue';
import heroDota from '../assets/images/dota/hero-dota.png';
import loreHome from '../assets/images/dota/lore-home.png';
import laneBreakdown from '../assets/images/dota/lane-breakdown.png';
import heroesGrid from '../assets/images/dota/heroes-grid.png';
import heroDetail from '../assets/images/dota/hero-detail.png';

export default {
    setup: () => {
        return { heroDota, loreHome, laneBreakdown, heroesGrid, heroDetail };
    },
    components: { Section, SectionBreak, Overview }
}
</script>
