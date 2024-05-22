import React from 'react';

function Login() {
  return (
    <div className="flex justify-center items-center min-h-screen p-4 md:p-10">
      <div className="bg-white rounded-lg p-6 md:p-10 max-w-6xl mx-4 w-full flex flex-col md:flex-row space-y-10 md:space-y-0 md:space-x-12 lg:space-x-24">
        
        {/* Left Section */}
        <div className="flex flex-col md:w-1/2 lg:w-2/3 space-y-8">
          <h2 className="text-2xl md:text-3xl font-bold text-center">My Shethh Account</h2>
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

        {/* Right Section */}
        <div className="flex flex-col md:w-1/2 lg:w-2/3 space-y-8">
          <h2 className="text-2xl md:text-3xl font-bold text-center">Continue with your email address</h2>
          <p className="text-center">Sign in using your email and password to access your account.</p>
          <div>
            <label className="block text-gray-700 mb-2">Email</label>
            <input type="email" className="w-full p-3 border border-gray-300 rounded" required />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Password</label>
            <input type="password" className="w-full p-3 border border-gray-300 rounded" required />
          </div>
          <button className="w-full bg-primary text-white p-3 rounded hover:bg-third">CONTINUE</button>
          <p className="text-xs text-gray-500 text-center mt-6">
            By creating an account or logging in, you agree with {`{This Site's}`} <a href="#" className="underline">Terms and Conditions</a> and <a href="#" className="underline">Privacy Policy</a>.
          </p>
        </div>
        
      </div>
    </div>
  );
}

export default Login;
