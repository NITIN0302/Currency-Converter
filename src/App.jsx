import { useState } from "react";
import Inputbox from "./component/Inputbox.jsx";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const [amount, setAmount] = useState(parseInt(""));
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(parseInt(""));

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  const swap = () => {
    let a = from;
    setFrom(to);
    setTo(a);
    a = convertedAmount;
    setConvertedAmount(amount);
    setAmount(a);
  };

  return (
    <>
      <div className="flex flex-wrap justify-center w-full h-screen bg-[url(.\images\img-2.jpg)] bg-cover text-black">
        <div className="border-slate-700 border-2  flex flex-wrap justify-center my-auto opacity-80 w-[40%] h-[60%] py-5 bg-black rounded-3xl">
          <Inputbox
            label="From"
            amount={amount}
            currencyOptions={options}
            onCurrencyChange={(currency) => {
              setFrom(currency);
            }}
            onAmountChange={(amount) => {
              setAmount(amount);
            }}
            selectCurrency={from}
          />
          <button
            className="bg-blue-700 text-white rounded-xl px-2 py-0"
            onClick={swap}
          >
            Swap
          </button>
          <Inputbox
            label="To"
            amount={convertedAmount}
            currencyOptions={options}
            onCurrencyChange={(currency) => {
              setTo(currency);
            }}
            onAmountChange={(amount) => {
              setAmount(amount);
            }}
            selectCurrency={to}
          />
          <button
            className="text-white w-[60%] px-2 mb-1 bg-blue-700 rounded-xl border-1 border-white"
            onClick={convert}
          >
            Convert {from.toUpperCase()} to {to.toUpperCase()}
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
