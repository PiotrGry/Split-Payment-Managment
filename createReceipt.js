// Creating a div element
function createReceipt(){
    var receiptCol = document.createElement("Div");
    receiptCol.id = "receipt-col";
    receiptCol.className += "col-md-4";


    var divElement = document.createElement("Div");
        divElement.id = "receipt-box";
        receiptCol.appendChild(divElement); //addng as child to divCol

    // Creating header with id
    var divHeader = document.createElement("Div");
        divHeader.id = "receipt-box-header";

    //Creating close icon
    var spanCloseReceipt = document.createElement("Span");
        spanCloseReceipt.id = "receipt-close";
        spanCloseReceipt.className += "far fa-window-close";

    //Add function to remove receipt box to close icon
    spanCloseReceipt.addEventListener("click", removeReceipt);
         function removeReceipt() {
             var list=document.getElementById("receipt-box");
                list.parentNode.removeChild(list);
        }

    //Creating add icon
    var spanAddReceipt = document.createElement("Span");
        spanAddReceipt.id = "receipt-plus";
        spanAddReceipt.className += "fas fa-plus-square";


    //Appending childs to respective parents
    divHeader.appendChild(spanCloseReceipt);
    divHeader.appendChild(spanAddReceipt);
    divElement.appendChild(divHeader);


    //Creating and adding list with placeholder
    var list = document.createElement("Ul");
    divElement.appendChild(list);

    // TODO: Filling should be automatic
    var li = document.createElement("Li");
    li.id = "placeholder";
    var textL1 = document.createTextNode("Placeholder");
    var liCloseSpan = document.createElement("Span");
        liCloseSpan.classList.add("close");
        var closeSpanText = document.createTextNode("x");

    list.appendChild(li);
    li.appendChild(textL1);
    li.appendChild(liCloseSpan);
    liCloseSpan.appendChild(closeSpanText);

    //Adding new div to body;
    document.getElementsByClassName("recepit-content")[0].appendChild(divElement);
}
