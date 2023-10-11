import state from './state.js'
import { registerControls, changeColor, toggleSounds } from './events.js'
import { updateDisplay } from './timer.js'

export function start(minutes, seconds) {
  state.minutes = minutes
  state.seconds = seconds

  registerControls()
  changeColor()
  updateDisplay()
  toggleSounds()
}
