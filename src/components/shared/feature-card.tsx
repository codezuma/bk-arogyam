import React from "react";

// Define the prop types using TypeScript interfaces
interface FeatureCardProps {
  imageUrl: string;
  title: string;
  description: string;
  link: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  imageUrl,
  title,
  description,
  link,
}) => {
  return (
    <div className="max-w-sm flex-1 bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700">
      <a href={link}>
        <img
          className="rounded-t-lg h-48 w-full object-cover"
          src={imageUrl}
          alt=""
        />
      </a>
      <div className="p-5">
        <a href={link}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
        <a
          href={link} className="button-primary"        >
          Read more
        </a>
      </div>
    </div>
  );
};

export default FeatureCard;
