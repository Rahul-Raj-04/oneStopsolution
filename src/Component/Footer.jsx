import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#021955] text-white dark:bg-gray-900 w-[100%] h-[auto]">
        <div className="mx-auto w-full max-w-screen-xl">
          <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
            <div>
              <h2 className="mb-6 text-sm font-semibold  text-white uppercase dark:text-white">
                Company
              </h2>
              <ul className="text-white dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <NavLink to="/About" className=" hover:underline">
                    About
                  </NavLink>
                </li>
                <li className="mb-4">
                  <NavLink to="#" className="hover:underline">
                    Careers
                  </NavLink>
                </li>
                <li className="mb-4">
                  <NavLink to="#" className="hover:underline">
                    Brand Center
                  </NavLink>
                </li>
                <li className="mb-4">
                  <NavLink to="#" className="hover:underline">
                    Blog
                  </NavLink>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">
                Help center
              </h2>
              <ul className="text-white dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <NavLink to="#" className="hover:underline">
                    WhatsApp
                  </NavLink>
                </li>
                <li className="mb-4">
                  <NavLink to="#" className="hover:underline">
                    Instagram
                  </NavLink>
                </li>
                <li className="mb-4">
                  <NavLink to="#" className="hover:underline">
                    Facebook
                  </NavLink>
                </li>
                <li className="mb-4">
                  <NavLink to="#" className="hover:underline">
                    Contact Us
                  </NavLink>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">
                Legal
              </h2>
              <ul className="text-white dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <NavLink to="#" className="hover:underline">
                    Privacy Policy
                  </NavLink>
                </li>
                <li className="mb-4">
                  <NavLink to="#" className="hover:underline">
                    Licensing
                  </NavLink>
                </li>
                <li className="mb-4">
                  <NavLink to="#" className="hover:underline">
                    Terms &amp; Conditions
                  </NavLink>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">
                Download
              </h2>
              <ul className="text-white dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <NavLink to="#" className="hover:underline">
                    iOS
                  </NavLink>
                </li>
                <li className="mb-4">
                  <NavLink to="#" className="hover:underline">
                    Android
                  </NavLink>
                </li>
                <li className="mb-4">
                  <NavLink to="#" className="hover:underline">
                    Windows
                  </NavLink>
                </li>
                <li className="mb-4">
                  <NavLink to="#" className="hover:underline">
                    MacOS
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="px-4 py-6 bg-[#021955] dark:bg-gray-700 md:flex md:items-center md:justify-between">
            <span className="text-sm text-white dark:text-gray-300 sm:text-center">
              © 2023 <NavLink to="https://flowbite.com/">Flowbite™</NavLink>.
              All Rights Reserved.
            </span>
            <div className="flex mt-4 space-x-5 sm:justify-center md:mt-0">
              <NavLink
                to="#"
                className="text-black hover:text-gray-900 dark:hover:text-white"
              >
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 8 19"
                >
                  <path to="#" />
                </svg>
                <span className="sr-only">Facebook page</span>
              </NavLink>
              <NavLink
                to="#"
                className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
              >
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 21 16"
                >
                  <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
                </svg>
                <span className="sr-only">Discord community</span>
              </NavLink>
              <NavLink
                to="#"
                className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
              >
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 17"
                >
                  <path to="#" />
                </svg>
                <span className="sr-only">Twitter page</span>
              </NavLink>
              <NavLink
                to="#"
                className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
              >
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path to="#" />
                </svg>
                <span className="sr-only">GitHub account</span>
              </NavLink>
              <NavLink
                to="#"
                className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
              >
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path to="#" />
                </svg>
                <span className="sr-only">Dribbble account</span>
              </NavLink>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
