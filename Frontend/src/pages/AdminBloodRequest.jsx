import React, { useState, useEffect } from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from "@mui/material";
import axios from "axios";

const AdminBloodRequests = () => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    fetchRequests();
  }, []);

  const fetchRequests = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/bloodreq");
      setRequests(response.data);
    } catch (error) {
      console.error("Error fetching blood requests:", error);
    }
  };

  const handleApprove = async (id) => {
    try {
      await axios.put(`http://localhost:5000/api/bloodreq/approve/${id}`);
      fetchRequests(); // ✅ Refresh the list after approval
    } catch (error) {
      console.error("Error approving blood request:", error);
    }
  };

  return (
    <div>
      <h1 className="text-2xl">Manage Blood Requests</h1>

      <TableContainer className="ml-20 mt-9" component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><b>Name</b></TableCell>
              <TableCell><b>Age</b></TableCell>
              <TableCell><b>Email</b></TableCell>
              <TableCell><b>Phone</b></TableCell>
              <TableCell><b>City</b></TableCell>
              <TableCell><b>Blood Group</b></TableCell>
              <TableCell><b>Status</b></TableCell>
              <TableCell><b>Action</b></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {requests.length === 0 ? (
              <TableRow>
                <TableCell colSpan={8} align="center">No blood requests available</TableCell>
              </TableRow>
            ) : (
              requests.map((request) => (
                <TableRow key={request._id}>
                  <TableCell>{request.name}</TableCell>
                  <TableCell>{request.age}</TableCell>
                  <TableCell>{request.email}</TableCell>
                  <TableCell>{request.phone}</TableCell>
                  <TableCell>{request.city}</TableCell>
                  <TableCell>{request.bloodGroup}</TableCell>
                  <TableCell>
                    {request.status === "Approved" ? (
                      <span style={{ color: "green", fontWeight: "bold" }}>Approved</span>
                    ) : (
                      <span style={{ color: "red", fontWeight: "bold" }}>Pending</span>
                    )}
                  </TableCell>
                  <TableCell>
                    {request.status === "Pending" && (
                      <Button variant="contained" color="primary" onClick={() => handleApprove(request._id)}>
                        Approve
                      </Button>
                    )}
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default AdminBloodRequests;
