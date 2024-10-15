import Wrapper from "../Wrapper";
import React, { useState, useEffect } from "react";

import moment from "moment";


import {useNetwork,  useSwitchNetwork } from 'wagmi'
import { useAccount, useDisconnect } from 'wagmi'

import {
  poly_cont_address,
  du_cont_address,

  poly_cont_abi,
  du_cont_abi,

  tokenABI,
  usdt_address
  
} from "../../../src/components/config";

import { useContractReads,useContractRead ,useContractWrite, usePrepareContractWrite, useWaitForTransaction } from 'wagmi'


const SwapApproval = (props) => {


  const [choosed_order, set_choosed_order] = useState(0);
  const [index_no, set_index_no] = useState(-1);
  const [decision, set_decision] = useState(0);

  const { chain } = useNetwork()

  const { address, isConnecting ,isDisconnected} = useAccount()


  let count1=0;
  const CHAIN_ID=10523;



  const count = (time) => {
    const now = new Date(time*1000);  
    const t=moment(now).format('D MMM YYYY');
    return t;
    
  };



  const { data:Result_respond_to_request, isLoading2_respond_to_request1, isSuccess2_respond_to_request1, write:respond_to_request1 } = useContractWrite({
    address: du_cont_address,
    abi: du_cont_abi,
    functionName: 'respond_to_request',
    args: [choosed_order,index_no],
})


const waitForTransaction_buy = useWaitForTransaction({
hash: Result_respond_to_request?.hash,
onSuccess(data) {
  props.mount?.();
  console.log("Success", data);
},
});


 const {switchNetwork:respond_to_request_switch } =
  useSwitchNetwork({
  chainId: CHAIN_ID,
  onSuccess(){
    respond_to_request1?.();
  }

  

})

useEffect(()=>{
  console.log("LKNLJN BIUBN "+index_no)
  if(index_no != -1)
  {   
    if(CHAIN_ID==chain.id)
    {

      respond_to_request1?.();
    }
    else
    {
      respond_to_request_switch();
    }
  }

},[decision])

 function action(_orderNo,_decision,_index)
 {

  
  if(props.owner.toLowerCase() != address.toLowerCase())
  {
    alert("only owner can perform this transaction")
    return;
  }
  set_choosed_order(_orderNo);
  set_index_no(_index)
  set_decision(_decision);
  if(_decision==decision)
  {
    if(CHAIN_ID==chain.id)
    {
      respond_to_request1?.();
    }
    else
    {
      respond_to_request_switch();
    }
  }


}





  return (
    <Wrapper  title="Swap Approval">
      <div className=" flex   justify-between items-center">
        <div>
        
        </div>


        <div>
         
        </div>
       
      </div>

      <div className="overflow-x-auto mt-6 h-96 overflow-y-auto">
                  <table className="min-w-full mb-0 ">
                    <thead className="text-center border-b border-[#456DA7] bg-button-gradient">
                      <tr className="rounded-lg whitespace-nowrap">
                        <th
                          scope="col"
                          className="text-black  font-poppins px-6 py-4"
                        >
                          S.No
                        </th>
                        <th
                          scope="col"
                          className="text-black  font-poppins  px-6 py-4"
                        >
                          User Address
                        </th>
                        <th
                          scope="col"
                          className=" text-black  font-poppins  px-6 py-4"
                        >
                          Order No
                        </th>
                        <th
                          scope="col"
                          className="text-black  font-poppins  px-6 py-4"
                        >
                          Amount
                        </th>
                        
                        <th
                          scope="col"
                          className="text-black  font-poppins  px-6 py-4"
                        >
                          Time
                        </th>
                        <th
                          scope="col"
                          className="text-black  font-poppins  px-6 py-4"
                        >
                           Status
                        </th>
                      </tr>
                    </thead>
                    <tbody className=" ">
                      <>
                      {props.withdrawList.map((item,index)=>
                      (
                        
                        <tr className="bg-[#2C2C2C] rounded-md">
                        <td className="align-middle  font-semibold px-6 py-3 whitespace-nowrap text-center">
                        <span className=" text-white font-poppins">
                            {Number(index)+1}
                          </span>
                        </td>
                        <td className="align-middle  font-semibold px-6 py-3 whitespace-nowrap text-center">
                          <span className=" text-white font-poppins">
                          {item[0].slice(0,4)}....{item[0].slice(38,42)}

                          </span>
                        </td>
                        <td className="align-middle  font-semibold px-6 py-3 whitespace-nowrap text-center">
                          <span className=" text-white font-poppins">
                          {(Number(item[1]))}

                          </span>
                        </td>
                        <td className="align-middle font-semibold px-6 py-3 whitespace-nowrap text-center">
                          <span className=" text-white font-poppins">
                          {(Number(item[2])/10**18).toFixed(2)}

                          </span>
                        </td>


                        <td className="align-middle font-semibold px-6 py-3 whitespace-nowrap text-center">
                          <span className=" text-white font-poppins">
                          {count(Number(item[3]))}

                          </span>
                        </td>


                        <td className="align-middle font-semibold px-6 py-3 whitespace-nowrap text-center">
                          <button 
                          onClick={()=>action(item[1],1,item[5])}
                          className="btn text-white font-poppins " style={{ backgroundColor:"green",padding:"5px" }}>
                           Approved
                          </button>
                        </td>

                        {/* <td className="align-middle font-semibold px-6 py-3 whitespace-nowrap text-center" >
                        <div className="flex items-center justify-center gap-3">
                          <button className="btn" >Approve</button>
                        </div>
                      </td> */}
                        
                      </tr>
                      ))}


                        
                      </>
                    </tbody>
                  </table>
                </div>
    </Wrapper>
  );
};

export default SwapApproval;
