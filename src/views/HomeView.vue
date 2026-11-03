<template>
    <div>
        <Fish />
        <section class="intro">
            <div class="intro-text">
                <h1 class="display-heading intro-name">Kyle Hatch</h1>
                <p class="intro-title">UX/UI Product Designer</p>
                <p class="lead">
                    4+ years owning end-to-end design for a cloud VoIP and video conferencing platform, including
                    its admin portal and AI-powered call analytics and transcription.
                </p>
                <p>
                    With 8 years in tech across front-end engineering and API support, I design within real
                    engineering constraints and can take ideas from research to shipped code.
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
                <p>“{{ quote.text }}”</p>
            </blockquote>
            <figcaption>{{ quote.author }}</figcaption>
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

const QUOTES = [
    {
        text: 'He absorbed the systems and architecture like a sponge and has quickly become a very reliable front end developer, engineering complex interfaces with an astute attention to detail.',
        author: 'Kris Jenkins, Product & Engineering Leadership'
    },
    {
        text: 'Kyle is dependable and we often rely on him for his meticulous CSS skills and his knowledge of Javascript Frameworks.',
        author: 'Brett Flake, Technical Product Manager'
    },
    {
        text: 'This guy is a great catch and proves to be a value add to any team lucky enough to grab him.',
        author: 'Nic Laughter, Software Engineer'
    }
];

// Show the next quote on each page load, remembering the last one shown
function nextQuote() {
    const key = 'homeQuoteIndex';
    let index;
    try {
        const last = parseInt(localStorage.getItem(key), 10);
        index = Number.isNaN(last) ? 0 : (last + 1) % QUOTES.length;
        localStorage.setItem(key, index);
    } catch {
        index = Math.floor(Math.random() * QUOTES.length);
    }
    return QUOTES[index];
}

export default {
    setup: () => {
        return { ProfilePicture, quote: nextQuote() };
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
/* Lift page content above the decorative fish layer */
.intro,
.intro-quote,
.work {
    position: relative;
    z-index: 1;
}

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

.intro-name {
    margin-bottom: var(--space-2);
}

.intro-title {
    font-family: var(--font-heading);
    font-size: var(--text-xl);
    font-weight: var(--fw-semibold);
    color: var(--color-heading);
    margin-bottom: var(--space-5);
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
