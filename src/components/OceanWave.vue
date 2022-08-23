<template>
    <div class="ocean">
        <svg class="wave" viewBox="0" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_468_56)">
                <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M1600 121C1289 121 1190.1 -0.250102 789 -0.000102214C389 -0.000102214 289 121 0 121V198H1600C1600 198 1600 150 1600 121Z"
                    fill="#2C5C67" />
            </g>
        </svg>
    </div>
</template>

<style>
.ocean {
    height: 100vh;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
}

.wave {
    /* background: url(/src/assets/wave2.svg) repeat-x; */
    position: absolute;
    width: 100%;
    height: 100%;
    border: 2px solid red;
    animation: wave 12s linear infinite;
    z-index: 999999;
}

@keyframes wave {
    0% {
        transform: translateX(0);
    }

    50% {
        transform: translateX(-25%);
    }

    100% {
        transform: translateX(-50%);
    }
}

/* @keyframes swell {

    0%,
    100% {
        transform: translate3d(0, -25px, 0);
    }

    50% {
        transform: translate3d(0, 5px, 0);
    }
} */
</style>