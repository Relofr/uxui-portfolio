<template>
    <footer>
        <div class="footer-container">
            <Bubbles />
            <img v-show="!isMobile" class="footer-image" src="../assets/ocean-floor-2.svg" alt="ocean floor footer image" aria-label="ocean floor footer image">
            <img v-show="isMobile" class="footer-image" src="../assets/ocean-floor-mobile.svg" alt="ocean floor footer image" aria-label="ocean floor footer image">
            <div class="footer-title">
                <div class="footer">
                    <div class="flex">
                        <div class="social-icons">
                            <a href="https://github.com/Relofr" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                                <fa :icon="['fab', 'github']"></fa>
                            </a>
                            <a href="https://www.linkedin.com/in/kyle-hatch/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                <fa :icon="['fab', 'linkedin']"></fa>
                            </a>
                            <a href="mailto:ky13h4tch@gmail.com" aria-label="Email">
                                <fa icon="envelope"></fa>
                            </a>
                        </div>
                        <nav>
                            <ul role="list">
                                <li role="listitem">
                                    <RouterLink to="/">Home</RouterLink>
                                </li>
                                <li role="listitem">
                                    <RouterLink to="/projects">Projects</RouterLink>
                                </li>
                                <li role="listitem">
                                    <RouterLink to="/about">About</RouterLink>
                                </li>
                                <li role="listitem">
                                    <RouterLink to="/contact">Contact</RouterLink>
                                </li>
                            </ul>
                        </nav>
                        <p>©{{ new Date().getFullYear() }} Portfolio - Kyle Hatch</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- <div class="footer">
            <div class="flex">
                <div class="social-icons">
                    <a href="https://github.com/Relofr" target="_blank">
                        <fa :icon="['fab', 'github']"></fa>
                    </a>
                    <a href="https://www.linkedin.com/in/kyle-hatch/" target="_blank">
                        <fa :icon="['fab', 'linkedin']"></fa>
                    </a>
                    <a href="mailto:ky13h4tch@gmail.com" target="_blank">
                        <fa icon="envelope"></fa>
                    </a>
                </div>
                <nav>
                    <ul role="nav-list">
                        <li>
                            <RouterLink to="/">Home</RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/projects">Projects</RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/about">About</RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/contact">Contact</RouterLink>
                        </li>
                    </ul>
                </nav>
                <p>©{{ new Date().getFullYear() }} Portfolio - Kyle Hatch</p>
            </div>
        </div> -->
    </footer>

</template>

<script>
import Bubbles from '../components/Bubbles.vue';
export default {
    data() {
        return {
            isMobile: false,
            window: {
                width: 0
            }
        }
    },
    created() {
        window.addEventListener('resize', this.handleResize);
        this.handleResize();
    },
    destroyed() {
        window.removeEventListener('resize', this.handleResize);
    },
    methods: {
        handleResize() {
            var windowWidth = this.window.width = window.innerWidth;
            console.log(windowWidth)

            if (windowWidth >= 800) {
                this.isMobile = false
            } else {
                this.isMobile = true
            }
        }
    },
    components: { Bubbles }
}
</script>

<style scoped>
.footer-container {
    position: relative;
    margin-top: var(--space-8);
}

.footer-title {
    position: absolute;
    top: 33%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
}

.footer-image {
    height: 100%;
    margin-bottom: -0.5em;
}

.footer {
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;
}

.footer .flex {
    flex-direction: column;
    gap: var(--space-4);
}

.footer ul {
    display: flex;
    gap: var(--space-5);
}

.footer a {
    font-family: var(--font-heading);
    font-size: var(--text-sm);
    font-weight: var(--fw-semibold);
    color: var(--color-heading);
    transition: color 0.2s ease;
}

.footer nav a:hover {
    color: var(--color-accent);
}

.footer p {
    font-size: var(--text-xs);
    color: var(--color-text-muted);
    margin: 0;
}

.social-icons {
    display: flex;
    gap: var(--space-5);
}

.social-icons svg {
    width: 36px;
    height: 36px;
    color: var(--color-heading);
    transition: transform 0.2s ease;
}

.social-icons svg:hover {
    transform: scale(1.15);
}

@media (max-width: 975px) {
    .footer-title {
        top: 10%;
    }

    .footer .flex {
        gap: var(--space-3);
    }

    .social-icons svg {
        width: 28px;
        height: 28px;
    }
}
</style>
