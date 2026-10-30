<template>
    <div>
        <p class="flex code-font case-studies-tag">{{ open }}</p>
        <h2 class="primary-heading">Selected work</h2>
        <div class="grid2x2">

            <div class="box featured">
                <Card title="Dota Lore + Match Scout" text="Product design &amp; front-end · Solo · Live at dotalore.com" :src="heroDota" route="dota-analytics" button buttonText="Read case study" icon="chart-line" :alt="`match scout summary screen`"/>
            </div>

            <div class="box">
                <Card title="MegaBattles" text="UX research, UI design &amp; front-end · Team of 3" :src="heroEsports" route="megabattles" button buttonText="Read case study" icon="ghost" :alt="`megabattles tournament website on a desktop monitor`"/>
            </div>

            <div class="box">
                <Card title="Tracy Aviary" text="UX research &amp; redesign · Team of 3 · In progress" :src="heroTA" route="tracy-aviary" button buttonText="Read case study" icon="crow" :alt="`tracy aviary`"/>
            </div>

            <!-- <div class="box disabled">
                <Card title="US Agricultural Department" text="UX/UI Case Study, Solo Project (Work in progress)" :src="heroUSDA" route="usda" button buttonText="Read More" icon="carrot" :alt="`usda agricultural department`"/>
            </div> -->
            <!-- Hidden until the case studies are written -->
            <!-- <div class="box">
                <Card title="ReClaim App" :src="reclaimHero" route="reclaim" button buttonText="Read More" :alt="`reclaim`"/>
            </div>
            <div class="box">
                <Card title="UX/UI Portfolio" :src="portfolioHero" route="portfolio" button buttonText="Read More" :alt="`uxui portfolio`"/>
            </div> -->
        </div>

        <h2 class="secondary-heading playground-heading">Playground</h2>
        <p class="text-muted">Smaller explorations and practice pieces.</p>
        <div class="grid2x2">
            <div class="box">
                <Card title="Daily UI" :src="heroDailyUI" route="daily-ui" text="Designs aimed to help sharpen my skills using daily prompts." button buttonText="View designs" iconFab="figma" :alt="`daily ui designs`"/>
            </div>
        </div>
        <p class="flex code-font case-studies-tag">{{ close }}</p>
    </div>
</template>

<script>
import Card from '../components/Card.vue';
import heroDailyUI from '../assets/images/dailyui/hero-dailyui.png';
import heroUSDA from '../assets/images/usda/hero-usda.png';
import heroTA from '../assets/images/tracyaviary/hero-ta.png';
import heroDota from '../assets/images/dota/hero-dota.png';
import heroEsports from '../assets/images/esports/esports-hero.jpeg';
import reclaimHero from '../assets/images/reclaim/hero-reclaim.png';
import portfolioHero from '../assets/images/portfolio/hero-portfolio.png';

export default {
    setup: () => {
        return { heroDota, heroDailyUI, heroUSDA, heroTA, heroEsports, reclaimHero, portfolioHero };
    },
    data() {
        return {
            open: "<projects>",
            close: "</projects>"
        }
    },
    components: { Card }
}
</script>

<style lang="less" scoped>
.case-studies-tag {
    justify-content: flex-start;
}

.grid2x2 {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: var(--space-7) var(--space-6);
    align-items: stretch;
}

.box {
    display: flex;
    width: 100%;
}

.featured {
    grid-column: 1 / -1;

    :deep(.list-content img) {
        height: auto;
        aspect-ratio: 2.2 / 1;
    }
}

.playground-heading {
    margin-top: var(--space-8);
}

@media (max-width: 800px) {
    .grid2x2 {
        grid-template-columns: 1fr;
        gap: var(--space-6);
    }

}
</style>
