import * as el from './elements.js'
import * as sounds from './sounds.js'
import state from './state.js'
import * as actions from './actions.js'
import { updateDisplay } from './timer.js'

export function registerControls() {
  el.controls.addEventListener('click', event => {
    const action = event.target.dataset.action

    if (typeof actions[action] !== 'function') {
      return
    }

    actions[action]()
  })
}

export function changeColor() {
  el.btnsPlayAndPause.forEach((btns, index) => {
    btns.addEventListener('click', () => {
      el.btnsPlayAndPause.forEach(btns => {
        btns.classList.remove('active')
      })

      el.btnsPlayAndPause[index].classList.add('active')
    })
  })

  el.btnsAddRemoveMinutes.forEach(btns => {
    btns.addEventListener('click', () => {
      el.btnPlay.classList.remove('active')
      el.btnPause.classList.add('active')
    })
  })
}

export function addFiveMinutes() {
  if (state.minutes > 60 || state.minutes === 60) {
    return
  } else {
    state.minutes += 5
    updateDisplay()
  }
}

export function removeFiveMinutes() {
  if (state.minutes < 0 || state.minutes === 0) {
    return
  } else {
    state.minutes -= 5
    updateDisplay()
  }
}

export function toggleSounds() {
  el.btnsSounds.forEach((btns, index) => {
    const actualSound = sounds.allSounds[index]

    btns.addEventListener('click', () => {
      if (actualSound.paused) {
        sounds.allSounds.forEach(sound => {
          sound.pause()
        })

        el.btnsSounds.forEach(btns => {
          btns.classList.remove('active')
        })

        actualSound.play()
        btns.classList.add('active')
      } else {
        actualSound.pause()
        btns.classList.remove('active')
      }
    })

    actualSound.addEventListener('timeupdate', () => {
      const isCurrentTimeEqualToDuration =
        actualSound.currentTime === actualSound.duration

      if (isCurrentTimeEqualToDuration) {
        btns.classList.remove('active')
      }
    })
  })
}
