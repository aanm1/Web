document.querySelector("#submit").addEventListener("click",encrypt)

function encrypt(){
    var key= document.querySelector("#methods").value;
    var word = document.querySelector("#message");
    var container = []

    for ( i = 0; i<=word.value.length; i++){
        container[i] = (word.value[i])
    }

    alert(container)


}