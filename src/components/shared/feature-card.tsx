import React from "react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon:JSX.Element;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description,icon }) => {
  return (
    <div className="flex-1 md:min-w-[350px]">
      <dt>
        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary/80 text-white">
          {/* Heroicon name: outline/lightning-bolt */}
         {icon}
        </div>
        <p className="mt-5 text-lg leading-6 font-medium text-gray-900">
          {title}
        </p>
      </dt>
      <dd className="mt-2 text-base text-gray-500">{description}</dd>
    </div>
  );
};

export default FeatureCard;
