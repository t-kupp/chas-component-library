import Button from './Button';
import { IoClose } from 'react-icons/io5';
import { useState } from 'react';

function Modal({ show, size, color, title }) {
  const [openModal, setOpenModal] = useState(show);

  document.body.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      setOpenModal(false);
    }
  });

  return (
    <div>
      <div onClick={() => setOpenModal(true)}>
        <Button color={color} size={size}>
          {title}
        </Button>
      </div>
      {openModal && (
        <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm backdrop-brightness-50">
          <div
            className="modal-popup flex w-full max-w-lg flex-col rounded-lg bg-neutral-100 shadow-lg dark:text-slate-800"
            aria-labelledby="modal-title"
            role="dialog"
            aria-modal="true"
          >
            <Modal.Header>
              <p className="text-lg font-bold">Terms of Service</p>
              <button
                className="ml-auto border-none bg-inherit p-2 hover:bg-slate-200 active:bg-slate-300"
                onClick={() => {
                  setOpenModal(false);
                }}
              >
                <IoClose />
              </button>
            </Modal.Header>
            <Modal.Body>
              The European Union's General Data Protection Regulation (G.D.P.R.)
              goes into effect on May 25 and is meant to ensure a common set of
              data rights in the European Union. It requires organizations to
              notify users as soon as possible of high-risk data breaches that
              could personally affect them.
            </Modal.Body>
            <Modal.Footer>
              <div onClick={() => setOpenModal(false)}>
                <Button color="blue">Accept</Button>
              </div>
              <div onClick={() => setOpenModal(false)}>
                <Button color="gray">Decline</Button>
              </div>
            </Modal.Footer>
          </div>
        </div>
      )}
    </div>
  );
}

function Header({ children }) {
  return <div className="flex items-center border-b p-6">{children}</div>;
}

function Body({ children }) {
  return <div className="p-6">{children}</div>;
}

function Footer({ children }) {
  return <div className="flex items-center gap-4 border-t p-6">{children}</div>;
}

Modal.Header = Header;
Modal.Body = Body;
Modal.Footer = Footer;

export default Modal;
