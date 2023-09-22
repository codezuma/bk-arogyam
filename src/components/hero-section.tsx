import Image from "next/image";
import ContactDialog from "./shared/contact-dialog";
import ContactForm from "./shared/contact-form";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Pill, PlusCircleIcon, User } from "lucide-react";

/* const HeroSection = () => {
  return <div className="relative container-main">
        <Image width="500" height="500"   className='absolute top-0 left-0 z-0  w-full h-full'  src="/assets/images/background-pattern.svg" alt="backgroud-image" />
    <section className=" mt-20 relative z-10  py-24  min-h-screen ">
     
      <div className="mt-12 mb-16 flex md:flex-row flex-col  gap-4">
        <button className="button-outline text-gray-800 button-large">Learn More</button>
        <ContactDialog>
        <button className="button-primary  button-large">Get in touch</button>
        </ContactDialog>
      </div>
      <div className='w-full rounded-md bg-[url("/assets/images/hero-image.png")] h-60 md:h-96 xl:h-[516px] bg-no-repeat bg-bottom bg-cover'></div>
    </section>
    <Image width={150} src='/assets/images/ayush-ministry-badge.png' alt="minstryy-badge" height={300} className="absolute bottom-[60%] right-[10%]"/>
  </div>;
};
 */

const HeroSection = () => {
  return (
    <main className="mt-12 min-h-screen relative bg-[url('/assets/images/hero-image.webp')] sm:pb-20 pb-5 bg-cover ">
     <div className="w-full h-full z-0 bg-black absolute bg-opacity-30"/>
      <div className="mx-auto relative min-h-[90vh]  z-10 max-w-7xl pt-20">
        <div className="lg:grid lg:grid-cols-12  mt-10 lg:gap-8">
          <div className="px-4 sm:px-6 sm:text-center items-center md:mx-auto lg:col-span-8 lg:text-left lg:flex lg:items-center">
            <div>
              <h1 className="w-full text-white md:text-4xl  text-4xl mb-6 font-semibold !leading-tight">
                Ayurvedic Treatment For kidney problems<br/>
                No Dialysis, No Transplants—Just <p className="text-tertiary">
                   Natural Healing
                  </p>
              </h1>
              <p className="md:text-xl text-xl text-gray-100  w-full ">
                — Backed by modern research, and certified by the Ministry of
                Ayush, Government of India..
              </p>
              <p className="mt-8 text-lg  text-white uppercase tracking-wide  mb-4 sm:mt-10">
                We Provide
              </p>
              <div className="flex  gap-4 flex-col">
                <div className="items-center flex gap-4">
                  <div className="p-2   rounded-sm w-fit bg-primary">
                   <User size={26} className="text-white" />
                  </div>
                  <p className="text-2xl text-white">Consultations/OPD</p>
                </div>
                <div className="items-center flex gap-4">
                  <div className="p-2   rounded-sm w-fit bg-primary">
                   <PlusCircleIcon size={26} className="text-white" />
                  </div>
                  <p className="text-2xl text-white">Ayurvedic Treatment/Admission</p>
                </div>
                <div className="items-center flex gap-4">
                  <div className="p-2   rounded-sm w-fit bg-primary">
                   <Pill size={26} className="text-white" />
                  </div>
                  <p className="text-2xl text-white">Ayurvedic Medicine</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-4 mt-20 ">
            <Card>
              <CardHeader>
                <CardTitle>Contact Form</CardTitle>
              </CardHeader>
              <CardContent>
              <ContactForm/>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
};
export default HeroSection;
