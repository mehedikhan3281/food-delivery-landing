import React from 'react';

const categories = [
    { name: "American" },
    { name: "Sushi" },
    { name: "Pizza" },
    { name: "Italian" },
    { name: "Burger" },
    { name: "Wine" },
    { name: "Seafood" },
    { name: "Mexican" },
    { name: "Chinese" },
    { name: "Thai" },
    { name: "Indian" },
    { name: "Vegetarian" },
    { name: "Fast Food" },
    { name: "BBQ" },
    { name: "Desserts" },
];

const Category = () => {



    return (
        <div className='py-16'>
            <h1 className='text-xl sm:text-2xl text-center font-extrabold'>Popular Food Categories</h1>
            <div className='w-[80%] mx-auto mt-10'>
                <div className='flex flex-wrap gap-4 justify-center'>
q                    {categories.map((category, index) => (
                        <span key={index} className='px-6 py-3 rounded-full cursor-pointer hover:bg-emerald-600 hover:text-white transition-all duration-300 bg-gray-100 dark:bg-gray-800 dark:text-white text-gray-900 font-semibold text-lg'>
                            {category.name}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Category;