
const FormRow = ({type,name,value,handleChange,labelText}) => {
  return (
    <div className='form-row'>
          <label htmlFor={name} className='form-label' >{labelText || name}  </label>
            <input name={name} onChange={handleChange} type={type} className='form-input' value={value}/>
        </div>
  )
}

export default FormRow
