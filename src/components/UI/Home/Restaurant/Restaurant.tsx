import RestaurantCard from "./RestaurantCard";

const Restaurant = () => {
  const restaurants = [
    { image: "/images/r1.jpg", title: "Spicy Dragon", tags: ["Spicy", "Italian", "Sushi"] },
    { image: "/images/r2.jpg", title: "Pizza Palace", tags: ["Pizza", "Italian", "Fast Food"] },
    { image: "/images/r3.jpg", title: "Seafood Delight", tags: ["Seafood", "Fresh", "Healthy"] },
    { image: "/images/r4.jpg", title: "Burger Haven", tags: ["Burgers", "Fast Food", "American"] },
    { image: "/images/r5.jpg", title: "Sushi World", tags: ["Sushi", "Japanese", "Fresh"] },
    { image: "/images/r6.jpg", title: "Italian Bistro", tags: ["Italian", "Pasta", "Wine"] },
  ];

  return (
    <div className="py-16">
      {/* Section Heading */}
      <h2 className="text-xl sm:text-2xl text-center font-extrabold">Nearby Restaurants</h2>

      {/* Restaurant Grid */}
      <div className="w-[80%] mx-auto grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 mt-14">
        {restaurants.map((restaurant, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            data-aos-delay={index * 100} // 0, 100, 200, etc.
          >
            <RestaurantCard {...restaurant} />
          </div>
        ))}
      </div>

      {/* Button */}
      <div className="mt-16 text-center">
        <button className="px-9 py-2.5 sm:py-3.5 cursor-pointer rounded-full font-bold text-base sm:text-lag bg-cyan-700 text-white dark:text-black hover:bg-cyan-950 dark:bg-cyan-300 dark:hover:bg-cyan-200 transition-all duration-300">
          Discover More &rarr;
        </button>
      </div>
    </div>
  );
};

export default Restaurant;
