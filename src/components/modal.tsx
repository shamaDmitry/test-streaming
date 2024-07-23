import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import useModalStore from "@/store";
import VideoBlock from "./video-block";

const Modal = () => {
  const isOpen = useModalStore((state) => state.isOpen);
  const setIsOpen = useModalStore((state) => state.setIsOpen);
  const modalData = useModalStore((state) => state.modalData);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="bg-white max-w-screen-lg h-screen justify-start overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-4xl font-extrabold tracking-tight lg:text-5xl text-left">
            {modalData?.title}
          </DialogTitle>

          <DialogDescription className="text-xl mb-4 text-left">
            {modalData?.synopsis}
          </DialogDescription>
        </DialogHeader>

        <VideoBlock videoId={modalData?.videoId || "AYO4qHAnLQI"} />
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
