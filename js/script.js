import * as closeBtn  from './closeReceiptBox.js';
import * as ReceiptOperation from './createReceipt.js'


closeBtn.closeReceiptBox();

// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("table");

// Get the <span> element that closes the modal
var modalClose = document.getElementById("modal-close");


// When the user clicks on the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
modalClose.onclick = function() {
    modal.style.display = "none";
}


var add = document.getElementById("plus");


add.onclick = function(){
    ReceiptOperation.createReceipt();
}

// =============================================================
                    // DRAG

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}
