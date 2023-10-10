import state from './state.js'
import { btnPlay } from './elements.js'
import { changeColor, addFiveMinutes, removeFiveMinutes } from './events.js'
import * as timer from './timer.js'

export function play() {
  state.isRunning = true
  timer.initCountdown()
  changeColor()
}

export function pause() {
  state.isRunning = false
}

export function reset() {
  btnPlay.classList.remove('active')
  btnPlay.removeAttribute('disabled')
  timer.updateDisplay()
}

export function addMinutes() {
  pause()
  changeColor()
  addFiveMinutes()
}

export function removeMinutes() {
  pause()
  changeColor()
  removeFiveMinutes()
}
