   
        let calButtonList = document.getElementsByClassName("calButton");
        let calButton = calButtonList[0];
        console.log(calButton)

        calButton.addEventListener("click", ()=>{

            let heightInput = document.getElementById("heightLabel");
            let wightInput = document.getElementById("weightLabel");
            let text = document.getElementById("textAreaID");

            let weight = wightInput.value;
            let height = heightInput.value;

            

            if(isNaN(weight) || isNaN(height)){
                if( isNaN(height)){
                alert("Height should be a number, Enter again")                    
            }
            if(isNaN(weight)){
                    alert("Weight should be a number, Enter again")  
            } 
            }
            else{
                let heightInMeters = height/100
                let bmi = weight/ Math.pow(heightInMeters,2);
                console.log(bmi)
                
                text.value = Math.round((bmi + Number.EPSILON) * 100) / 100;
            }

            
        })