const NumbersWebpagesLanguages = ({values, setValues, handleQuantity}) => {

  const handleClickPlus = (children, masterButton) => {

    setValues( prev =>
      prev.map((item, index) =>
        index === 0
          ? {
              ...item,
              quantity: ( masterButton == 'pagesButton' && children == '+' ) ? item.quantity + 1 : ( masterButton == 'pagesButton' && children == '-'  && item.quantity > 0) ? item.quantity - 1 : item.quantity,
              quantityLanguage: ( masterButton == 'languagesButton' && children == '+' ) ? item.quantityLanguage + 1 : (masterButton == 'languagesButton' && children == '-' && item.quantityLanguage > 0) ? item.quantityLanguage - 1 : item.quantityLanguage,
            }
          : {
              ...item,
              isChecked: item.isChecked, 
            }
      )
    )
    
  }

  const Button = ({ children, onClick, masterButton }) => (
    <button className="btn btn-success ms-3"
    onClick={ _ => onClick(children, masterButton)}>{children}</button>
 
  )


  return (
    <div className='bg-light p-2 mb-4 rounded'>
      <h6>Number of Web Pages and Languages</h6>
      <div className='container-fluid text-start'>
        <div className='form-group row'>
          <label className='form-label fs-6' htmlFor='pages'>
            <Button masterButton='pagesButton' onClick={handleClickPlus}>+</Button>
            <input
              id='pages'
              name='pages'
              className='ms-2 mt-1 me-2 text-info'
              type='text'
              value={values[0].quantity}
              onClick={e => e.target.select()}
              onChange={handleClickPlus}
              />
           <Button masterButton='pagesButton' onClick={handleClickPlus}>-</Button>
              Pages

          </label>
        </div>
        <div className='form-group row'>
          <label className='form-label fs-6' htmlFor='languages'>
          <Button masterButton='languagesButton' onClick={handleClickPlus}>+</Button>
            <input
              id='languages'
              name='languages'
              className='ms-2 mt-1 me-2 text-info'
              type='text'
              value={values[0].quantityLanguage}
              onClick={event => event.target.select()}
              onChange={handleQuantity}
              />
           <Button masterButton='languagesButton' onClick={handleClickPlus}>-</Button>
              Languages


          </label>
        </div>
      </div>
    </div>
  )
}

export default NumbersWebpagesLanguages
