import cn from "classnames";
import {AnimatePresence, motion} from 'framer-motion'
import {useEffect} from "react";
import ReactDOM from "react-dom";

type Modal = {
    isOpen?: boolean;
    children: React.ReactNode;
    onClose?: () => void;
    className?: string;
};

export const Modal = (props: Modal) => {
    useEffect(() => {
        if (props.isOpen) {
            document.body.style.overflowY = "hidden";
        } else {
            document.body.style.overflowY = "auto";
        }

        return () => {
            document.body.style.overflowY = "auto";
        };
    }, [props.isOpen]);

    if (typeof window === "undefined") {
        return <></>;
    }

    return ReactDOM.createPortal(
        <>
            <AnimatePresence mode="wait">
                {props.isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => props.onClose && props.onClose()}
                        id={`modal-bg`}
                        className={cn(
                            "z-10 fixed w-full h-full left-0 top-0 bg-[rgba(0,0,0,0.4)]",
                            props.className
                        )}
                        key="wrapper"
                    >
                        <div
                            onClick={(e) => e.stopPropagation()}
                            className=""
                            id={`children-wrapper`}
                            key="2"
                        >
                            {props.children}
                        </div>
                     </motion.div>
                )}
            </AnimatePresence>
        </>,
        document.getElementById("modal_wrapper")!
    );
};
