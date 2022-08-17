<template>
    <div class="ocean">
        <div class="wave"></div>
        <div class="wave"></div>
    </div>
</template>

<style>
.ocean {
    height: 100vh;
    width: 100%;
    position: absolute;
    top: 30%;
    left: 0;
    background-color: rgba(44, 92, 103, 1);
    z-index: -1;
    overflow: revert;
}

.wave {
    background: url(../assets/wave2.svg) repeat-x;
    position: absolute;
    top: -197px;
    width: 6400px;
    height: 198px;
    animation: wave 12s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite;
    transform: translate3d(0, 0, 0);
}

.wave:nth-of-type(2) {
    top: -175px;
    animation: wave 12s cubic-bezier(0.36, 0.45, 0.63, 0.53) -.125s infinite, swell 10s ease -1.25s infinite;
    opacity: 1;
}

@keyframes wave {
    0% {
        margin-left: 0;
    }

    100% {
        margin-left: -1600px;
    }
}

@keyframes swell {

    0%,
    100% {
        transform: translate3d(0, -25px, 0);
    }

    50% {
        transform: translate3d(0, 5px, 0);
    }
}
</style>