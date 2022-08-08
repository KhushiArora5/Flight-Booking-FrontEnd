//already registered
import Bar from '../../Components/Navbar/Bar';
import React,{useState} from 'react';
import axios from 'axios';

function Login() {
    const [useremail, setEmail] = useState();
    const [password, setPass] = useState();
    async function handleLogin() {
        const user = {
            useremail,
            password,
          };
          await axios.post("https://flightbooking-ka.herokuapp.com/api/login", user).then(function (response) {
          if(response.data.token)
          {
            localStorage.setItem("token",response.data.token);
            localStorage.setItem("userid",response.data.userid);
            window.location.href = "/flight";
          }
      }).catch(function(error){
        console.log(error);
      })
    }
  return (
    <div>
    <Bar />
    <div className="text-center mt-20">
      <div className="flex items-center justify-center">
         <svg fill="none" viewBox="0 0 24 24" className="w-12 h-12 text-blue-500" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
         </svg>
      </div>
      <h2 className="text-4xl tracking-tight">
         Log in into your account
      </h2>
      <span className="text-sm">or <a href="/signup" className="text-blue-500"> 
         register a new account
      </a>
      </span>
    </div>
    <div className="flex justify-center my-2 mx-4 md:mx-0">
    <div className="w-full max-w-xl bg-white rounded-lg shadow-md p-6">
        <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-full px-3 mb-6">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for='Password'>Email address</label>
                <input onChange={(e) =>{
                    setEmail(e.target.value);
                }} className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none" type='email'  required />
            </div>
            <div className="w-full md:w-full px-3 mb-6">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for='Password'>Password</label>
                <input onChange={(e) =>{
                    setPass(e.target.value);
                }} className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none" type='password' required />
            </div>
            <div className="w-full flex items-center justify-between px-3 mb-3 ">
                <label for="remember" className="flex items-center w-1/2">
                <input type="checkbox" name="" id="" className="mr-1 bg-white shadow" />
                <span className="text-sm text-gray-700 pt-1">Remember Me</span>
                </label>
                <div className="w-1/2 text-right">
                <a href="#" className="text-blue-500 text-sm tracking-tight">Forget your password?</a>
                </div>
            </div>
            <div className="w-full md:w-full px-3">
                <button onClick={ ()=>{
                    handleLogin();
                }} className="appearance-none block w-full bg-yellow-400 text-gray-100 font-bold border border-gray-200 rounded-lg py-3 px-3 leading-tight hover:bg-yellow-500 focus:outline-none focus:border-gray-500">Sign in</button>
            </div>
        </div>
    </div>
    </div>
    </div>
);
}

export default Login;
