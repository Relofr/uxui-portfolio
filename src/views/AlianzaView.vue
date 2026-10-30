<template>
    <div class="page-spacer">
        <div class="alianza-header">
            <p class="label">Professional work · Sep 2022 – Oct 2026</p>
            <h1 class="display-heading">Alianza: Cloud Communications Platform</h1>
            <p class="lead">
                For four years I owned end-to-end design for Alianza's cloud VoIP and video conferencing platform,
                from the admin portal to AI-powered call analytics and transcription.
            </p>
            <p class="alianza-note">
                <fa icon="lock" /> This work isn't publicly shareable, so there are no screens here. I'm happy to walk
                through it in detail in an interview.
            </p>
        </div>

        <Overview title="Overview"
            role="UX Product Designer, lead designer for the admin portal" date="Sep 2022 – Oct 2026"
            team="Product managers, engineers, and client stakeholders"
            tools="Figma, FigJam, Claude Design, Claude Code" />

        <SectionBreak title="What I owned" icon="layer-group" />

        <Section sectionTitle="The admin portal"
            contentOne="Led design of the entire admin portal, owning information architecture, workflows, and UI from discovery through delivery." />

        <Section sectionTitle="AI-powered call analytics & transcription"
            contentOne="Designed the AI integration into the platform, including real-time call analytics and call transcription." />

        <Section sectionTitle="Design system & Figma standards"
            contentOne="Created and maintained the design system, and set the team's Figma standards for components, variants, and tokens." />

        <Section sectionTitle="Shipped features"
            contentOne="Designed and shipped several widely used features across the platform." />

        <SectionBreak title="How I worked" icon="route" />

        <Section sectionTitle="End-to-end process"
            contentOne="Ran the full process: client discovery, wireframes, interactive prototypes, high-fidelity design, user testing, and engineering handoff." />

        <Section sectionTitle="AI-assisted prototyping"
            contentOne="Used Figma alongside Claude Design and Claude Code to prototype and iterate quickly with product and engineering." />

        <Section sectionTitle="Domain knowledge"
            contentOne="Before Alianza, I spent three years in API support for unified communications at LogMeIn, troubleshooting SIP signaling, call quality, and provisioning. I saw firsthand where users and developers struggle, and that shaped how I designed for this platform." />

        <div class="alianza-cta">
            <p class="lead">Want to hear more about this work?</p>
            <router-link to="/contact" class="alianza-cta-link">
                Get in touch <fa icon="arrow-right" />
            </router-link>
        </div>
    </div>
</template>

<script>
import Section from '../components/Section.vue';
import SectionBreak from '../components/SectionBreak.vue';
import Overview from '../components/Overview.vue';

export default {
    components: { Section, SectionBreak, Overview }
}
</script>

<style scoped>
.alianza-header {
    padding-top: var(--space-6);
    max-width: 820px;
}

.alianza-note {
    display: flex;
    align-items: baseline;
    gap: var(--space-2);
    margin-top: var(--space-4);
    padding: var(--space-3) var(--space-4);
    border-radius: var(--radius);
    background-color: var(--color-surface);
    color: var(--color-text-muted);
    font-size: var(--text-sm);
}

.alianza-cta {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: var(--space-4);
    padding: var(--space-5) var(--space-6);
    border-radius: var(--radius);
    background-color: var(--color-surface);
}

.alianza-cta .lead {
    margin: 0;
}

.alianza-cta-link {
    display: inline-flex;
    align-items: center;
    gap: var(--space-2);
    padding: var(--space-3) var(--space-5);
    border-radius: var(--radius-sm);
    background-color: var(--color-accent);
    color: var(--color-ink);
    font-family: var(--font-heading);
    font-size: var(--text-sm);
    font-weight: var(--fw-semibold);
    letter-spacing: 0.04em;
    text-transform: uppercase;
    transition: background-color 0.2s ease;
}

.alianza-cta-link:hover {
    background-color: var(--color-accent-hover);
}
</style>
