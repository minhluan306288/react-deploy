import React from 'react'
import { useState, useEffect } from 'react'

function Form({student,labelSubmit,onSaveForm}) {
   // const [firstName, setFirstName] = useState(student?.firstName || '')
	// const [lastName, setLastName] = useState(student?.lastName || '')
	// const [email, setEmail] = useState(student?.email || '')

   console.log('student: ',student);

   const [formData, setFormData] = useState({
      firstName: student?.firstName || '',
      lastName: student?.lastName || '',
      email: student?.email || '',
   })

   useEffect(() => {
      setFormData({
         firstName: student?.firstName || '',
         lastName: student?.lastName || '',
         email: student?.email || '',
      })
   },[student])

	const onSubmitForm = (event) => {
		event.preventDefault()

		onSaveForm(formData)

		setFormData({
			firstName: '',
			lastName: '',
			email: '',
		})
	}
   return (
      <form onSubmit={onSubmitForm}>

         <table >
            <tbody>
               <tr>
                  <td><label>First name:</label></td>
                  <td><input type="text" value={formData.firstName} onChange={event => setFormData({...formData, firstName: event.target.value})} /></td>
               </tr>

               <tr>
                  <td><label>Last name:</label></td>
                  <td><input type="text" value={formData.lastName} onChange={event => setFormData({...formData, lastName: event.target.value})} /></td>
               </tr>

               <tr>
                  <td><label>Email:</label></td>
                  <td><input type="text" value={formData.email} onChange={event => setFormData({...formData, email: event.target.value})} /></td>
               </tr>

               <tr>
                  <td><label></label></td>
                  <td><input type="submit" value={labelSubmit ?? 'Save'} className="Save " /></td>
               </tr>

            </tbody>
         </table>
      </form>
   )
}

export default Form