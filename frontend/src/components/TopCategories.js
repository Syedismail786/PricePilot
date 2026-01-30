export default function TopCategories({ onSelect }) {

  const categories = [
    {
      name: "Mobiles",
      img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80",
    },
    {
       name: "TVs",
  img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjPzofhHkoYUrBnkOz8TzIuviHL2QGb-if7A&s",
    },
    {
      name: "Bluetooth Speakers",
      img: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Laptops",
      img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Big Deals",
      img: "https://images.unsplash.com/photo-1607082349566-187342175e2f?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Credit Cards",
      img: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <div className="mt-16 bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-12 shadow-xl">

      <h2 className="text-2xl font-bold mb-10">Top Categories</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10">

        {categories.map(cat => (
          <div
            key={cat.name}
            onClick={() => onSelect(cat.name)}
            className="group cursor-pointer text-center"
          >
            <div className="w-40 h-40 mx-auto rounded-2xl overflow-hidden shadow-md transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl">
              <img
                src={cat.img}
                alt={cat.name}
                className="w-full h-full object-cover"
              />
            </div>

            <p className="mt-4 font-semibold text-gray-800 group-hover:text-blue-600 transition">
              {cat.name}
            </p>
          </div>
        ))}

      </div>
    </div>
  );
}
