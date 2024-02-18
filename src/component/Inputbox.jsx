import React from "react";

const Inputbox = ({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
}) => {
  return (
    <>
      <div className="flex flex-row w-[90%] h-[35%] justify-around my-auto bg-white rounded-3xl">
        <div className="mx-2 flex flex-col w-[90%] h-[70%] justify-center my-auto bg-white rounded-3xl">
          <label className="font-semibold">{label}</label>
          <input
            type="number"
            className="bg-black h-7 my-auto px-1 w-[90%] rounded-sm text-white"
            placeholder="Enter the Amount"
            value={amount}
            onChange={(e) =>
              onAmountChange && onAmountChange(Number(e.target.value))
            }
            disabled={amountDisable}
          />
        </div>
        <div className="flex flex-col w-[35%] h-[70%] justify-around my-auto bg-white rounded-3xl">
          <label className="font-semibold">Select Currency</label>
          <select
            className="bg-black h-7 text-white  w-[90%] my-auto rounded-sm opacity-100"
            value={selectCurrency}
            disabled={currencyDisable}
            onChange={(e) => {
              onCurrencyChange && onCurrencyChange(e.target.value);
            }}
          >
            {currencyOptions.map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
};

export default Inputbox;
