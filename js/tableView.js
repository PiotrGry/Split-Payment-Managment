var counterID = 0;

export class TableView {
    constructor(controller){
        this.controller = controller;
        this.element = this.createElement();
        this.id = counterID++;
        this.addEventListeners();

    }
    render(){
        return `<div draggable="true" class=" col-md-2 col-sm-2 table-draggable" id="" style="top: 313px; left: 578px;">
                       <img  id="table" src="../images/table-w.png" alt="table">
                </div>`;


    }

    createElement(){
        let elem = document.createElement('template');
        elem.innerHTML = this.render().trim();
        return elem.content.firstChild;
    }

    addEventListeners(){
        let theParent = document.getElementsByClassName("table-container")[0];
        theParent.addEventListener('drag', this.controller.dragElement.bind(this.controller));
    }

}
