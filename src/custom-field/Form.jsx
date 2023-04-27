import React, { useState } from 'react'
import PropsTypes from 'prop-types'
import InputControl from './InputControl'
Form.propTypes = {
   fields: PropsTypes.any.isRequired,
   onSubmit: PropsTypes.func.isRequired,
   layout: PropsTypes.oneOf(['vertical', 'harizontal'])
}

// const FormState = (initial) => {
//    const [state, setState] = useState(initial)
//    const onChange = (e) => setState(e.target.value)
//    return [state, onChange]
// }

function Form({ fields, onSubmit, layout, children}) {

   const [stateForm, setStateForm] = useState(fields)

   const onChange = (e, name) => {
      setStateForm({ ...fields, [name]: e.target.value })
   }

   const handleSubmitForm = () => {
      if (true) {
         onSubmit(stateForm)
      }
   }
   return (
      <form onSubmit={handleSubmitForm} className={`form-control${layout || 'veritcal'}`}>
         {children}
      </form>
   )
}

Form.Input = function (props) {
   const { name, onChange, onBlur, error, layout, ...common } = props
   return (
      <div className="form-control input-control">
         <label htmlFor={name}>{name}</label>

         <input
            {...common}
            onChange={(e) => onChange(e.target.value)}
            onBlur={onBlur}
         />

         {error &&
            <p className="error">
               {error}
            </p>
         }
      </div>
   )
}

export default Form