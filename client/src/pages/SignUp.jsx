import { Label, TextInput, Button } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-6xl mx-auto flex-col md:flex-row md:items-center gap-5 md:gap-20">
        {/* left  */}
        <div className="flex-1">
          <Link to="/" className="text-4xl font-bold dark:text-white">
            <span className="px-2 py-1 bg-gradient-to-r from-teal-400 via-cyan-500 to-indigo-500 rounded-lg text-white">
              Insights
            </span>
            Blog
          </Link>
          <p className="text-sm mt-5">
            This is a demo project. You can sign up with your email and password
            or with Google.
          </p>
        </div>

        {/* right  */}
        <div className="flex-1">    
            <form className="flex flex-col gap-4">
                <div>
                    <Label value="Your Username" /> 
                    <TextInput type="text" placeholder="Username" id="username" />
                </div>
                <div>
                    <Label value="Your Email" /> 
                    <TextInput type="email" placeholder="Email" id="email" />
                </div>
                <div>
                    <Label value="Your Password" /> 
                    <TextInput type="password" placeholder="Password" id="password" />
                </div>
                <Button gradientDuoTone='purpleToPink' type="submit">
                    Sign Up
                </Button>

            </form>
            <div className="flex gap-2 text-sm mt-5">
                <span>Have an account?</span>
                <Link to='/signin' className="text-blue-500">
                    Sign In 
                </Link>
            </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
