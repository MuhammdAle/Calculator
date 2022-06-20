function func(num)
{
    console.log(num)
    var result= document.getElementById("result");
    result.value += num;
     
}
function clr()
{
    var result= document.getElementById("result");
    result.value = "";
}
function getvalue()
{
    var result= document.getElementById("result");
    console.log(result.value)
    result.value = eval(result.value);

}