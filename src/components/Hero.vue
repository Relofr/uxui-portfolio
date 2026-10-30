<template>
    <div>
        <img class="hero-image" :src="heroImage" alt="profile picture">
    </div>
</template>

<script>
import profilePicture from '../assets/images/about/ProfilePicture.jpg';

export default {
    setup: () => {
        return { heroImage: profilePicture };
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