import React from "react";
import Image from "next/image";
import { MdDelete } from "react-icons/md";
import Pagesbutton from "@/components/global/pagesbutton";
import Link from "next/link";

function CartSection() {
  return (
    <main className="max-w-[1440px] mx-auto px-4 py-10">
    {/* Main container */}
    <div className="flex flex-col lg:flex-row gap-10">
      {/* Left Section: Cart Items */}
      <div className="p-6 rounded-lg flex-1 bg-white shadow-md">
        {/* Table Header */}
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="text-[#000000] bg-[#F9F1E7]">
              <th className="py-3 px-2 lg:px-4 text-[14px] lg:text-[16px] font-medium">
                Product
              </th>
              <th className="py-3 px-2 lg:px-4 text-[14px] lg:text-[16px] font-medium">
                Price
              </th>
              <th className="py-3 px-2 lg:px-4 text-[14px] lg:text-[16px] font-medium">
                Quantity
              </th>
              <th className="py-3 px-2 lg:px-4 text-[14px] lg:text-[16px] font-medium">
                Subtotal
              </th>
              <th className="py-3 px-2 lg:px-4 text-[14px] lg:text-[16px] font-medium"></th>
            </tr>
          </thead>
          <tbody>
            {/* Product Row */}
            <tr className="mt-10 border-b">
              <td className="py-4 px-2 lg:px-4 flex items-center gap-4">
                <Image
                  src={"/images/cart/cart.png"}
                  alt="Cart Image"
                  width={80}
                  height={80}
                  className="rounded-lg"
                  loading="lazy"
                />
                <h2 className="text-[#000000] text-[14px] lg:text-[16px] font-medium">
                  Asgaard Sofa
                </h2>
              </td>
              <td className="py-4 px-2 lg:px-4 text-[#9F9F9F] text-[14px] lg:text-[16px]">
                Rs. 250,000.00
              </td>
              <td className="py-4 px-2 lg:px-4">
                <input
                  type="number"
                  min="1"
                  defaultValue="1"
                  className="w-12 border border-gray-300 rounded-lg text-center text-[14px] lg:text-[16px]"
                />
              </td>
              <td className="py-4 px-2 lg:px-4 text-[#9F9F9F] text-[14px] lg:text-[16px]">
                Rs. 250,000.00
              </td>
              <td className="py-4 px-2 lg:px-4">
                <MdDelete className="text-[#B88E2F]" size={20} />
              </td>
            </tr>
            {/* Add more rows here */}
          </tbody>
        </table>
      </div>
  
      {/* Right Section: Cart Totals */}
      <div className="bg-[#F9F1E7] p-6 lg:p-10 rounded-lg shadow-lg w-full lg:w-[393px] h-auto lg:h-[390px]">
        <h2 className="text-xl lg:text-2xl font-bold text-[#000000] mb-6 text-center">
          Cart Totals
        </h2>
        <div className="flex justify-between items-center mb-6 mt-12">
          <span className="text-gray-600 text-[14px] lg:text-[16px] font-medium">
            Subtotal
          </span>
          <span className="font-medium text-gray-800 text-[14px] lg:text-[16px]">
            Rs. 250,000.00
          </span>
        </div>
        <div className="flex justify-between items-center font-bold text-lg mb-6">
          <span className="text-[14px] lg:text-[16px] font-medium">Total</span>
          <span className="text-[#B88E2F] text-[16px] lg:text-[20px] font-medium">
            Rs. 250,000.00
          </span>
        </div>
        <div className="flex justify-center mt-6">
          <Link href={'/checkout'}><button className="w-full lg:w-[222px] border-4 border-black p-3 rounded-lg text-center transition duration-300 hover:border-none hover:bg-[#B88E2F] hover:text-white">
            Checkout
          </button></Link>
        </div>
      </div>
    </div>
  </main>
  
  );
}

export default CartSection;
