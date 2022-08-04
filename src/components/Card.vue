<template>
    <router-link :to="`/` + route">
        <ul class="list">
            <li class="list-item">
                <div class="list-content">
                    <img :src="src" :alt="alt">
                    <p class="fw-bold primary-text">{{ title }}</p>
                    <p v-show="text" class="secondary-text">{{ text }}</p>
                    <Button v-show="button" :text="buttonText" @click="" type="submit" :icon="icon" :iconFab="iconFab"
                        size='lg' isPrimary />
                </div>
            </li>
        </ul>
    </router-link>
</template>

<script>
import Button from '../components/Button.vue'
export default {
    data() {
        return {

        }
    },
    props: {
        route: { type: String },
        title: { type: String },
        text: { type: String },
        button: { type: Boolean },
        buttonText: { type: String },
        icon: { type: String },
        iconFab: { type: String },
        date: { type: String },
        src: { type: String },
        alt: { type: String }
    },
    components: { Button }
}
</script>

<style lang="less" scoped>
.list {
    display: flex;
    flex-wrap: wrap;
}

.list-item {
    display: flex;
    width: 100%;
}

.list-content {
    display: flex;
    flex-direction: column;
    width: 100%;
}

.list-content p {
    flex: 1 0 auto;
}

.list-content img {
    border-radius: 4px;
    width: 100%;
    height: 350px;
    margin-bottom: .5em;
    margin-top: 1em;
    object-fit: cover;
    transition: transform .2s ease;

    -webkit-box-shadow: 0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 12%), 0 1px 5px 0 rgb(0 0 0 / 20%);
    box-shadow: 0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 12%), 0 1px 5px 0 rgb(0 0 0 / 20%);

    &:hover {
        transform: scale(1.04);
        -webkit-box-shadow: 0 16px 24px 2px rgb(0 0 0 / 16%), 0 6px 30px 5px rgb(0 0 0 / 12%), 0 8px 10px -7px rgb(0 0 0 / 20%);
        box-shadow: 0 16px 24px 2px rgb(0 0 0 / 16%), 0 6px 30px 5px rgb(0 0 0 / 12%), 0 8px 10px -7px rgb(0 0 0 / 20%);
    }
}

@media (max-width: 800px) {
    .list-content {
        align-items: center;
        text-align: center;
    }
}
</style>