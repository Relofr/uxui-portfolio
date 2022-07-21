<template>
    <router-link :to="`/` + route">
        <div data-aos="fade-up" data-aos-delay="80" class="card">
            <img :src="`src/assets/images/` + src" alt="">
            <div class="title-container flex">
                <p id="card-text" class="fw-bold fs-16 primary-text">{{ title }}</p>
                <p v-show="date" id="card-text" class="fw-semi-bold secondary-text">{{ date }}</p>
            </div>
        </div>
    </router-link>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    props: {
        route: { type: String },
        title: { type: String },
        date: { type: String },
        src: { type: String }
    }
}
</script>

<style lang="less" scoped>

.card {
    cursor: pointer;
    margin-bottom: 40px;
}

.card img {
    border-radius: 4px;
    width: 100%;
    height: 275px;
    object-fit: cover;
    margin-bottom: 5px;
    transition: transform .2s ease;

    -webkit-box-shadow: 0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 12%), 0 1px 5px 0 rgb(0 0 0 / 20%);
    box-shadow: 0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 12%), 0 1px 5px 0 rgb(0 0 0 / 20%);

    &:hover {
        transform: scale(1.04);
        -webkit-box-shadow: 0 16px 24px 2px rgb(0 0 0 / 16%), 0 6px 30px 5px rgb(0 0 0 / 12%), 0 8px 10px -7px rgb(0 0 0 / 20%);
        box-shadow: 0 16px 24px 2px rgb(0 0 0 / 16%), 0 6px 30px 5px rgb(0 0 0 / 12%), 0 8px 10px -7px rgb(0 0 0 / 20%);
    }
}

.title-container {
    justify-content: space-around;
}

.title-container p {
    display: flex;
}
</style>