//DOM
//Document Object Model

//Refatoração: mudar um código para deixá-lo mais compreensível
//SEM ALTERAR suas funcionalídades

const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')
const buttonSet = document.querySelector('.set')
const buttonSoundOn = document.querySelector('.sound-on')
const buttonSoundOff = document.querySelector('.sound-off')
let minutes
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')

function countdown(){
  setTimeout(function() {
    let seconds = Number(secondsDisplay.textContent) 

    if( seconds <= 0 ) {
    seconds = 60
  }
    secondsDisplay.textContent = seconds -1

    countdown()
    }, 1000)
}

//Event-driver
//programação imperattiva
//callback

buttonPlay.addEventListener('click', function () {
  buttonPlay.classList.add('hide')
  buttonPause.classList.remove('hide')
  buttonSet.classList.add('hide')
  buttonStop.classList.remove('hide')

  countdown()
  
})  

buttonPause.addEventListener('click', function() {
  buttonPause.classList.add('hide')
  buttonPlay.classList.remove('hide')
})

buttonStop.addEventListener('click', function() {
  buttonPause.classList.remove('hide')
  buttonPlay.classList.add('hide')
  buttonSet.classList.remove('hide')
  buttonStop.classList.add('hide')
})

buttonSoundOff.addEventListener('click', function() {
  buttonSoundOn.classList.remove('hide')
  buttonSoundOff.classList.add('hide')
})

buttonSoundOn.addEventListener('click', function() {
  buttonSoundOn.classList.add('hide')
  buttonSoundOff.classList.remove('hide')
})

buttonSet.addEventListener('click', function() {
  minutes = prompt('Quantos minutos?')
  minutesDisplay.textContent = minutes
})
