<template>
    <div>
        <img class="hero-image" :src="`/src/assets/images/` + heroImage" alt="tracy aviary case study">
    </div>
</template>

<script>
export default {
    setup: () => {
        return { heroImage };
    },
    data() {
        return {
            heroImage: 'ProfilePicture.jpeg'
        }
    }
}
</script>

<style scoped>
.hero-image {
    height: 50%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
}
</style>