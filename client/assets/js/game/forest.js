const ModelF = "assets/models/forest/model.json";

let fPredict = document.getElementById('fPrediction');

try {
    ml5.imageClassifier(ModelF, video).then(classifier => fLoop(classifier));

    const fLoop = classifier => {
        classifier.classify().then(results => {
          console.log(results);
            //Tiger, Horse, and Rhino
            if(results[0].label === "Tiger") {
              fPredict.innerHTML = "🐅";
            }else if(results[0].label === "Horse") {
              fPredict.innerHTML = "🐎";
            }else if(results[0].label === "Pig") {
              fPredict.innerHTML = "🐖";
            }else{
              fPredict.innerHTML = "❔";
            }
          fLoop(classifier); // Call again to create a loop
        });
      };
  } catch (error) {
    console.log(error);
  }