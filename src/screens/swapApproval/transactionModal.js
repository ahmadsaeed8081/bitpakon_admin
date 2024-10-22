import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Modal from "../../components/modal";

const TransactionModal = ({
  isModalOpen,
  setIsModalOpen,
  closeModal,
  action,
  setHash,
  hash
}) => {
 

  return (
    <div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div style={{ backgroundColor:"#1A1A1A" }}>
          <div className="p-3.5 flex justify-between items-center">
            <div>

            </div>
            <h1 className="capitalize h4 text-xl font-semibold text-white">Transaction</h1>
            <MdClose className=" text-white" onClick={() => setIsModalOpen(false)} size={25} />
          </div>
          <hr />
          <div className="p-5">
          
            <form >
              <div className="flex gap-5 flex-wrap">
              
                <div className="md:w-[100%] w-[100%]">
                  <Input

                    className={"border bg-transparent text-white placeholder:text-[#ffffff] w-full py-3"}
                    label={"Transaction"}
                    placeholder={"Paste transaction Hash Here"}
                    value={hash}
                    onChange={(e) => {
                    setHash(e.target.value);

                    }}
                  />
                </div>
              </div>
            
                <Button
                onClick={action}
                  label={"Proceed"}
                  type={"submit"}
                  className={" mt-5 uppercase bg-button-gradient text-black py-2.5 w-full"}
                />
            
            </form>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default TransactionModal;
