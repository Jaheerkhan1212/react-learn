import { useState } from 'react'
import './App.css'
import { Inputbox } from './components'
import useCurrencyInfo from './hooks/useCurrencyinfo'
function App() {

  const [amount,setAmount] = useState(0)
  const[from,setFrom]=useState("usd");
  const[to,setTo]=useState("inr");
  const[convertedAmount,setConvertedAmount]=useState(0)
  const currencyInfo=useCurrencyInfo(from);
  const options=Object.keys(currencyInfo);
  const swap=()=>{
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  }
  const result=()=>{setConvertedAmount(amount*currencyInfo[to]);}
  return (
    <div 
    className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat '
    style={{backgroundImage:`url("https://images.pexels.com/photos/6266668/pexels-photo-6266668.jpeg?auto=compress&cs=tinysrgb&w=600")`}}>
      <div className='w-full'>
        <div className='w-full max-w-md mx-auto border border-gray-60 rounded p-5 backdrop-blur-sm bg-white/50'>
        <form
        onSubmit={(e)=>{
          e.preventDefault();
          result()
        }}>
          <div className='w-full mb-1'>
            <Inputbox label="From"
            amount={amount}
            currencyOption={options}
            onCurrencyChange={(currency)=>setAmount(amount)}
            selectCurrency={from}
            onAmountChange={(amount)=>setAmount(amount)}
            
            />
          </div>
          <div className='relative w-full h-0.5 '>
            <button
            onClick={swap}
            type='button'
            className='absolute left-1/2
            -translate-x-1/2 -translate-y-1/2 border-2 bg-blue-600 outline-none rounded-l text-white'>swap</button>
          </div>
          <div className='w-full mb-1'>
            <Inputbox label="To"
            amount={convertedAmount}
            currencyOption={options}
            onCurrencyChange={(currency)=>setTo(currency)}
            selectCurrency={to}
            amountDisable={true} 
            />
          </div>
          <button
          type='submit'
          className='w-full bg-blue-600 text-white px-4 py-3 rounded-lg'>Convert</button>
          </form></div>
      </div>
    </div>
  )
}

export default App
