<template>
    <component :is="isLink ? 'router-link' : 'div'" v-bind="isLink ? { to: '/' + route } : {}"
        class="card" :class="{ 'card-static': !isLink }">
        <ul role="list" class="list">
            <li role="listitem" class="list-item">
                <div class="list-content">
                    <img loading="lazy" decoding="async" :src="src" :alt="alt" :data-zoomable="isLink ? null : true" :tabindex="isLink ? null : 0">
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

/* Linked project cards share the Alianza text-card frame and hover */
.card:not(.card-static) {
    overflow: hidden; /* image sits flush against the border, clipped to the rounded corners */
    border: 1px solid var(--color-border);
    border-radius: var(--radius);
    background-color: var(--color-surface);
    transition: border-color 0.2s ease, transform 0.2s ease;

    &:hover {
        border-color: var(--color-accent);
        transform: translateY(-2px);
    }

    .list-content {
        padding-bottom: var(--space-4);
    }

    .list-content img {
        border-radius: 0;
        box-shadow: none;
    }

    /* keep the title, text and button off the border */
    .list-content > :not(img) {
        margin-inline: var(--space-4);
    }
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
}

</style>
