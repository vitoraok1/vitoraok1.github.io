/*=============== FILTERS TABS ===============*/
const tabs = document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content]') 

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.target)

    tabContents.forEach(tabContent => {
      tabContent.classList.remove('filters__active')
    })
    target.classList.add('filters__active')

    tabs.forEach(tab => {
      tab.classList.remove('filter-tab-active')
    })

    tab.classList.add('filter-tab-active')
  })
})

/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bxs-sun'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bxs-sun' : 'bx bxs-moon'

if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'bx bxs-moon' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', () => {
  document.body.classList.toggle(darkTheme)
  themeButton.classList.toggle(iconTheme)

  localStorage.setItem('selected-theme', getCurrentTheme())
  localStorage.setItem('selected-icon', getCurrentIcon())
})

/*=============== SCROLL REVEAL ANIMATION ===============*/
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
})

scrollReveal.reveal(`.profile__border`)
scrollReveal.reveal(`.profile__name`, { delay: 500 })
scrollReveal.reveal(`.profile__profession`, { delay: 600 })
scrollReveal.reveal(`.profile__social`, { delay: 700 })
scrollReveal.reveal(`.profile__info-group`, { interval: 100, delay: 700 })
scrollReveal.reveal(`.profile__buttons`, { delay: 800 })
scrollReveal.reveal(`.filters__content`, { delay: 900 })
scrollReveal.reveal(`.filters`, { delay: 1000 })