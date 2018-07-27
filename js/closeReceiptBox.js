export function closeReceiptBox() {
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
