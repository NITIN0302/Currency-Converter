import { useState } from "react";
import Inputbox from './component/Inputbox.jsx';
import useCurrencyInfo from './hooks/useCurrencyInfo';

function App() {

  const [amount,setAmount] = useState(0);
  const [from,setFrom] = useState("usd");
  const [to,setTo] = useState("inr");
  const [convertedAmount,setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  return (
    <>
      <div className="flex flex-wrap justify-center w-full h-screen bg-[url(.\images\img-2.jpg)] bg-cover text-black">
        <div className="border-slate-700 border-2  flex flex-wrap justify-center my-auto opacity-80 w-[40%] h-[50%] bg-black rounded-3xl">
          <Inputbox label="From"/>
          <Inputbox label="To" />
          <button className="text-white w-[60%] px-2 mb-1 bg-blue-700 rounded-xl border-1 border-white">Convert {from} to {to}</button>
        </div>
      </div>
    </>
  );
}

export default App;
