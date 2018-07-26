export class ModalController{

        showModal(e){
            console.log(e.target.id);

            var modal = document.getElementById(e.target.id).firstElementChild;
            console.log(modal);
            modal.style.display = "block";
            modal.style.fade = "transition: opacity .15s linear";
        }

    }
