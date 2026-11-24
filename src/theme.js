import { computed, ref, watch } from 'vue'

// "pro" is the default modern look; "fish" is the original ocean design.
// index.html sets data-theme before first paint so there is no flash.
const STORAGE_KEY = 'theme'

function readStoredTheme() {
    try {
        return localStorage.getItem(STORAGE_KEY) === 'fish' ? 'fish' : 'pro'
    } catch {
        return 'pro'
    }
}

export const theme = ref(document.documentElement.dataset.theme || readStoredTheme())
export const isFish = computed(() => theme.value === 'fish')

watch(theme, (value) => {
    document.documentElement.dataset.theme = value
    try {
        localStorage.setItem(STORAGE_KEY, value)
    } catch {
        /* storage unavailable: theme still applies for this visit */
    }
}, { immediate: true })

export function toggleTheme() {
    theme.value = isFish.value ? 'pro' : 'fish'
}
