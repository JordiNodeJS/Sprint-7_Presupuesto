const NumbersWebpagesLanguages = ({values, handleQuantity}) => {
  return (
    <div className='bg-light p-2 mb-4 rounded'>
      <h6>Number of Web Pages and Languages</h6>
      <div className='container-fluid text-start'>
        <div className='form-group row'>
          <label className='form-label fs-6' htmlFor='pages'>
            Pages
            <input
              id='pages'
              name='pages'
              className='form-control mt-1 text-info'
              type='text'
              value={values[0].quantity}
              onClick={e => e.target.select()}
              onChange={handleQuantity}
            />
          </label>
        </div>
        <div className='form-group row'>
          <label className='form-label fs-6' htmlFor='languages'>
            Languages
            <input
              id='languages'
              name='languages'
              className='form-control mt-1 text-info'
              type='text'
              value={values[0].quantityLanguage}
              onClick={event => event.target.select()}
              onChange={handleQuantity}
            />
          </label>
        </div>
      </div>
    </div>
  )
}

export default NumbersWebpagesLanguages
