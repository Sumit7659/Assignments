let player=prompt("Enter Your Name")
let number= (Math.round(Math.random()*100))
let score=100
let number1=prompt("Enter the 1st choice")
number1=Number.parseInt(number1)

if(number==number1){
    alert("Great! You won ")
    
}
else if(number!=number1){
    if(number<number1){
        alert("Ooops! You Choose a wrong Number, please choose less than " + number1)
        score=score-25
    }
    else if(number>number1){
        alert("Ooops! You Choose a wrong Number, please choose greater than " + number1)
        score=score-25
    }

    let number2=prompt("Enter the 2nd choice")
    number2=Number.parseInt(number2)
    if(number==number2){
        alert("Great! You won ")
    }
    else if(number!=number2){
        if(number<number2){
            alert("Ooops! You Choose a wrong Number, please choose less than " + number2)
            score=score-25
        }
        else if(number>number2){
            alert("Ooops! You Choose a wrong Number, please choose greater than "+ number2)
            score=score-25
        }

        let number3=prompt("Enter the 3rd choice")
        number3=Number.parseInt(number3)
        if(number==number3){
            alert("Great! You won ")
        }
        else if(number!=number3){
            if(number<number3){
                alert("Ooops! Wrong Choice")
                score=score-25
            }
            else if(number>number3){
                alert("Ooops! Wrong Choice")
                score=score-25
            }
        }
    }
}
alert("hello "+ player +" your final score is " + score + " Right Number is " + number)

