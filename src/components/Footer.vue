<template>
    <footer>
        <div class="footer bg-secondary">
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
    </footer>

</template>

<script>
</script>

<style scoped>
footer {
    flex-shrink: 0;
}
.footer {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 200px;
    font-size: var(--fs-13);
}

.footer a {
    color: var(--primary-color);
    font-size: var(--fs-16);
}

.footer p {
    color: var(--primary-color);
    font-size: var(--fs-16);
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
    font-size: var(--fs-16);
}

.social-icons {
    display: flex;
    flex-direction: row;
}

.social-icons svg {
    width: 32px;
    height: 32px;
    transition: transform .2s ease;
}

.social-icons svg:hover {
    transform: scale(1.2);
}
</style>