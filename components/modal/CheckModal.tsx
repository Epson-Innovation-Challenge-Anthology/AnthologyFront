"use client";

import { useModalStore } from "@/stores/modalStore";

const CheckModal: React.FC = () => {
  const {
    modalInfo: { title, text },
  } = useModalStore();
  return (
    <>
      <input type="checkbox" id="check_modal" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{title}</h3>
          <p className="py-4">{text}</p>
          <div className="modal-action">
            <label htmlFor="check_modal" className="btn">
              Close!
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckModal;
