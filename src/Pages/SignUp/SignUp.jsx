import React, { useContext } from 'react'
import Container from '../../Components/Shared/Container';
import image from '../../assets/login/login.svg';
import { FaFacebookF, FaLinkedinIn, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

function SignUp() {
  const {createUser, updateUserProfile, signInGoogle} = useContext(AuthContext);
  const handleUser = (event) =>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoUrl = form.photoUrl.value;
    const email = form.email.value;
    const password = form.password.value;
    createUser(email, password)
    .then(result=>{
      updateUserProfile(name, photoUrl)
      .then(result=>{
        const user = result.user;
        console.log(user);
      })
      .catch(error=>{
        console.log(error);
      })
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
    <div className='my-10 font-inter'>
      <Container>
        <div className='lg:flex gap-10 items-center justify-between'>
          <div className='lg:w-1/2 w-full'>
            <img className='w-3/4' src={image} alt="" />
          </div>
          <div className='lg:w-1/2 w-full border shadow-lg rounded-lg p-8'>
            <h2 className='text-center text-[26px] font-semibold pb-10'>Sign Up</h2>
            <form onSubmit={handleUser} action="">
              <div className='mb-3'>
                <label className='block text-[16px] font-light pb-1' htmlFor="name">Name</label>
                <input type="text" id='name' name='name' placeholder='Enter Your Name' className='block w-full py-2 outline-0 pl-2 border rounded-md' />
              </div>
              <div className='mb-3'>
                <label className='block text-[16px] font-light pb-1' htmlFor="image">Profile Image</label>
                <input type="url" id='image' name='photoUrl' placeholder='Enter Your Image' className='block w-full py-2 outline-0 pl-2 border rounded-md' />
              </div>
              <div className='mb-3'>
                <label className='block text-[16px] font-light pb-1' htmlFor="email">Email</label>
                <input type="email" id='email' name='email' placeholder='Enter Your Email' className='block w-full py-2 outline-0 pl-2 border rounded-md' />
              </div>
              <div className='mb-5'>
                <label className='block text-[16px] font-light pb-1' htmlFor="password">Password</label>
                <input type="password" id='password' name='password' placeholder='Enter Your Password' className='block w-full py-2 outline-0 pl-2 border rounded-md' />
              </div>
              <div className='mb-3'>
                <input className='w-full bg-[#FF3811] py-2 rounded-lg text-white' type="submit" value="Sign Up" />
              </div>
            </form>
            <div>
              <hr className='my-7' />
              <div className='text-center'>
                <p className='relative top-[-40px] bg-white inline-block w-[160px] h-8'>Or Sign Up with</p>
                <div className='flex items-center justify-center space-x-6'>
                  <span className='text-blue-600 w-[40px] h-[40px] rounded-full bg-gray-100 leading-10 cursor-pointer'><FaFacebookF className='inline-block' /></span>
                  <span className='text-blue-600 w-[40px] h-[40px] rounded-full bg-gray-100 leading-10 cursor-pointer'><FaLinkedinIn className='inline-block' /></span>
                  <span onClick={googleHandle} className='text-blue-600 w-[40px] h-[40px] rounded-full cursor-pointer bg-gray-100 leading-10'><FaGoogle className='inline-block' /></span>
                </div>
                <p className='py-10'>Already have an account? <Link to="/login" className='text-[#FF3811]'>Login</Link></p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default SignUp