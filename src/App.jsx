import { useEffect, useState } from 'react'
import NumbersWebpagesLanguages  from './components/NumbersWebpagesLanguages'
import useCheckedInputs from './hooks/useCheckedInputs'
import './App.css'

function App() {
  const [values, handleInputChecked, handleQuantity] = useCheckedInputs()
 
  const [total, setTotal] = useState(0)

  useEffect(() => {
    const total = values.reduce((acc, item) => {
      let sum

      item.quantity && item.isChecked
        ? item.quantityLanguage === 1
          ? sum = item.quantity * 30
          : sum = item.quantity * item.quantityLanguage * 30
        : sum = 0

      return acc + Object.values(item)[0] + sum
    }, 0)
    setTotal(total)
    console.log(values, total)
  }, [values])

  return (
    <div className='App'>
      <h1 className='text-center'>Here there are your awsome Budgets</h1>
      <div className='align'>
        <p>What d'you wanna do?</p>
        <p className='form-control text-start'>
          <input
            id='budget_0'
            className='form-check-input me-2'
            onChange={handleInputChecked}
            name='webpage'
            type='checkbox'
            checked={values[0].isChecked}
            value='500'
          />
          A web page: $500 bucks
        </p>
        {values[0].isChecked && <NumbersWebpagesLanguages values={values} handleQuantity={ handleQuantity } />}
        <p className='form-control text-start'>
          <input
            id='budget_1'
            className='form-check-input me-2'
            onChange={handleInputChecked}
            name='project'
            type='checkbox'
            checked={values[1].isChecked}
            value='300'
          />
          A consulting project SEO: $300 bucks
        </p>
        <p className='form-control text-start'>
          <input
            id='budget_2'
            className='form-check-input me-2'
            onChange={handleInputChecked}
            name='compaign'
            type='checkbox'
            checked={values[2].isChecked}
            value='200'
          />
          A Goolge Ads compaign: $200 bucks
        </p>
        <p
          onChange={handleInputChecked}
          className='form-control text-start bg-info text-white'
        >
          Prices: ${total} bucks!!
        </p>
        <p>
          checkbox: {values.webpage} is {values[0].webpage}{' '}
          {values[0].isChecked ? 'checked' : 'unchecked'}.
        </p>
        <p>
          checkbox: {values.webpage} is {values[1].project}{' '}
          {values[1].isChecked ? 'checked' : 'unchecked'}.
        </p>
        <p>
          checkbox: {values.webpage} is {values[2].compaign}{' '}
          {values[2].isChecked ? 'checked' : 'unchecked'}.
        </p>
        <div className='container-fluid bg-success text-black text-start p-2'>
          <h6 className='mb-4'>testing outputs</h6>
          {values.map((item, index) => (
            <pre className='fs-6' key={index}>
              <code>
                {index} {JSON.stringify(item)}
              </code>
            </pre>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
