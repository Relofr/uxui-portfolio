<template>
    <div>
        <div class="page-spacer">
            <Section class="about-me-container" isReverse showImage :src2="ProfilePicture" sectionTitle="Kyle Hatch"
                contentOne="Software Engineer + UX/UI designer at LogMeIn"
                contentTwo="Passionate about bringing my ideas to life and creating a great user experience." button />
        </div>
        <div :class="{ 'visible': !visible }" class="down-arrow">
            <fa @click="scrollToElement('caseStudies')" icon="fa-angle-down" size="xl" bounce></fa>
        </div>
        <div ref="caseStudies">
            <CaseStudiesView class="case-studies-container" />
        </div>
    </div>
</template>

<script setup>
import CaseStudiesView from './CaseStudiesView.vue';
import Button from '../components/Button.vue';
import Section from '../components/Section.vue';
import ProfilePicture from '../assets/images/about/ProfilePicture.jpg'
</script>

<script>
export default {
    setup: () => {
        return { ProfilePicture };
    },
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
            // console.log(window.scrollY);
        }
    },
    components: { Section, Button }
}
</script>

<style lang="less">
.about-me-container {
    display: flex;
    min-height: calc(100vh - 175px);
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
    height: 350px;
    object-fit: cover;
    border-radius: 50%;

}

.down-arrow {
    transform: translateY(0);
    display: flex;
    justify-content: center;

    & svg {
        cursor: pointer;
    }
}

@media (max-width: 800px) {
    .about-me-container img {
        width: 300px;
        height: 300px;
        object-fit: cover;
        border-radius: 50%;
    }

    .about-me-container {
        min-height: calc(100vh - 203px);
    }

    .down-arrow {
        transform: translateY(30px);
        display: flex;
        justify-content: center;
        font-size: 18px;
        margin-bottom: 35px;
    }
}
</style>