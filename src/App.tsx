import { useEffect, useState } from "react";
import "./App.css";
import { LeftView, RightView } from "./components";
import { getCurrencyValues } from "./api/currencyService";

function App() {
  const [amount, setAmount] = useState(0);
  const [values, setValues] = useState({});

  useEffect(() => {
    const fetchValues = async () => {
      await getCurrencyValues(setValues);
    };
    fetchValues();
  }, []);

  return (
    <div className="min-h-screen">
      <h2 className="text-center py-20 text-2xl">
        Argentina Currency Exchange
      </h2>
      <div className=" flex justify-center items-center">
        <div className="bg-white md:flex rounded-t-xl rounded-b-xl gap-1 shadow-lg">
          <LeftView setAmount={setAmount} amount={amount} />
          <RightView amount={amount} values={values} />
        </div>
      </div>
      <h1 className="text-center pt-10 md:pt-20 text-xl">By Matias Semelman</h1>
    </div>
  );
}

export default App;
