import Select from "react-select";

const ReactCustomSelect = ({
  options = [],
  placeholder = "Select an option",
  value,
  onChange,
  name,
  isDisabled = false,
  label = "",
  extraClassName = "",
}) => {
  const isDarkMode =
    typeof window !== "undefined" &&
    document.documentElement.classList.contains("dark");

  // Custom styles for react-select
  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      padding: "4px",
      borderRadius: "8px",
      backgroundColor: isDarkMode ? "var(--color-dark-500)" : "#FFFFFF",
      borderColor: isDarkMode
        ? state.isFocused
          ? "var(--color-primary-300)"
          : "var(--color-dark-500)"
        : "#D1D5DB",
      color: isDarkMode ? "var(--color-primary-100)" : "#374151",
      boxShadow: "none",
      "&:hover": {
        borderColor: isDarkMode
          ? "var(--color-primary-400)"
          : "var(--color-primary-200)",
      },
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: isDarkMode ? "var(--color-dark-500)" : "#FFFFFF",
      color: isDarkMode ? "var(--color-primary-100)" : "#374151",
      borderRadius: "8px",
      zIndex: 9999,
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused
        ? isDarkMode
          ? "var(--color-dark-500)"
          : "#E5E7EB"
        : isDarkMode
        ? "var(--color-dark-500)"
        : "#FFFFFF",
      color: isDarkMode ? "var(--color-primary-100)" : "#374151",
      cursor: "pointer",
    }),
    singleValue: (provided) => ({
      ...provided,
      color: isDarkMode ? "var(--color-primary-100)" : "#374151",
    }),
    placeholder: (provided) => ({
      ...provided,
      color: isDarkMode ? "var(--color-primary-400)" : "#6B7280",
    }),
  };

  return (
    <div className={`space-y-1 ${extraClassName}`}>
      {label && (
        <p className="block text-sm font-semibold text-neutral-700 dark:text-gray-300">
          {label}
        </p>
      )}
      <Select
        placeholder={placeholder}
        name={name}
        options={options}
        value={value}
        onChange={onChange}
        isDisabled={isDisabled}
        styles={customStyles}
        className="text-sm"
      />
    </div>
  );
};

export default ReactCustomSelect;
