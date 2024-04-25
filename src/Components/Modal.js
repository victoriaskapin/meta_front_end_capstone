//import { Children } from "react";

function Modal (props){
    const handleClose = ()=>{
        props.toggleModal();
    }

    return (
    <div className="Modal">
        <div className="overlay"></div>
        <div className="modal-content">
            <button className="close-modal" onClick={handleClose}>x</button>
            <div>
                {props.children}
            </div>
        </div>
    </div>
    );
}

export default Modal;