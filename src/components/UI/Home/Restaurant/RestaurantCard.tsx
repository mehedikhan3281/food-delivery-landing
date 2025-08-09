import Image from "next/image";

type Props = {
  image: string;
  title: string;
  tags?: string[];
};

const RestaurantCard = ({ image, title, tags = [] }: Props) => {
  return (
    <div>
      <Image
        src={image}
        alt={title}
        width={400}
        height={400}
        className="w-full h-64 object-cover"
      />
      <h1 className="mt-4 w-fit dark:hover:text-amber-300 hover:text-blue-950 transition-all duration-200 cursor-pointer text-base sm:text-lg font-bold">
        {title}
      </h1>

      <div className="flex items-center font-medium mt-3 space-x-2">
        {tags.map((tag, index) => (
          <p
            key={index}
            className="bg-blue-950 px-3 py-1.5 rounded-full text-sm sm:text-base text-white"
          >
            {tag}
          </p>
        ))}
      </div>
    </div>
  );
};

export default RestaurantCard;
