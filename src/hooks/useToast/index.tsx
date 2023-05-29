import ToastContext, { ToastContextProps } from "../../contexts/Toast"
import { useContext } from "react";

const useToast = (): ToastContextProps => {
    const context = useContext<ToastContextProps>(ToastContext);

    if (!context) {
        throw new Error("useToast must be used within a ToastProvider")
    }

    return context;
}

export { useToast };