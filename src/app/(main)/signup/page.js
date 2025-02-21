"use client";
import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import rest from '@/app/services/rest';
import { HttpMethod, paths } from '@/app/constant/urlResource';

export default function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [confirmPwd, setConfirmPwd] = useState("");

  const [error, setError] = useState({});

  const validateForm = () => {
    let errors = {};

    // Check for empty fields
    if (!firstName) errors.firstName = "First Name is required";
    if (!lastName) errors.lastName = "Last Name is required";
    if (!email) errors.email = "Email Address is required";
    if (!confirmEmail) errors.confirmEmail = "Confirm Email Address is required";
    if (!pwd) errors.pwd = "Password is required";
    if (!confirmPwd) errors.confirmPwd = "Confirm Password is required";

    // Check for email match
    if (email && confirmEmail && email !== confirmEmail) {
      errors.confirmEmail = "Email addresses must match";
    }

    // Check for password match
    if (pwd && confirmPwd && pwd !== confirmPwd) {
      errors.confirmPwd = "Passwords must match";
    }

    setError(errors);

    return Object.keys(errors).length === 0; // Valid if no errors
  };

  // const onSignUp = async () => {
  //   if (validateForm()) {
  //     console.info("Form submitted successfully");
  //     const data = await rest(HttpMethod.POST, paths.SIGN_UP, { firstName, lastName, email, password: pwd });
  //     console.log(data,":::::::");
  //   } else {
  //     console.error("Form validation failed", error);
  //   }
  // }
  const onSignUp = async () => {
    if (validateForm()) {
      console.info("Form submitted successfully");
      const data = await rest(HttpMethod.POST, paths.SIGN_UP, { firstName, lastName, email, password: pwd });
      if (data.status === 400) {
        toast.error(data.error);
      } else if (data.status === 500) {
        toast.error('Server Internal Error');
      } else {
        window.location.href = '/login';
      }
    } else {
      console.error("Form validation failed", error);
    }
  }

  const getInputClass = (field) => `w-full p-3 border rounded ${error[field] ? 'border-red-500' : 'border-gray-300'}`;

  return (
    <div className="flex justify-center items-center min-h-screen p-4 md:p-10">
      <ToastContainer />
      <div className="bg-white rounded-lg p-6 md:p-10 max-w-6xl mx-4 w-full flex flex-col md:flex-row space-y-10 md:space-y-0 md:space-x-12 lg:space-x-24">
        <div className="flex flex-col md:w-1/2 lg:w-2/3 space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center">My Rolly Rich Account</h2>
          <p className="text-center">Create an account and discover all the benefits reserved for our registered users.</p>
          <button className="flex items-center justify-center bg-gray-100 p-3 rounded border border-gray-300 hover:bg-gray-200">
            <img src="https://img.icons8.com/color/48/000000/google-logo.png" alt="Google" className="w-6 h-6 mr-2" />
            CONTINUE WITH GOOGLE
          </button>
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
          <h2 className="text-3xl md:text-4xl font-bold text-center">Sign Up with your email address</h2>
          <p className="text-center">Sign up using your email and password to create your account.</p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 mb-2">First Name</label>
              <input
                value={firstName}
                onChange={(e) => { setFirstName(e.target.value); setError((prev) => ({ ...prev, firstName: "" })); }}
                type="text"
                className={getInputClass("firstName")}
                required
              />
              {error.firstName && <p className="text-red-500 text-xs">{error.firstName}</p>}
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Last Name</label>
              <input
                value={lastName}
                onChange={(e) => { setLastName(e.target.value); setError((prev) => ({ ...prev, lastName: "" })); }}
                type="text"
                className={getInputClass("lastName")}
                required
              />
              {error.lastName && <p className="text-red-500 text-xs">{error.lastName}</p>}
            </div>

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
              <label className="block text-gray-700 mb-2">Confirm Email Address</label>
              <input
                value={confirmEmail}
                onChange={(e) => { setConfirmEmail(e.target.value); setError((prev) => ({ ...prev, confirmEmail: "" })); }}
                type="email"
                className={getInputClass("confirmEmail")}
                required
              />
              {error.confirmEmail && <p className="text-red-500 text-xs">{error.confirmEmail}</p>}
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

            <div>
              <label className="block text-gray-700 mb-2">Confirm Password</label>
              <input
                value={confirmPwd}
                onChange={(e) => { setConfirmPwd(e.target.value); setError((prev) => ({ ...prev, confirmPwd: "" })); }}
                type="password"
                className={getInputClass("confirmPwd")}
                required
              />
              {error.confirmPwd && <p className="text-red-500 text-xs">{error.confirmPwd}</p>}
            </div>
          </div>
          <button onClick={() => onSignUp()} className="w-full bg-primary text-white p-3 rounded hover:bg-third">SIGN UP</button>
          <p className="text-xs text-gray-500 text-center mt-6">
            By creating an account, you agree with Rolly Rich <a href="#" className="underline">Terms and Conditions</a> and <a href="#" className="underline">Privacy Policy</a>.
          </p>
        </div>

      </div>
    </div>
  );
}
