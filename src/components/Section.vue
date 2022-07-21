<template>
    <div data-aos="fade-up" data-aos-delay="80">
        <div v-show="heroImage" class="hero-container">
            <img class="hero-image" :src="`src/assets/images/` + heroImage">
            <div v-show="sectionTitle" class="section-title primary-heading">{{ sectionTitle }}</div>
        </div>
        <div class="even-columns section-container" :class="{ 'reverseColumns': isReverse }">
            <div v-show="contentOne" class="col">
                <span class="primary-heading">{{ sectionTitle }}</span>
                <p class="fs-22">{{ contentOne }}</p>
                <p class="fs-22">{{ contentTwo }}</p>
                <p class="fs-22">{{ contentThree }}</p>
                <Button v-show="button" @click="downloadResume()" isPrimary text="resume" iconFab="google-drive"
                    size="lg" />
            </div>

            <div v-show="showImage">
                <img v-show="src" class="section-image" :src="`src/assets/images/` + src">
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
        }
    },
    props: {
        heroImage: {
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
        src: {
            type: String
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
}

.col {
    flex-direction: column;
}

.hero-container {
    position: relative;
}

.section-container {
    position: relative;
    margin-bottom: 80px;
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
        align-items: flex-start;
        text-align: left;
    }
}

.reverseColumns .col {}

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
    }
}
</style>