import ContactDialog from "./shared/contact-dialog";

const Navbar = () => {
  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="https://flowbite.com/" className="flex items-center">
          <span className="self-center text-2xl text-primary font-semibold whitespace-nowrap dark:text-white">
            Bk Arogyam
          </span>
        </a>
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
