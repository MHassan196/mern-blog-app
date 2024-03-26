import {Alert, Label, TextInput, Button, Spinner } from "flowbite-react";
import React, { useState } from "react";
import { Link , useNavigate } from "react-router-dom";

function SignIn() {

    const [formData, setFormData] = useState({});
    const [errorMsg, setErrorMsg] = useState(null);
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({...formData, [e.target.id] : e.target.value.trim()});
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(!formData.email || !formData.password){
            return setErrorMsg("Please fill out all the fields");
        }

        try {
            setLoading(true);
            setErrorMsg(null);

            const res = await fetch('/api/auth/signin', {
                method: "POST",
                headers: {'Content-Type' : 'application/json'},
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if(data.success === false){
                setLoading(false);
                return setErrorMsg(data.message);
                
            }

            setLoading(false);
            if(res.ok){
                navigate('/')
            }
            
        } catch (error) {
            setErrorMsg(error);
            setLoading(false);
        }
    }


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
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                
                <div>
                    <Label value="Your Email" /> 
                    <TextInput type="email" placeholder="Email" id="email" onChange={handleChange} />
                </div>
                <div>
                    <Label value="Your Password" /> 
                    <TextInput type="password" placeholder="Password" id="password" onChange={handleChange} />
                </div>
                <Button gradientDuoTone='purpleToPink' type="submit" disabled={loading}>
                    {
                        loading ? (
                            <>
                                <Spinner size='sm' />
                                <span className="pl-3">Loading...</span>
                            </>
                        ) : (
                            'Sign In'
                        )
                    }
                </Button>

            </form>
            <div className="flex gap-2 text-sm mt-5">
                <span>Don't have an account?</span>
                <Link to='/signup' className="text-blue-500">
                    Sign Up 
                </Link>
            </div>
            {
                errorMsg && (
                    <Alert className="mt-5" color='failure'>
                        {errorMsg}
                    </Alert>
                )
            }
        </div>
      </div>
    </div>
  );
}

export default SignIn;
