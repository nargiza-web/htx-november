let classifier;

const classifyButton = document.getElementById('classifyButton')
const classificationHeading = document.getElementById('classificationHeading')
const targetImage = document.getElementById('targetImage')



classifyButton.addEventListener('click', () => {
  classifier.classify(targetImage, (error, results) => {
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

function modelReady(){
  classifyButton.disabled = false 
  console.log('Model has been initialized...')
}

function initializeModel(){
  classifier = ml5.imageClassifier('MobileNet', modelReady)
}


initializeModel()