import Image from "next/image";
import React from "react";

const sections = [
    {
      title: "Understand The Problem",
      description:
        "Thorough assessments guide tailored treatments for kidney issues effectively.",
    },
    {
      title: "Ayurvedic Kidney Treatment",
      description:
        "Effective Ayurvedic treatments promote kidney health and vitality naturally.",
    },
    {
      title: "Admission Care",
      description:
        "Comfortable admission and attentive care provided when necessary for your peace of mind.",
    },
    {
      title: "Medicines-Based Reversal",
      description:
        "Natural Ayurvedic remedies aid in the restoration of kidney health and function.",
    },
  ];


const ApproachSection = () => {
  return (
      <><header className="md:text-center px-4 mb-16">
          <h2 className="mt-2 text-3xl font-bold mb-2 tracking-tight text-primary sm:text-4xl">
              Our Approach
          </h2>
          <p className="text-lg  font-medium text-gray-600">
              We reverse the kidney damage by ancient wisdom of Ayurveda
          </p>
      </header><section className="container-main relative">

              <div className="flex flex-col md:flex-row gap-16 pb-16">
                  <div className="flex-1">
                      {sections.map((section, index) => (
                          <article
                              key={index}
                              className="border-l-4 border-gray-200 hover:border-primary transition-all px-6 py-4"
                          >
                              <h3 className="md:text-xl text-lg font-semibold text-gray-900 mb-2">
                                  {section.title}
                              </h3>
                              <p className="text-gray-600 mb-5">{section.description}</p>
                          </article>
                      ))}
                  </div>
                  <div className="flex-1 flex items-end">
                      <Image width={500} height={600}
                          className="md:absolute md:w-1/2 rounded-sm  right-0"
                          src="https://images.pexels.com/photos/7176026/pexels-photo-7176026.jpeg"
                          alt="feature-image-condign-monk" />
                  </div>
              </div>
          </section></>
  );
};

export default ApproachSection;
