const navToggleBtn = document.querySelector('[data-nav-toggle-btn]')
const header = document.querySelector('[data-header]')

navToggleBtn.addEventListener('click', () =>
{
    header.classList.toggle('active')
})
