// Creating a div element
function createReceipt(){
    var divElement = document.createElement("Div");
        divElement.id = "receipt-box";

        // Styling it OPTIONAL ???
        // divElement.style.position = "absolute";
        // divElement.style.zIndex = 9;
        // divElement.style.backgroundColor = "#ffffff";
        // divElement.style.border = "1px", "solid", "#66a3ff";
        // divElement.style.textAlign = "center";
        // divElement.style.display = "block";
        // divElement.style.boxSizing = "border-box";

    // Creating and adding header and spans to it
    var divHeader = document.createElement("Div");
        divHeader.id = "receipt-box-header";

    var spanClose = document.createElement("Span");
        spanClose.id = "modal-close";
        spanClose.classList.add("far_fa-window-close");

    var spanAdd = document.createElement("Span");
        spanAdd.id = "plus";
        spanAdd.classList.add("fas_fa-plus-square");

    divHeader.appendChild(spanClose);
    divHeader.appendChild(spanAdd);
    divElement.appendChild(divHeader);

    //Creating and adding empty list
    var list = document.createElement("Ul");
        divElement.appendChild(list);
    var li = document.createElement("Li");
    var text = document.createTextNode("Another paragraph, yay!");
    list.appendChild(li);
    li.appendChild(text);

    //Adding new div to body;
    document.getElementsByTagName("body")[0].appendChild(divElement);
}
