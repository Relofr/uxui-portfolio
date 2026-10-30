<template>
    <div>
        <p class="flex code-font case-studies-tag">{{ open }}</p>
        <h2 class="primary-heading">Selected work</h2>
        <div class="grid2x2">

            <div class="box featured">
                <router-link to="/alianza" class="text-card">
                    <span class="label">Professional work · 2022 – 2026</span>
                    <h3 class="text-card-title">Alianza: Cloud Communications Platform</h3>
                    <p class="text-card-body">
                        Four years owning end-to-end design for a cloud VoIP and video conferencing platform. I led the
                        entire admin portal, designed AI-powered call analytics and transcription, and built the design system.
                    </p>
                    <ul class="text-card-tags">
                        <li>Admin portal &amp; IA</li>
                        <li>AI-powered experiences</li>
                        <li>Design system</li>
                        <li>B2B SaaS / UCaaS</li>
                    </ul>
                    <span class="text-card-link">Read case study <fa icon="arrow-right" /></span>
                </router-link>
            </div>

            <div class="box featured">
                <Card title="Dota Lore + Match Scout" text="Product design &amp; front-end · Solo · Live at dotalore.com" :src="heroDota" route="dota-analytics" button buttonText="Read case study" icon="chart-line" :alt="`match scout summary screen`"/>
            </div>

            <div class="box">
                <Card title="MegaBattles" text="UX research, UI design &amp; front-end · Team of 3" :src="heroEsports" route="megabattles" button buttonText="Read case study" icon="ghost" :alt="`megabattles tournament website on a desktop monitor`"/>
            </div>

            <div class="box">
                <Card title="Tracy Aviary" text="UX research &amp; redesign · Nonprofit · Team of 3 · In progress" :src="heroTA" route="tracy-aviary" button buttonText="Read case study" icon="crow" :alt="`tracy aviary`"/>
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

.text-card {
    display: flex;
    flex-direction: column;
    gap: var(--space-3);
    width: 100%;
    padding: var(--space-6);
    border: 1px solid var(--color-border);
    border-radius: var(--radius);
    background-color: var(--color-surface);
    transition: border-color 0.2s ease, transform 0.2s ease;

    &:hover {
        border-color: var(--color-accent);
        transform: translateY(-2px);
    }
}

.text-card-title {
    font-size: var(--text-2xl);
    margin: 0;
}

.text-card-body {
    max-width: 760px;
    margin: 0;
}

.text-card-tags {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-2);

    li {
        padding: var(--space-1) var(--space-3);
        border: 1px solid var(--color-border);
        border-radius: 999px;
        font-family: var(--font-heading);
        font-size: var(--text-xs);
        font-weight: var(--fw-semibold);
        color: var(--color-text);
    }
}

.text-card-link {
    display: inline-flex;
    align-items: center;
    gap: var(--space-2);
    margin-top: var(--space-2);
    font-family: var(--font-heading);
    font-size: var(--text-sm);
    font-weight: var(--fw-semibold);
    letter-spacing: 0.04em;
    text-transform: uppercase;
    color: var(--color-accent);
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
