import React, { useContext } from 'react';
import { ModalContext } from '../context/ModalContext';

function Modal() {
    const { modal, setModal} = useContext(ModalContext);

    return (
        <>
            {modal && 
                <div className="full-modal">
                    <div className="overlay" onClick={() => {setModal(false)}}>
                        <button className="close" onClick={() => {setModal(false)}}>
                            <i class="fas fa-times"></i>
                        </button>
                    </div>     
                    <div className="container">
                        <img 
                            src={modal[0]} 
                            alt={modal[1]}
                        />
                    </div>
                </div>
            }
        </>
    )
}

export default Modal;
