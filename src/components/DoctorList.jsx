import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { DELETE_DOCTOR } from "../Redux/Constants";
import "../stylesheets/DoctorList.css";

export default function DoctorList() {
  const dispatch = useDispatch();
  const doctors = useSelector((state) => state.doctors);
  const appointments = useSelector((state) => state.appointments);

  const handleDelete = (id) => {
    dispatch({ type: DELETE_DOCTOR, payload: id });
  };

  const getDoctorAppointmentCount = (doctorId) => {
    return appointments.filter(
      (apt) => apt.doctorName === doctors.find((d) => d.id == doctorId)?.name
    ).length;
  };

  return (
    <div className="doctor-list">
      <h2>Doctors List</h2>
      {doctors.length === 0 ? (
        <p>No doctors added yet</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Specialty</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Appointments</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {doctors.map((doctor) => (
              <tr key={doctor.id}>
                <td>{doctor.name}</td>
                <td>{doctor.specialty}</td>
                <td>{doctor.phone}</td>
                <td>{doctor.email}</td>
                <td>
                  <span className="appointment-badge">
                    {getDoctorAppointmentCount(doctor.id)}
                  </span>
                </td>
                <td>
                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(doctor.id)}
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
  );
}
