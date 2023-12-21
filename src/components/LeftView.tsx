import React, { ChangeEvent } from "react";
import { useTranslation } from "react-i18next";

interface Props {
  setAmount: (amount: number) => void;
  amount: number;
}

export const LeftView: React.FC<Props> = ({ setAmount, amount }) => {
  const { t } = useTranslation();

  const handleAmountChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAmount(Number(e.target.value));
  };

  return (
    <section className="p-8 md:rounded-l-xl rounded-t-xl bg-white">
      <div className="text-center md:text-left">
        <label htmlFor="pesosInput" className="text-textBlue font-bold">
          {t("left.label")}
        </label>
      </div>
      <div className="py-2 flex bg-slate-200 text-inputText rounded-3xl px-2 font-bold">
        <span className="pl-4">$</span>
        <input
          type="text"
          name="pesosInput"
          placeholder="0"
          value={amount}
          className="text-end bg-slate-200 pr-4"
          onChange={handleAmountChange}
        />
      </div>
    </section>
  );
};
