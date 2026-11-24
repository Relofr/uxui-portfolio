<template>
    <button type="button" role="switch" class="theme-toggle" :aria-checked="isFish" @click="toggleTheme">
        <span class="theme-toggle-track" aria-hidden="true">
            <span class="theme-toggle-thumb">
                <fa icon="fish"></fa>
            </span>
        </span>
        <span class="theme-toggle-label">Fish mode</span>
    </button>
</template>

<script setup>
import { isFish, toggleTheme } from '../theme'
</script>

<style scoped>
.theme-toggle {
    display: inline-flex;
    align-items: center;
    gap: var(--space-3);
    padding: var(--space-1) var(--space-4) var(--space-1) var(--space-1);
    border: 1px solid var(--color-border);
    border-radius: 999px;
    background-color: var(--color-surface);
    color: var(--color-heading);
    font-family: var(--font-nav); /* same in both themes so the toggle doesn't resize when flipped */
    font-size: 0.8125rem;
    font-weight: var(--fw-semibold);
    letter-spacing: 0.02em;
    cursor: pointer;
    transition: border-color 0.2s ease, background-color 0.2s ease;
}

.theme-toggle:hover {
    border-color: var(--color-accent);
}

.theme-toggle-track {
    position: relative;
    width: 44px;
    height: 24px;
    border-radius: 999px;
    background-color: rgba(255, 255, 255, 0.12);
    transition: background-color 0.25s ease;
}

.theme-toggle-thumb {
    position: absolute;
    top: 2px;
    left: 2px;
    display: grid;
    place-items: center;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: var(--color-heading);
    color: var(--color-ink);
    font-size: 11px;
    transition: transform 0.25s ease;
}

.theme-toggle[aria-checked="true"] .theme-toggle-track {
    background-color: var(--color-accent);
}

.theme-toggle[aria-checked="true"] .theme-toggle-thumb {
    transform: translateX(20px);
}

@media (prefers-reduced-motion: reduce) {
    .theme-toggle-track,
    .theme-toggle-thumb {
        transition: none;
    }
}
</style>
