<template>
    <div class="testimonials-container">
        <div class="testimonials-header">
            <h2 class="primary-heading">Testimonials</h2>
            <Button @click="openLinkedIn" isPrimary text="View" iconFab="linkedin" />
        </div>

        <figure v-for="(p, index) in paragraphs" :key="index" class="testimonial">
            <blockquote>
                <p>{{ p.text }}</p>
            </blockquote>
            <figcaption class="testimonial-author">{{ p.signature }}</figcaption>
        </figure>
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
.testimonials-container {
    display: flex;
    flex-direction: column;
    gap: var(--space-6);
}

.testimonials-header {
    display: flex;
    align-items: center;
    gap: var(--space-4);
}

.testimonials-header .primary-heading {
    margin: 0;
}

.testimonial {
    padding-left: var(--space-5);
    border-left: 3px solid var(--color-accent);
}

.testimonial p {
    margin: 0 0 var(--space-3);
}

.testimonial-author {
    font-family: var(--font-heading);
    font-size: var(--text-sm);
    font-weight: var(--fw-semibold);
    color: var(--color-text-muted);
}
</style>
