console.dir(document.getElementById ("fonts"))
function selectFont()
{
 let font=document.getElementById("fonts").value
 document.getElementById("res").style.fontFamily=font
}
function selectNumber()
{
 let number=document.getElementById("number").value
 document.getElementById("res").style.fontSize=number+"px"
}
function selectColor()
{
 let color=document.getElementById("color").value
 document.getElementById("res").style.color=color
}
function handleSubmit(event){
    event.preventDefault()
}