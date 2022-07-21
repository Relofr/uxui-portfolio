<template>
    <div>
        <Section sectionTitle="About Me" heroImage="/about/about.png" />
        <Overview title=""
            about="My journey to UX/UI started at a young age when I would create designs in Microsoft Paint and write simple HTML/CSS on my parent's computer. Since then, I have studied Computer Science and have been working as a software engineer. I plan to transition full-time to UX/UI after I finish the program at The University of Utah."
            description="I am a strong believer in dynamic and scalable design. Anytime you can reuse components in different ways, it not only speeds up workflow but also keeps consistency throughout the project, which is great for user experience. As an engineer, I have experience collaborating closely with design teams to make sure we keep that in mind."
            descriptionTwo="In my free time, I enjoy photography, bird watching, video games, and taking long walks." />
            <div>
                <p class="primary-heading">My Design Process</p>
                <img src="../assets/images/about/design-process.png" alt="">
            </div>
        <Skills title="My Skills" showIcons />
    </div>
</template>

<script setup>
import Skills from '../components/Skills.vue'
import Overview from '../components/Overview.vue';
import Section from '../components/Section.vue';
import Card from '../components/Card.vue';
</script>

<style>
</style>