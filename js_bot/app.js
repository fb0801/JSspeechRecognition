const btn = document.querySelector(".talk")
const content = document.querySelector(".content")


const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
const recognition = new SpeechRecognition

recognition.onstart = function(){
    console.log("voice is active")


}

recognition.onresult = function(){
     const current = Event.resultIndex

     const transcript = event.results[current][0].transcript
     content.textContent = transcript
     readOutLoad(transcript)
    
}

btn.addEventListener('click', () => {
recognition.start()
})

function readOutLoad(message) {
    const speech = new SpeechSynthesisUtterance()
    speech.text = message
    speech.volume =1
    speech.rate = 1
    speech.pitch = 1
    window.speechSynthesis.speach(speech)
}