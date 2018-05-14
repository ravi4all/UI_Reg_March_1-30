window.addEventListener("load", bindEvent);

function bindEvent(){
    // Event Binding
    console.log("Window loaded...");
    document.getElementById("add").addEventListener("click",add);
}

// document.getElementById("add").addEventListener("click",function(){
//     var num_1 = parseInt(document.getElementById("num_1").value);
//     var num_2 = parseInt(document.getElementById("num_2").value);
//     var result = num_1 + num_2;
//     document.getElementById("result").innerHTML = result;
// });

function add(){
    console.log("Add function executed...");
    var num_1 = parseInt(document.getElementById("num_1").value);
    var num_2 = parseInt(document.getElementById("num_2").value);
    var result = num_1 + num_2;
    document.getElementById("result").innerHTML = result;
}