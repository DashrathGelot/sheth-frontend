'use client'
import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { signIn } from 'next-auth/react';
import rest from '@/app/services/rest';
import Link from 'next/link';
import { HttpMethod, paths } from '@/app/constant/urlResource';

export default function Login() {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");

  const [error, setError] = useState({});

  const validateForm = () => {
    let errors = {};

    // Check for empty fields
    if (!email) errors.email = "Email Address is required";
    if (!pwd) errors.pwd = "Password is required";

    setError(errors);

    return Object.keys(errors).length === 0; // Valid if no errors
  };
  const onSignin = async () => {
    if (validateForm()) {
      console.info("Form submitted successfully");
      const data = await rest(HttpMethod.POST, paths.LOGIN, { email, password: pwd });
      console.log(data.status, ":::::::");
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', data.userName);
      if (data && data.userName) {
        window.location.href = '/';
      } else if (data.status === 400) {
        toast.error('MSG From BACK-END');
      } else if (data.status === 500) {
        toast.error('Server Internal Error');
      }
    } else {
      console.error("Form validation failed", error);
    }
  }
  const getInputClass = (field) => `w-full p-3 border rounded ${error[field] ? 'border-red-500' : 'border-gray-300'}`;
  return (
    <div className="flex justify-center items-center min-h-screen p-4 md:p-10">
      <div className="bg-white rounded-lg p-6 md:p-10 max-w-6xl mx-4 w-full flex flex-col md:flex-row space-y-10 md:space-y-0 md:space-x-12 lg:space-x-24">
        <div className="flex flex-col md:w-1/2 lg:w-2/3 space-y-8">
          <h2 className="text-2xl md:text-3xl font-bold text-center">My Shethh Account</h2>
          <p className="text-center">Create an account and discover all the benefits reserved for our registered users.</p>
          <button onClick={() => signIn('google')} className="flex items-center justify-center bg-gray-100 p-3 rounded border border-gray-300 hover:bg-gray-200">
            <img src="https://img.icons8.com/color/48/000000/google-logo.png" alt="Google" className="w-6 h-6 mr-2" />
            CONTINUE WITH GOOGLE
          </button>
          <Link href="/signup" className="w-full bg-primary text-white p-3 rounded hover:bg-third text-center">Create Shethh Account</Link>
          <div className="flex justify-around mt-8">
            <div className="flex flex-col items-center space-y-2 w-1/3">
              <img src="https://img.icons8.com/ios-filled/50/000000/lock.png" alt="Secure" className="w-6 h-6" />
              <p className="text-center text-sm">Securely save your payment information and addresses to speed up purchases</p>
            </div>
            <div className="flex flex-col items-center space-y-2 w-1/3">
              <img src="https://img.icons8.com/ios-filled/50/000000/lock.png" alt="Secure" className="w-6 h-6" />
              <p className="text-center text-sm">Securely save your payment information and addresses to speed up purchases</p>
            </div>
            <div className="flex flex-col items-center space-y-2 w-1/3">
              <img src="https://img.icons8.com/ios-filled/50/000000/lock.png" alt="Secure" className="w-6 h-6" />
              <p className="text-center text-sm">Securely save your payment information and addresses to speed up purchases</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:w-1/2 lg:w-2/3 space-y-8">
          <h2 className="text-2xl md:text-3xl font-bold text-center">Continue with your email address</h2>
          <p className="text-center">Sign in using your email and password to access your account.</p>
          {/* <div>
            <label className="block text-gray-700 mb-2">Email</label>
            <input type="email" className="w-full p-3 border border-gray-300 rounded" required />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Password</label>
            <input type="password" className="w-full p-3 border border-gray-300 rounded" required />
          </div> */}
          <div>
            <label className="block text-gray-700 mb-2">Email Address</label>
            <input
              value={email}
              onChange={(e) => { setEmail(e.target.value); setError((prev) => ({ ...prev, email: "" })); }}
              type="email"
              className={getInputClass("email")}
              required
            />
            {error.email && <p className="text-red-500 text-xs">{error.email}</p>}
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Password</label>
            <input
              value={pwd}
              onChange={(e) => { setPwd(e.target.value); setError((prev) => ({ ...prev, pwd: "" })); }}
              type="password"
              className={getInputClass("pwd")}
              required
            />
            {error.pwd && <p className="text-red-500 text-xs">{error.pwd}</p>}
          </div>
          <button onClick={() => onSignin()} className="w-full bg-primary text-white p-3 rounded hover:bg-third">CONTINUE</button>
          <p className="text-xs text-gray-500 text-center mt-6">
            By creating an account or logging in, you agree with {`{This Site's}`} <a href="#" className="underline">Terms and Conditions</a> and <a href="#" className="underline">Privacy Policy</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
