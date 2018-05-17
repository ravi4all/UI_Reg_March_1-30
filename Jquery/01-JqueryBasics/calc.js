$(document).ready(function(){

    var num_1 = $("input[name='f_num']");
    var num_2 = $("input[name='s_num']");
    var result = 0;
    $("button").click(function(){
        var opr = $(this).val();
        var expression = num_1.val() + opr + num_2.val();
        result = eval(expression);
        $("span").html(result);
    })

})