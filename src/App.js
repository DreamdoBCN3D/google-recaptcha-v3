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
      const resp2 = await axios.get('http://dreamdo-dev.eu-west-1.elasticbeanstalk.com/api/categories?lan=es&active=1&menu=1&root=1&include_childs=1')
      console.log('resp2 :>> ', resp2);
      setValueCaptcha(resp)
      console.log('resp :>> ', resp);
    } catch (error) {
      console.log('error :>> ', error);
      
    }
  }

  return (
    <div className="App">
      <button onClick={() => onSubmit()}>
          Submit (with onChange prop)
        </button>
        {valueCaptcha && (
          <div>{valueCaptcha}</div>
        )}
    </div>
  );
}

export default App;
