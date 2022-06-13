import { useState } from 'react'
const useCheckedInputs = () => {
  const [values, setValues] = useState([
    { webpage: 500, isChecked: true, quantity: 1, quantityLanguage: 2 },
    { project: 0, isChecked: false },
    { compaign: 0, isChecked: false },
  ])
  const handleInputChecked = ({ target: { id, name, value } }) => {
    const idInput = +id.slice(id.indexOf('_') + 1)

    setValues(prev =>
      prev.map((item, index) =>
        index === idInput
          ? {
              ...item,
              isChecked: !item.isChecked,
              [name]: !item.isChecked ? +value : 0,
            }
          : {
              ...item,
              isChecked: item.isChecked,
            }
      )
    )
  }
  const handleQuantity = ({ target: { name, value } }) => {
    value = value.replace(/\D/g, '')

    const evalue = item =>
      value <= 0 ? value = 1 : value > 0 ? +value : item

    setValues(prev =>
      prev.map((item, index) =>
        index === 0
          ? {
              ...item,
              quantity:
                name === 'pages' ? evalue(item.quantity) : item.quantity,
              quantityLanguage:
                name === 'languages'
                  ? evalue(item.quantityLanguage)
                  : item.quantityLanguage,
            }
          : {
              ...item,
            }
      )
    )
  }
  return {values, setValues, handleInputChecked, handleQuantity}
}
export default useCheckedInputs
