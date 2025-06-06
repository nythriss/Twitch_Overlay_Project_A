window.addEventListener('DOMContentLoaded', () => {
    const all = document.querySelectorAll('*');
    all.forEach(el => {
        el.style.pointerEvents = 'none';
        el.style.userSelect = 'none';
    });
});
