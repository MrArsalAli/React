import { Link } from "react-router-dom";



function Login() {
  return (
    <form className="max-w-sm mx-auto">
      <h1 className="text-center text-4xl font-bold">Login Here</h1>
      <div className="mb-5 mt-5">
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900 "
        >
          Your email
    </label>
        <input
          type="email"
          id="email"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          placeholder="name@gmail.com"
          required=""
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="password"
          className="block mb-2 text-sm font-medium text-gray-900 "
        >
          Your password
    </label>
        <input
          type="password"
          id="password"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          required=""
        />
      </div>
      <div className="flex items-start mb-5">
        <div className="flex items-center h-5">
        </div>
        <Link to={"/signup"}>
          <span
            className="ms-2 text-sm font-medium text-gray-900 "
          >New? Create Account</span>
        </Link>
      </div>
      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
      >
        Submit
  </button>
    </form>

  )
}

export default Login