function toggleReceiptBox(){
    var table = document.getElementById("table").addEventListener("click", receiptBox);
    var closeReceiptBox = document.getElementById("receipt-box").addEventListener("dblclick", receiptBox);

    function receiptBox() {
        var receiptBox = document.getElementById("receipt-box");
        if(receiptBox.style.display === "none"){
            receiptBox.style.display = "block";
        }else {
            receiptBox.style.display = "none";
        }
    }
}

function removeElementFromReceiptBox(){
/* Get all elements with class="close" */
    var closebtns = document.getElementsByClassName("close");
    var i;

/* Loop through the elements, and hide the parent, when clicked on */
    for (i = 0; i < closebtns.length; i++) {
      closebtns[i].addEventListener("click", function() {
          this.parentElement.style.display = 'none';
        });
    }
}
