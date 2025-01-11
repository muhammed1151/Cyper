import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { ReactNode } from "react";

interface Iprops {
  isOpen: boolean;
  close: () => void;
  title: string;
  children: ReactNode;

}
const PopUp = ({ isOpen, close, title, children }: Iprops) => {
  

  return (
    <>
      <Dialog
        open={isOpen}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={close}
      >
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-md rounded-xl bg-white p-6  duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
              <DialogTitle as="h3" className="text-4xl font-bold ">
                {title}
              </DialogTitle>
              <div className="mt-4">{children}</div>
                
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
};
export default PopUp;
