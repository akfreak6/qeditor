var font = document.querySelectorAll("select#font-change> option");
for(var i =0;i<font.length; i++) {
    font[i].style.fontFamily = font[i].value;
}
var iframe = document.getElementById("input");
var elmnt = iframe.contentWindow.document.getElementsByTagName("body")[0];
var elmnts = iframe.contentWindow.document.getElementsByTagName("body")[0];

window.addEventListener("load",function(){
    teditore.document.designMode="On";
},false);

var selectedText = iframe.contentWindow.document.getSelection();
var txtlength = selectedText.toString().length;
var element = $(elmnt);

function bold(){
    element.find("strong").contents().unwrap(); 
    var bold = iframe.contentWindow.document.createElement('strong');
    var range = selectedText.getRangeAt(0);
    if(selectedText.toString().length > 0)
    {   
        range.surroundContents(bold);
        selectedText.removeAllRanges();
        selectedText.addRange(range);
    }
}

function italic(){
    element.find("em").contents().unwrap(); 
    var empha = iframe.contentWindow.document.createElement('em');
    var range = selectedText.getRangeAt(0);
    if(selectedText.toString().length > 0)
    {   
        range.surroundContents(empha);
        selectedText.removeAllRanges();
        selectedText.addRange(range);
    }
}

function underline(){
    element.find("u").contents().unwrap(); 
    var under = iframe.contentWindow.document.createElement('u');
    var range = selectedText.getRangeAt(0);
    if(selectedText.toString().length > 0)
    {   
        range.surroundContents(under);
        selectedText.removeAllRanges();
        selectedText.addRange(range);
    }
}
function strike(){
    element.find("s").contents().unwrap(); 
    var supe = iframe.contentWindow.document.createElement('s');
    var range = selectedText.getRangeAt(0);
    if(selectedText.toString().length > 0)
    {   
        range.surroundContents(supe);
        selectedText.removeAllRanges();
        selectedText.addRange(range);
    }
}
function bgcolor(){
    var span = iframe.contentWindow.document.createElement('span'); 
    var range = selectedText.getRangeAt(0);
    if(selectedText.toString().length > 0)
    {   range.surroundContents(span);
        selectedText.removeAllRanges();
        selectedText.addRange(range);
    }
    var theInput = document.getElementById("font-color");
    var theColor = theInput.value;
    theInput.addEventListener("input", function() { 
    span.style.color = theInput.value;
    }, false);
}

function increaseFontSize(id, increaseFactor){
    var txt = document.getElementById(id).contentWindow.document.getElementsByTagName("body")[0];
    style = window.getComputedStyle(txt, null).getPropertyValue('font-size');
    currentSize = parseFloat(style);
    elmnt.style.fontSize = (currentSize + increaseFactor) + 'px';
}

function decreaseFontSize(id, decreaseFactor){
    var text = document.getElementById(id).contentWindow.document.getElementsByTagName("body")[0];
    style = window.getComputedStyle(text, null).getPropertyValue('font-size');
    currentSize = parseFloat(style);
    elmnt.style.fontSize = (currentSize + decreaseFactor) + 'px';
}
function setfont(){
    var getfont = document.getElementById("font-change");
    getfont.addEventListener("input", function() { 
        elmnt.style.fontFamily = getfont.value;
        }, false);    
}
