import React from "react";
import Wrapper from "../Wrapper";
import Button from "../../components/Button";
const UpdateValues = (props) => {

  //withdrawFee={withdrawFee} maxWithdraw={maxWithdraw}  minWithdraw={minWithdraw} minimum_investment={minimum_investment} 
  return (
    <Wrapper title="Update Value">
      <section className="  sm:w-[80%] w-full mx-auto">
        <div className="  grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 pt-12 gap-12">
        <div className=" p-4 border-2 border-[#FFE247]  mx-auto   w-[237px]  rounded-2xl">
            <div>
              <h2 className=" text-white  font-semibold text-[25px]">
                Min Investment
              </h2>
            </div>

            <div className="  flex justify-between items-center pt-3">
              <h4 className=" text-white text-[25px] font-medium">{props.minimum_investment?Number(props.minimum_investment)/10**6:0}</h4>
              <Button
                label={"Edit"}
                className={"  px-10  bg-button-gradient text-black"}
              />
            </div>
          </div>
          <div className=" p-4 border-2 border-[#FFE247]  mx-auto   w-[237px]  rounded-2xl">
            <div>
              <h2 className=" text-white  font-semibold text-[25px]">
                Direct percent
              </h2>
            </div>

            <div className="  flex justify-between items-center pt-3">
              <h4 className=" text-white text-[25px] font-medium">7%</h4>
              <Button
                label={"Edit"}
                className={"  px-10  bg-button-gradient text-black"}
              />
            </div>
          </div>

          <div className=" p-4 border-2 border-[#FFE247]  mx-auto   w-[237px]  rounded-2xl">
            <div>
              <h2 className=" text-white  font-semibold text-[25px] pt-4">
                Withdraw Fee
              </h2>
            </div>

            <div className="  flex justify-between items-center pt-3">
              <h4 className=" text-white text-[25px] font-medium">6%</h4>
              <Button
                label={"Edit"}
                className={"  px-10 bg-button-gradient  text-black"}
              />
            </div>
          </div>



          <div className=" p-4 border-2 border-[#FFE247]  mx-auto   w-[237px]  rounded-2xl">
            <div>
              <h2 className=" text-white  font-semibold text-[25px] pt-4">
                Owner
              </h2>
            </div>

            <div className="  flex justify-between items-center pt-3">
              <h4 className=" text-white text-[25px] font-medium">{props.owner?(props.owner.slice(0,5)):""}</h4>
              <Button
                label={"Edit"}
                className={"bg-button-gradient  px-10  text-black"}
              />
            </div>
          </div>
          <div className=" p-4 border-2 border-[#FFE247]  mx-auto   w-[237px]  rounded-2xl">
            <div>
              <h2 className=" text-white  font-semibold text-[25px] pt-4">
              Min. Withdraw
              </h2>
            </div>

            <div className="  flex justify-between items-center pt-3">
              <h4 className=" text-white text-[25px] font-medium">{props.minWithdraw?Number(props.minWithdraw)/10**18:0}</h4>
              <Button
                label={"Edit"}
                className={"  px-10 bg-button-gradient text-black"}
              />
            </div>
          </div>
          <div className=" p-4 border-2 border-[#FFE247]  mx-auto   w-[237px]  rounded-2xl">
            <div>
              <h2 className=" text-white  font-semibold text-[25px] pt-4">
              Max. Withdraw
              </h2>
            </div>

            <div className="  flex justify-between items-center pt-3">
              <h4 className=" text-white text-[25px] font-medium">{props.maxWithdraw?Number(props.maxWithdraw)/10**18:0}</h4>
              <Button
                label={"Edit"}
                className={"  px-10 bg-button-gradient text-black"}
              />
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

export default UpdateValues;
