
function onSubmit(){
    var chestexercises = [
        "Bench Press 3x12",
        "Dumbbell Press 3x12",
        "Incline Press Machine 3x12",
        "Pushups 3xAMRAP",
        "Pullover 3x12",
        "Dips 3xAMRAP",
    ];
    
    
    var armexercises = [
        "Bicep Curl 3x12",
        "Hammer Curl 3x12",
        "Overhead Tricep Extensions 3x12",
        "Sitting Bicep Curls 3xAMRAP",
        "Standing Cable Bicep Curl 3x12",
        "Standing Cable Tricep Curl 3xAMRAP",
    ];
    
    var backexercises = [
        "Pullups 3x12",
        "Single Arm Rows 3x12",
        "Chest Supported Rows 3x12",
        "Pendlay Rows 3xAMRAP",
        "Lat Pulldowns 3x12",
        "Back extensions 3xAMRAP",
    ];
    
    
    var absexercises = [
        "Crunches 3x12",
        "Ab wheel 3x12",
        "Hanging leg raises 3x12",
        "Planks 3xAMRAP",
        "Russian Twists 3x12",
        "Incline Crunches 3xAMRAP",
    ];
    
    
    var legexercises = [
        "Barbell Squats 3x12",
        "Goblet Squats 3x12",
        "Hamstring Curls 3x12",
        "Leg Extensions 3xAMRAP",
        "Leg Press Machine 3x12",
        "Walking Lunges 3xAMRAP",
    ];
    
    
    var shoulderexercises = [
        "OverHead Press 3x12",
        "Lateral Raises 3x12",
        "Iso lateral raises 3x12",
        "Seated lateral raises 3xAMRAP",
        "Facepulls 3x12",
        "Shoulder Press 3xAMRAP",
    ];
    
    //get the users name
    var usersname = document.forms['workoutresults']['name'].value;
    // what bodypart they want to work out
    
    var userschoice = document.forms['workoutresults']['bodypart'].value;
    // how many exercises they want to do 
    var numberofdays = document.forms['workoutresults']['numofexercises'].value;

    var greeting = document.getElementById("greeting");
    console.log(greeting)
    document.write('<h1>Hi ' + usersname +'</h1>' + '<br>');
    document.write('Your workout of the day is: ' + '<br>');
   
    if (userschoice === "chest"){
        for (var i = 0; i < numberofdays; i++){
            document.write(chestexercises[i] + '<br>')
        }
    }
    else if (userschoice === "back"){
        for (var i = 0; i < numberofdays; i++){
            document.write(backexercises[i] + '<br>')
        }
    }
    else if (userschoice === "arms"){
        for (var i = 0; i < numberofdays; i++){
            document.write(armexercises[i] + '<br>')
        }
    }
    else if (userschoice === "abs"){
        for (var i = 0; i < numberofdays; i++){
            document.write(absexercises[i] + "<br>")
        }
    }
    else if (userschoice === "legs"){
        for (var i = 0; i < numberofdays; i++){
            document.write(legexercises[i] + '<br>')
        }
    }
    else if (userschoice === "shoulders"){
        for (var i = 0; i < numberofdays; i++){
            document.write(shoulderexercises[i] + '<br>')
        }
    }

}





