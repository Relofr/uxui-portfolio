<template>
    <div class="main-nav">
        <router-link to="/">
            <ul role="list">
                <li role="listitem">
                    <img class="logo" src="../assets/images/about/logo2.svg" alt="return to home page"
                        aria-label="return to home page" />
                </li>
            </ul>
        </router-link>
        <nav>
            <ul role="list">
                <li role="listitem">
                    <router-link to="/">
                        <fa icon="home" size="lg"></fa>Home
                    </router-link>
                </li>
                <li role="listitem">
                    <router-link to="/projects">
                        <fa icon="folder" size="lg"></fa>Projects
                    </router-link>
                </li>
                <li role="listitem">
                    <router-link to="/about">
                        <fa icon="gamepad" size="lg"></fa>About
                    </router-link>
                </li>
                <li role="listitem">
                    <router-link to="/contact">
                        <fa icon="comments" size="lg"></fa>Contact
                    </router-link>
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

<style lang="less" scoped>
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
    z-index: 999999;
}

.main-nav svg {
    padding: 0 8px;
}

.main-nav a {
    color: var(--primary-color);
    font-size: var(--fs-18);
}

.logo {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: var(--secondary-color);
    color: var(--secondary-text-color);
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
        flex-direction: column;
    }
}

.router-link-exact-active,
.router-link-active {
    color: var(--border-color) !important;
}

.main-nav a:hover {
    color: var(--border-color) !important;
}
</style>