import Link from "next/link";
import ContactDialog from "./shared/contact-dialog";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center">
            <Image alt="Bk-arogyam" width="200" height="80" className="h-12 w-auto"  src='/assets/images/bk-arogyam-logo.jpg' />
          <span className="self-center ml-4 text-2xl text-primary font-semibold whitespace-nowrap dark:text-white">
            BK Arogyam
          </span>
        </Link>
        <div className="flex md:order-2">
          <ContactDialog>

          <button type="button" className="button button-primary">
            Contact now
          </button>
          </ContactDialog>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
