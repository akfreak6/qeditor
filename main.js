    let textarea = document.getElementById("text-area");
   let div = document.getElementById("input");
//    textarea.hidden = true;
   div.hidden = false;
   div.contentEditable = "true";
   div.oninput = (e) => {
     textarea.value = div.innerHTML;
   };
   
var flag = true;
var font = document.querySelectorAll("select#font-change> option");
for(var i =0;i<font.length; i++) {
    font[i].style.fontFamily = font[i].value;
}
window.addEventListener("load",function(){
    var editor = document.getElementById("text-area").innerHTML;
    editor.designMode = "on";
},false);

function bold(){
    let b = document.getElementById("input")
    b.style.fontWeight = flag ? "bold" : ""; 
    flag = !flag;
}
function italic(){
    let i = document.getElementById("input");
    i.style.fontStyle = flag ? "italic" : "";
    flag = !flag; 
}
function underline(){
    let uline = document.getElementById("input");
    uline.style.textDecoration = flag ? "underline" : "";
    flag = !flag;
}
function strike(){
    let strike = document.getElementById("input");
    strike.style.textDecoration = flag ? "line-through" : "";
    flag = !flag;
}
function bgcolor(){
    var theInput = document.getElementById("font-color");
    var theColor = theInput.value;
    theInput.addEventListener("input", function() { 
    document.getElementById("input").style.color = theInput.value;
    }, false);
}
function increaseFontSize(id, increaseFactor){
    txt = document.getElementById(id);
    style = window.getComputedStyle(txt, null).getPropertyValue('font-size');
    currentSize = parseFloat(style);
    txt.style.fontSize = (currentSize + increaseFactor) + 'px';
}
function decreaseFontSize(id, decreaseFactor){
    txt = document.getElementById(id);
    style = window.getComputedStyle(txt, null).getPropertyValue('font-size');
    currentSize = parseFloat(style);
    txt.style.fontSize = (currentSize + decreaseFactor) + 'px';
}
function setfont(){
    var getfont = document.getElementById("font-change");
    getfont.addEventListener("input", function() { 
        document.getElementById("input").style.fontFamily = getfont.value;
        }, false);    
}
// let selected = input.value.slice(input.selectionStart, input.selectionEnd);
// text-area.setRangeText(`*${selected}*`);