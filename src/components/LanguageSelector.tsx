import i18next from "i18next";

interface LanguageSelectorInterface {
  changeLanguage: (language: string) => void;
}

export const LanguageSelector = ({
  changeLanguage,
}: LanguageSelectorInterface) => {
  const defaultLanguage = i18next.language;

  const options = [
    { value: "en", label: "EN" },
    { value: "es", label: "ES" },
  ];

  return (
    <select
      defaultValue={defaultLanguage}
      onChange={(e) => changeLanguage(e.target.value)}
    >
      {options.map((option) => (
        <option value={option.value}>{option.label}</option>
      ))}
    </select>
  );
};
