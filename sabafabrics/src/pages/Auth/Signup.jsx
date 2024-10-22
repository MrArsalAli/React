import { useNavigate } from "react-router";
import Button from "../../components/Button";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase.js";

function Signup() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignupWithEmail = () => {
      createUserWithEmailAndPassword(auth, email, password)
    .then((user) => {
      console.log("signedup");
      navigate('/')
    })
    .catch((error) => {
      elert(error)
    });
  };

  return (
    <>
      <div className="text-center h-24 content-center mt-4 text-4xl protest-strike-regular bg-emerald-50">
        SIGNUP
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="max-w-md mx-auto mt-16"
      >
        <div className="mb-2">
          <label
            htmlFor="email"
            className="block mx-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-medium rounded focus:ring-emerald-500 focus:border-emerald-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-emerald-500 dark:focus:border-emerald-500"
            placeholder="user@sabafabrics.com"
            required=""
          />
        </div>
        <div className="mb-2">
          <label
            htmlFor="password"
            className="block mx-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-medium rounded focus:ring-emerald-500 focus:border-emerald-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-emerald-500 dark:focus:border-emerald-500"
            required=""
          />
        </div>
        <div className="flex">
          <div className="mb-2  mx-auto">
            <label
              htmlFor="firstname"
              className="block mx-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-medium rounded focus:ring-emerald-500 focus:border-emerald-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-emerald-500 dark:focus:border-emerald-500"
              required=""
            />
          </div>
          <div className="mb-2 mx-auto">
            <label
              htmlFor="lastname"
              className="block mx-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-medium rounded focus:ring-emerald-500 focus:border-emerald-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-emerald-500 dark:focus:border-emerald-500"
              required=""
            />
          </div>
        </div>
        <div className="mb-8">
          <label
            htmlFor="phonenumber"
            className="block mx-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Phone Number
          </label>
          <input
            type="tel"
            id="phoneNumber"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-medium rounded focus:ring-emerald-500 focus:border-emerald-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-emerald-500 dark:focus:border-emerald-500"
            placeholder="123-456-789"
            required=""
          />
        </div>
        <div>
          <Button
          text={"Signup"}
          type="submit"
          onClick={handleSignupWithEmail}
          />
          <p
            onClick={() => navigate("/signin")}
            className="my-6 cursor-pointer underline"
          >
            Already have an account? Login here
          </p>
        </div>
      </form>
    </>
  );
}

export default Signup;
