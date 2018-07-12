// Creating a div element
function createReceipt(){


    var receiptCol = document.createElement("Div");
    receiptCol.id = "receipt-col";
    receiptCol.className += "col-md-4";

    var thumbnail = document.createElement("Div");
    thumbnail.className += "thumbnail";
    receiptCol.appendChild(thumbnail);


    var divElement = document.createElement("Div");
        divElement.className += "receipt-box";

    thumbnail.appendChild(divElement); //addng as child to divCol

    // Creating header with id
    var divHeader = document.createElement("Div");
        divHeader.id = "receipt-box-header";

        divElement.appendChild(divHeader);

    //Creating close icon
    var spanCloseReceipt = document.createElement("Span");
        spanCloseReceipt.id = "receipt-close";
        spanCloseReceipt.className += "far fa-window-close";

    //Add function to remove receipt box to close icon
    spanCloseReceipt.addEventListener("click", removeReceipt);

         function removeReceipt() {
             var list=document.getElementById("receipt-col");
                list.parentNode.removeChild(list);

        }

        divHeader.appendChild(spanCloseReceipt);

        //Creating and adding list with placeholder
        var list = document.createElement("Ul");
        list.id = "orderList"
        divElement.appendChild(list);

    //Creating add icon
    var spanAddReceipt = document.createElement("Span");
        spanAddReceipt.id = "receipt-plus";
        spanAddReceipt.className += "fas fa-plus-square";
        divHeader.appendChild(spanAddReceipt);

        spanAddReceipt.onclick =  function(){
            var li = document.createElement("Li");
            li.id = "placeholder";
            var textL1 = document.createTextNode("Placeholder");
            var liCloseSpan = document.createElement("Span");
            liCloseSpan.classList.add("close");
            var closeSpanText = document.createTextNode("x");
            console.log("dupa");
            list.appendChild(li);
                console.log("dupa za appendem");

            li.appendChild(textL1);
            li.appendChild(liCloseSpan);
            liCloseSpan.appendChild(closeSpanText);
        }




    //Adding new div to receipr-row;
    document.getElementById("receipt-row").appendChild(receiptCol);
}

    
