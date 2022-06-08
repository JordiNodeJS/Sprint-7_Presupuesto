import { useState } from 'react'
import './App.css'

function App() {
  const [values, setValues] = useState({isChecked: false })

  const handleInputChecked = ({ target }) =>
    setValues({
      [target.name]: target.value,
      isChecked: !values.isChecked,
    })

  return (
    <div className='App'>
      <h1>hi, bitches!</h1>
      <div className='align'>
        <p>What d'you wanna do?</p>
        <p className='form-control text-start'>
          <input
            className='form-check-input me-2'
            onChange={handleInputChecked}
            name='webpage'
            type='checkbox'
            checked={values.isChecked}
            value='500'
          />
          A web page: $500 bucks
        </p>
        <p className='form-control text-start'>
          <input
            className='form-check-input me-2'
            onClick={handleInputChecked}
            name='project'
            type='checkbox'
            checked={values.isChecked}
            value='300'
          />
          A consulting project SEO: $300 bucks
        </p>
        <p className='form-control text-start'>
          <input
            className='form-check-input me-2'
            onClick={handleInputChecked}
            name='compaign'
            type='checkbox'
            checked={values.isChecked}
            value='200'
          />
          A Goolge Ads compaign: $200 bucks
        </p>
        <p
          onClick={handleInputChecked}
          className='form-control text-start bg-info'
        >
          Prices: $1,000 bucks!!
        </p>
        <p> checkbox is {values.isChecked ? 'checked' : 'unchecked'}.</p>
      </div>
    </div>
  )
}

export default App
