import { useModalStore } from "@/stores/modalStore";

interface ModalOptions {
  title: string;
  text: string;
}

export const useOpenModal = () => {
  const { openModal } = useModalStore();

  const handleOpenModal = ({ title, text }: ModalOptions) => {
    openModal({
      title,
      text,
    });
    document.getElementById("check_modal")?.click();
  };

  return { handleOpenModal };
}