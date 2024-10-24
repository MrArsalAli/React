import { useNavigate } from "react-router";
import Button from "../../components/Button";
import { auth } from "../utils/firebase.js";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";

function Signin() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);

  const handleSigninWithEmail = () => {
    if (isAdmin && email === "Admin@gmail.com" && password === "adminadmin") {
      navigate("/adminpanelmain");
    } else {
      signInWithEmailAndPassword(auth, email, password)
        .then((user) => {
          console.log("SignedIn");
          navigate("/");
        })
        .catch((err) => {
          alert(err);
        });
    }
  };

  return (
    <>
      <div className="text-center h-24 content-center mt-4 text-4xl protest-strike-regular bg-emerald-50">
        SIGNIN
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="max-w-sm mx-auto w-full mt-16"
      >
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-medium rounded focus:ring-emerald-500 focus:border-emerald-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-emerald-500 dark:focus:border-emerald-500"
            placeholder="user@sabafabrics.com"
            required=""
          />
        </div>
        <div className="mb-4 w-full">
          <label
            htmlFor="password"
            className="block mx-2 text-sm text-medium font-medium text-gray-900 dark:text-white"
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
        <div className="flex mb-4">
          <label
            htmlFor="remember"
            className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            <input
              type="checkbox"
              checked={isAdmin}
              onChange={(e) => setIsAdmin(e.target.checked)}
              defaultValue=""
              className="w-4 h-4 mx-2 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
            />
            Signin As Admin
          </label>
        </div>

        <Button type="submit" onClick={handleSigninWithEmail} text={"Signin"} />
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
