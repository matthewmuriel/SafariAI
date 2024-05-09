const ModelS = "assets/models/savannah/model.json";

let sPredict = document.getElementById('sPrediction');

try {
    ml5.imageClassifier(ModelS, video).then(classifier => sLoop(classifier));

    const sLoop = classifier => {
        classifier.classify().then(results => {
          console.log(results);
      
            //inner prediction for Zebra, Pig, and Lion
            if(results[0].label === "Zebra") {
              sPredict.innerHTML = "🦓";
            }else if(results[0].label === "Rhino") {
              sPredict.innerHTML = "🦏";
            }else if(results[0].label === "Lion") {
              sPredict.innerHTML = "🦁";
            }else{
              sPredict.innerHTML = "❔";
            }
      
          sLoop(classifier); // Call again to create a loop
        });
      };
} 
catch (error) {
    console.log(error);
}
  