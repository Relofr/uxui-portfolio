<template>
    <div>
        <div v-show="src" class="hero-container">
            <img class="hero-image" :src="src">
            <div v-show="heroTitle" class="hero-title primary-heading">{{ heroTitle }}</div>
        </div>
        <div class="even-columns section-container" :class="{ 'reverseColumns': isReverse, 'isColumn': isColumn }">
            <div class="col">
                <span v-show="sectionTitle" class="primary-heading section-title">{{ sectionTitle }}</span>
                <div class="test">
                    <div v-show="contentOne" class="text-container">
                        <div v-show="showDot" class="circle"><span></span></div>
                        <p class="fs-22">{{ contentOne }}</p>
                    </div>
                    <div v-show="contentTwo" class="text-container">
                        <div v-show="showDot" class="circle"><span></span></div>
                        <p class="fs-22">{{ contentTwo }}</p>
                    </div>
                    <div v-show="contentThree" class="text-container">
                        <div v-show="showDot" class="circle"><span></span></div>
                        <p class="fs-22">{{ contentThree }}</p>
                    </div>
                    <div v-show="contentFour" class="text-container">
                        <div v-show="showDot" class="circle"><span></span></div>
                        <p class="fs-22">{{ contentFour }}</p>
                    </div>
                    <div v-show="links" class="text-container links">
                        <div v-show="showDot" class="circle"><span></span></div>
                        <a id="links" :href="linkOne" target="_blank">
                            <fa v-if="icon" :icon="icon" :size="size"></fa>
                            <fa v-if="iconFab" :icon="['fab', iconFab]" :size="sizeFab"></fa>{{ linkOneText }}
                        </a>
                        <a id="links" :href="linkTwo" target="_blank">
                            <fa v-if="icon2" :icon="icon2" :size="size2"></fa>
                            <fa v-if="iconFab2" :icon="['fab', iconFab2]" :size="sizeFab2"></fa>{{ linkTwoText }}
                        </a>
                    </div>
                </div>
                <Button v-show="button" @click="downloadResume" isPrimary text="Resume" iconFab="google-drive"
                    size="lg" />
            </div>

            <div v-show="showImage">
                <img v-show="src2" class="section-image" :src="src2" :alt="alt">
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
            window.open("https://drive.google.com/file/d/1kqumqmpnz9jl7mHfIjz6mtTymqw3_TDn/view?usp=sharing")
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
        sectionTitle: {
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
        }
    },
    components: { Button }
}
</script>

<style lang="less" scoped>
img,
picture {
    max-width: 100%;
    display: block;
    border-radius: 5px;
}

.col {
    flex-direction: column;
}

.hero-container {
    position: relative;
}

.section-container {
    position: relative;
}


.hero-title {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 10px;
    text-align: center;
    background-color: rgba(0, 0, 0, .60);
    border-radius: 2px;
    color: var(--primary-color);
}

.section-title {
    padding-top: 25px;
}

.hero-image {
    width: 100%;
    height: 400px;
    background-position: center;
    object-fit: cover;
    text-align: center;
    border-radius: 4px;
    margin-top: 100px;
}

.even-columns {
    display: flex;
    align-items: center;
    text-align: left;
    gap: 1em;
}

.even-columns>* {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: flex-start;
}

.reverseColumns {
    flex-direction: row-reverse;

    .col {
        // align-items: flex-start;
        // text-align: left;
    }
}

.isColumn {
    flex-direction: column;
    align-items: flex-start;
}

.text-container {
    display: flex;
    align-items: center;
    gap: 20px;
    justify-content: flex-start;
}

.test {
    margin-bottom: 25px;
}

.circle {
    display: inline-block;
    border-radius: 50%;
    min-width: 8px;
    min-height: 8px;
    max-width: 8px;
    max-height: 8px;
    padding: 5px;
    background: var(--accent-color);
    color: white;
    text-align: center;
    line-height: 1;
    box-sizing: content-box;
    white-space: nowrap;
}

.circle:before {
    content: "";
    display: inline-block;
    vertical-align: middle;
    padding-top: 100%;
    height: 0;
}

.circle span {
    display: inline-block;
    vertical-align: middle;
}

.links svg,
a {
    padding-right: 10px;
    color: white;
    display: flex;
    align-items: center;
}

.links a:hover {
    // color: var(--accent-color);
}

@media (max-width: 800px) {
    .even-columns {
        display: flex;
        flex-direction: column-reverse;
    }

    .even-columns>* {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
    }

    .text-container {
        justify-content: center;
    }
}
</style>