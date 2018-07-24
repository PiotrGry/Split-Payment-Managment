
import * as closeBtn  from './closeReceiptBox.js';
import * as ReceiptOperation from './createReceipt.js'
import * as receiptView from './receiptView.js';
import * as tableController from './tableController.js';

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

var add = document.getElementById("plus");
