import React, { useState } from 'react'
import Student from './Student'

function Students() {

  const [students,setStudents] = useState([])
  const [isAddStudent,setIsAddStudent] = useState(true)
  const [studentEdit, setStudentEdit] = useState()

  const onEditStudent = (student) => {
    console.log('id:',student.id);
    setStudentEdit(student)
    setIsAddStudent(false)
  }

  const onSaveEditStudent = (student) => {
    
    setStudents(students.map(i => i.id === student.id
      ? ({
        ...student,
        firstName: student.firstName,
        lastName: student.lastName,
        email: student.email,
      })
      : i))

    setIsAddStudent(true)
    setStudentEdit(undefined)

  }

  const onDeleteStudent = (id) => {
    setStudents(students.filter(student => student.id !== id))
  }

  return (
    <div>
      {
        isAddStudent
        ? <Student.Add onAddStudent={(student) => {setStudents([student,...students])}}/>
        : <Student.Update student={studentEdit} onSaveEdit={onSaveEditStudent}/>
      }
     
      <div className="list-student">
        <table style={{width: '100%'}}>
          <thead style={{backgroundColor: 'white'}}>
            <tr>
              <td style={{width: '25%'}}>ID</td>
              <td style={{width: '25%'}}>FullName</td>
              <td style={{width: '25%'}}>Email</td>
              <td style={{width: '25%'}}>Option</td>
            </tr>
          </thead>
          <tbody>
            {
              students.map(student => 
                <tr key={student.id} style={{padding: 5}}>
                  <td>{student.id}</td>
                  <td>{student.firstName} {student.lastName}</td>
                  <td>{student.email}</td>
                  <td>
                    <button onClick={() => onEditStudent(student)}>Edit</button>
                    <button style={{marginLeft: 10}} onClick={() => onDeleteStudent(student.id)}>Delete</button>
                  </td>
                </tr>
                )
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Students