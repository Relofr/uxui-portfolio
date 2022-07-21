<template>
    <div class="main-nav bg-secondary">
        <p class="logo fw-bold">KH</p>
        <nav>
            <ul role="nav-list">
                <li>
                    <RouterLink to="/"><fa icon="home" size="lg"></fa>Home</RouterLink>
                </li>
                <li>
                    <RouterLink to="/projects"><fa icon="folder" size="lg"></fa>Projects</RouterLink>
                </li>
                <li>
                    <RouterLink to="/about"><fa icon="gamepad" size="lg"></fa>About</RouterLink>
                </li>
                <li>
                    <RouterLink to="/contact"><fa icon="comments" size="lg"></fa>Contact</RouterLink>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
export default {
    methods: {

    }
}
</script>

<style scoped>
.main-nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 70px;
    padding: 20px 10%;
    font-size: var(--fs-16);
}

.main-nav ul {
    display: flex;
}

.main-nav ul li {
    padding: 0 20px;
    text-align: center;
}

.main-nav svg {
    padding: 0 8px;
}

.main-nav a {
    color: var(--primary-color);
    font-size: var(--fs-16);
}

.logo {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: var(--primary-color);
    color: var(--primary-text-color);
    display: flex;
    justify-content: center;
    align-items: center;
}

@media (max-width: 800px) {
    .logo {
        display: none;
    }
    .main-nav {
        justify-content: center;
    }
}
</style>