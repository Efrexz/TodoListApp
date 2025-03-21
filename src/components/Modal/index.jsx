import { createPortal } from "react-dom";

function Modal({ children }) {
    return createPortal(
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50">
            {children}
        </div>,
        document.getElementById("modal")
    )
}

export { Modal };