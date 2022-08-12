<template>

    <button @click="$emit('click')" :class="{
        'button button-primary': isPrimary,
        'button button-secondary': isSecondary,
    
    }">
        <span class="button-text button-text">{{ text }}</span>
        <fa v-if="icon" :icon="icon" :size="size" :class="animate"></fa>
        <fa v-if="iconFab" :icon="['fab', iconFab]" :size="sizeFab"></fa>
    </button>

</template>

<script>
export default {
    data() {
        return {

        }
    },
    props: {
        click: {
            type: String
        },
        icon: {
            type: String,
            required: false
        },
        iconFab: {
            type: String,
            required: false
        },
        size: {
            type: String,
            required: false
        },
        sizeFab: {
            type: String,
            required: false
        },
        text: {
            type: String,
            required: true
        },
        isPrimary: {
            type: Boolean
        },
        isSecondary: {
            type: Boolean
        },
        isDisabled: {
            type: Boolean
        },
        animate: {
            type: String
        }
    }
}
</script>

<style lang="less">
.button {
    cursor: pointer;
    display: flex;
    border: 0;
    font-weight: var(--fw-bold);
    padding: 10px 20px;
    font-size: var(--fs-18);
    text-transform: uppercase;
    border-radius: 4px;
    flex-direction: row;
    align-items: center;
    width: fit-content;
    transition-duration: 0.4s;

    &:hover {
        background-color: #e6a768;
    }
}

.button-text {
    padding-right: 15px;
}

.button-primary {
    background-color: var(--accent-color);
    color: var(--secondary-color);
}

.button-secondary {
    background-color: var(--primary-background-color);
    color: var(--primary-color);
}

@media (max-width: 800px) {
    .button-text {
        font-size: var(--fs-16);
    }
}
</style>
