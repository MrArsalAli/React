import { useNavigate } from "react-router";
import Button from "../../components/Button";

function Signin() {
  const navigate = useNavigate();
  return (
    <>
      <div className="text-center h-24 content-center mt-4 text-4xl protest-strike-regular bg-emerald-50">
        SIGNIN
      </div>
      <form className="max-w-sm mx-auto w-full mt-16">
        <div className="mb-2">
          <label
            htmlFor="email"
            className="block mx-2 text-sm text-medium font-medium text-gray-900 dark:text-white mt-16"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-medium rounded focus:ring-emerald-500 focus:border-emerald-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-emerald-500 dark:focus:border-emerald-500"
            placeholder="user@sabafabrics.com"
            required=""
          />
        </div>
        <div className="mb-8 w-full">
          <label
            htmlFor="password"
            className="block mx-2 text-sm text-medium font-medium text-gray-900 dark:text-white"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-medium rounded focus:ring-emerald-500 focus:border-emerald-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-emerald-500 dark:focus:border-emerald-500"
            required=""
          />
        </div>
        <Button type="submit" text={"Signin"} />
        <p
          onClick={() => navigate("/signup")}
          className="my-6 cursor-pointer underline"
        >
          New here? Create your account
        </p>
      </form>
    </>
  );
}

export default Signin;
