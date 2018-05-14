// DRY - Donot Repeat Yourself

window.addEventListener("load", bindEvent);

var num_1;
var num_2;

function bindEvent(){
    console.log("Window loaded...");

    num_1 = document.getElementById("num_1");
    num_2 = document.getElementById("num_2");

    document.getElementById("add").addEventListener("click",add);
    document.getElementById("sub").addEventListener("click",sub);
}

function add(){
    console.log("Add function executed...");
    var result = parseInt(num_1.value) + parseInt(num_2.value);
    document.getElementById("result").innerHTML = result;
}

function sub(){
    console.log("Sub function executed...");
    var result = parseInt(num_1.value) - parseInt(num_2.value);
    document.getElementById("result").innerHTML = result;
}