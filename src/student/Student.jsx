import React from 'react'
import Form from './Form'
import PropsTypes from 'prop-types'


function Student({children}) {

   return (
      <>
         {children}
      </>
   )
}

Student.Add = function ({ onAddStudent }) {
	const onSaveForm = ({firstName,lastName,email}) => {
		onAddStudent({
			id: Date.now(),
			firstName,
			lastName,
			email,
		})
	}

	return (
		<>
			<h3>Add Student</h3>
			<Form onSaveForm={onSaveForm}></Form>
		</>
	)
}

Student.Add.propTypes = {
	onAddStudent: PropsTypes.func.isRequired,
 }

Student.Update = function ({ student, onSaveEdit }) {

	const onSaveForm = ({firstName,lastName,email}) => {
		onSaveEdit({
			id: student.id,
			firstName,
			lastName,
			email,
		})
	}

	return (
		<>
			<h3>Edit Student</h3>
			<Form student={student} labelSubmit={'Save edit'} onSaveForm={onSaveForm}></Form>
		</>
	)
}

Student.Update.propTypes = {
	onSaveEdit: PropsTypes.func.isRequired,
	student: PropsTypes.any.isRequired,
 }
export default Student