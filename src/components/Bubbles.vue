<template>
    <div class="bubble-wrapper">
        <div><span class="dot"></span></div>
        <div><span class="dot"></span></div>
        <div><span class="dot"></span></div>
        <div><span class="dot"></span></div>
        <div><span class="dot"></span></div>
        <div><span class="dot"></span></div>
        <div><span class="dot"></span></div>
        <div><span class="dot"></span></div>
        <div><span class="dot"></span></div>
        <div><span class="dot"></span></div>
        <div><span class="dot"></span></div>
        <div><span class="dot"></span></div>
        <div><span class="dot"></span></div>
        <div><span class="dot"></span></div>
        <div><span class="dot"></span></div>
    </div>

</template>

<style scoped>
* {
    margin: 0;
    padding: 0;
}

.bubble-wrapper {
    height: 100%;
    width: 100%;
    position: absolute;
    pointer-events: none;
}

.bubble-wrapper h1 {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
    font-family: sans-serif;
    letter-spacing: 1px;
    word-spacing: 2px;
    color: #fff;
    font-size: 40px;
    font-weight: 888;
    text-transform: uppercase;
}

.bubble-wrapper div {
    height: 60px;
    width: 60px;
    border: 2px solid rgba(255, 255, 255, 0.8);
    border-radius: 50px;
    position: absolute;
    top: 10%;
    left: 10%;
    animation: 4s linear infinite;
    color: rgba(255, 255, 255, 0.5); /* dot color, faded out when the bubble pops */
    outline: 2px dotted rgba(255, 255, 255, 0); /* pop ring */
    font-size: 60px; /* scales the pop ring with the bubble */
}

div .dot {
    height: 10px;
    width: 10px;
    border-radius: 50px;
    background: currentColor;
    position: absolute;
    top: 20%;
    right: 20%;
}

.bubble-wrapper div:nth-child(1) {
    top: 20%;
    left: 20%;
    animation: animate 8s linear infinite;
}

.bubble-wrapper div:nth-child(2) {
    top: 60%;
    left: 80%;
    animation: animate 10s linear infinite;
}

.bubble-wrapper div:nth-child(3) {
    top: 40%;
    left: 40%;
    animation: animate 3s linear infinite;
}

.bubble-wrapper div:nth-child(4) {
    top: 66%;
    left: 30%;
    animation: animate 7s linear infinite;
}

.bubble-wrapper div:nth-child(5) {
    top: 90%;
    left: 10%;
    animation: animate 9s linear infinite;
}

.bubble-wrapper div:nth-child(6) {
    top: 30%;
    left: 60%;
    animation: animate 5s linear infinite;
}

.bubble-wrapper div:nth-child(7) {
    top: 70%;
    left: 20%;
    animation: animate 8s linear infinite;
}

.bubble-wrapper div:nth-child(8) {
    top: 75%;
    left: 60%;
    animation: animate 10s linear infinite;
}

.bubble-wrapper div:nth-child(9) {
    top: 50%;
    left: 50%;
    animation: animate 6s linear infinite;
}

.bubble-wrapper div:nth-child(10) {
    top: 45%;
    left: 20%;
    animation: animate 10s linear infinite;
}

.bubble-wrapper div:nth-child(11) {
    top: 10%;
    left: 90%;
    animation: animate 9s linear infinite;
}

.bubble-wrapper div:nth-child(12) {
    top: 20%;
    left: 70%;
    animation: animate 7s linear infinite;
}

.bubble-wrapper div:nth-child(13) {
    top: 20%;
    left: 20%;
    animation: animate 8s linear infinite;
}

.bubble-wrapper div:nth-child(14) {
    top: 60%;
    left: 5%;
    animation: animate 6s linear infinite;
}

.bubble-wrapper div:nth-child(15) {
    top: 90%;
    left: 80%;
    animation: animate 9s linear infinite;
}

/* Pop: the bubble swells, its outline and dot vanish and a dotted ring bursts outward.
   Everything runs in this one animation so the pop stays in sync with the bubble. */
@keyframes animate {
    0% {
        transform: scale(0) translateY(0) rotate(0deg);
        border-color: rgba(255, 255, 255, 0.8);
        color: rgba(255, 255, 255, 0.5);
        outline-color: rgba(255, 255, 255, 0);
        outline-offset: 0;
    }

    90% {
        transform: scale(1.3) translateY(-90px) rotate(9deg);
        border-color: rgba(255, 255, 255, 0.8);
        color: rgba(255, 255, 255, 0.5);
        outline-color: rgba(255, 255, 255, 0);
        outline-offset: 0;
    }

    94% {
        transform: scale(1.45) translateY(-94px) rotate(9.4deg);
        border-color: rgba(255, 255, 255, 0.8);
        color: rgba(255, 255, 255, 0.5);
        outline-color: rgba(255, 255, 255, 0);
        outline-offset: 0;
    }

    95% {
        transform: scale(1.5) translateY(-95px) rotate(9.5deg);
        border-color: rgba(255, 255, 255, 0);
        color: rgba(255, 255, 255, 0);
        outline-color: rgba(255, 255, 255, 0.9);
        outline-offset: 0.05em;
    }

    100% {
        transform: scale(1.5) translateY(-100px) rotate(10deg);
        border-color: rgba(255, 255, 255, 0);
        color: rgba(255, 255, 255, 0);
        outline-color: rgba(255, 255, 255, 0);
        outline-offset: 0.4em;
    }
}

@media (max-width: 800px) {
    .bubble-wrapper div {
        height: 20px;
        width: 20px;
        border: 2px solid rgba(255, 255, 255, 0.8);
        border-radius: 50px;
        position: absolute;
        top: 10%;
        left: 10%;
        animation: 4s linear infinite;
        font-size: 20px;
    }

    div .dot {
        height: 4px;
        width: 4px;
        border-radius: 50px;
        background: currentColor;
        position: absolute;
        top: 20%;
        right: 20%;
    }
}
</style>