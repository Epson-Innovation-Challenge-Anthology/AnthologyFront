import {create} from 'zustand';

interface ModalInfoType {
    title: string;
    text: string;
}

interface ModalInfoState {
    modalInfo: ModalInfoType;
}

interface ModalActionState {
    openModal: (modalInfo: ModalInfoType) => void;
}

export const useModalStore = create<ModalInfoState & ModalActionState>((set) => ({
    modalInfo: {
        title: '',
        text: ''
    },
    openModal: (modalInfo) => set({modalInfo})
}));