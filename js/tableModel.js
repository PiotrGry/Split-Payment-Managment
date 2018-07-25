export class TableModel{
    constructor(name){
        this._name = name;
        this.receipts = []
    }

    getName(){
        return this._name;
    }

    getId(){ //Should run on childNode list of container its in
        return this._id;
    }

    showAllReceipts(){
        for(var i = 0; i< this.receipts.length; i++){
            console.log(this.receipts[i]);
        }
    }

    setName(newName){
        this._name = newName;
    }
}
