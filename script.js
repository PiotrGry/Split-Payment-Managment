function receiptBox(display) {
    var receiptBox = document.getElementById("receipt-box");
    receiptBox.style.display = display;
}

/* Get all elements with class="close" */
var closebtns = document.getElementsByClassName("close");

/* Loop through the elements, and hide the parent, when clicked on */
for (var i = 0; i < closebtns.length; i++) {
  closebtns[i].addEventListener("click", function() {
  this.parentElement.style.display = 'none';
});
}


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
    createReceipt();
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
