import { cn } from "@/lib/utils";
import { CiSearch } from "react-icons/ci";
import { MdOutlineCancel } from "react-icons/md";

const SearchInput = ({
  labelClassName,
  label,
  placeholder,
  extendedClassName,
  value,
  onChange = () => {},
  onFocus = () => {},
  onReset = () => {},
}) => {
  return (
    <div className={`flex flex-col w-full gap-1 ${extendedClassName}`}>
      <label
        className={cn(
          "text-sm font-bold text-gray-600 dark:text-gray-300",
          labelClassName
        )}
      >
        {label}
      </label>
      <div className="relative">
        <input
          type="text"
          className="w-full p-2 text-base border border-gray-300 dark:border-gray-700 hover:border-primary-200 rounded-md pl-11 focus:border-gray-500 dark:focus:border-gray-400 focus:outline-none focus:ring-gray-500 dark:focus:ring-gray-400 placeholder:text-sm placeholder:text-gray-500 dark:placeholder:text-gray-400 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-200"
          placeholder={placeholder}
          onChange={onChange}
          onFocus={onFocus}
          value={value}
        />
        <CiSearch className="text-gray-600 dark:text-gray-400 h-6 w-6 absolute top-[9px] left-4" />
        {value && (
          <MdOutlineCancel
            onClick={onReset}
            className="text-gray-400 dark:text-gray-500 h-4 absolute top-[13px] right-2 cursor-pointer bg-transparent"
          />
        )}
      </div>
    </div>
  );
};

export default SearchInput;
