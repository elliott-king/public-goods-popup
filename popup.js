const WAIT = 1000

document.addEventListener('DOMContentLoaded', () => {
  setTimeout(showBox, WAIT)
})

const showBox = () => {
  console.log('showing box')
  const elem = document.getElementById('popup')
  elem.className = "slide-up"
}

document.addEventListener('click', (event) => {
  if (event.target.id == "revert") {
    const elem = document.getElementById('popup')
    elem.className = "slide-down"
  }
})