export class ModalController{

        showModal(e){
            console.log(e.target.id);

            e.stopPropagation();
            var modal = document.getElementById(e.target.id).firstElementChild;
            console.log(modal);
            modal.style.display = "block";
            modal.style.fade = "transition: opacity .15s linear";
        }
    }
    hideModal(){
        console.log(modal);
        modal.style.display= "none";
    }
    document.getElementsByClassName("close")[0].addEventListener("click",  hideModal);


console.log("I am blue abutibadu daj adbidid dabudaj abidibadudaj");
