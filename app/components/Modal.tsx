import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
      <CSSTransition
      in={isOpen}
      timeout={300}
      classNames="modal"
      unmountOnExit
    >
        <div className={`modal-overlay ${isOpen ? 'show' : ''}`} onClick={onClose}>
        <div className="modal-content bg-orange-500 text-white" onClick={(e) => e.stopPropagation()}>
            {children}
            <button onClick={onClose} className='font-bold'>Close</button>
        </div>
        </div>
    </CSSTransition>
  );
};

export default Modal;