import { useEffect, useState } from "react";
import "./App.css";
import { LeftView, RightView } from "./components";
import { getCurrencyValues } from "./api/currencyService";
import { useTranslation } from "react-i18next";

function App() {
  const [amount, setAmount] = useState(0);
  const [values, setValues] = useState({});
  const { t } = useTranslation();

  useEffect(() => {
    const fetchValues = async () => {
      await getCurrencyValues(setValues);
    };
    fetchValues();
  }, []);

  return (
    <div className="min-h-screen">
      <h2 className="text-center py-20 text-2xl">{t("title1")}</h2>
      <div className=" flex justify-center items-center">
        <div className="bg-white md:flex rounded-t-xl rounded-b-xl gap-1 shadow-lg">
          <LeftView setAmount={setAmount} amount={amount} />
          <RightView amount={amount} values={values} />
        </div>
      </div>
      <h1 className="text-center pt-10 md:pt-20 text-xl">
        {t("by")} Matias Semelman
      </h1>
    </div>
  );
}

export default App;
