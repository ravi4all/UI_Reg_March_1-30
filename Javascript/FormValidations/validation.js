window.addEventListener("load", initEvents);

var username;
var useremail;
var password;
var conf_pwd;
var file;
function initEvents(){
    username = document.querySelector("#box_1");
    useremail = document.querySelector("#box_2");
    password = document.querySelector("#box_3");
    conf_pwd = document.querySelector("#box_4");
    file = document.querySelector("#file");

    span = document.querySelectorAll("span");

    username.addEventListener("blur", blankCheck);
    useremail.addEventListener("keyup",validateEmail);
    file.addEventListener("change",set_pic);

}

function blankCheck(){
    var str = username.value;
    // if(str == ""){
    //     span[0].innerHTML = "Please fill this field";
    //     username.style.border = "1px solid red";
    // }
    // else {
    //     span[0].innerHTML = "";
    //     username.style.border = "1px solid green";
    // }

    // Truthy and Falsy
    if(isEmpty(str)){
        span[0].innerHTML = "Please fill this field";
        username.style.border = "1px solid red";
    }
    else {
        span[0].innerHTML = "";
        username.style.border = "1px solid green";
    }

}

function isEmpty(str){
    return (str == undefined || str == "" || str == NaN || str == false) ? true : false;
}


function validateEmail(){
    // console.log("Checking email");
    var str = useremail.value;
    // Regular Expression - regex
    var pattern = /([a-z]|[0-9])\w+[@]+\w+[.]\w+/;
    if(pattern.test(str)){
        span[1].innerHTML = "Valid";
    }
    else {
        span[1].innerHTML = "Not Valid";
    }
}

function set_pic(){
    var div = document.getElementById("profile");
    var obj = file.files;
    var img_src = obj[0].name;
    var img = document.createElement("img");
    img.setAttribute('src',img_src);
    div.appendChild(img);
}