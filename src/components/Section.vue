<template>
    <div>
        <div v-show="src" class="hero-container">
            <img class="hero-image" :src="src">
            <div v-show="sectionTitle" class="section-title primary-heading">{{ sectionTitle }}</div>
        </div>
        <div class="even-columns section-container" :class="{ 'reverseColumns': isReverse }">
            <div v-show="contentOne" class="col">
                <span class="primary-heading">{{ sectionTitle }}</span>
                <div>
                    <div v-show="contentOne" class="text-container">
                        <div v-show="dot" class="circle"><span></span></div>
                        <p class="fs-22">{{ contentOne }}</p>
                    </div>
                    <div v-show="contentTwo" class="text-container">
                        <div v-show="dot" class="circle"><span></span></div>
                        <p class="fs-22">{{ contentTwo }}</p>
                    </div>
                    <div v-show="contentThree" class="text-container">
                        <div v-show="dot" class="circle"><span></span></div>
                        <p class="fs-22">{{ contentThree }}</p>
                    </div>
                </div>
                <Button v-show="button" @click="downloadResume" isPrimary text="Resume" iconFab="google-drive"
                    size="lg" />
            </div>

            <div v-show="showImage">
                <img v-show="src2" class="section-image" :src="src2">
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
            window.open("https://drive.google.com/file/d/1r8OXqJwIf0fBbCHYqIz0P9WEDIuXsjRt/view?usp=sharing")
        },
    },
    props: {
        src: {
            type: String,
        },
        src2: {
            type: String,
        },
        sectionTitle: {
            type: String,
        },
        skillsTitle: {
            type: String,
        },
        sectionTitle: {
            type: String
        },
        contentOne: {
            type: String,
        },
        contentTwo: {
            type: String,
        },
        contentThree: {
            type: String,
        },
        dot: {
            type: Boolean
        },
        button: {
            type: Boolean,
            required: false
        },
        showImage: {
            type: Boolean,
        },
        isReverse: {
            type: Boolean
        },
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


.section-title {
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

.hero-image {
    width: 100%;
    height: 400px;
    background-position: center;
    object-fit: cover;
    text-align: center;
    border-radius: 4px;
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

.text-container {
    display: flex;
    align-items: center;
    gap: 20px;
    justify-content: flex-start;
}

.text-container:nth-child(2) {
    margin-bottom: 15px;
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