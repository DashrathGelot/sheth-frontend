"use client";

import React, { useState } from 'react';
import rest from "../services/rest";
import { HttpMethod, paths } from "../constant/urlResource";

export default function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [confirmPwd, setConfirmPwd] = useState("");

  const onFieldChange = (value, key) => {
    switch (key) {
      case "firstName":
        setFirstName(value);
        break;
      case "lastName":
        setLastName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "confirmEmail":
        setConfirmEmail(value);
        break;
      case "pwd":
        setPwd(value);
        break;
      case "confirmPwd":
        setConfirmPwd(value);
        break;
      default:
        break;
    }
  }

  const onSignUp = async () => {
    console.log("called signup");
    if (firstName && lastName && email && (email === confirmEmail) && pwd && (pwd === confirmPwd)) {
      alert("called!!!");
      const data = await rest(HttpMethod.POST, paths.SIGN_UP, {firstName, lastName, email, password: pwd});
      console.log(data);
    } else {
      console.log("wrong!!");
      alert("Something wrong!!!");
    }
  }


  return (
    <div className="flex justify-center items-center min-h-screen p-4 md:p-10">
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 mb-2">First Name</label>
              <input value={firstName} onChange={(e) => onFieldChange(e.target.value, "firstName")} type="text" className="w-full p-3 border border-gray-300 rounded" required />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Last Name</label>
              <input value={lastName} onChange={(e) => onFieldChange(e.target.value, "lastName")} type="text" className="w-full p-3 border border-gray-300 rounded" required />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Email Address</label>
              <input value={email} onChange={(e) => onFieldChange(e.target.value, "email")} type="email" className="w-full p-3 border border-gray-300 rounded" required />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Confirm Email Address</label>
              <input value={confirmEmail} onChange={(e) => onFieldChange(e.target.value, "confirmEmail")} type="email" className="w-full p-3 border border-gray-300 rounded" required />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Password</label>
              <input value={pwd} onChange={(e) => onFieldChange(e.target.value, "pwd")} type="password" className="w-full p-3 border border-gray-300 rounded" required />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Confirm Password</label>
              <input value={confirmPwd} onChange={(e) => onFieldChange(e.target.value, "confirmPwd")} type="password" className="w-full p-3 border border-gray-300 rounded" required />
            </div>
          </div>
          <button onClick={() => onSignUp()}  className="w-full bg-primary text-white p-3 rounded hover:bg-third">SIGN UP</button>
          <p className="text-xs text-gray-500 text-center mt-6">
            By creating an account, you agree with Rolly Rich <a href="#" className="underline">Terms and Conditions</a> and <a href="#" className="underline">Privacy Policy</a>.
          </p>
        </div>
        
      </div>
    </div>
  );
}
