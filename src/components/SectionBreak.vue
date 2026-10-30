<template>
    <h2 class="sectionBlock">
        <fa v-if="icon" :icon="icon" class="sectionBlock-icon" />
        {{ title }}
    </h2>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true
        },
        icon: {
            type: String
        },
        size: {
            type: String
        }
    }
}
</script>

<style>
.sectionBlock {
    display: flex;
    align-items: center;
    gap: var(--space-3);
    margin: var(--space-7) 0 0;
    padding-bottom: var(--space-3);
    border-bottom: 1px solid var(--color-border);
    font-family: var(--font-heading);
    font-size: var(--text-2xl);
    font-weight: var(--fw-bold);
    line-height: var(--leading-tight);
    letter-spacing: -0.02em;
    color: var(--color-heading);
}

.sectionBlock-icon {
    font-size: 0.7em;
    color: var(--color-accent);
}
</style>
