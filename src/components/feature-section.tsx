import React from "react";
import FeatureCard from "@components/shared/feature-card"; // Import the FeatureCard component
import { Pill, PlusCircle, User } from "lucide-react";

const services = [
  { icon:<User/>,
    title: "Consultations/OPD",
    description: "Expert consultations and outpatient services for your health needs.",
    link: "#"
  },
  { icon:<PlusCircle/>,
    title: "Ayurvedic Treatment/Admission",
    description: "Explore our Ayurvedic treatments and admission services for holistic healing.",
    link: "#"
  },
  { icon:<Pill/>,
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
        <div className="mx-auto max-w-3xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">
            BK Arogyam Services
          </h2>
          <p className="mt-2 text-3xl font-bold  tracking-tight text-gray-900 sm:text-4xl">
            Everything You Need for a Healthier Life
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            At BK Arogyam, we are committed to providing you with the best holistic health solutions. Our services are designed to enhance your well-being and promote a healthier lifestyle.
          </p>
        </div>
        <div className="mt-20 flex  gap-8 max-w-7xl mx-auto  flex-wrap justify-between">
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
