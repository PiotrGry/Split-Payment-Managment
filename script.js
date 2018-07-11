function receiptBox() {
    var receiptBox = document.getElementById("receipt-box");
    receiptBox.style.display = "block";

}

/* Get all elements with class="close" */
var closebtns = document.getElementsByClassName("close");
var i;

/* Loop through the elements, and hide the parent, when clicked on */
for (i = 0; i < closebtns.length; i++) {
  closebtns[i].addEventListener("click", function() {
  this.parentElement.style.display = 'none';
});


// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("table");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("modal-close")[0];


// When the user clicks on the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}


var add = document.getElementById("plus");

add.onclick = function(){
    receiptBox();
}
}
