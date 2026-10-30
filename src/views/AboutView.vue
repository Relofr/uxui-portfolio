<template>
    <div>
        <p class="flex code-font">{{ open }}</p>
        <div class="page-spacer">

            <Overview title="My story"
                about="I started building digital experiences early, learning design and HTML/CSS before I fully understood the systems behind great interfaces. Since then, I’ve grown into a software engineer with a strong UX/UI lens, blending technical execution with a thoughtful design process."
                description="I value scalable systems and reusable patterns because they improve consistency, speed up delivery, and create better user experiences. I enjoy working closely with cross-functional teams to turn product ideas into clear, polished experiences that feel intentional from the first click to the final detail."
                descriptionTwo="Outside of work, I enjoy photography, bird watching, gaming, and spending time outdoors." />
            <div>
                <h2 class="primary-heading">How I work</h2>
                <div class="how-i-work">
                    <div class="work-step">
                        <fa icon="magnifying-glass" class="work-step-icon" />
                        <h3 class="secondary-heading">Research</h3>
                        <p>Surveys, interviews, affinity maps, and journey maps to find the real problem before designing anything.</p>
                    </div>
                    <div class="work-step">
                        <fa icon="pen-ruler" class="work-step-icon" />
                        <h3 class="secondary-heading">Design</h3>
                        <p>Wireframes to high-fidelity prototypes in Figma, tested with users before they go to code.</p>
                    </div>
                    <div class="work-step">
                        <fa icon="code" class="work-step-icon" />
                        <h3 class="secondary-heading">Build</h3>
                        <p>I ship my own designs in Vue, with reusable components and responsive, accessible layouts, so nothing gets lost in handoff.</p>
                    </div>
                </div>
            </div>
            <Skills title="Skillset" showIcons />
            <Testimonials />
        </div>
        <p class="flex code-font">{{ close }}</p>
    </div>
</template>

<script>
import Skills from '../components/Skills.vue'
import Overview from '../components/Overview.vue';

import aboutMe from '../assets/images/about/about.png';
import Testimonials from '../components/Testimonials.vue'

export default {
    setup: () => {
        return { aboutMe };
    },
    data() {
        return {
            open: "<about-me>",
            close: "</about-me>"
        }
    },
    components: { Skills, Overview, Testimonials }
}
</script>

<style>
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
