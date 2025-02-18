document.querySelector("#submit").addEventListener("click",begin);



function kings(submission,key){
    submit = submission;
    kulf = key;
    caesar = [submission];
    alert(caesar);
}


function mathimatics(submission,key){
    submit = submission;
    kulf = key;
    alert("You picked the mathimatician")
}

function begin(){
    let date = new Date().getDay();
    let time = new Date().getTime();
    alert (date,time)
   
    alert("System Started")
    var submission = document.querySelector("#methods").value;
    var plainText = document.querySelector("#message").value;
    var lock = document.querySelector("#key").value;
    alert("About to enter phase 1");
    alert(submission)
    if(submission === "Kings"){
        kings(plainText, lock);
    }else if (submission === "Mathimatician"){
        mathimatics(plainText,lock);
    }else{
        alert("Please Enter a valid Encryption method");
    }
}