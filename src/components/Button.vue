<template>

    <button :class="{
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
    data() {
        return {

        }
    },
    props: {
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
    margin-top: 15px;
    flex-direction: row;
    align-items: center;
    width: fit-content;
    &:hover {
        background-color: var(--accent-color);
    }
}

.button-text {
    padding-right: 15px;
}

.button-primary {
    background-color: var(--secondary-background-color);
    color: var(--primary-color);
}

.button-secondary {
    background-color: var(--primary-background-color);
    color: var(--primary-color);
}
</style>
