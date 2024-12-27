export default function DiscountBadge({ amount }) {
  return (
    <div className="relative bg-orange-bold-gradient text-white font-bold text-xs px-2 py-1 rounded-tl-md">
      - ৳ {amount}
      <div className="absolute -right-3 top-0 w-3 h-full bg-orange-300 clip-top-triangle z-10"></div>
      <div className="absolute -right-3 bottom-0 w-3 h-full bg-orange-500 clip-bottom-triangle"></div>
      <div className="absolute -bottom-[6px] left-0 w-2 h-[6px] bg-orange-dark-gradient clip-triangle"></div>
    </div>
  );
}
