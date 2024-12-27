import { cn } from "@/lib/utils";

const variants = {
  primary: "bg-primary-400 text-white dark:bg-primary-500",
  whiteOpacity:
    "border-[1.5px] bg-opacity-40 bg-white text-white text-sm rounded-md py-[6px]",
  rounded:
    "border rounded-full border-primary-400 text-primary-400 dark:border-primary-400 dark:text-primary-400",
};

export default function Button({
  children,
  variant = "primary",
  className = "",
  disabled = false,
  ...props
}) {
  return (
    <button
      className={cn(
        "flex justify-center items-center px-4 py-2 rounded-lg text-sm font-semibold whitespace-nowrap hover:opacity-80 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed",
        variants[variant],
        className
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
