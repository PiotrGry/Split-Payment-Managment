class TableModel{
    constructor(name){
        this.name = name;
        this.receipts = []
    }

    getName(){
        return this.name;
    }

    showAllReceipts(){
        for(var i = 0; i< this.receipts.length; i++){
            console.log(this.receipts[i]);
        }
    }

    setName(newName){
        this.name = newName;
    }
}
