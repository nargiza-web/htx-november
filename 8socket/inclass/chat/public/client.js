let chatTextBox = document.getElementById("chatTextBox")
let sendMessageButton = document.getElementById("sendMessageButton")
let chatMessagesUL = document.getElementById("chatMessagesUL")

socket.on('Houston',(message) => {

    let chatMessageLI = `<li>${message}</li>`
    chatMessagesUL.insertAdjacentHTML('beforeend',chatMessageLI)

    console.log(message)
})

sendMessageButton.addEventListener('click',() => {
    let message = chatTextBox.value
    // send chat message 
    socket.emit('Houston',message)
})
