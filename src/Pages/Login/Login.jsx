import React, { useContext } from "react";
import Container from "../../Components/Shared/Container";
import image from "../../assets/login/login.svg";
import { FaFacebookF, FaLinkedinIn, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

function Login() {
  const {signIn, signInGoogle} = useContext(AuthContext);
  const loginHandler = (event) =>{
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password)
    .then(result=>{
      const user = result.user;
      console.log(user);
    })
    .catch(error=>{
      console.log(error);
    })
    form.reset('');
  }

  const googleHandle = () =>{
    signInGoogle()
    .then(result=>{
      const user = result.user;
      console.log(user);
    })
    .catch(error=>{
      console.log(error);
    })
  }

  return (
    <div className="my-10 font-inter">
      <Container>
        <div className="lg:flex gap-10 items-center justify-between">
          <div className="lg:w-1/2 w-full">
            <img className="w-3/4" src={image} alt="" />
          </div>
          <div className="lg:w-1/2 w-full border shadow-lg rounded-lg p-8">
            <h2 className="text-center text-[26px] font-semibold pb-10">
              Login
            </h2>
            <form onSubmit={loginHandler} action="">
              <div className="mb-3">
                <label
                  className="block text-[16px] font-light pb-1"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter Your Email"
                  className="block w-full py-2 outline-0 pl-2 border rounded-md"
                />
              </div>
              <div className="mb-5">
                <label
                  className="block text-[16px] font-light pb-1"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter Your Password"
                  className="block w-full py-2 outline-0 pl-2 border rounded-md"
                />
              </div>
              <div className="mb-3">
                <input
                  className="w-full bg-[#FF3811] py-2 rounded-lg text-white"
                  type="submit"
                  value="Login"
                />
              </div>
            </form>
            <div>
              <hr className="my-7" />
              <div className="text-center">
                <p className="relative top-[-40px] bg-white inline-block w-[160px] h-8">
                  Or Sign Up with
                </p>
                <div className="flex items-center justify-center space-x-6">
                  <span className="text-blue-600 w-[40px] h-[40px] rounded-full cursor-pointer bg-gray-100 leading-10">
                    <FaFacebookF className="inline-block" />
                  </span>
                  <span className="text-blue-600 w-[40px] h-[40px] rounded-full cursor-pointer bg-gray-100 leading-10">
                    <FaLinkedinIn className="inline-block" />
                  </span>
                  <span onClick={googleHandle} className="text-blue-600 w-[40px] h-[40px] cursor-pointer rounded-full bg-gray-100 leading-10">
                    <FaGoogle className="inline-block" />
                  </span>
                </div>
                <p className="py-10">
                  You Have no account?
                  <Link to="/signUp" className="text-[#FF3811]">
                    Sign Up
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Login;
