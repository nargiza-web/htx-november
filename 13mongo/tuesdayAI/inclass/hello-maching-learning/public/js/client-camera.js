
const classificationHeading = document.getElementById('classificationHeading')

var video = document.getElementById('video');
let localStream; 
let classifier; 
let stop = false 

const stopCamera = document.getElementById('stopCamera')
stopCamera.addEventListener('click',() => {
    // stop the camera 
    stop = true 
    video.pause()
    video.src = "";
    localStream.getTracks()[0].stop();
})

// Get access to the camera!
if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    // Not adding `{ audio: true }` since we only want video now
    navigator.mediaDevices.getUserMedia({ video: true }).then(function(stream) {
        localStream = stream 
        video.srcObject = stream;
        video.play();
    });
}

function modelReady() {
    console.log('Model is ready...')
    classifier.predict((error, results) => {
        if(error) {
            console.error(error)
        } else {
            if(results.length > 0) {
                let result = results[0]
                classificationHeading.innerHTML = result.label
            }
            if(stop == false) {
                modelReady()
            }
        }
    })
}

function initializeModel() {
    classifier = ml5.imageClassifier('MobileNet',video,modelReady)
}

initializeModel() 