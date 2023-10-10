import state from './state.js'
import * as el from './elements.js'
import { reset } from './actions.js'

export function initCountdown() {
  let minutes = +el.minutes.textContent
  let seconds = +el.seconds.textContent

  seconds--

  if (state.isRunning) {
    el.btnPlay.setAttribute('disabled', true)
  } else {
    el.btnPlay.removeAttribute('disabled')
    return
  }

  if (seconds < 0) {
    minutes--
    seconds = 59
  }

  if (minutes < 0) {
    reset()
    return
  }

  updateDisplay(minutes, seconds)
  window.setTimeout(() => initCountdown(), 1000)
}

export function updateDisplay(minutes, seconds) {
  minutes = minutes ?? state.minutes
  seconds = seconds ?? state.seconds

  el.minutes.textContent = String(minutes).padStart('2', '0')
  el.seconds.textContent = String(seconds).padStart('2', '0')
}
