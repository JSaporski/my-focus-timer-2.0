export let minutes = document.querySelector('.minutes')
export let seconds = document.querySelector('.seconds')

export const controls = document.querySelector('.controls')

export const btnPlay = controls.querySelector('button[data-action="play"]')
export const btnPause = controls.querySelector('button[data-action="pause"]')

export const btnAddMinutes = controls.querySelector(
  'button[data-action="addMinutes"]'
)
export const btnRemoveMinutes = controls.querySelector(
  'button[data-action="removeMinutes"]'
)

export const btnsPlayAndPause = [btnPlay, btnPause]
export const btnsAddRemoveMinutes = [btnAddMinutes, btnRemoveMinutes]

export const btnsSounds = document.querySelectorAll('.sound')
