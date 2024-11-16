import React from "react";
import doneImage from "../../assets/done.png";
import { saveCartData } from "../../utlitlies/localStorageDB";
const Modal = ({ price, updateCart }) => {
  const handleClick = () => {
    document.getElementById("my_modal_1").showModal();
  };
  return (
    <dialog id="my_modal_1" className="modal ">
      <div className="modal-box bg-white">
        <div className="w-[70px] h-[70px] mx-auto">
          <img className="h-full w-full" src={doneImage} alt="" />
        </div>
        <h1 className="text-[#09080F] text-2xl font-bold text-center mt-4">
          Payment Successfully
        </h1>

        <h1></h1>
        <p className="text-center w-[60%] mx-auto text-[#09080F99] font-medium mt-4">
          Thanks for purchasing. <br />
          Total:{price}
        </p>
        <div className="modal-action w-full ">
          <form method="dialog" className="w-full">
            {/* if there is a button in form, it will close the modal */}
            <button
              onClick={handleClick}
              className="btn w-full rounded-[32px] bg-gray-300 text-black font-semibold">
              Close
            </button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default Modal;
