var counterID = 0;

export class TableView {
    constructor(controller){
        this.controller = controller;
        this.element = this.createElement();
        this.id = counterID++;
        this.addEventListeners();
    }
    render(){
        return `<div draggable="true" class="col-md-4 col-sm-4 table-draggable" id="" style="top: 313px; left: 578px;">
                    <a role="button" ><img  id="table" src="../images/table-w.png" alt="table"></a>
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
