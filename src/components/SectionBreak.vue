<template>
    <div data-aos="fade-up" data-aos-delay="80" class="sectionBlock bg-secondary fw-bold fs-36">
        {{ title }}
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true
        }
    }
}
</script>

<style>
.sectionBlock {
    color: var(--primary-color);
    display: flex;
    height: 120px;
    border-radius: 4px;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    margin: 50px 0px;
    text-align: center;
}
</style>