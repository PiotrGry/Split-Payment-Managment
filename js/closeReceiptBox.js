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

    console.log("I am here to trigger the conflict");

    function awesomeFunc(){
        var sign = document.getElemntbyTagName("Body");
        if(sign === ""){
            console.log("Huston we got a problem");
        }else{
            console.log("I've got id dude!");
        }
    }

}
