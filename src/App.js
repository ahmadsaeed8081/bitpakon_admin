import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./screens/dashboard/Dashboard";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UpdateValues from "./screens/updateValues";
import SwapApproval from "./screens/swapApproval";
import React, { useState, useEffect } from "react";


import { CopyToClipboard } from "react-copy-to-clipboard";
import {
  poly_cont_address,
  du_cont_address,

  poly_cont_abi,
  du_cont_abi,

  tokenABI,
  usdt_address
  
} from "../src/components/config";
import Web3 from "web3";

import { useContractReads,useContractRead ,useContractWrite, usePrepareContractWrite, useWaitForTransaction, usePublicClient } from 'wagmi'
import {useNetwork,  useSwitchNetwork } from 'wagmi'
import { useAccount, useDisconnect } from 'wagmi'

function App() 
{


  const { address, isConnecting ,isDisconnected} = useAccount()
  const { chain } = useNetwork()

  
  const [owner, set_owner] = useState("");

  const [pol_balance, setBalance] = useState(0);
  const [du_balance, set_DUBalance] = useState(0);
  const [minimum_investment, set_minimum_investment] = useState(0);
  const [minWithdraw, set_minWithdraw] = useState(0);
  const [withdrawFee, set_withdrawFee] = useState(0);
  const [maxWithdraw, set_maxWithdraw] = useState(0);
  const [withdrawList, setwithdrawList] = useState([]);
  const [totalbusiness, setbusiness] = useState("0");


  const du_CHAIN_ID = "10523";



  useEffect(() => {
    if(address)
    {
      mount();

    }
  }, [ address]);


  function Convert_To_Wei(val) {
    const web3= new Web3(new Web3.providers.HttpProvider("https://polygon-bor-rpc.publicnode.com"));
  
    val = web3.utils.toWei(val.toString(), "ether");
    return val;
  }
  async function mount() {
    if (isDisconnected) {
      return;
    }
    try {
      // setLoader(true)

      //polygon contract data
      let web3= new Web3(new Web3.providers.HttpProvider("https://polygon-bor-rpc.publicnode.com	"));
      const contract = new web3.eth.Contract(poly_cont_abi, poly_cont_address);

      const pol_balance = await web3.eth.getBalance(address);
      const business = await contract.methods.totalbusiness().call();
      let minimum_investment = await contract.methods.minimum_investment().call(); 




      //DU contract data

      web3= new Web3(new Web3.providers.HttpProvider("https://mainnet-rpc.dscscan.com/"));

      const du_balance = await web3.eth.getBalance(address);
      const contract1 = new web3.eth.Contract(du_cont_abi, du_cont_address);
      const Minimum_withdraw_limit = await contract1.methods.Minimum_withdraw_limit().call();
      const Maximum_withdraw_limit = await contract1.methods.Maximum_withdraw_limit().call();

      const withdrawFee = await contract1.methods.withdrawFee().call();
      const owner = await contract1.methods.owner().call();

      const OrdersList = await contract1.methods.get_All_PendingOrders().call();


      set_DUBalance(du_balance)
      setBalance(pol_balance);
      set_owner(owner)
      set_minimum_investment(minimum_investment);
      setbusiness(business);
      set_minWithdraw(Minimum_withdraw_limit)
      set_maxWithdraw(Maximum_withdraw_limit)
      set_withdrawFee(Number(withdrawFee)/10**18)
      setwithdrawList(OrdersList)




    } catch (error) {

      console.error(error);
    }
  }


  return (
    <>
      <ToastContainer />
      <Routes>
          <Route path="/" element={<Dashboard totalbusiness={totalbusiness}  />} />
          <Route path="/update-values" element={<UpdateValues owner={owner} withdrawFee={withdrawFee} maxWithdraw={maxWithdraw}  minWithdraw={minWithdraw} minimum_investment={minimum_investment} />} />
          <Route path="/swap-approval" element={<SwapApproval withdrawList={withdrawList} owner={owner} mount={mount} />} />
     
      </Routes>
    </>
  );
}

export default App;
