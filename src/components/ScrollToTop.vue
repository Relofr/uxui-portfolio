<template>
    <transition name="scroll-top-fade">
        <button v-show="visible" class="scroll-top" type="button" aria-label="Scroll to top" title="Scroll to top"
            @click="scrollToTop">
            <fa icon="arrow-up" />
        </button>
    </transition>
</template>

<script>
export default {
    data() {
        return { visible: false };
    },
    mounted() {
        window.addEventListener('scroll', this.onScroll, { passive: true });
        this.onScroll();
    },
    beforeUnmount() {
        window.removeEventListener('scroll', this.onScroll);
    },
    methods: {
        onScroll() {
            this.visible = window.scrollY > 600;
        },
        scrollToTop() {
            const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
        }
    }
}
</script>

<style scoped>
.scroll-top {
    position: fixed;
    right: var(--space-5);
    bottom: var(--space-5);
    z-index: 9997; /* above page content, below the modal */
    display: grid;
    place-items: center;
    width: 48px;
    height: 48px;
    border: 1px solid var(--color-accent);
    border-radius: 50%;
    background-color: var(--color-ink);
    color: var(--color-accent);
    box-shadow: var(--shadow-lg);
    cursor: pointer;
    transition: background-color 0.2s ease, color 0.2s ease, transform 0.2s ease;
}

.scroll-top:hover,
.scroll-top:focus-visible {
    background-color: var(--color-accent);
    color: var(--color-ink);
    transform: translateY(-2px);
}

.scroll-top-fade-enter-active,
.scroll-top-fade-leave-active {
    transition: opacity 0.2s ease;
}

.scroll-top-fade-enter-from,
.scroll-top-fade-leave-to {
    opacity: 0;
}

@media (max-width: 800px) {
    .scroll-top {
        right: var(--space-4);
        bottom: var(--space-4);
        width: 44px;
        height: 44px;
    }
}
</style>
