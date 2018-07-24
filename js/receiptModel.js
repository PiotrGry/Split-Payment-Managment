class ReceiptModel{
    constructor(title){
        this.id = null;
        this.title = title;
        this.orders = [];

    }

    getTitle(){
        return this.title;
    }
}

var receipt = new ReceiptModel("Table 1");
console.log(receipt.getTitle());
//suma cen orderów
