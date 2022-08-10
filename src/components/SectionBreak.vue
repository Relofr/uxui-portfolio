<template>
    <div  class="sectionBlock fw-bold fs-36">
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
    background-color: var(--secondary-color);
    display: flex;
    height: 120px;
    border-radius: 4px;
    align-items: center;
    justify-content: center;
    margin: 50px 0px;
    text-align: center;
}
</style>