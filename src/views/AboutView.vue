<template>
    <div>
        <p class="flex code-font">{{ open }}</p>
        <div class="page-spacer">

            <Overview title="My story"
                about="I’m a UX/UI product designer with 4+ years owning end-to-end design for a cloud VoIP and video conferencing platform, including leading the entire admin portal and designing AI-powered real-time call analytics and transcription."
                description="My path into design ran through engineering. I built Vue.js components at Banyan, then spent three years in API support at LogMeIn, where I saw firsthand where users and developers struggle. That background means I design within real engineering constraints and can take ideas from research to shipped code."
                descriptionTwo="Outside of work, I enjoy photography, bird watching, gaming, and spending time outdoors." />

            <div>
                <h2 class="primary-heading">Experience</h2>
                <ol class="timeline">
                    <li v-for="job in experience" :key="job.company" class="timeline-item">
                        <div class="timeline-meta">
                            <span class="label">{{ job.dates }}</span>
                        </div>
                        <div>
                            <h3 class="secondary-heading">{{ job.title }}</h3>
                            <p class="timeline-company">{{ job.company }} · {{ job.domain }}</p>
                            <ul class="timeline-points">
                                <li v-for="point in job.points" :key="point">{{ point }}</li>
                            </ul>
                        </div>
                    </li>
                </ol>
            </div>

            <div>
                <h2 class="primary-heading">How I work</h2>
                <div class="how-i-work">
                    <div class="work-step">
                        <fa icon="magnifying-glass" class="work-step-icon" />
                        <h3 class="secondary-heading">Research</h3>
                        <p>Client discovery, interviews, surveys, affinity maps, and journey maps to find the real problem, then usability and A/B testing to check the solution.</p>
                    </div>
                    <div class="work-step">
                        <fa icon="pen-ruler" class="work-step-icon" />
                        <h3 class="secondary-heading">Design</h3>
                        <p>Information architecture, wireframes, and interactive prototypes in Figma, built on a design system with shared components, variants, and tokens.</p>
                    </div>
                    <div class="work-step">
                        <fa icon="code" class="work-step-icon" />
                        <h3 class="secondary-heading">Build</h3>
                        <p>I use Claude Design and Claude Code daily to prototype faster, and I can ship my own designs in Vue, so nothing gets lost in handoff.</p>
                    </div>
                </div>
            </div>
            <Skills />

            <div>
                <h2 class="primary-heading">Education &amp; certifications</h2>
                <ul class="education">
                    <li v-for="item in education" :key="item.name" class="education-item">
                        <h3 class="secondary-heading">{{ item.name }}</h3>
                        <p class="timeline-company">{{ item.school }} · {{ item.year }}</p>
                        <p v-if="item.detail" class="education-detail">{{ item.detail }}</p>
                    </li>
                </ul>
            </div>

            <Testimonials />
        </div>
        <p class="flex code-font">{{ close }}</p>
    </div>
</template>

<script>
import Skills from '../components/Skills.vue'
import Overview from '../components/Overview.vue';

import Testimonials from '../components/Testimonials.vue'

export default {
    data() {
        return {
            open: "<about-me>",
            close: "</about-me>",
            experience: [
                {
                    title: "UX Product Designer",
                    company: "Alianza",
                    domain: "Cloud communications (VoIP & video conferencing)",
                    dates: "Sep 2022 – Oct 2026",
                    points: [
                        "Led design of the entire admin portal, owning information architecture, workflows, and UI from discovery through delivery",
                        "Designed the AI integration into the platform, including real-time call analytics and call transcription",
                        "Created and maintained the design system and set the team’s Figma standards (components, variants, tokens)",
                        "Ran the full process: client discovery, wireframes, interactive prototypes, high-fidelity design, user testing, and engineering handoff"
                    ]
                },
                {
                    title: "API Support",
                    company: "LogMeIn",
                    domain: "Unified communications",
                    dates: "2019 – 2022",
                    points: [
                        "Troubleshot SIP signaling, call quality, phone provisioning, and registration issues",
                        "Supported third-party integrations built on LogMeIn’s API",
                        "Saw firsthand where users and developers struggle, insight that now shapes my design work"
                    ]
                },
                {
                    title: "Software Engineer",
                    company: "Banyan",
                    domain: "Front-end development",
                    dates: "2018 – 2019",
                    points: [
                        "Built scalable, dynamic Vue.js front-end components with user experience as the main goal",
                        "Worked closely with designers to turn mockups into reusable, consistent components"
                    ]
                }
            ],
            education: [
                { name: "UX/UI Design Certificate", school: "University of Utah", year: "2022", detail: "User research, prototyping, information architecture, accessibility, visual design" },
                { name: "Software Development Certificate", school: "Bottega Tech", year: "2017" },
                { name: "Google UX Design Certificate", school: "Google", year: "In progress" }
            ]
        }
    },
    components: { Skills, Overview, Testimonials }
}
</script>

<style>
.timeline {
    display: flex;
    flex-direction: column;
    gap: var(--space-6);
    list-style: none;
}

.timeline-item {
    display: grid;
    grid-template-columns: 180px 1fr;
    gap: var(--space-5);
    padding-bottom: var(--space-6);
    border-bottom: 1px solid var(--color-border);
}

.timeline-item:last-child {
    padding-bottom: 0;
    border-bottom: none;
}

.timeline-meta .label {
    margin-top: 0.45em;
}

.timeline-company {
    color: var(--color-text-muted);
    margin-bottom: var(--space-3);
}

.timeline-points {
    display: flex;
    flex-direction: column;
    gap: var(--space-2);
    padding-left: var(--space-5);
    list-style: disc;
}

.timeline-points li::marker {
    color: var(--color-accent);
}

.education {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: var(--space-4);
}

.education-item {
    padding: var(--space-5);
    border-radius: var(--radius);
    background-color: var(--color-surface);
}

.education-item .timeline-company {
    margin-bottom: var(--space-2);
}

.education-detail {
    margin: 0;
    font-size: var(--text-sm);
}

@media (max-width: 800px) {
    .timeline-item {
        grid-template-columns: 1fr;
        gap: var(--space-2);
    }
}

.how-i-work {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: var(--space-4);
}

.work-step {
    padding: var(--space-5);
    border-radius: var(--radius);
    background-color: var(--color-surface);
}

.work-step p {
    margin: 0;
}

.work-step-icon {
    font-size: var(--text-xl);
    color: var(--color-accent);
    margin-bottom: var(--space-3);
}
</style>
