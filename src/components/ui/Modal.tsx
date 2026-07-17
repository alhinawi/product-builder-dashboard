import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import type { ReactNode } from "react";

interface Props {
  isOpen?: boolean;
  closeModal?: () => void;
  OpenModal?: () => void;
  title?: string;
  children?: ReactNode;
}

const Modal = ({ isOpen, closeModal, OpenModal, title, children }: Props) => {
  

  return (
    <>
      <Dialog
        open={isOpen}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={close}
        __demoMode
      >
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-md rounded-xl bg-white/5 p-6 backdrop-blur-2xl duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0"
            >
              {title && (
                <DialogTitle className="text-base/7 font-medium text-white">
                  {title}
                </DialogTitle>
              )}
           
              <div className="mt-4">
                {children}
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default Modal;
