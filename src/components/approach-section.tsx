import { Heart, HeartPulseIcon, StethoscopeIcon, Tablets } from "lucide-react";
import Image from "next/image";
import React from "react";

const sections = [
  {
    title: "Understand The Problem",
    icon:<StethoscopeIcon/>,
    description:
      "Thorough assessments guide tailored treatments for kidney issues effectively.",
  },
  {
    title: "Ayurvedic Kidney Treatment",
    icon:<HeartPulseIcon/>,
    description:
      "Effective Ayurvedic treatments promote kidney health and vitality naturally.",
  },
  {
    title: "Admission Care",
    icon:<Heart/>,
    description:
      "Comfortable admission and attentive care provided when necessary for your peace of mind.",
  },
  {
    title: "Medicines-Based Reversal",
    icon:<Tablets/>,
    description:
      "Natural Ayurvedic remedies aid in the restoration of kidney health and function.",
  },
];

const ApproachSection = () => {
  return (
    <>
      <header className="md:text-center px-4 mb-16">
        <h2 className="mt-2 text-3xl font-bold mb-2 tracking-tight text-primary sm:text-4xl">
          Our Approach
        </h2>
        <p className="text-lg  font-medium text-gray-600">
          We reverse the kidney damage by ancient wisdom of Ayurveda
        </p>
      </header>
      <section className="container-main relative">
        <div className="flex flex-col md:flex-row gap-16 pb-16">
          <div className="flex-1">
            {sections.map((section, index) => (
              <article
                key={index}
                className="border-l-4 flex gap-4 border-gray-200 hover:border-primary transition-all px-6 py-4"
              >
                <div className="w-12 h-12 flex justify-center items-center bg-green-50 text-primary">
                    {section.icon}
                </div>
                <div>
                  <h3 className="md:text-xl text-lg font-semibold text-gray-900 mb-1">
                    {section.title}
                  </h3>
                  <p className="text-gray-600 mb-5">{section.description}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="flex-1 flex items-end">
            <Image
              width={500}
              height={600}
              className="md:absolute md:w-1/2 h-[90%]  object-cover rounded-sm  right-0"
              src='/assets/images/bk-arogyam.jpg'
              alt="feature-image-condign-monk"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default ApproachSection;
