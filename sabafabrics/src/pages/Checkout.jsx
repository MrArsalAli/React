import Button from "../components/Button.jsx";

function Checkout() {
  return (
    <>
    <form className="max-w-md mx-auto mt-8">
      <div className="mb-8">
        <label
          htmlFor="email"
          className="block mx-2 text-lg font-medium text-gray-900 dark:text-white"
        >
          Contact
        </label>
        <input
          type="text"
          id="email"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-medium rounded focus:ring-emerald-500 focus:border-emerald-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-emerald-500 dark:focus:border-emerald-500"
          placeholder="Email"
          required=""
        />
      </div>
      <div className="mb-2">
        <label
          htmlFor="password"
          className="block mx-2 text-lg font-medium text-gray-900 dark:text-white"
        >
          Delivery
        </label>
        <input
          type="text"
          id="password"
          placeholder="Coutry/Region"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-medium rounded focus:ring-emerald-500 focus:border-emerald-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-emerald-500 dark:focus:border-emerald-500"
          required=""
        />
      </div>
      <div className="flex">
        <div className="mb-2  mx-auto">
          <input
            type="text"
            id="firstName"
            placeholder="First Name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-medium rounded focus:ring-emerald-500 focus:border-emerald-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-emerald-500 dark:focus:border-emerald-500"
            required=""
          />
        </div>
        <div className="mb-2 mx-auto">
          <input
            type="text"
            id="lastName"
            placeholder="Last Name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-medium rounded focus:ring-emerald-500 focus:border-emerald-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-emerald-500 dark:focus:border-emerald-500"
            required=""
          />
        </div>
      </div>
      <div className="mb-2">
        <input
          type="text"
          id="phoneNumber"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-medium rounded focus:ring-emerald-500 focus:border-emerald-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-emerald-500 dark:focus:border-emerald-500"
          placeholder="Address"
          required=""
        />
      </div>
      <div className="flex">
        <div className="mb-2  mx-auto">
          <input
            type="text"
            id="firstName"
            placeholder="City"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-medium rounded focus:ring-emerald-500 focus:border-emerald-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-emerald-500 dark:focus:border-emerald-500"
            required=""
          />
        </div>
        <div className="mb-2 mx-auto">
          <input
            type="text"
            id="lastName"
            placeholder="Postal"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-medium rounded focus:ring-emerald-500 focus:border-emerald-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-emerald-500 dark:focus:border-emerald-500"
            required=""
          />
        </div>
      </div>
      <div>
        <div className="mb-2">
          <input
            type="text"
            id="phoneNumber"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-medium rounded focus:ring-emerald-500 focus:border-emerald-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-emerald-500 dark:focus:border-emerald-500"
            placeholder="Phone Number"
            required=""
          />
        </div>
        <div className="flex mb-4">
          <label
            htmlFor="remember"
            className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            <input
              type="checkbox"
              defaultValue=""
              className="w-4 h-4 mx-2 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
            />
            Save this information for next time
          </label>
        </div>
        <div className="flex mb-4">
          <label
            htmlFor="remember"
            className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            <input
              type="checkbox"
              defaultValue=""
              className="w-4 h-4 mx-2 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
            />
            Text me with news and offer
          </label>
        </div>
            <p className="font-bold">Shipping Method</p>
        <div className="flex mb-2 w-full border border-black h-12 rounded">
          <div className="flex-start w-4/5 my-3 mx-2">Standard With COD</div>
          <div className="flex-end w-1/5 my-3 mx-2">RS 300.00</div>
        </div>
        <p className="mt-4 font-bold">Payment</p>
        <form className="max-w-sm mx-auto">
          <select
            id="Payment Method"
            className="bg-gray-50 border my-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-emerald-400 focus:border-emerald-400 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected="">Choose a Method</option>
            <option value="US">Bank</option>
            <option value="CA">Cash On Delivery (COD)</option>
            <option value="FR">PAYFAST</option>
            <option value="DE">NAYAPAY</option>
          </select>
        </form>

        <div className="my-2">
        <label
          htmlFor="password"
          className="block mx-2 text-md font-bold text-gray-900 dark:text-white"
        >
          Billing address
        </label>
        <input
          type="text"
          id="password"
          placeholder="Billing Address(Optional)"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-medium rounded focus:ring-emerald-500 focus:border-emerald-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-emerald-500 dark:focus:border-emerald-500"
          required=""
        />
      </div>
        <Button text={"Pay Now"} type="submit" />
        <div className="flex gap-3">
        <p className="my-4 text-sm mx-1 cursor-pointer underline">
          RefundPolicy
        </p>
        <p className="my-4 text-sm cursor-pointer underline">
          ShippingPolicy
        </p>
        <p className="my-4 text-sm cursor-pointer underline">
          PrivacyPolicy
        </p>
        <p className="my-4 text-sm cursor-pointer underline">
          ContactInformation
        </p>

        </div>
      </div>
    </form>
    </>
  );
}

export default Checkout;
