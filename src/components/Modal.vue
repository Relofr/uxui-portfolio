<template>
    <transition name="fade">
        <div class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-container">

                    <div class="modal-header primary-heading">
                        <slot name="header"></slot>
                    </div>

                    <div class="modal-body">
                        <slot name="body"></slot>
                    </div>

                    <div class="modal-footer">
                        <slot name="footer">
                        </slot>
                        <Button isPrimary text="Close" icon="close" @click="$emit('close')" />
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
import Button from '../components/Button.vue'
export default {
    data() {
        return {

        }
    },
    components: { Button }
}
</script>

<style>
.modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: table;
    transition: opacity 0.3s ease;
}

.modal-wrapper {
    display: table-cell;
    vertical-align: middle;
}

.modal-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: fit-content;
    margin: 0 auto;
    padding: var(--space-6);
    border-radius: var(--radius);
    background-color: var(--color-ink);
    box-shadow: var(--shadow-lg);
    transition: all 0.3s ease;
}

.modal-header {
    margin: 0;
}

.modal-body {
    margin: var(--space-4) 0;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.4s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>
