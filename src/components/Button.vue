<template>
    <div>
        <button :class="{
            'button button-primary': isPrimary,
            'button button-secondary': isSecondary
        }">
            {{ text }}
            <fa v-show="icon" :icon="icon" :size="size"></fa>
            <fa v-show="iconFab" :icon="['fab', iconFab]" :size="size"></fa>
        </button>
    </div>
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
        text: {
            type: String,
            required: true
        },
        isPrimary: {
            type: Boolean
        },
        isSecondary: {
            type: Boolean
        }
    }
}
</script>

<style>
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
}

.button svg {
    padding-left: 10px;
}

.button-primary {
    background-color: var(--secondary-background-color);
    color: var(--primary-color);
}

.button-secondary {
    background-color: var(--secondary-background-color);
    color: var(--primary-color);
}
</style>
