import React from 'react';

const statsData = [
  { label: 'Happy Patients', value: '102,205' },
  { label: 'Camps', value: '2,458' },
  { label: 'Our Doctors', value: '50' },
  { label: 'Our Center', value: '5' },
];

const statsTitle = 'By the Numbers: Empowering Health';
const statsDescription = 'explore Our Impact: Uncover the Story Behind the Numbers that Reflect Our Commitment to Health and Wellness.';

const StatsSection = () => {
  return (
    <div className="bg-gray-50 pt-12 sm:pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-900 sm:text-4xl">{statsTitle}</h2>
          <p className="mt-3 text-xl text-gray-500 sm:mt-4">{statsDescription}</p>
        </div>
      </div>
      <div className="mt-10 pb-12 bg-white sm:pb-16">
        <div className="relative">
          <div className="absolute inset-0 h-1/2 bg-gray-50"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <dl className="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-4">
                {statsData.map((stat, index) => (
                  <div key={index} className={`flex flex-col border-t border-b border-gray-100 p-6 text-center ${index === 0 ? 'sm:border-0 sm:border-l' : index === statsData.length - 1 ? 'sm:border-0 sm:border-r' : 'sm:border-0 sm:border-l sm:border-r'}`}>
                    <dt className="order-2 mt-2 text-lg leading-6  secondary-font font-medium text-gray-500">{stat.label}</dt>
                    <dd className="order-1 text-5xl font-bold text-primary">{stat.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
