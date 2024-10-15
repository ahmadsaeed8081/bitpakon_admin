import React from "react";
import Wrapper from "../Wrapper";
const Dashboard = () => {
  return (
    <Wrapper   title="Dashboard" >
      <section className="   sm:w-[80%] w-full mx-auto">
        <div className="  grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 pt-12 gap-12">
          <div className=" p-4 border-2 border-[#FFE247]  mx-auto w-56 flex justify-center items-center rounded-xl">
            <div>
              <div className="">
                <img
                  src={require("../../assets/image/briefcase 1.png")}
                  className=" w-24 h-24 mx-auto"
                  alt=""
                />
              </div>
              <h5 className=" text-white text-center font-semibold text-xl pt-2">
                Total Business
                <div>
                  $0
                </div>
              </h5>
            </div>
          </div>
          <div className=" p-4 border-2 border-[#FFE247] mx-auto   w-56 flex justify-center items-center rounded-xl">
            <div>
              <div className="">
                <img
                  src={require("../../assets/image/proof-of-stake 1.png")}
                  className=" w-24 h-24 mx-auto"
                  alt=""
                />
              </div>
              <h5 className=" text-white text-center font-semibold text-xl pt-2">
                Total Business 
                <div>
                  $0
                </div>
              </h5>
            </div>
          </div>
          <div className=" p-4 border-2 relative border-[#FFE247]  mx-auto  w-56 flex justify-center items-center rounded-xl">
            <div>
              <div className="">
                <img
                  src={require("../../assets/image/compensation 1.png")}
                  className=" w-24 h-24 mx-auto"
                  alt=""
                />
              </div>
              <h5 className=" text-white text-center font-semibold text-xl pt-2">
                Avail Funds 
                <div>
                  $0
                </div>
              </h5>
            </div>

            <div></div>
          </div>
          <div className=" p-4 border-2 relative border-[#FFE247]  mx-auto  w-56 flex justify-center items-center rounded-xl">
            <div>
              <div className="">
                <img
                  src={require("../../assets/image/cash-withdrawal (2) 1.png")}
                  className=" w-24 h-24 mx-auto"
                  alt=""
                />
              </div>
              <h5 className=" text-white text-center font-semibold text-xl pt-2">
                Total Stakers 
                <div>
                  $0
                </div>
              </h5>
            </div>

            <div></div>
          </div>
          <div className=" p-4 border-2 relative border-[#FFE247]  mx-auto  w-56 flex justify-center items-center rounded-xl">
            <div>
              <div className="">
                <img
                  src={require("../../assets/image/wallet (1) 1.png")}
                  className=" w-24 h-24 mx-auto"
                  alt=""
                />
              </div>
              <h5 className=" text-white text-center font-semibold text-xl pt-2">
                My Balance 
                <div>
                  $0
                </div>
              </h5>
            </div>

            <div></div>
          </div>
          <div className=" p-4 border-2 relative border-[#FFE247] mx-auto  w-56 flex justify-center items-center rounded-xl">
            <div>
              <div className="">
                <img
                  src={require("../../assets/image/gift 1.png")}
                  className=" w-24 h-24 mx-auto"
                  alt=""
                />
              </div>
              <h5 className=" text-white text-center font-semibold text-xl pt-2">
                Total Amount 
                <div>
                  $0
                </div>
              </h5>
            </div>

            <div></div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

export default Dashboard;
