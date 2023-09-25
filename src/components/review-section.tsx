import React from 'react';

// An array of video URLs
const videoURLs = [
  'https://www.youtube.com/embed/lgU6AgIe-mM?si=l6GamIs632Ta2l-s',
  'https://www.youtube.com/embed/cMZ65GrMfho?si=l23YrhiBd9rhPlZU',
  'https://www.youtube.com/embed/1t__fjK8Tvc?si=ERvrrKuaUZAQ59TW',
];

const ReviewSection = () => {
  return (
    <section className="bg-gray-100 xl:py-36 md:py-24 py-16">
      <div className="container mx-auto  px-4">
      <div className="max-w-4xl mx-auto mb-12 md:text-center">
          <h2 className="text-3xl font-semibold text-gray-900 sm:text-4xl">{`Our Patients' Stories`}</h2>
          <p className="mt-3 text-xl text-gray-500 sm:mt-4">{'Explore the real-life experiences of individuals who have undergone Ayurvedic kidney treatment at BK Arogyam. Read their testimonials to see how our approach has positively impacted their kidney health and overall well-being.'}</p>
        </div>
        {/* Dynamic Testimonial Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-4">
          {videoURLs.map((videoURL, index) => (
            <div key={index} className="bg-white overflow-hidden rounded-lg shadow-md">
              {/* Video */}
              <div className="relative aspect-video ">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={videoURL}
                  title={`Testimonial Video ${index + 1}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;
