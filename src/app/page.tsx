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
  <div className="bg-slate-900 grid place-content-center h-screen"> 
    <h1 className="text-white text-4xl">  Login Form</h1>
    <div className="  bg-white mt-2 rounded-sm shadow-lg flex items-center  space-x-4"> 
    <div>
     <Image src="https://previews.123rf.com/images/vitechek/vitechek1912/vitechek191200200/137940092-user-login-or-authenticate-icon-human-person-symbol-vector.jpg" alt="" width={150} height={150}/>
     </div>
    <div className="text-xl font-medium text-black">
      username and password
      <p className="text-slate-500 text-base">are mandatory</p>
      </div>

    </div>
    <input className="bg-white mt-2 p-3 rounded-xl text-black hover:bg-sky-500 hover:text-black" type="input" value={name} placeholder="user name" onChange={handleusername}/>
    <input className="bg-white mt-2 p-3 rounded-xl text-black hover:bg-sky-500 hover:text-black" type="password" value={password} placeholder="password" onChange={handlepassword}/>
    
  </div>

  );
}
