import ContactDialog from "./shared/contact-dialog";
import { Button } from "./ui/button";

const CtaSection = () => {
    return (
      <div className="relative bg-gray-800">
        <div className="h-56 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
          <img className="w-full h-full object-cover" src="/assets/images/cta-image.webp" alt="" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="md:ml-auto md:w-1/2 md:pl-10">
            <p className="mt-2 text-white text-3xl font-semibold tracking-tight sm:text-4xl">We’re here to help</p>
            <p className="mt-3 text-lg text-gray-300">
              Take the first step towards a kidney-disease-free life—schedule a consultation with us today. Your journey to kidney health begins here at B.K. Arogyam. Contact us now.
            </p>
            <div className="mt-8">
              <div className="inline-flex rounded-md shadow">
                <ContactDialog>

                <Button variant={'secondary'}>
                  Schedule a Consultation
                </Button>
                </ContactDialog>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default CtaSection;
  