<template>
    <component :is="isLink ? 'router-link' : 'div'" v-bind="isLink ? { to: '/' + route } : {}"
        class="card" :class="{ 'card-static': !isLink }">
        <ul role="list" class="list">
            <li role="listitem" class="list-item">
                <div class="list-content">
                    <img :src="src" :alt="alt">
                    <h3 v-if="title" class="card-title">{{ title }}</h3>
                    <p v-if="text" class="card-text">{{ text }}</p>
                    <Button id="card-button" v-show="button" :text="buttonText" @click="" type="submit" :icon="icon"
                        :iconFab="iconFab" size='lg' isPrimary />
                </div>
            </li>
        </ul>
    </component>
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
    computed: {
        isLink() {
            return !!this.route
        }
    },
    components: { Button }
}
</script>

<style lang="less" scoped>
.card {
    display: block;
    width: 100%;
}

.list {
    display: flex;
    flex-wrap: wrap;
    margin: 0;
}

.list-item {
    display: flex;
    width: 100%;
}

.list-content {
    display: flex;
    flex-direction: column;
    gap: var(--space-2);
    width: 100%;
}

.card-title {
    font-size: var(--text-xl);
    font-weight: var(--fw-semibold);
    line-height: 1.3;
    margin: 0;
}

.card-text {
    color: var(--color-text-muted);
    margin: 0;
}

.card-static .list-content img:hover {
    transform: none;
    box-shadow: var(--shadow-sm);
}

#card-button {
    margin-top: var(--space-2);
}

.list-content img {
    width: 100%;
    height: 320px;
    margin-bottom: var(--space-2);
    object-fit: cover;
    border-radius: var(--radius);
    box-shadow: var(--shadow-sm);
    transition: transform 0.2s ease, box-shadow 0.2s ease;

    &:hover {
        transform: scale(1.02);
        box-shadow: var(--shadow-lg);
    }
}

</style>
