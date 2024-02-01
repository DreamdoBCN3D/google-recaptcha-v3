import './App.css';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { useState } from 'react';
import axios from 'axios'

function App() {
  const [valueCaptcha, setValueCaptcha] = useState()
  const { executeRecaptcha } = useGoogleReCaptcha();

  const onSubmit = async () => {
    try {
      const resp = await executeRecaptcha('reset')
      setValueCaptcha(resp)
      console.log('Recaptcha :>> ', resp);
    } catch (error) {
      console.log('error :>> ', error);
      
    }
  }

  const onSubmit2 = async () => {
    try {
      const resp2 = await axios.get('https://api.dreamdo.es/_status')
      console.log('resp2 :>> ', resp2);
    } catch (error) {
      console.log('error :>> ', error);      
    }
  }

  return (
    <div className="App">
      <br/>
      <br/>
      <button onClick={() => onSubmit()}>
          Submit Recaptcha
        </button>
        {valueCaptcha && (
          <div>{valueCaptcha}</div>
        )}
      <br/>
      <br/>
      <button onClick={() => onSubmit2()}>
          TEST API
        </button>
    </div>
  );
}

export default App;
