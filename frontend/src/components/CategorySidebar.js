import {
  Smartphone,
  Laptop,
  Tv,
  Speaker,
  X,
  Home
} from "lucide-react";

const categories = [
  { name: "Mobiles", icon: Smartphone },
  { name: "Laptops", icon: Laptop },
  { name: "TVs", icon: Tv },
  { name: "Bluetooth Speakers", icon: Speaker }
];

export default function CategorySidebar({
  selected,
  onSelect,
  onHome,
  onClose
}) {
  return (
    <div className="fixed left-0 top-0 h-full w-72 bg-white shadow-xl flex flex-col z-50">

      {/* HEADER */}
      <div className="flex justify-between items-center p-4 border-b">
        <h2 className="text-lg font-semibold">Category</h2>
        <X className="cursor-pointer" onClick={onClose} />
      </div>

      <div className="flex-1 overflow-y-auto">

        {/* HOME */}
        <div
          onClick={onHome}
          className="flex items-center gap-4 px-5 py-4 cursor-pointer hover:bg-gray-100 font-medium"
        >
          <Home size={22} />
          <span>Home</span>
        </div>

        <div className="border-b my-1" />

        {/* CATEGORIES */}
        {categories.map(({ name, icon: Icon }) => (
          <div
            key={name}
            onClick={() => onSelect(name)}
            className={`flex items-center gap-4 px-5 py-4 cursor-pointer
              ${selected === name
                ? "bg-blue-100 text-blue-600"
                : "hover:bg-gray-100"}`}
          >
            <Icon size={22} />
            <span className="font-medium">{name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
