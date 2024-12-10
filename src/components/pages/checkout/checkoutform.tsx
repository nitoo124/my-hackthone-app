import React from "react";

const Checkouform = () => {
  return (
    <main className="max-w-[1440px] mx-auto px-4 md:px-8 py-10">
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
        {/* Left Section: Billing Details */}
        <div className="flex-1 p-6 rounded-lg w-full lg:w-[608px] bg-white shadow-sm">
          <h2 className="text-2xl font-bold mb-6">Billing Details</h2>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="firstName"
                >
                  First Name
                </label>
                <input
                  id="firstName"
                  type="text"
                  className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>
              <div>
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="lastName"
                >
                  Last Name
                </label>
                <input
                  id="lastName"
                  type="text"
                  className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>
            </div>
            <div>
              <label
                className="block text-sm font-medium mb-1"
                htmlFor="companyName"
              >
                Company Name (Optional)
              </label>
              <input
                id="companyName"
                type="text"
                className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
            <div>
              <label
                className="block text-sm font-medium mb-1"
                htmlFor="country"
              >
                Country / Region
              </label>
              <select
                id="country"
                className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              >
                <option>Sri Lanka</option>
              </select>
            </div>
            <div>
              <label
                className="block text-sm font-medium mb-1"
                htmlFor="streetAddress"
              >
                Street Address
              </label>
              <input
                id="streetAddress"
                type="text"
                className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="town">
                Town / City
              </label>
              <input
                id="town"
                type="text"
                className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
            <div>
              <label
                className="block text-sm font-medium mb-1"
                htmlFor="province"
              >
                Province
              </label>
              <select
                id="province"
                className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              >
                <option>Western Province</option>
              </select>
            </div>
            <div>
              <label
                className="block text-sm font-medium mb-1"
                htmlFor="zipCode"
              >
                ZIP Code
              </label>
              <input
                id="zipCode"
                type="text"
                className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="phone">
                Phone
              </label>
              <input
                id="phone"
                type="text"
                className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="email">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
          </form>
        </div>

        {/* Right Section: Product Details */}
        <div className="w-full lg:w-[400px] p-6 rounded-lg bg-white shadow-sm">
          <h2 className="text-2xl font-bold mb-6">Product</h2>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="text-gray-800">Asgaard Sofa</span>
              <span className="text-gray-800">Rs. 250,000.00</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-800">Subtotal</span>
              <span className="text-gray-800">Rs. 250,000.00</span>
            </div>
            <div className="flex justify-between font-bold border-b-2 pb-4">
              <span>Total</span>
              <span className="text-[#b88e2f]">Rs. 250,000.00</span>
            </div>
          </div>
          <div className="mt-6">
            <h3 className="font-bold text-lg mb-2">Payment Methods</h3>
            <div className="space-y-2">
              <div>
                <input
                  type="radio"
                  id="bankTransfer"
                  name="payment"
                  defaultChecked
                />
                <label htmlFor="bankTransfer" className="ml-2">
                  Direct Bank Transfer
                </label>
                <p className="text-sm text-[#9F9F9F] mt-2">
                  Make your payment directly into our bank account. Please use
                  your Order ID as the payment reference. Your order will not be
                  shipped until the funds have cleared in our account.
                </p>
              </div>
              <div>
                <input type="radio" id="cod" name="payment" />
                <label htmlFor="cod" className="ml-2">
                  Cash On Delivery
                </label>
                <p className="text-sm text-gray-600 mt-2">
                  Your personal data will be used to support your experience
                  throughout this website, to manage access to your account, and
                  for other purposes described in our{" "}
                  <span className="font-semibold">privacy policy</span>.
                </p>
              </div>
            </div>
          </div>
          <button className="w-full border-4 border-black py-3 rounded-lg mt-6 hover:bg-[#B88E2F] hover:text-white hover:border-none">
            Place Order
          </button>
        </div>
      </div>
    </main>
  );
};

export default Checkouform;
