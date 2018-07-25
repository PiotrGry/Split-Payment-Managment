
import * as closeBtn  from './closeReceiptBox.js';
import * as ReceiptOperation from './createReceipt.js'
import * as receiptView from './receiptView.js';
import {TableView} from './tableView.js';
import {TableController} from './tableController.js';


document.getElementById("show-menu").addEventListener("click", addTable);

function addTable(){
    console.log("Add table: 1");
    let container = document.getElementsByClassName("table-container")[0];
    let tableController = new TableController();
    let tableView = new TableView(tableController);
    container.appendChild(tableView.element);
    console.log("Add table: 2");
}
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
var closebtns = document.getElementsByClassName("close");

// Get the button that opens the modal
var btn = document.getElementById("table");


var add = document.getElementById("plus");
