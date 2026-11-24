<template>
    <header class="site-header" :class="{ 'is-scrolled': scrolled, 'is-open': menuOpen }">
        <div class="main-nav">
            <button ref="menuButton" type="button" class="menu-button" aria-controls="site-nav"
                :aria-expanded="menuOpen" aria-label="Open menu" @click="openMenu">
                <fa icon="bars"></fa>
            </button>

            <ThemeToggle class="nav-toggle" />

            <div class="nav-backdrop" aria-hidden="true" @click="closeMenu"></div>

            <nav id="site-nav" aria-label="Main">
                <div class="drawer-head">
                    <img class="logo" src="../assets/images/about/logo2.svg" alt="" />
                    <button ref="closeButton" type="button" class="menu-button" aria-label="Close menu"
                        @click="closeMenu">
                        <fa icon="xmark"></fa>
                    </button>
                </div>
                <ul role="list">
                    <li v-for="link in links" :key="link.to" role="listitem">
                        <router-link :to="link.to" @click="menuOpen = false">
                            <fa :icon="link.icon" fixed-width></fa>{{ link.label }}
                        </router-link>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<script>
import ThemeToggle from './ThemeToggle.vue';

const LINKS = [
    { to: '/', label: 'Home', icon: 'home' },
    { to: '/projects', label: 'Projects', icon: 'folder' },
    { to: '/about', label: 'About', icon: 'gamepad' },
    { to: '/contact', label: 'Contact', icon: 'comments' }
];

const MOBILE_QUERY = '(max-width: 800px)';

export default {
    components: { ThemeToggle },
    data() {
        return {
            links: LINKS,
            scrolled: false,
            menuOpen: false
        }
    },
    watch: {
        $route() {
            this.menuOpen = false;
        },
        // Stop the page scrolling behind the open drawer
        menuOpen(open) {
            document.documentElement.style.overflow = open ? 'hidden' : '';
        }
    },
    mounted() {
        this.onScroll();
        window.addEventListener('scroll', this.onScroll, { passive: true });
        document.addEventListener('keydown', this.onKeydown);
        this.mobileQuery = window.matchMedia(MOBILE_QUERY);
        this.mobileQuery.addEventListener('change', this.onBreakpointChange);
    },
    beforeUnmount() {
        window.removeEventListener('scroll', this.onScroll);
        document.removeEventListener('keydown', this.onKeydown);
        this.mobileQuery?.removeEventListener('change', this.onBreakpointChange);
        document.documentElement.style.overflow = '';
    },
    methods: {
        // Header background fades in once the page leaves the very top
        onScroll() {
            this.scrolled = window.scrollY > 8;
        },
        openMenu() {
            this.menuOpen = true;
            this.$nextTick(() => this.$refs.closeButton?.focus());
        },
        closeMenu() {
            this.menuOpen = false;
            this.$refs.menuButton?.focus();
        },
        onKeydown(event) {
            if (event.key === 'Escape' && this.menuOpen) this.closeMenu();
        },
        onBreakpointChange(event) {
            if (!event.matches) this.menuOpen = false;
        }
    }
}
</script>

<style lang="less" scoped>
.site-header {
    position: sticky;
    top: 0;
    z-index: 9000; /* above page content and the fish layer, below the lightbox/modal */

    /* The frosted background lives on a pseudo-element: backdrop-filter on the header
       itself would trap the fixed-position mobile drawer inside the header box */
    &::before {
        content: '';
        position: absolute;
        inset: 0;
        z-index: -1;
        border-bottom: 1px solid var(--nav-border);
        opacity: 0;
        background-color: var(--nav-bg);
        box-shadow: 0 8px 24px -16px rgb(0 0 0 / 50%);
        backdrop-filter: saturate(160%) blur(14px);
        -webkit-backdrop-filter: saturate(160%) blur(14px);
        transition: opacity 0.3s ease;
    }

    &.is-scrolled::before {
        opacity: 1;
    }
}

.main-nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: min(var(--container), calc(100% - 2 * var(--gutter)));
    min-height: var(--nav-height);
    margin: 0 auto;
}

.logo {
    display: block;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: var(--color-ink);
}

nav ul {
    display: flex;
    align-items: center;
    gap: var(--space-1);
}

/* Links share one pill-shaped selected state across both themes */
nav a {
    display: inline-flex;
    align-items: center;
    gap: var(--space-2);
    padding: var(--space-2) var(--space-3);
    border-radius: 999px;
    /* Fixed font, size and weight (not theme tokens) so the nav never shifts between themes */
    font-family: var(--font-nav);
    font-size: 0.9375rem;
    font-weight: 500;
    line-height: 1.2;
    color: var(--color-heading);
    transition: color 0.2s ease, background-color 0.2s ease;
}

nav a:hover {
    background-color: var(--nav-hover-bg);
}

nav .router-link-exact-active {
    color: var(--color-heading);
    background-color: var(--nav-active-bg);
}

.menu-button {
    display: none;
    place-items: center;
    width: 44px;
    height: 44px;
    border: 1px solid var(--nav-border);
    border-radius: var(--radius);
    background-color: var(--color-surface);
    color: var(--color-heading);
    font-size: 1.125rem;
    cursor: pointer;
    transition: border-color 0.2s ease;

    &:hover {
        border-color: var(--color-accent);
    }
}

.drawer-head,
.nav-backdrop {
    display: none;
}

/* ---------- Mobile: left slide-in drawer ---------- */
@media (max-width: 800px) {
    .main-nav {
        min-height: var(--nav-height-mobile);
    }

    .logo {
        width: 36px;
        height: 36px;
    }

    .menu-button {
        display: grid;
    }

    .nav-backdrop {
        display: block;
        position: fixed;
        inset: 0;
        background-color: rgb(0 0 0 / 55%);
        opacity: 0;
        visibility: hidden;
        transition: opacity 0.25s ease, visibility 0s linear 0.25s;
    }

    nav {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        display: flex;
        flex-direction: column;
        gap: var(--space-5);
        width: min(300px, 82vw);
        padding: var(--space-4);
        overflow-y: auto;
        border-right: 1px solid var(--nav-border);
        background-color: var(--nav-panel-bg);
        box-shadow: 24px 0 48px -24px rgb(0 0 0 / 70%);
        visibility: hidden;
        transform: translateX(-100%);
        transition: transform 0.3s cubic-bezier(0.32, 0.72, 0, 1), visibility 0s linear 0.3s;
    }

    .is-open {
        .nav-backdrop {
            opacity: 1;
            visibility: visible;
            transition: opacity 0.25s ease, visibility 0s;
        }

        nav {
            visibility: visible;
            transform: none;
            transition: transform 0.3s cubic-bezier(0.32, 0.72, 0, 1), visibility 0s;
        }
    }

    .drawer-head {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-bottom: var(--space-4);
        border-bottom: 1px solid var(--nav-border);
    }

    nav ul {
        flex-direction: column;
        align-items: stretch;
    }

    nav a {
        display: flex;
        gap: var(--space-3);
        padding: var(--space-3) var(--space-4);
        border-radius: var(--radius);
        font-size: 1rem;
    }
}

@media (prefers-reduced-motion: reduce) {
    .site-header::before,
    .nav-backdrop,
    nav {
        transition: none !important;
    }
}
</style>
