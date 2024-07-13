import React, { useState } from "react";
import { getEmployeeById } from "../api";

const Employee = () => {
  const [employeeId, setEmployeeId] = useState("");
  const [employee, setEmployee] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleFetchEmployee = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getEmployeeById(employeeId);
      setEmployee(data);
    } catch (err) {
      setError("Failed to fetch employee details");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Employee Details</h2>
      <div>
        <label>ID:</label>
        <input
          type="text"
          value={employeeId}
          onChange={(e) => setEmployeeId(e.target.value)}
        />
        <button onClick={handleFetchEmployee}>Fetch Employee</button>
      </div>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {employee && (
        <div>
          <p>ID: {employee._id}</p>
          <p>First Name: {employee.firstname}</p>
          <p>Last Name: {employee.lastname}</p>
        </div>
      )}
    </div>
  );
};

export default Employee;
