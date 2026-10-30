<template>
    <div class="overview">
        <div>
            <h2 v-show="title" class="primary-heading">{{ title }}</h2>
            <p v-show="about" class="lead">{{ about }}</p>
            <p v-show="description">{{ description }}</p>
            <p v-show="descriptionTwo">{{ descriptionTwo }}</p>
        </div>
        <div v-if="problem || solution || outcome" class="summary">
            <div v-if="problem" class="summary-item">
                <span class="label">Problem</span>
                <p>{{ problem }}</p>
            </div>
            <div v-if="solution" class="summary-item">
                <span class="label">Solution</span>
                <p>{{ solution }}</p>
            </div>
            <div v-if="outcome" class="summary-item">
                <span class="label">Outcome</span>
                <p>{{ outcome }}</p>
            </div>
        </div>
        <div v-if="role || date || team || tools" class="project-info">
            <div v-if="role">
                <span class="label">Role</span>
                <p>{{ role }}</p>
            </div>
            <div v-if="date">
                <span class="label">Date</span>
                <p>{{ date }}</p>
            </div>
            <div v-if="team">
                <span class="label">Team</span>
                <p>{{ team }}</p>
            </div>
            <div v-if="tools">
                <span class="label">Tools</span>
                <p>{{ tools }}</p>
            </div>
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
        },
        outcome: {
            type: String,
        }
    }
}
</script>

<style scoped>
.overview {
    display: flex;
    flex-direction: column;
    gap: var(--space-6);
}

.summary {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: var(--space-4);
}

.summary-item {
    padding: var(--space-5);
    border-radius: var(--radius);
    background-color: var(--color-surface);
}

.project-info {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: var(--space-5) var(--space-6);
    padding: var(--space-5) 0;
    border-top: 1px solid var(--color-border);
    border-bottom: 1px solid var(--color-border);
}

.summary-item p,
.project-info p {
    margin: 0;
}
</style>
