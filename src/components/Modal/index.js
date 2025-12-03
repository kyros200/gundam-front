import ReactModal from 'react-modal';

function Modal(props) {
    const modalStyle = {
        content : {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            borderRadius: "16px",
            maxHeight: "90%",
            maxWidth: "90%"
        }
    };

    return (
        <ReactModal
            isOpen={props.open}
            ariaHideApp={false}
            style={modalStyle}
            shouldCloseOnOverlayClick={false}
        >
            {props.children}
        </ReactModal>
    )

}

export default Modal;