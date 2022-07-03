function updateTimerDisplay(minutes, seconds) {
  minutesDisplay.textContent = String(minutes).padStart(2, "0")
  secondsDisplay.textContent = String(seconds).padStart(2, "0")
}

function countdown(){
  setTimeout(function() {
    let seconds = Number(secondsDisplay.textContent)
    let minutes = Number(minutesDisplay.textContent)

    updateTimerDisplay(minutes, 0)


    if(minutes <= 0) {
      resetControls() 
            return
  }


  if (seconds <= 0) {
    seconds = 2
    --minutes
  }  

// minutesDisplay.textContent = String(minutes - 1).pad.Start(2, "0")
    
  updateTimerDisplay(minutes, String(seconds - 1))
  
    countdown()
    }, 1000)
}