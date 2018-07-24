
import * as closeBtn  from './closeReceiptBox.js';
import * as ReceiptOperation from './createReceipt.js'
import * as receiptView from './receiptView.js';

function allowDrop(ev) {
    ev.preventDefault();
}
window.allowDrop = allowDrop;

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}
window.drag = drag;

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}
window.drop = drop;

function receiptBox(display) {
    var receiptBox = document.getElementById("receipt-box");
    receiptBox.style.display = display;
}

/* Get all elements with class="close" */
// var closebtns = document.getElementsByClassName("close");



closeBtn.closeReceiptBox();

// Get the modal
// var modal = document.getElementById('myModal');

// Get the button that opens the modal
// var btn = document.getElementById("table");

// Get the <span> element that closes the modal
// var modalClose = document.getElementById("modal-close");


// When the user clicks on the button, open the modal
// btn.onclick = function() {
//     modal.style.display = "block";
// }
//
// // When the user clicks on <span> (x), close the modal
// modalClose.onclick = function() {
//     modal.style.display = "none";
// }


// var add = document.getElementById("plus");
//
//
// add.onclick = function(){

    // ReceiptOperation.createReceipt();

    // receiptView.render();

// }

// =============================================================
                    // DRAG
