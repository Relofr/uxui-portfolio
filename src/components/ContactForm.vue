<template>
    <div class="contact-form">
        <p class="flex code-font">{{ open }}</p>
        <h1 class="primary-heading">Get in contact</h1>
        <form>
            <label for="name">Name</label>
            <input type="text" autofocus v-model="user_name" required>

            <label for="email">Email</label>
            <input type="text" @input="debounceError" v-model="email" required>
            <span class="error-text" v-show="this.email.length > 0 && !typing" v-if="msg.email">{{ msg.email }}</span>

            <label for="subject">Subject</label>
            <input type="text" v-model="subject" required>

            <label for="message">Message</label>
            <textarea type="text" rows="8" v-model="message" required></textarea>
            <span class="error-text" v-if="msg.message">{{ msg.message }}</span>

            <Button v-show="!isSending && !confirm" @click="sendEmail" type="submit" text="Send" icon="envelope-open"
                size='lg' isPrimary :disabled="!isComplete" />

            <!-- <Button v-show="isSending && !confirm" @click="sendEmail" type="submit" text="Send" icon="envelope"
                size='lg' animate="fa-shake" isPrimary /> -->

            <Button v-show="!isSending && confirm" @click="sendEmail" type="submit" text="Thank you" icon="check"
                size='lg' :disabled="!isComplete" isPrimary />
        </form>

        <!-- <button id="show-modal" @click="emailConfirmation">Show Modal</button> -->

        <p class="flex code-font">{{ close }}</p>
        <Modal v-show="showModal" @close="showModal = false">
            <template v-slot:header>Thank you</template>
            <!-- <template v-slot:body><fa icon="fa-solid fa-check"/></template> -->
        </Modal>
    </div>
</template>

<script>
import emailjs from 'emailjs-com';
import Button from '../components/Button.vue'
import Modal from '../components/Modal.vue'
export default {
    data() {
        return {
            user_name: '',
            email: '',
            subject: '',
            message: '',
            msg: [],
            note: null,
            debounce: null,
            typing: null,
            isSending: false,
            confirm: false,
            showModal: false,
            open: "<contact-form>",
            close: "</contact-form>",
        }
    },
    methods: {
        emailConfirmation() {
            setTimeout(() => {
                this.isSending = false;
                this.confirm = false;
            }, 1500),
                setTimeout(() => {
                    this.isSending = false;
                    this.confirm = true;
                    this.user_name = '',
                        this.email = '',
                        this.subject = '',
                        this.message = ''
                }, 1500)
        },
        modalToggle() {
            this.showModal = !this.showModal;
        },
        debounceError(event) {
            this.note = null
            this.typing = 'You are typing'
            clearTimeout(this.debounce)
            this.debounce = setTimeout(() => {
                this.typing = null
                this.note = event.target.value
            }, 800)
        },
        sendEmail() {
            var templateParams = {
                user_name: this.user_name,
                email: this.email,
                subject: this.subject,
                message: this.message
            };
            var serviceID = 'service_uxui_portfolio';
            var templateID = 'template_uxui_portfolio';
            var publicKey = 'V6HB6k12BwfZeoHYw'
            emailjs.send(serviceID, templateID, templateParams, publicKey)
                .then(function (response) {
                    console.log('SUCCESS!', response.status, response.text);
                }, function (error) {
                    console.log('FAILED...', error);
                },
                    this.user_name = '',
                    this.email = '',
                    this.subject = '',
                    this.message = ''
                );
            this.emailConfirmation();

        }
    },
    computed: {
        isComplete() {
            var emailValue = this.email;
            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailValue)) {
                var passed = true
                this.msg['email'] = '';
            } else {
                var passed = false
                this.msg['email'] = 'Invalid Email Address';
            }

            return (
                this.user_name != '' &&
                passed === true &&
                this.message != ''
            )
        },
    },
    components: { Button, Modal }
}
</script>

<style>
.contact-form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    max-width: 800px;
}

.contact-form form {
    width: 100%;
}

label {
    display: inline-block;
    margin-bottom: 10px;
}

input,
textarea {
    outline: none;
    border: none;
    min-height: 55px;
    padding: 8px 12px;
    font-size: var(--fs-18);
    margin-bottom: 15px;
    resize: vertical;
    background-color: #fff;
    border-radius: 5px 5px 0px 0px;
    font-family: var(--primary-font);
    width: 100%;
}

input,
textarea,
label {
    display: flex;
    flex-direction: column;
}

input:focus,
textarea:focus {
    padding: 12px;
    border-bottom: 3px solid var(--accent-color)
}
</style>