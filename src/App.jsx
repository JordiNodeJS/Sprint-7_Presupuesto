import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [values, setValues] = useState([
    { webpage: 500, isChecked: true },
    { project: 300, isChecked: true },
    { compaign: 0, isChecked: false },
  ])
  const [total, setTotal] = useState(0)

  const handleInputChecked = ({ target }) => {
    const id = +target.id.slice(target.id.indexOf('_') + 1)

    setValues(
      values.map((item, index) =>
        index === id
          ? {
              ...item,
              isChecked: !item.isChecked,
              [target.name]: !item.isChecked ? +target.value : 0,
            }
          : {
              ...item,
              isChecked: item.isChecked,
            }
      )
    )
  }

  useEffect(() => {
    console.log('useEffect funciona')
    values.forEach(
      item =>
        setTotal(
          _ => item.webpage + item.project + item.compaign
        )
    )
    console.log('total', total)
  }, [values])

  return (
    <div className='App'>
      <h1 className='text-center'>Budgets</h1>
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
