
var res = '';
function equalTo(event)
{
    try {
        var ans = eval();
    }
    catch(err)
    {
        display.innerHTML = err.message;
        res = '';
    }
    event.stopPropagation();
}

function addOperand(event,value)
{
    console.log(value);
    console.log(event);
    var text  = value.innerText;
    res = res + text;
    display.innerHTML = res;
    event.stopPropagation();
}

var eqaulTobtn = document.getElementById("equalTo");
eqaulTobtn.addEventListener("click",equalTo);

var operandbtn = document.getElementsByClassName("operand");
console.log(operandbtn);
// for([key,value] in operandbtn)
//     value.addEventListener("click",addOperand);
operandbtnarr = Object.entries(operandbtn);
for([key,value] of operandbtnarr){
    console.log(key,value);
    value.addEventListener("click",function(e){
        addOperand(e,value);
    });
}
