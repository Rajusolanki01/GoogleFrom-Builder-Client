import React, { useState } from "react";
import {
  FaEye,
  FaEyeSlash,
  FaFacebookF,
  FaGoogle,
  FaLinkedinIn,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { axiosClient } from "../../utils/axiosClient";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);

  const platformURLs = {
    facebook: "https://www.facebook.com/your-facebook-page-url",
    google: "https://www.google.com",
    linkedin: "https://www.linkedin.com/home",
  };

  const togglePasswordVisibility = (e) => {
    e.preventDefault();
    setPasswordVisible(!passwordVisible);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await axiosClient.post("/auth/signup", {
        name,
        email,
        password,
      });
      console.log("Result", result);

      setName("");
      setEmail("");
      setPassword(""); //manually reset the form after create account
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center min-h-screen py-2 bg-gray-100">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-15 text-center">
        <div className="bg-white rounded-xl shadow-2xl flex w-2/3 max-w-4xl">
          <div className="w-3/5 p-5">
            <div className="text-left font-bold">
              <span className="text-green-600">Super</span>Assistant
            </div>
            <div className="py-10">
              <h2 className="text-3xl font-bold text-green-500">
                Sign up to Account
              </h2>
              <div className="border-2 w-10 border-green-500 inline-block mb-2"></div>
              <div className="flex justify-center my-2">
                {Object.keys(platformURLs).map((platform) => (
                  <a
                    key={platform?.id}
                    className="border-2 border-gray-300 rounded-full p-3 mx-1"
                    href={platformURLs[platform]}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {platform === "facebook" ? (
                      <FaFacebookF className="text-sm" />
                    ) : platform === "linkedin" ? (
                      <FaLinkedinIn className="text-sm" />
                    ) : (
                      <FaGoogle className="text-sm" />
                    )}
                  </a>
                ))}
              </div>
              <p className="text-gray-400 my-3">or use your email account</p>
              <div className="flex flex-col items-center space-y-4">
                <form
                  className="space-y-4 md:space-y-6"
                  onSubmit={handleSubmit}
                >
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 text-sm font-medium text-gray-900 dark:text-white flex"
                    >
                      Your Name
                    </label>
                    <input
                      type="name"
                      name="name"
                      id="name"
                      value={name}
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Enter Your Name"
                      required
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 text-sm font-medium text-gray-900 dark:text-white flex"
                    >
                      Your email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={email}
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="name@company.com"
                      required
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="mb-2 text-sm font-medium text-gray-900 dark:text-white flex"
                    >
                      Password
                    </label>
                    <div className="relative">
                      <input
                        value={password}
                        type={passwordVisible ? "text" : "password"}
                        name="password"
                        id="password"
                        placeholder="••••••••"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <span
                        className="absolute top-1/2 right-3 transform -translate-y-1/2"
                        onClick={togglePasswordVisibility}
                      >
                        {passwordVisible ? <FaEyeSlash /> : <FaEye />}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="terms"
                        aria-describedby="terms"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                        required
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="terms"
                        className="font-light text-gray-500 dark:text-gray-300"
                      >
                        I accept the{" "}
                        <span className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                          Terms and Conditions
                        </span>
                      </label>
                    </div>
                  </div>
                  <button className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                    Create an account
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="w-2/5 bg-green-600 text-white rounded-tr-2xl rounded-br-2xl py-56 px-10">
            <h2 className="text-3xl font-bold mb-2">Hello, Friends!</h2>
            <div className="border-2 w-10 border-white inline-block mb-2"></div>
            <p className="mb-10">
              Fill up your personal Information and start your Journey with us.
            </p>

            <p className="mb-6">Have an account?</p>
            <Link to={"/login"}>
              {" "}
              <button className="border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-green-700">
                Login
              </button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Signup;
