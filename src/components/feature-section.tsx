import React from "react";
import FeatureCard from "@components/shared/feature-card"; // Import the FeatureCard component

const services = [
  {
    imageUrl: "https://images.pexels.com/photos/7579823/pexels-photo-7579823.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Consultations/OPD",
    description: "Expert consultations and outpatient services for your health needs.",
    link: "#"
  },
  {
    imageUrl: "https://images.pexels.com/photos/3998013/pexels-photo-3998013.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Ayurvedic Treatment/Admission",
    description: "Explore our Ayurvedic treatments and admission services for holistic healing.",
    link: "#"
  },
  {
    imageUrl: "https://images.pexels.com/photos/7615574/pexels-photo-7615574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Ayurvedic Medicine",
    description: "Discover our range of Ayurvedic medicines to support your well-being.",
    link: "#"
  },
  // Add more services as needed
];
const FeatureSection = () => {
 

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          {/* Title and introductory text */}
          <h2 className="text-base font-semibold leading-7 text-indigo-600">
            BK Arogyam Services
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything You Need for a Healthier Life
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            At BK Arogyam, we are committed to providing you with the best holistic health solutions. Our services are designed to enhance your well-being and promote a healthier lifestyle.
          </p>
        </div>
        <div className="mt-20 flex md:gap-20 gap-8 max-w-7xl mx-auto  flex-wrap justify-between">
          {/* Generate FeatureCard components for each service */}
          {services.map((service, index) => (
            <FeatureCard key={index} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
