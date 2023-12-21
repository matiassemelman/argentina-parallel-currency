import { useEffect, useState } from "react";
import "./App.css";
import { LeftView, RightView } from "./components";
import { getCurrencyValues } from "./api/currencyService";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { LanguageSelector } from "./components/LanguageSelector";

function App() {
  const [amount, setAmount] = useState(0);
  const [values, setValues] = useState({});
  const { t } = useTranslation();

  const changeLanguage = (language: string) => {
    i18next.changeLanguage(language);
  };

  useEffect(() => {
    const fetchValues = async () => {
      await getCurrencyValues(setValues);
    };
    fetchValues();
  }, []);

  return (
    <div className="min-h-screen text-center">
      <div className="py-16">
        <h2 className="text-center text-2xl">{t("title1")}</h2>
        <LanguageSelector changeLanguage={changeLanguage} />
      </div>
      <div className=" flex justify-center items-center">
        <div className="bg-white md:flex rounded-t-xl rounded-b-xl gap-1 shadow-lg">
          <LeftView setAmount={setAmount} amount={amount} />
          <RightView amount={amount} values={values} />
        </div>
      </div>
      <h1 className="text-center pt-10 md:pt-20 text-xl">
        <a href="https://www.linkedin.com/in/matias-semelman/" target="_blank" rel="noopener noreferrer">
        {t("by")} Matias Semelman
        </a>
      </h1>
    </div>
  );
}

export default App;
