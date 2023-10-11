import state from './state.js'
import { btnPlay } from './elements.js'
import { buttonPress, kitchenTimer } from './sounds.js'
import { changeColor, addFiveMinutes, removeFiveMinutes } from './events.js'
import * as timer from './timer.js'

export function play() {
  state.isRunning = true
  timer.initCountdown()
  buttonPress.play()
  changeColor()
}

export function pause() {
  state.isRunning = false
  buttonPress.play()
}

export function reset() {
  btnPlay.classList.remove('active')
  btnPlay.removeAttribute('disabled')
  kitchenTimer.play()
  timer.updateDisplay()
}

export function addMinutes() {
  state.isRunning = false
  changeColor()
  addFiveMinutes()
}

export function removeMinutes() {
  state.isRunning = false
  changeColor()
  removeFiveMinutes()
}
