
function calculateBmi() {

    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;

// BMI formula 
    let bmi = weight / ( height * height) * 10000; 

    document.getElementById('heading').innerHTML = "Your BMI is: " +bmi;
    
    
    if(bmi <= 18.5) { 
        document.getElementById('message').innerHTML= "Underweight";
    }
    else if(bmi >= 18.5 && bmi <= 24.9) { 
        document.getElementById('message').innerHTML= "Normal";
    }
    else{ 
        document.getElementById('message').innerHTML= "You are overweight";
    }

}

function refreshPage(){
    window.location.reload();
} 




