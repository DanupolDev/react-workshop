import money from'./img/money.png'
import './App.css';
import CurrencyComponent from './components/CurrencyComponent';
import { useEffect, useState } from 'react';


function App() {
  

  const [currencyChoice,setCurrencyChoice] = useState([])
  const [fromCurrency,setFromCurrency] = useState('USD')
  const [toCurrency,setTocurrency] = useState('THB')

  const [amount,setAmount] = useState(1)
  const [exChangeRate,setExchangeRate] = useState(0)
  const [checkFromCurrency,setCheckFromCurrency] = useState(true)
  let fromAmount,toAmount

  if(checkFromCurrency){
    fromAmount = amount
    toAmount= (amount*exChangeRate).toFixed(2)
  }else{
    toAmount = amount
    fromAmount = (amount/exChangeRate).toFixed(2)
  }
  useEffect(()=>{
    const url =`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`
    fetch(url)
      .then(res=>res.json())
      .then(data=>{
        setCurrencyChoice([...Object.keys(data.rates)])
        setExchangeRate(data.rates[toCurrency])
        
      }) 
  },[fromCurrency,toCurrency])

  const amountFromCurrency=(e)=>{
    setAmount(e.target.value)
    setCheckFromCurrency(true)
  }
  
  const amountToCurrency=(e)=>{
    setAmount(e.target.value)
    setCheckFromCurrency(false)
  }

  return (
    <div>
        <img src={money} alt='logo' className='money-img'/>
        <h1>แอพแปลงสกุลเงิน (API)</h1>
        <div className='container'>
          <CurrencyComponent 
            currencyChoice={currencyChoice} 
            selectCurrency={fromCurrency}
            changeCurrency={(e)=>setFromCurrency(e.target.value)}
            amount ={fromAmount}
            onChangeAmount = {amountFromCurrency}
          />
          <div className='equal'> = </div>
          <CurrencyComponent 
            currencyChoice={currencyChoice} 
            selectCurrency={toCurrency}
            changeCurrency={(e)=>setTocurrency(e.target.value)}
            amount ={toAmount}
            onChangeAmount = {amountToCurrency}
          />
        </div>
    </div>
  );
}

export default App;
