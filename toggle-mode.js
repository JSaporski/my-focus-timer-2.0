let darkMode = false
const btnToggleMode = document.querySelector('.btn-toggle-mode')

btnToggleMode.addEventListener('click', event => {
  document.documentElement.classList.toggle('toggle-mode')

  const mode = darkMode ? 'Light' : 'Dark'

  event.currentTarget.querySelector(
    'span'
  ).textContent = `${mode} mode ativado!`

  darkMode = !darkMode
})
