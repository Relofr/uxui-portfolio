<template>
    <div class="skills-container">
        <h2 class="primary-heading">Areas of expertise</h2>
        <ul class="expertise">
            <li v-for="area in expertise" :key="area">{{ area }}</li>
        </ul>

        <h3 class="secondary-heading skills-heading">Skills &amp; tools</h3>
        <dl class="skills-list">
            <div v-for="group in skills" :key="group.name" class="skills-group">
                <dt class="label">{{ group.name }}</dt>
                <dd>{{ group.items }}</dd>
            </div>
        </dl>
    </div>
</template>

<script>
export default {
    data() {
        return {
            expertise: [
                'End-to-End Product Design',
                'Design Systems & Figma Standards',
                'Interactive Prototyping',
                'User Research & Testing',
                'Information Architecture',
                'AI-Powered Experiences',
                'AI-Assisted Design-to-Code',
                'Data Visualization',
                'Accessibility',
                'B2B SaaS / UCaaS'
            ],
            skills: [
                { name: 'Research', items: 'User interviews, surveys, personas, affinity and empathy mapping, competitive analysis, usability testing, A/B testing' },
                { name: 'Design', items: 'User flows, journey maps, site maps, wireframes, lo- to hi-fi prototypes, visual design, typography, accessibility' },
                { name: 'Design tools', items: 'Figma, FigJam, Miro, InVision, Adobe Creative Suite' },
                { name: 'AI tools', items: 'Claude Design, Claude Code (AI-assisted prototyping and design-to-code)' },
                { name: 'Front-end', items: 'Vue.js / Vue 3, JavaScript, HTML, CSS, Vite, Git and GitHub' },
                { name: 'APIs & platforms', items: 'GraphQL, REST, Cloudflare Workers, GitHub Actions, Netlify, SIP/VoIP' }
            ]
        }
    }
}
</script>

<style scoped>
.skills-container {
    display: flex;
    flex-direction: column;
}

.expertise {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-2);
    margin-bottom: var(--space-6);
}

.expertise li {
    padding: var(--space-2) var(--space-4);
    border-radius: 999px;
    background-color: var(--color-surface-light);
    color: var(--color-ink);
    font-family: var(--font-heading);
    font-size: var(--text-sm);
    font-weight: var(--fw-semibold);
}

.skills-heading {
    margin-bottom: var(--space-4);
}

.skills-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: var(--space-5) var(--space-6);
}

.skills-group dd {
    margin: 0;
    color: var(--color-text);
}
</style>
