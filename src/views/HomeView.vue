<template>
    <div>
        <Section class="about-me-container" isReverse showImage src="ProfilePicture.jpeg" sectionTitle="Kyle Hatch"
            contentOne="Software Engineer + UX/UI designer at LogMeIn"
            contentTwo="Passionate about bringing my ideas to life and creating a great user experience." button />
        <div :class="{ 'visible': !visible }" class="down-arrow">
            <fa @click="scrollToElement('caseStudies')" icon="fa-angle-down" size="xl" bounce></fa>
        </div>
        <div ref="caseStudies">
            <CaseStudiesView class="case-studies-container"/>
        </div>
    </div>
</template>

<script setup>
import CaseStudiesView from './CaseStudiesView.vue';
import Button from '../components/Button.vue';
import Section from '../components/Section.vue';
</script>

<script>
export default {
    data() {
        return {
            visible: true,
            name: 'Kyle Hatch',
            job: 'Software Engineer + UX/UI designer at LogMeIn',
            bio: 'Passionate about bringing my ideas to life and creating a great user experience.'
        }
    },
    created() {
        window.addEventListener('scroll', this.handleScroll);
    },
    beforeUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        scrollToElement(refName) {
            const el = this.$refs[refName]
            if (el) {
                el.scrollIntoView({ behavior: "smooth" })
            }
        },
        handleScroll(event) {
            if (window.scrollY < 200) {
                this.visible = true;
            } else {
                this.visible = false;
            }
            console.log(window.scrollY);
        }
    },
    components: { Section, Button }
}
</script>

<style lang="less">
.about-me-container {
    display: flex;
    min-height: calc(100vh - 120px);
    align-content: center;
}

.about-me-container .col {
    justify-content: flex-start;
}

.visible {
    visibility: hidden;
}

.about-me-container img {
    width: 350px;
    border-radius: 50%;
}

.down-arrow {
    transform: translateY(-50px);
    display: flex;
    justify-content: center;

    & svg {
        cursor: pointer;
    }
}
</style>