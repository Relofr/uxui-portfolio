<template>
    <div>
        <Fish />
        <section class="intro">
            <div class="intro-text">
                <p class="intro-role">Kyle Hatch · UX/UI Designer &amp; Front-End Engineer</p>
                <h1 class="display-heading">I design products, and then I build them.</h1>
                <p class="lead">
                    I turn research into clear, usable interfaces, then ship them in Vue. Most recently, I designed
                    and built a live Dota 2 lore site and match analytics tool on my own.
                </p>
                <div class="intro-actions">
                    <Button isPrimary text="View work" icon="arrow-down" @click="scrollToWork" />
                    <Button isSecondary text="Resume" iconFab="google-drive" @click="openResume" />
                </div>
            </div>
            <img class="intro-photo" :src="ProfilePicture" alt="Kyle Hatch">
        </section>

        <figure class="intro-quote">
            <blockquote>
                <p>“He absorbed the systems and architecture like a sponge and has quickly become a very reliable
                    front end developer, engineering complex interfaces with an astute attention to detail.”</p>
            </blockquote>
            <figcaption>Kris Jenkins, Product &amp; Engineering Leadership</figcaption>
        </figure>

        <div ref="work" class="work">
            <CaseStudiesView />
        </div>
    </div>
</template>

<script>
import CaseStudiesView from './CaseStudiesView.vue';
import Button from '../components/Button.vue';
import Fish from '../components/Fish.vue';
import ProfilePicture from '../assets/images/about/ProfilePicture.jpg';

export default {
    setup: () => {
        return { ProfilePicture };
    },
    methods: {
        scrollToWork() {
            this.$refs.work?.scrollIntoView({ behavior: 'smooth' })
        },
        openResume() {
            window.open(
                "https://drive.google.com/drive/folders/1_L-HW62dHv158qNmRoSWU9mdRWont_8y?usp=sharing",
                "_blank",
                "noopener,noreferrer"
            );
        }
    },
    components: { CaseStudiesView, Button, Fish }
}
</script>

<style lang="less">
.intro {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--space-7);
    padding: var(--space-8) 0 var(--space-7);
}

.intro-text {
    max-width: 680px;
}

.intro-role {
    font-family: var(--font-heading);
    font-size: var(--text-sm);
    font-weight: var(--fw-semibold);
    letter-spacing: 0.04em;
    color: var(--color-heading);
    margin-bottom: var(--space-4);
}

.intro-actions {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-3);
    margin-top: var(--space-5);
}

.intro-photo {
    flex: 0 0 auto;
    width: 260px;
    height: 260px;
    object-fit: cover;
    border-radius: 50%;
    box-shadow: var(--shadow-lg);
}

.intro-quote {
    max-width: 760px;
    padding-left: var(--space-5);
    border-left: 3px solid var(--color-accent);

    p {
        font-size: var(--text-lg);
        margin-bottom: var(--space-2);
    }

    figcaption {
        font-family: var(--font-heading);
        font-size: var(--text-sm);
        font-weight: var(--fw-semibold);
        color: var(--color-text-muted);
    }
}

.work {
    padding-top: var(--space-7);
    scroll-margin-top: var(--space-4);
}

@media (max-width: 800px) {
    .intro {
        flex-direction: column-reverse;
        align-items: flex-start;
        gap: var(--space-5);
        padding: var(--space-6) 0;
    }

    .intro-photo {
        width: 140px;
        height: 140px;
    }
}
</style>
