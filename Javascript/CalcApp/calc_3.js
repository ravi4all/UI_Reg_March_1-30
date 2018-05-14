// DRY - Donot Repeat Yourself

window.addEventListener("load", bindEvent);

var num_1;
var num_2;

function bindEvent(){
    console.log("Window loaded...");

    num_1 = document.getElementById("num_1");
    num_2 = document.getElementById("num_2");

    var buttons = document.getElementsByTagName("button");
    // console.log(buttons);
    // buttons.addEventListener("click", add);
    for(var i = 0; i<buttons.length; i++){
        buttons[i].addEventListener("click",calc);
    }

}

function calc(){
    // console.log("Calc function executed...");
    // console.log(event);
    var opr = event.srcElement.value;
    // console.log(opr);
    var expression = num_1.value + opr + num_2.value;
    // console.log(expression);
    var result = eval(expression);
    document.getElementById("result").innerHTML = result;
}