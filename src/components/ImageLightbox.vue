<!--
  Full-screen image viewer. Any <img data-zoomable> on the page opens here on
  click (or Enter/Space when focused). Closes on click, the close button, or Esc.
-->
<template>
    <transition name="lightbox">
        <div v-if="image" class="lightbox" role="dialog" aria-modal="true" :aria-label="image.alt || 'enlarged image'"
            @click="close">
            <button ref="closeButton" class="lightbox-close" aria-label="Close enlarged image" @click.stop="close">
                <fa icon="xmark" size="lg" />
            </button>
            <img class="lightbox-image" :src="image.src" :alt="image.alt">
        </div>
    </transition>
</template>

<script>
export default {
    data() {
        return {
            image: null,
            returnFocus: null,
        };
    },
    mounted() {
        document.addEventListener('click', this.onClick);
        document.addEventListener('keydown', this.onKeydown);
        this.$router.afterEach(this.close);
    },
    beforeUnmount() {
        document.removeEventListener('click', this.onClick);
        document.removeEventListener('keydown', this.onKeydown);
        document.body.style.overflow = '';
    },
    methods: {
        zoomableFrom(target) {
            return target instanceof Element ? target.closest('img[data-zoomable]') : null;
        },
        open(img) {
            this.returnFocus = img;
            this.image = { src: img.currentSrc || img.src, alt: img.alt };
            document.body.style.overflow = 'hidden';
            this.$nextTick(() => this.$refs.closeButton?.focus());
        },
        close() {
            if (!this.image) return;
            this.image = null;
            document.body.style.overflow = '';
            this.returnFocus?.focus({ preventScroll: true });
            this.returnFocus = null;
        },
        onClick(e) {
            const img = this.zoomableFrom(e.target);
            if (img && !this.image) this.open(img);
        },
        onKeydown(e) {
            if (this.image) {
                if (e.key === 'Escape') this.close();
                // keep focus inside the dialog
                if (e.key === 'Tab') {
                    e.preventDefault();
                    this.$refs.closeButton?.focus();
                }
                return;
            }
            const img = this.zoomableFrom(e.target);
            if (img && (e.key === 'Enter' || e.key === ' ')) {
                e.preventDefault();
                this.open(img);
            }
        },
    },
};
</script>

<style>
img[data-zoomable] {
    cursor: zoom-in;
}

.lightbox {
    position: fixed;
    inset: 0;
    z-index: 10000;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: var(--space-6, 2rem);
    background-color: rgba(5, 10, 13, 0.92);
    cursor: zoom-out;
}

.lightbox-image {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    border-radius: var(--radius);
    box-shadow: var(--shadow-lg);
}

.lightbox-close {
    position: absolute;
    top: var(--space-4, 1rem);
    right: var(--space-4, 1rem);
    display: grid;
    place-items: center;
    width: 44px;
    height: 44px;
    border: 1px solid var(--color-border);
    border-radius: 50%;
    background-color: var(--color-ink);
    color: var(--color-heading);
    cursor: pointer;
    transition: border-color 0.2s ease;
}

.lightbox-close:hover {
    border-color: var(--color-accent);
}

.lightbox-enter-active,
.lightbox-leave-active {
    transition: opacity 0.2s ease;
}

.lightbox-enter-active .lightbox-image {
    transition: transform 0.2s ease;
}

.lightbox-enter-from,
.lightbox-leave-to {
    opacity: 0;
}

.lightbox-enter-from .lightbox-image {
    transform: scale(0.96);
}

@media (prefers-reduced-motion: reduce) {
    .lightbox-enter-active,
    .lightbox-leave-active,
    .lightbox-enter-active .lightbox-image {
        transition: none;
    }
}
</style>
