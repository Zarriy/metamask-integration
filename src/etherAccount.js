import { useState } from "react";
import { ethers } from "ethers";

export default function EtherAccountInfo() {
  const [accountAddress, setAccountAddress] = useState(null);
  const [accountBalance, setAccountBalance] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const connectToWalletHandler = () => {
    if (window.ethereum) {
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((result) => {
          setAccountAddress(result[0]);
          window.ethereum
            .request({
              method: "eth_getBalance",
              params: [result[0], "latest"],
            })
            .then((balance) =>
              setAccountBalance(ethers.utils.formatEther(balance))
            );
        });
    } else {
      setErrorMessage("Please Install Metamask");
    }
  };

  return (
    <div className="text-center">
      <h2>Etherium Account Detail</h2>
      <button onClick={connectToWalletHandler}>Connect Wallet</button>
      <div>
        <h3>Account: {accountAddress}</h3>
        <h3>Balance: {accountBalance}</h3>
      </div>
      {errorMessage}
    </div>
  );
}
