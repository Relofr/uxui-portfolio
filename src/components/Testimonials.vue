<template>
    <div class="testimonials-container">
        <p class="primary-heading testimonials-button">Testimonials <Button @click="openLinkedIn" isPrimary text="View"
                iconFab="linkedin" size="xl" />
        </p>

        <!-- <div class="badge-base LI-profile-badge" data-locale="en_US" data-size="medium" data-theme="light" data-type="VERTICAL" data-vanity="kyle-hatch" data-version="v1"><a class="badge-base__link LI-simple-link" href="https://www.linkedin.com/in/kyle-hatch?trk=profile-badge"></a></div> -->
        
        <div v-for="(p, index) in paragraphs" :key="index">
            <p>{{ p.text }}</p>
            <p class="secondary-heading">{{ p.signature }}</p>
            <hr v-if="index != paragraphs.length - 1" class="solid">
        </div>
    </div>
</template>

<script>
import Button from '../components/Button.vue'
export default {
    data() {
        return {
            paragraphs: [
                {
                    text: `I have been so impressed with Kyle. Besides having a remarkable work ethic, hilarious sense of humor, and a great personality, he is also an intelligent and high quality developer. Upon starting at Banyan he immediately created a large library of reusable VUE.JS components that we have since used to give our WebApp a new look and feel. He assisted in porting our ASP.NET MVC Razor WebApp to use VUE.JS, VUEX, Redux, Flux and NPM. Kyle happily takes the initiative and volunteers for new assignments. Over one weekend he worked with another of our devs to create an app for Banyan on Amazon's Alexa platform. Kyle is dependable and we often rely on him for his meticulous CSS skills and his knowledge of Javascript Frameworks.`,
                    signature: `- Brett Flake (Technical Product Manager)`
                },
                {
                    text: `We got very lucky finding Kyle when we did. He quickly picked up our tech stack and began doing all the development tasks nobody had time to do. He absorbed the systems and architecture like a sponge and has quickly become a very reliable front end developer, engineering complex interfaces with an astute attention to detail. Kyle is very professional, has a great sense of humor, and I have greatly enjoyed having him on the team.`,
                    signature: `- Kris Jenkins (Product & Engineering Leadership)`
                },
                {
                    text: `Kyle is a sharp dude with a knack for figuring things out. He came in fresh out of a boot camp and immediately began contributing in a meaningful way. This guy is a great catch and proves to be a value add to any team lucky enough to grab him. He’s a solid developer and great guy in general.`,
                    signature: `- Nic Laughter (Software Engineer)`
                }
            ]
        }
    },
    methods: {
        openLinkedIn() {
            // window.open("https://www.linkedin.com/in/kyle-hatch/details/recommendations/")
            window.open("https://www.linkedin.com/in/kyle-hatch/")
        }
    },
    components: { Button }
}
</script>

<style lang="less" scoped>
hr.solid {
    border-top: 1px solid var(--secondary-text-color);
    border-radius: 20px;
    // &:last-child {
    //   display: none;
    // }
}

.testimonials-button {
    display: flex;
    gap: 15px;
    align-items: center;
}
</style>