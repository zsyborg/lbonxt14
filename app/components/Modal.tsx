import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

const Modal = ({isOpen, onClose, children}: { isOpen: boolean; onClose: () => void; children: React.ReactNode }) => {
  if (!isOpen) return null;

  return (
      <CSSTransition
      
      timeout={300}
      classNames="modal"
      unmountOnExit
    >
      {/* ${isOpen ? 'show' : ''} */}
          <div className={`modal-overlay show`} onClick={onClose}>
          <div className="modal-content bg-orange-500 text-white" onClick={(e) => e.stopPropagation()}>
              {children}
              <button onClick={onClose} className='font-bold'>Close</button>
          </div>
          </div>
      {/* {isOpen && (

        )} */}
    </CSSTransition>
  );
};

export default Modal;