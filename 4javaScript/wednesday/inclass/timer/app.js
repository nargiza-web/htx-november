let counterH1 = document.getElementById("counterH1")
let counterTextBox = document.getElementById("counterTextBox")
let startCounterButton = document.getElementById("startCounterButton")
startCounterButton.addEventListener('click',() => {
    document.body.style.backgroundColor = 'green'
    let timerValue = counterTextBox.value 
    let intervalId = window.setInterval(() => {
        if(timerValue < 0) {
            window.clearInterval(intervalId)
            document.body.style.backgroundColor = 'red'
        } else {
            counterH1.innerHTML = timerValue
            timerValue--
        }
    },1000)
})
