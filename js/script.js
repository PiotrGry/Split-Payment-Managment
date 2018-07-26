
import * as closeBtn  from './closeReceiptBox.js';
import * as ReceiptOperation from './createReceipt.js'
import * as receiptView from './receiptView.js';
import {TableView} from './tableView.js';
import {TableController} from './tableController.js';
import {ModalView} from './modalView.js';
import {ModalController} from './modalController.js';
//querySelectorAll

document.getElementById("show-menu").addEventListener("click", addTable);

function addTable(){
    let container = document.getElementsByClassName("table-container")[0];
    let tableController = new TableController();
    let tableView = new TableView(tableController);
    container.appendChild(tableView.element);
    tableView.element.setAttribute("id", tableView.id)
    let modalController = new ModalController();
    let modalView = new ModalView(modalController,tableView)
    tableView.element.appendChild(modalView.element);
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

var add = document.getElementById("plus");

// document.getElementById("drag-table").addEventListener("dblclick",function displayModal(){
//     document.getElementById("modal-center").style.display= "block";
// });
// document.getElementById("close-modal-button").addEventListener("click",function hideModal(){
//     document.getElementById("modal-center").style.display= "none";
// });
