import React, { useState } from 'react'
import { FaUser } from "react-icons/fa";
import { IoIosLock } from "react-icons/io";
import {Link, useNavigate} from 'react-router-dom'
const Login = () => {
    const [email, setemail] = useState()
    const [password, setpassword] = useState()
    const [spinner, setspinner] = useState('hidden')
    const [message, setMessage] = useState("");
    const [opac, setopac] = useState('')
    let navigate=useNavigate('')

    const handlesubmit=async (e)=>{
e.preventDefault();

const data={email,password}
if(email=='' || password==''){
    setMessage('*Every input must be filled')
}
else{
    setspinner('')
    setopac('opacity-50')
const res=await fetch('https://quantum-qs9d.onrender.com/login', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body:JSON.stringify(data),
              })
              let response=await res.json();
              setspinner('hidden')
              setopac('')
              console.log(response)
if(response.error){
    setMessage('*Invalid credentials')
}
else{
   localStorage.setItem('token',response.token)
navigate('/data')
} 
} 
    }
  return (
    <>
            <img className={`absolute left-[48%] z-10 top-[50%] h-10 w-10 ${spinner}`} src="/spinner.gif" alt="" />

    <div className=' bg-gradient-to-b from-[#007785] via-[#009CA0] to-[#00C2BC] h-screen flex justify-center items-center '>
    
    <div className={` w-[27%]    bg-[#1D2C4F]  p-8 rounded-xl  shadow shadow-slate-300 ${opac} xsm:w-[90%] `}>
   
        <div className='w-[60%] bg-[#00F5E1] p-4 text-center mx-auto relative -top-10 text-[#34539b] '>SIGN IN</div>
        <div className='flex justify-center  w-full relative -top-3 h-24 '><img className=''  src='/user.png'/></div>
        
        <div className="my-4 px-4 " > 
            <div className="flex flex-col space-y-4">
                <label htmlFor="email" className='flex items-center'>
                    <div className='absolute left-13 h-6 text-md   flex items-center px-2 border-r-[2px] border-r-gray-400 text-gray-400'> <FaUser /> </div>                    
                    <input  required={true} value={email}  onChange={(e) => { setemail(e.target.value); }} id="email" name="email" type="email" className="text-gray-400 w-full pl-11 py-2 bg-gray-500 border  rounded-lg  focus:outline-none focus:border-slate-500 hover:shadow" placeholder="username"/>
                </label>
                <label htmlFor="password" className='flex items-center'>
                    <div className='absolute left-13 h-6 text-lg  flex items-center px-[7px] border-r-[2px] border-r-gray-400 text-gray-400'> <IoIosLock /> </div>                    
                    <input required={true} value={password}  onChange={(e) => { setpassword(e.target.value); }} id="password" name="password" type='password' className="w-full text-gray-400 bg-gray-500 pl-11  py-2 border border-slate-200 rounded-lg  focus:outline-none focus:border-slate-500 hover:shadow" placeholder="password"/>
                </label>
                <div className="flex flex-row items-center justify-between text-sm text-[#00F5E1] ">
                    <div>
                        <label htmlFor="remember" className="text-[#00F5E1] flex items-center">
                            <input type="checkbox" id="remember" className="text-[#00F5E1] bg-transparent w-4 h-4 mr-1 border-slate-200 " />
                            Remember me
                        </label>
                    </div>
                
                    <div>
                        <Link to='/registeration' className=" ">REGISTER</Link>
                    </div>
                </div>
                {/* <img className='absolute left-[45%] h-10 w-10' src="/spinner.gif" alt="" /> */}

              <button onClick={handlesubmit} className="w-full py-3   bg-[#00F5E1] text-[#34539b] rounded-lg text-md hover:shadow inline-flex  items-center justify-center">
  LOGIN      
                </button>
                <div className={`text-center text-red-500 `}>{message}</div>

            </div>
        </div>
    </div>
    </div>
</> 
)
}

export default Login