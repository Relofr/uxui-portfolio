// Lets the router wait for the page fade (out-in) to swap in the new view
// before it scrolls, so the jump happens while the old page is already gone.
let pending = [];

export function waitForPageEnter() {
    return new Promise((resolve) => {
        pending.push(resolve);
        // Fallback in case no transition runs (e.g. initial load or same component)
        setTimeout(resolve, 600);
    });
}

export function pageEntered() {
    pending.splice(0).forEach((resolve) => resolve());
}
