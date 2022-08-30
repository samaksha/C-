
var res = '';
function equalTo()
{
    try {
        var ans = eval(res);
        res = ans;
        if(ans == undefined)
            throw "undefined";
    }
    catch(err)
    {
        console.log(err);
        res = "";
    }
    display.innerHTML = res;
}

function addOperand(event,value)
{
    console.log(event["path"][1]);
    console.log(event);
    var text  = event["path"][1].innerText;
    res = res + text;
    display.innerHTML = res;
    event.stopPropagation();
}

function addOperator(event)
{
    console.log(event);
    var text = event["path"][0].innerText;
    console.log(text);
    if(text == "=")
    {
        equalTo();
        event.stopPropagation();
        return;
    }
    if(text == "AC")
    {
        res = '';
        text = '';
    }
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

var operator = document.getElementsByClassName("operator");
for(var i = 0;i<operator["length"];i++)
{
    var x = i.toString();
    operator[x].addEventListener("click",addOperator);
}