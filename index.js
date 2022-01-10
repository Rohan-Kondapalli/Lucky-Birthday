
const inputDob= document.querySelector("#dob-input");
const luckyNumber=document.querySelector("#lucky-number");
const checkButton= document.querySelector("#check-button");

const msg= document.querySelector("#message")

checkButton.addEventListener('click',clickEventhandler)

function clickEventhandler(){

    var dob= inputDob.value;
    var sum= sumOf(dob);  
    console.log(sum)
    //  console.log(inputDob.value, luckyNumber.value)

    var luck = isBirthdayLucky(sum,luckyNumber)

    

}

function sumOf(dob){
    var dob= inputDob.value;

    var dobReplaced= dob.replaceAll("-","")
    console.log(dobReplaced)

    var sumOfDate= 0;

    for(let i=0; i<dobReplaced.length;i++){

        sumOfDate= sumOfDate+ Number(dobReplaced[i]);
        
    }
    return sumOfDate;
    
}

function  isBirthdayLucky(sum,luckyNumber){

    // var luckyNum= luckyNumber.value;

    var isLucky= sum % luckyNumber;

    if(isLucky===0){

        showMessage("Yay! Your Birthday is Lucky.")

    }
    else{
        showMessage("Not Lucky!")
    }
}

function showMessage(message){

    msg.innerText= message
}