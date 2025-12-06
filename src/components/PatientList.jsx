import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { DELETE_PATIENT } from '../Redux/Constants'
import '../stylesheets/PatientList.css'

export default function PatientList() {
  const dispatch = useDispatch()
  const patients = useSelector((state) => state.patients)

  const handleDelete = (id) => {
    dispatch({ type: DELETE_PATIENT, payload: id })
  }

  return (
    <div className="patient-list">
      <h2>Patients List</h2>
      {patients.length === 0 ? (
        <p>No patients added yet</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {patients.map((patient) => (
              <tr key={patient.id}>
                <td>{patient.id}</td>
                <td>{patient.name}</td>
                <td>{patient.age}</td>
                <td>{patient.gender}</td>
                <td>
                  <button 
                    className="delete-btn"
                    onClick={() => handleDelete(patient.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}
