import { useState,useCallback,useEffect,useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const[charallowed,setCharallowed]=useState(false);
  const[Password,setPassword]=useState("password");
  const passwordgenerator=useCallback(()=>{
    let pass="";
    let str="ABCDEFGHUJKLMNOPQRSTUXYZ";
    if(numberAllowed)str+="0123456789";
    if(charallowed)str+="!@#$%^&*(){}";
    for(let i=0;i<length;i++){
     let char=Math.floor(Math.random()*str.length+1);
     pass+=str.charAt(char);
    }
    setPassword(pass);
  },[length,numberAllowed,charallowed,setPassword]);
  useEffect(()=>{
passwordgenerator();
  },[length,numberAllowed,charallowed,passwordgenerator])
  const passwordref=useRef(null);
  const copytext=useCallback(()=>{
    passwordref.current?.select();
    passwordref.current?.setSelectionRange(0,7);
    window.navigator.clipboard.writeText(Password);
  },[Password])
  return (
    <>
      <div className='w-full max-w-md  mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-white bg-gray-700'>
        <h1 className='text-center'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text" 
          value={Password}
          ref={passwordref}
          className='outline-none w-full py-1 px-3 text-black'
          placeholder='password' readOnly></input>
          <button className='outline-none text-white bg-blue-400 px-3 py-0.5 shrink-0'
          onClick={copytext}>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
      <input 
      type='range'
      min={6}
      max={20}
      value={length}
      className='curser-pointer'
      onChange={(e)=>{setLength(e.target.value)}}/>
      <label>Length:{length}</label>
      </div>
      <div className='flex items-center gap-x-1'>
        <input type="checkbox"
        defaultChecked={numberAllowed}
        id="numberInput"
        onChange={()=>{setNumberAllowed((prev)=>!prev);}}/>
        <label htmlFor='numberInput'>Numbers</label>
      </div>
      <div className='flex items-center gap-x-1'>
        <input type="checkbox"
        defaultChecked={charallowed}
        id="charInput"
        onChange={()=>{setCharallowed((prev)=>!prev);}}/>
        <label htmlFor='charInput'>Characters</label>
      </div>

        </div>
      </div>
    </>
  )
}

export default App
