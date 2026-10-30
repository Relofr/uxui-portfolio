<template>
    <div class="contact-form">
        <p class="flex code-font">{{ open }}</p>
        <h1 class="primary-heading">Get in contact</h1>
        <form @submit.prevent="sendEmail">
            <label for="name">Name</label>
            <input id="name" type="text" autofocus v-model="user_name" required>

            <label for="email">Email</label>
            <input id="email" type="email" @input="debounceError" v-model="email" required>
            <span class="error-text" v-show="this.email.length > 0 && !typing" v-if="msg.email">{{ msg.email }}</span>

            <label for="subject">Subject</label>
            <input id="subject" type="text" v-model="subject">

            <label for="message">Message</label>
            <textarea id="message" rows="8" v-model="message" required></textarea>

            <Button v-if="!confirm" type="submit" :text="isSending ? 'Sending...' : 'Send'" icon="envelope-open"
                size="lg" isPrimary :disabled="!isComplete || isSending" />

            <p v-if="confirm" class="form-status" role="status">
                <fa icon="check" /> Thanks! Your message was sent. I'll get back to you soon.
            </p>
            <p v-if="sendError" class="form-status error-text" role="alert">{{ sendError }}</p>
        </form>

        <p class="flex code-font">{{ close }}</p>
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
            isSending: false,
            confirm: false,
            sendError: '',
            open: "<contact-form>",
            close: "</contact-form>",
        }
    },
    methods: {
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
            if (!this.isComplete || this.isSending) return

            var templateParams = {
                user_name: this.user_name,
                email: this.email,
                subject: this.subject,
                message: this.message
            };
            var serviceID = 'service_uxui_portfolio';
            var templateID = 'template_uxui_portfolio';
            var publicKey = 'V6HB6k12BwfZeoHYw'

            this.isSending = true
            this.sendError = ''

            emailjs.send(serviceID, templateID, templateParams, publicKey)
                .then(() => {
                    this.confirm = true
                    this.user_name = ''
                    this.email = ''
                    this.subject = ''
                    this.message = ''
                }, (error) => {
                    console.error('Email failed to send', error)
                    this.sendError = 'Sorry, your message could not be sent. Please try again, or email me directly at ky13h4tch@gmail.com.'
                })
                .finally(() => {
                    this.isSending = false
                })
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
    width: 100%;
    max-width: 720px;
}

.contact-form .code-font {
    flex: none;
}

.contact-form form {
    display: flex;
    flex-direction: column;
    width: 100%;
}

.contact-form label {
    margin-bottom: var(--space-2);
    font-family: var(--font-heading);
    font-size: var(--text-sm);
    font-weight: var(--fw-semibold);
    color: var(--color-heading);
}

.contact-form input,
.contact-form textarea {
    width: 100%;
    margin-bottom: var(--space-5);
    padding: var(--space-3) var(--space-4);
    border: none;
    border-bottom: 3px solid transparent;
    border-radius: var(--radius-sm) var(--radius-sm) 0 0;
    outline: none;
    background-color: var(--color-surface-light);
    color: var(--color-ink);
    font-family: var(--font-body);
    font-size: var(--text-base);
    resize: vertical;
    transition: border-color 0.2s ease;
}

.contact-form input:focus,
.contact-form textarea:focus {
    border-bottom-color: var(--color-accent);
}

.contact-form .form-status {
    display: flex;
    align-items: center;
    gap: var(--space-2);
    margin: 0;
    font-family: var(--font-heading);
    font-weight: var(--fw-semibold);
}

.contact-form .form-status.error-text {
    margin-top: var(--space-4);
    font-size: var(--text-sm);
}

.contact-form span.error-text {
    margin: calc(-1 * var(--space-4)) 0 var(--space-4);
}
</style>
