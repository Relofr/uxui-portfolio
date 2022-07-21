<template>
    <div data-aos="fade-up" data-aos-delay="80" class="overview">
        <div>
            <span v-show="title" class="primary-heading">{{ title }}</span>
            <p v-show="about">{{ about }}</p>
            <p v-show="description">{{ description }}</p>
            <p v-show="descriptionTwo">{{ descriptionTwo }}</p>
        </div>
        <div class="even-columns">
            <div class="col">
                <span v-show="role" class="secondary-heading">
                    Role<p class="fw-regular">{{ role }}</p>
                </span>

                <span v-show="date" class="secondary-heading">
                    Date
                <p class="fw-regular">{{ date }}</p>
                </span>
            </div>
            <div class="col">
                <span v-show="team" class="secondary-heading">
                Team
                <p class="fw-regular">{{ team }}</p>
                </span>

                <span v-show="tools" class="secondary-heading">
                    Tools
                <p class="fw-regular">{{ tools }}</p>
                </span>
            </div>
        </div>
        <div class="problem-text">
            <span v-show="problem" class="secondary-heading">Exploring the problem
                <p class="fw-regular">{{ problem }}</p>
            </span>
            <span v-show="solution" class="secondary-heading">The Solution
                <p class="fw-regular">{{ solution }}</p>
            </span>
            
        </div>
    </div>
</template> 

<script>
export default {
    data() {
        return {

        }
    },
    props: {
        title: {
            type: String
        },
        about: {
            type: String,
        },
        description: {
            type: String,
        },
        descriptionTwo: {
            type: String,
        },
        role: {
            type: String,
        },
        date: {
            type: String,
        },
        team: {
            type: String,
        },
        tools: {
            type: String,
        },
        problem: {
            type: String,
        },
        solution: {
            type: String,
        }
    }
}
</script>

<style>
.even-columns {
    display: flex;
    justify-content: space-evenly;
    gap: 1em;
}

.col {
    align-content: center;
    flex-direction: column;
}

@media (max-width: 800px) {
    .even-columns {
        display: flex;
        flex-direction: column;
    }
    .even-columns>* {
            flex: 1;
            display: flex;
            justify-content: center;
            align-items: flex-start;
        }
}
</style>