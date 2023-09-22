import Image from "next/image";

const HeroSection = () => {
  return <div className="relative container-main">
        <Image width="500" height="500"   className='absolute top-0 left-0 z-0  w-full h-full'  src="/assets/images/background-pattern.svg" alt="backgroud-image" />
    <section className=" mt-20 relative z-10  py-24  min-h-screen ">
      <h1 className="md:w-4/5 w-full md:text-6xl  text-4xl mb-6 font-semibold !leading-tight">
      Ayurvedic Treatment For kidney problems
      No Dialysis, No Transplants—Just Natural Healing       </h1>
      <p className="md:text-xl text-lg text-gray-600 xl:w-2/5 md:w-3/5 w-full ">
        — Backed by modern research, and certified by the Ministry of Ayush, Government of India..
      </p>
      <div className="mt-12 mb-16 flex md:flex-row flex-col  gap-4">
        <button className="button-outline button-large">Show Reel</button>
        <button className="button-primary button-large">Get in touch</button>
      </div>
      <div className='w-full rounded-md bg-[url("/assets/images/hero-image.png")] h-60 md:h-96 xl:h-[516px] bg-no-repeat bg-bottom bg-cover'></div>
    </section>
    <Image width={150} src='/assets/images/ayush-ministry-badge.png' alt="minstryy-badge" height={300} className="absolute bottom-[60%] right-[10%]"/>
  </div>;
};

export default HeroSection;
