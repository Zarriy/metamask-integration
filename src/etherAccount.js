import { useState } from "react";

export default function EtherAccountInfo() {
  const [accountAddress, setAccountAddress] = useState(null);
  const [accountBalance, setAccountBalance] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const connectToWalletHandler = () => {
    if (window.ethereum) {
      console.log("Condition true");
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
