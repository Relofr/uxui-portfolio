<template>

    <button @click="$emit('click')" :class="{
        'button button-primary': isPrimary,
        'button button-secondary': isSecondary,
    
    }">
        <span class="button-text">{{ text }}</span>
        <fa v-if="icon" :icon="icon" :size="size" :class="animate"></fa>
        <fa v-if="iconFab" :icon="['fab', iconFab]" :size="sizeFab"></fa>
    </button>

</template>

<script>
export default {
    emits: ['click'],
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
    display: inline-flex;
    align-items: center;
    gap: var(--space-3);
    width: fit-content;
    padding: var(--space-3) var(--space-5);
    border: 1px solid transparent;
    border-radius: var(--radius-sm);
    font-family: var(--font-heading);
    font-size: var(--text-sm);
    font-weight: var(--fw-semibold);
    letter-spacing: 0.04em;
    line-height: 1.2;
    text-transform: uppercase;
    cursor: pointer;
    transition: background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease;
}

.button-primary {
    background-color: var(--color-accent);
    color: var(--color-ink);

    &:hover:not(:disabled) {
        background-color: var(--color-accent-hover);
    }
}

.button-secondary {
    background-color: transparent;
    border-color: var(--color-heading);
    color: var(--color-heading);

    &:hover:not(:disabled) {
        background-color: var(--color-heading);
        color: var(--color-ink);
    }
}
</style>
