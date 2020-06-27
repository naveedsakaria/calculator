function getNumber(num){
    var result = document.getElementById("result");
    result.value += num;
    
}

function clearResult(){
    var result = document.getElementById("result");
    result.value = "";
}
function getResult(){
    var result = document.getElementById("result");
    result.value = eval(result.value);
}
function clearEntry(){
    var result = document.getElementById("result");
    var cc = result.value;
    cc = cc.slice(0,-1);
    result.value = cc;
}

