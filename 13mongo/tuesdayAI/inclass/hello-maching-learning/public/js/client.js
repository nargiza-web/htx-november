
let classifier; 

const classifyButton = document.getElementById('classifyButton')
const classificationHeading = document.getElementById('classificationHeading')
const targetImage = document.getElementById('targetImage')

classifyButton.addEventListener('click',() => {
    // classify the image 
    classifier.classify(targetImage,(error, results) => {
        if(error) {
            console.error(error)
        } else {
            if(results.length > 0) {
                let result = results[0]
                classificationHeading.innerHTML = `${result.label} - ${result.confidence}`

            }
            console.log(results)
        }
    })
})

function modelReady() {
    classifyButton.disabled = false 
    console.log('Model has been initialized...')
}

// this initializes the MobileNet Machine Learning Model
function initializeModel() {
    // We are using a callback function modelReady 
    // But you can also use Promises
    classifier = ml5.imageClassifier('MobileNet',modelReady)
}

initializeModel() 