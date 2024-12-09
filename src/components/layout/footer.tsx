// Importing the Poppins font from Next.js' Google Font utility
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

const Footer = () => {
  return (
    <main>
      {/* Footer container */}
      <footer className="max-w-[1440px] mx-auto px-[40px] md:px-[100px] py-[48px]">
        <div className="h-auto">
          {/* Top Section */}
          <div
            className={`${poppins.className} flex flex-wrap justify-between gap-10 lg:gap-0 mb-[50px]`}
          >
            {/* Column 1: Company Information */}
            <div className="space-y-[50px] lg:w-[285px]">
              <h2 className="font-bold text-[24px]">Funiro.</h2>
              <p className="font-normal text-[16px] text-footerTextColor leading-6">
                400 University Drive Suite 200 Coral Gables, FL 33134 USA
              </p>
            </div>

            {/* Column 2: Links */}
            <div className="space-y-[50px]">
              <p className="font-normal text-[16px] text-footerTextColor">Link</p>
              <ul className="space-y-2">
                <li className="font-normal text-[16px]">Home</li>
                <li className="font-normal text-[16px]">Shop</li>
                <li className="font-normal text-[16px]">About</li>
                <li className="font-normal text-[16px]">Contact</li>
              </ul>
            </div>

            {/* Column 3: Help */}
            <div className="space-y-[50px]">
              <p className="font-normal text-[16px] text-footerTextColor">Help</p>
              <ul className="space-y-2">
                <li className="font-normal text-[16px]">Payment Options</li>
                <li className="font-normal text-[16px]">Returns</li>
                <li className="font-normal text-[16px]">Privacy Policies</li>
              </ul>
            </div>

            {/* Column 4: Newsletter */}
            <div className="space-y-[50px]">
              <p className="font-normal text-[16px] text-footerTextColor">Newsletter</p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <input
                  className="font-normal text-[14px] text-footerTextColor bg-transparent border-b border-black outline-none focus:border-black w-full sm:w-auto"
                  placeholder="Enter Your Email Address"
                />
                <span className="font-medium text-[14px] underline underline-offset-[4px]">
                  Subscribe
                </span>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t-[1px] border-footerTextColor pt-[35px] text-center">
            <p
              className={`${poppins.className} font-normal text-[16px]`}
            >
              2023 Funiro. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Footer;
