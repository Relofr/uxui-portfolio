<template>
    <footer>
        <div class="footer-container">
            <Bubbles />
            <img v-show="!isMobile" class="footer-image" src="../assets/ocean-floor-2.svg">
            <img v-show="isMobile" class="footer-image" src="../assets/ocean-floor-mobile.svg">
            <div class="footer-title">
                <div class="footer">
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
    margin-top: 100px;
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

.footer a {
    color: var(--primary-text-color);
}

.footer p {
    color: var(--primary-text-color);
    font-size: var(--fs-13);
}

.footer .flex {
    flex-direction: column;
}

.footer ul {
    display: flex;
    padding: 20px 0;
}

.footer a {
    margin: 10px;
    font-size: var(--fs-18);
}

.social-icons {
    display: flex;
    flex-direction: row;
}

.social-icons svg {
    width: 42px;
    height: 42px;
    transition: transform .2s ease;
    color: var(--primary-text-color)
}

.social-icons svg:hover {
    transform: scale(1.2);
}

@media (max-width: 975px) {
    .footer a {
        font-size: var(--fs-16);
        font-weight: var(--fw-bold);
    }

    .footer ul {
        padding: 10px 0;
    }

    .footer-title {
        top: 10%;
    }

    .social-icons svg {
        width: 32px;
        height: 32px;
    }
}
</style>