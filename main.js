    //     let textarea = document.getElementById("text-area");
    //    let div = document.getElementById("input").innerHTML;
    // //    textarea.hidden = true;
    //    div.hidden = false;
    //    div.contentEditable = "true";
    //    div.oninput = (e) => {
    //      textarea.value = div.innerHTML;
    //    };
   
var flag = true;
var font = document.querySelectorAll("select#font-change> option");
for(var i =0;i<font.length; i++) {
    font[i].style.fontFamily = font[i].value;
}
window.addEventListener("load",function(){
    // var editor = document.getElementById("input");
    // const iWindow = iframe.contentWindow;
    // const iDocument = iWindow.document;
    // const element = iDocument.getElementsByTagName("p")[0];
    // element.style.color = "green";
    // var elmnt = editor.contentWindow.document.getElementsByTagName("body");
    teditore.document.designMode="On";
    // elmnt.document.body.designMode = "on";
    // elmnt.document.body.contentEditable = "on";
},false);


var iframe = document.getElementById("input");
var elmnt = iframe.contentWindow.document.getElementsByTagName("body")[0];

// var selection = elmnt.getSelection();
// selection.getSelection().getRangeAt(0);
function bold(){
    
    var selectedText = iframe.contentWindow.document.getSelection();
    // var selectedText.toString().slice(selectedText.selectionStart, selectedText.selectionEnd);
    //iframe.contentWindow.setRangeText(`<b>${selectedText.toString()}</b>`);
    // var range = selectedText.getRangeAt(0);
    // range.deleteContents();

    // var el = iframe.contentWindow.document.createTextNode(`${selectedText.toString()}`);

    // console.log(selectedText.toString());

    // var spin = iframe.contentWindow.document;
    // var spun = spin.toString().replace(/<\/?span[^>]*>/g,""); 
    // if (flag == true){
    //     (span.style.fontWeight = "bold") && (range.surroundContents(span));
    // } 
    // else{
    //     (span.style.fontWeight ="normal") &&(('span').contents.unwrap())
    // }
    // console.log(el);
    // el.style.fontWeight = flag ? "bold" : "";
    //range.cloneContents().querySelectorAll('span').forEach(e => e.parentNode.replaceChild(iframe.contentWindow.document.createTextNode(e.text), e));
    var element = $(elmnt);
    element.find("span").contents().unwrap();  
    // alert(result);
    var span = iframe.contentWindow.document.createElement('span');
    var range = selectedText.getRangeAt(0);
    range.surroundContents(span);
    
    selectedText.removeAllRanges();
    selectedText.addRange(range);
    
    span.style.fontWeight = flag ? "bold": "";

    flag = !flag;

    // range.insertNode(el);
    // if (input.selectionStart == input.selectionEnd) {
    //     return; // nothing is selected
    //   }
    //   let selected = teditore.value.slice(input.selectionStart, input.selectionEnd);
    //   input.setRangeText(`*${selected}*`);

    // let b = document.querySelector('[name="teditore"]');
    // bo = b.getElementsByTagName("body");
    // bo.style.fontWeight = flag ? "bold" : ""; 
    // flag = !flag;

    // let b = document.querySelector('[name="teditore"]');
    // var contentDoc = b.contentDocument;
    // var range = contentDoc.createRange();
    // range.setStart(contentDoc.body.firstChild.selectionStart);
    // range.setEnd(contentDoc.body.firstChild.selectionEnd);
    // var selection = iframeElement.contentWindow.getSelection();
    // selection.removeAllRanges();
    // selection.addRange(range);
    // var selected = elmnt.getSelection();

    // elmnt.style.fontWeight = flag ? "bold" : ""; 
    // flag = !flag;
    // let range = new Range();
    // elmnt.selectNode(body); // or selectNode(p) to select the <p> tag too
  
    // document.getSelection().removeAllRanges(); // clear existing selection if any
    // document.getSelection().addRange(range);
    // alert(range);
    // let selected = elmnt.slice(elmnt.selectionStart, elmnt.selectionEnd);
    // alert(elmnt.selectionStart);
    // elmnt.setRangeText(`*${selected}*`);
}

    
// }
function italic(){
    elmnt.style.fontStyle = flag ? "italic" : "";
    flag = !flag; 
}
function underline(){
    elmnt.style.textDecoration = flag ? "underline" : "";
    flag = !flag;
}
function strike(){
    elmnt.style.textDecoration = flag ? "line-through" : "";
    flag = !flag;
}
function bgcolor(){
    var theInput = document.getElementById("font-color");
    var theColor = theInput.value;
    theInput.addEventListener("input", function() { 
    elmnt.style.color = theInput.value;
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

// function getSelectedText(frameId) { 
// //     let range = new Range();
// //     var iframe= document.getElementById('input');
// //     var idoc= iframe.contentWindow.document.getElementsByTagName("body")[0];// ie compatibility
// //     // idoc.selection.createRange().text; 
// // //     function myGetSelection(){
// // //         if(document.selection){ //IE
// // //                return document.selection.createRange().text;
// // //          } else{
// // //                return window.getSelection().toString();
// // //          }
// // //   }

// //     // console.log(idoc.getSelection().addRange(range));
// //     console.log(document.getElementById('input').contentWindow.getSelection());
    
//     14
// var iframes = document.getElementsByTagName('iframe');

// [].forEach.call(iframes, function(frame) {
//     frame.contentWindow.document.onmouseup = function() { 
//       var iframeSelection = frame.contentWindow.getSelection(); 
//       if (iframeSelection.toString().length > 0) { alert(iframeSelection); }
//   }
// });
// }

function getIframeSelectionText(iframe) {
    var win = iframe.contentWindow;
    var doc = win.document;
  
    if (win.getSelection) {
      return win.getSelection().toString();
    } else if (doc.selection && doc.selection.createRange) {
      return doc.selection.createRange().text;
    }
  }
  