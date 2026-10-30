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
                        <fa icon="home"></fa>Home
                    </router-link>
                </li>
                <li role="listitem">
                    <router-link to="/projects">
                        <fa icon="folder"></fa>Projects
                    </router-link>
                </li>
                <li role="listitem">
                    <router-link to="/about">
                        <fa icon="gamepad"></fa>About
                    </router-link>
                </li>
                <li role="listitem">
                    <router-link to="/contact">
                        <fa icon="comments"></fa>Contact
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
    width: min(var(--container), calc(100% - 2 * var(--gutter)));
    min-height: 72px;
    margin: var(--space-4) auto 0;
}

.main-nav ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: var(--space-2) var(--space-6);
}

.main-nav ul li {
    z-index: 999999;
}

.main-nav a {
    display: inline-flex;
    align-items: center;
    gap: var(--space-2);
    font-family: var(--font-heading);
    font-size: var(--text-sm);
    font-weight: var(--fw-semibold);
    line-height: 1.2;
    color: var(--color-heading);
    transition: color 0.2s ease;
}

.logo {
    display: block;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: var(--color-ink);
}

.router-link-exact-active,
.router-link-active,
.main-nav a:hover {
    color: var(--color-ink) !important;
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
