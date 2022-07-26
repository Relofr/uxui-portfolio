<template>
    <div class="contact-form">
        <h1 class="primary-heading">Contact Me</h1>
        <form>
            <label for="name">Name</label>
            <input type="text" autofocus v-model="user_name" required>

            <label for="email">Email</label>
            <input type="text" @input="debonceError" v-model="email" required>
            <span class="error-text" v-show="this.email.length > 0 && !typing" v-if="msg.email">{{ msg.email }}</span>

            <label for="subject">Subject</label>
            <input type="text" v-model="subject" required>

            <label for="message">Message</label>
            <textarea type="text" rows="8" v-model="message" required></textarea>
            <span class="error-text" v-if="msg.message">{{ msg.message }}</span>

            <Button @click="sendEmail" type="submit" text="Send" icon="envelope" size='lg' isPrimary
                :disabled="!isComplete" />
        </form>
    </div>
</template>

<script>
import emailjs from 'emailjs-com';
import Button from '../components/Button.vue'
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
            isSending: false
        }
    },
    methods: {
        debonceError(event) {
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
                    this.isSending = false,
                    this.user_name = '',
                    this.email = '',
                    this.subject = '',
                    this.message = ''
                );
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
    components: { Button }
}
</script>

<style>
.contact-form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.contact-form form {
    display: flex;
    flex-direction: column;
    width: 100%;
    ;
}

label {
    margin-bottom: 5px;
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
    background-color: #ecebec;
    border-radius: 5px 5px 0px 0px;
    font-family: var(--primary-font);
}

input:focus,
textarea:focus {
    padding: 12px;
    border-bottom: 3px solid var(--secondary-color)
}
</style>