<template>
    <div>
        <Section sectionTitle="" />
        <p class="flex code-font">{{ open }}</p>
        <div class="page-spacer">

            <Overview title="My story"
                about="My journey to UX/UI started at a young age when I would create designs in Microsoft Paint and write simple HTML/CSS on my parent's computer. Since then, I have studied Computer Science and have been working as a software engineer. I plan to transition full-time to UX/UI after I finish the program at The University of Utah."
                description="I am a strong believer in dynamic and scalable design. Anytime you can reuse components in different ways, it not only speeds up workflow, but also keeps consistency throughout the project, making a great user experience. As an engineer, I have experience collaborating closely with design teams to make sure we keep that in mind."
                descriptionTwo="In my free time, I enjoy photography, bird watching, video games, and taking long walks." />
            <div>
                <p class="primary-heading">Design Process</p>
                <!-- <img src="../assets/images/about/design-process.png" alt=""> -->
                <div class="design-process">
                    <div class="process-container">
                        <span id="design-process-dot">
                            <fa icon="heart" size="4x" color='#ED3646' />
                        </span>
                        <p>Empathize</p>
                    </div>
                    <div class="process-container">
                        <span id="design-process-dot">
                            <fa icon="file-pen" size="4x" color='#0E67A7' />
                        </span>
                        <p>Define</p>
                    </div>
                    <div class="process-container">
                        <span id="design-process-dot">
                            <fa icon="brain" size="4x" color='#FFCA46' />
                        </span>
                        <p>Ideate</p>
                    </div>
                    <div class="process-container">
                        <span id="design-process-dot">
                            <fa icon="diagram-project" size="4x" color='#F6AA4D' />
                        </span>
                        <p>Prototype</p>
                    </div>
                    <div class="process-container">
                        <span id="design-process-dot">
                            <fa icon="flask-vial" size="4x" color='#0EAA75' />
                        </span>
                        <p>Test</p>
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
import Section from '../components/Section.vue';
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
    components: { Skills, Overview, Section, Testimonials }
}
</script>

<style>
.about-view-container {
    display: flex;
    flex-direction: column;
}

.design-process {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    flex-wrap: wrap;
}

.process-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

#design-process-dot {
    min-width: 160px;
    min-height: 160px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: var(--fs-18);
    color: var(--primary-color);
    background-color: white;
    border: 2px solid black;
    color: var(--secondary-color);
    transition: all .15s ease;
}

#design-process-dot:hover {
    background-color: black;
}

@media (max-width: 800px) {
    .design-process {
        justify-content: flex-start;
    }
}
</style>