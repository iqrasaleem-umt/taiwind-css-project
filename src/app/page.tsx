"use client"
import Image from "next/image";
import React,{useState} from "react";

export default function Home() {
  const[name,setUsername]=useState("")
  const[password,setPassword]=useState("")
  const handleusername=(event: React.ChangeEvent<HTMLInputElement>)=>{ 
 setUsername(event.target.value);
  }
  const handlepassword=(event: React.ChangeEvent<HTMLInputElement>)=>{ 
    setPassword(event.target.value);
     }
  return (
  <div className="bg-slate-900 grid place-content-center h-screen border-sky-500"> 
    <h1 className="text-sky-500 text-4xl">  Login Form</h1>
    <div className="  bg-white mt-2 rounded-sm shadow-lg flex items-center  space-x-4"> 
    <div>
     <Image src="https://previews.123rf.com/images/vitechek/vitechek1912/vitechek191200200/137940092-user-login-or-authenticate-icon-human-person-symbol-vector.jpg" alt="" width={150} height={100}/>
     </div>
    <div className="text-xl font-medium text-sky-500 ">
      username and password
      <p className="text-sky-500 text-base">are mandatory</p>
      </div>

    </div>
    <input className="text-black font-black bg-sky-500 mt-2 p-3 rounded-xl hover:bg-white  hover:text-black" type="input" value={name} placeholder="user name" onChange={handleusername}/>
    <input className= "bg-sky-500 text-black font-black mt-2 p-3 rounded-xl hover:bg-white hover:text-black" type="password" value={password} placeholder="password" onChange={handlepassword}/>
    <button className=" text-black rounded-lg p-1 font-bold border bg-sky-500 mt-3">Login</button>
   </div>

  );
}
