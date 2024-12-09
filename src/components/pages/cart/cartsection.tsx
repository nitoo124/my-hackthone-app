import React from "react";
import Image from "next/image";
import { MdDelete } from "react-icons/md";
import Pagesbutton from "@/components/global/pagesbutton";

function CartSection() {
  return (
    <main className="max-w-[1440px] mx-auto px-4 py-10">
      {/* Main container */}
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Left Section: Cart Items */}
        <div className=" p-6 rounded-lg  flex-1">
          {/* Table Header */}
          <table className="w-full ">
            <thead>
              <tr className=" text-[#000000] bg-[#F9F1E7]">
                <th className="py-3 px-4 text-[16px] font-medium text-left">
                  Product
                </th>
                <th className="py-3 px-4 text-[16px] font-medium text-left">
                  Price
                </th>
                <th className="py-3 px-4 text-[16px] font-medium text-left">
                  Quantity
                </th>
                <th className="py-3 px-4 text-[16px] font-medium text-left">
                  Subtotal
                </th>
                <th className="py-3 px-4 text-[16px] font-medium"></th>
              </tr>
            </thead>
            <tbody>
              {/* Product Row */}
              <tr className=" mt-10">
                <td className="py-8 px-4 flex items-center gap-4">
                  <Image
                    src={"/images/cart/cart.png"}
                    alt="Cart Image"
                    width={80}
                    height={80}
                    className="rounded-lg"
                    loading="lazy"
                  />
                  <h2 className="text-[#000000] text-[16px] font-medium">
                    Asgaard Sofa
                  </h2>
                </td>
                <td className="py-4 px-4 text-[#9F9F9F] text-[16px]">
                  Rs. 250,000.00
                </td>
                <td className="py-4 px-4">
                  <input
                    type="number"
                    min="1"
                    defaultValue="1"
                    className="w-12 border border-gray-300 rounded-lg text-center text-[16px]"
                  />
                </td>
                <td className="py-4 px-4 text-[#9F9F9F] text-[16px]">
                  Rs. 250,000.00
                </td>
                <td className="py-4 px-4">
                  <MdDelete className="text-[#B88E2F]" size={25} />
                </td>
              </tr>
              {/* Add more rows here */}
            </tbody>
          </table>
        </div>

        {/* Right Section: Cart Totals */}
        <div className="bg-[#F9F1E7] p-10 rounded-lg shadow-lg w-[full] lg:w-[393px] h-[390px] mt-5">
          <h2 className="text-2xl font-bold text-[#000000] mb-6 text-center">
            Cart Totals
          </h2>
          <div className="flex justify-center items-center mt-10 ">
            <span className="text-gray-600 className='text-[16px] font-medium mt-3 '">Subtotal</span>
            <span className="font-medium text-gray-800 mt-3">Rs. 250,000.00</span>
          </div>
          <div className="flex justify-center gap-6 font-bold text-lg mb-6 mt-6">
            <span className='text-[16px] font-medium'>Total</span>
            <span className="text-[#B88E2F] text-[20px] font-medium">Rs. 250,000.00</span>
          </div>
          <div className="flex justify-center mt-6">
  <button className="w-[222px] border-4 border-black p-3 rounded-lg text-center transition duration-300">
    Checkout
  </button>
</div>

        </div>
      </div>

      
    </main>
  );
}

export default CartSection;
