export class TableView {
    constructor(controller){
        this.controller = controller;
        this.element = this.createElement();
        this.addEventListeners();
    }

    render(){
        return `<div draggable="true" class="col-md-2 col-sm-2 table-draggable" id="drag-table" style="top: 313px; left: 578px;">
                    <a role="button" ><img  id="table" src="../images/table-w.png" alt="table"></a>
                </div>`;
    }

    createElement(){
        let elem = document.createElement('template');
        elem.innerHTML = this.render().trim();
        return elem.content.firstChild;
    }

    addEventListeners(){
        let heading = this.element.firstElementChild;
        heading.addEventListener('drag', this.controller.dragElement.bind(this.controller));
    }

}
