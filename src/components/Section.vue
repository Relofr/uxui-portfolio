<template>
    <div>
        <div v-if="src" class="hero-container">
            <img class="hero-image" :src="src" :alt="alt || 'section image'">
            <div v-show="heroTitle" class="hero-title primary-heading">{{ heroTitle }}</div>
        </div>
        <div class="even-columns section-container" :class="{ 'reverseColumns': isReverse, 'isColumn': isColumn }">
            <div class="col">
                <h1 v-if="src && sectionTitle" class="display-heading">{{ sectionTitle }}</h1>
                <h3 v-else-if="sectionTitle" class="secondary-heading section-title">{{ sectionTitle }}</h3>
                <div class="section-body">
                    <div v-show="contentOne" class="text-container">
                        <div v-show="showDot" class="circle"><span></span></div>
                        <p>{{ contentOne }}</p>
                    </div>
                    <div v-show="contentTwo" class="text-container">
                        <div v-show="showDot" class="circle"><span></span></div>
                        <p>{{ contentTwo }}</p>
                    </div>
                    <div v-show="contentThree" class="text-container">
                        <div v-show="showDot" class="circle"><span></span></div>
                        <p>{{ contentThree }}</p>
                    </div>
                    <div v-show="contentFour" class="text-container">
                        <div v-show="showDot" class="circle"><span></span></div>
                        <p>{{ contentFour }}</p>
                    </div>
                    <div v-show="links" class="text-container links">
                        <div v-show="showDot" class="circle"><span></span></div>
                        <a v-if="linkOne" :href="linkOne" target="_blank" rel="noopener noreferrer">
                            <fa v-if="icon" :icon="icon" :size="size"></fa>
                            <fa v-if="iconFab" :icon="['fab', iconFab]" :size="sizeFab"></fa>{{ linkOneText }}
                        </a>
                        <a v-if="linkTwo" :href="linkTwo" target="_blank" rel="noopener noreferrer">
                            <fa v-if="icon2" :icon="icon2" :size="size2"></fa>
                            <fa v-if="iconFab2" :icon="['fab', iconFab2]" :size="sizeFab2"></fa>{{ linkTwoText }}
                        </a>
                    </div>
                </div>
                <Button v-show="button" @click="downloadResume" isPrimary text="Resume" iconFab="google-drive"
                    size="lg" />
            </div>

            <div v-if="showImage && src2" :class="{ 'section-media-compact': compact }">
                <img class="section-image" :src="src2" :alt="alt || sectionTitle || 'case study image'">
            </div>

        </div>
    </div>
</template>

<script>
import Button from './Button.vue'
export default {
    data() {
        return {};
    },
    methods: {
        downloadResume() {
            window.open(
                "https://drive.google.com/drive/folders/1_L-HW62dHv158qNmRoSWU9mdRWont_8y?usp=sharing",
                "_blank",
                "noopener,noreferrer"
            );
        },
    },
    props: {
        src: {
            type: String
        },
        src2: {
            type: String
        },
        alt: {
            type: String
        },
        sectionTitle: {
            type: String
        },
        heroTitle: {
            type: String
        },
        skillsTitle: {
            type: String
        },
        contentOne: {
            type: String
        },
        contentTwo: {
            type: String
        },
        contentThree: {
            type: String
        },
        contentFour: {
            type: String
        },
        links: {
            type: Boolean
        },
        linkOne: {
            type: String
        },
        linkTwo: {
            type: String
        },
        linkOneText: {
            type: String
        },
        linkTwoText: {
            type: String
        },
        icon: {
            type: String
        },
        iconFab: {
            type: String
        },
        size: {
            type: String
        },
        sizeFab: {
            type: String
        },
        icon2: {
            type: String
        },
        iconFab2: {
            type: String
        },
        size2: {
            type: String
        },
        sizeFab2: {
            type: String
        },
        showDot: {
            type: Boolean
        },
        button: {
            type: Boolean
        },
        showImage: {
            type: Boolean
        },
        isReverse: {
            type: Boolean
        },
        isColumn: {
            type: Boolean
        },
        compact: {
            type: Boolean
        }
    },
    components: { Button }
}
</script>

<style lang="less" scoped>
img,
picture {
    display: block;
    max-width: 100%;
    border-radius: var(--radius);
}

.col {
    flex-direction: column;
}

.hero-container,
.section-container {
    position: relative;
}

.hero-image {
    width: 100%;
    height: auto;
    aspect-ratio: 2 / 1;
    object-fit: cover;
}

.hero-title {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin: 0;
    padding: var(--space-2) var(--space-4);
    border-radius: var(--radius-sm);
    background-color: rgba(0, 0, 0, 0.6);
    font-size: var(--text-3xl);
    text-align: center;
}

.hero-container + .section-container {
    margin-top: var(--space-6);
}

.even-columns {
    display: flex;
    align-items: center;
    gap: var(--space-6);
    text-align: left;
}

.even-columns > * {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: flex-start;
}

.reverseColumns {
    flex-direction: row-reverse;
}

.isColumn {
    flex-direction: column;
    align-items: flex-start;
}

.section-title {
    margin-bottom: var(--space-3);
}

.section-media-compact img {
    max-width: 720px;
}

.section-body {
    display: flex;
    flex-direction: column;
    gap: var(--space-3);
}

.col > .button {
    margin-top: var(--space-5);
}

.text-container {
    display: flex;
    align-items: flex-start;
    gap: var(--space-3);
}

.text-container p {
    margin: 0;
}

.circle {
    flex: 0 0 8px;
    width: 8px;
    height: 8px;
    margin-top: 0.7em;
    border-radius: 50%;
    background: var(--color-accent);
}

.links {
    gap: var(--space-5);
}

.links a {
    display: inline-flex;
    align-items: center;
    gap: var(--space-2);
    font-family: var(--font-heading);
    font-size: var(--text-sm);
    font-weight: var(--fw-semibold);
    color: var(--color-heading);
    transition: color 0.2s ease;

    &:hover {
        color: var(--color-accent);
    }
}

@media (max-width: 800px) {
    .even-columns {
        flex-direction: column-reverse;
    }

    .isColumn {
        flex-direction: column;
    }

    .even-columns > * {
        width: 100%;
        align-items: flex-start;
    }

    .hero-image {
        aspect-ratio: 16 / 9;
    }

    .hero-title {
        max-width: calc(100% - 2 * var(--space-4));
        font-size: var(--text-2xl);
        white-space: nowrap;
    }
}
</style>
