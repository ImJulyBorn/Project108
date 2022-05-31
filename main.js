function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/pi9i2H8IL/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}


function gotResults(error, results) 
{
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = "I can hear - " + results[0].label;
        document.getElementById("result_confidence").innerHTML = "Accuracy - " + Math.floor(results[0].confidence*100).toFixed(2)+" %";
        document.getElementById("result_label").style.color = "rgb(" + random_number_r + ", " + random_number_g + "," + random_number_b + ")";
        document.getElementById("result_confidence").style.color = "rgb(" + random_number_r + ", " + random_number_g + "," + random_number_b + ")";

        img = "https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/5566/cat-clipart-md.png";
        img1 = "https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/6219/dog-clipart-md.png";
        img2 = "https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/9529/cow-clipart-xl.png";
        img3 = "https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/6136/lion-clipart-xl.png";
        img4 = "https://media.istockphoto.com/vectors/vector-illustration-of-ear-icon-vector-id1256371227?k=20&m=1256371227&s=612x612&w=0&h=9-8bKaX7kGKVYAM_hjBrwhNAYPVZyTfCnN8Ct9RJe7A=";

    if (results[0].label == "Bark"){
        document.getElementById("gif").src = img1;
    }   else if(results[0].label == "Meow") {
        document.getElementById("gif").src = img;
    }   else if (results[0].label == "Moo") {
        document.getElementById("gif").src = img2;
    }   else if (results[0].label == "Roar"){
        document.getElementById("gif").src = img3;
    }   else{
        document.getElementById("gif").src = img4;
    }
    }
}