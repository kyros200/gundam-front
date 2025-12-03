import ReactModal from 'react-modal';

function Modal({open, children, ...rest}) {
    const modalStyle = {
        content : {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            borderRadius: '0px',
            boxShadow: '5px 5px',
            maxHeight: "90%",
            maxWidth: "90%"
        }
    };

    return (
        <ReactModal
            isOpen={open}
            ariaHideApp={false}
            style={modalStyle}
            shouldCloseOnOverlayClick={false}
            {...rest}
        >
            {children}
        </ReactModal>
    )

}

export default Modal;