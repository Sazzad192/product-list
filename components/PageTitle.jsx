export default function PageTitle({ children, ...props }) {
  return (
    <h3 className="text-lg md:text-2xl font-bold text-gray-700 dark:text-white">
      {children}
    </h3>
  );
}
