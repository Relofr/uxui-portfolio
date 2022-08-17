<template>
    <div>
        <Fish />
        <div class="ocean">
            <div class="wave"></div>
            <div class="wave"></div>
        </div>
        <div class="page-spacer">
            <Section class="about-me-container" isReverse showImage :src2="ProfilePicture" sectionTitle="Kyle Hatch"
                contentOne="Software Engineer + UX/UI designer"
                contentTwo="Passionate about bringing my ideas to life and creating a great user experience."
                :alt="`profile picture`" button />
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
import Fish from '../components/Fish.vue'
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
    components: { Section, Button, Fish }
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

.ocean { 
  height: 100%;
  width:100%;
  position:absolute;
  top:30%;
  left:0;
  background-color: rgba(44, 92, 103, 1);
  z-index: -1;
}

.wave {
  background: url(../assets/wave2.svg) repeat-x;
  position: absolute;
  top: -197px;
  width: 6400px;
  height: 198px;
  animation: wave 12s cubic-bezier( 0.36, 0.45, 0.63, 0.53) infinite;
  transform: translate3d(0, 0, 0);
}

.wave:nth-of-type(2) {
  top: -175px;
  animation: wave 12s cubic-bezier( 0.36, 0.45, 0.63, 0.53) -.125s infinite, swell 10s ease -1.25s infinite;
  opacity: 1;
}

@keyframes wave {
  0% {
    margin-left: 0;
  }
  100% {
    margin-left: -1600px;
  }
}

@keyframes swell {
  0%, 100% {
    transform: translate3d(0,-25px,0);
  }
  50% {
    transform: translate3d(0,5px,0);
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