import React, { useState } from "react";
import { Modal, TextField, Select, MenuItem, Box } from "@mui/material";
import "./additionFrom.css";

const AdditionForm = ({ open, onClose, users, status, priority }) => {
  const [formData, setFormData] = useState({
    id: "DUM-99",
    title: "Dummy Entry",
    tag: ["Feature request"],
    userId: "usr-1",
    status: "Todo",
    priority: 4,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box className="box-Addition">
        <TextField
          label="ID"
          name="id"
          value={formData.id}
          onChange={handleInputChange}
          disabled
          fullWidth
          size="small"
          style={{ marginBottom: "1rem" }}
        />
        <TextField
          label="Title"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
          multiline
          rows={4}
          fullWidth
          size="small"
          style={{ marginBottom: "1rem" }}
        />
        <TextField
          label="Tag"
          name="tag"
          value={formData.tag.join(", ")}
          disabled
          fullWidth
          size="small"
          style={{ marginBottom: "1rem" }}
        />
        <Select
          label="User ID"
          name="userId"
          value={formData.userId}
          onChange={handleInputChange}
          fullWidth
          size="small"
          style={{ marginBottom: "1rem" }}
        >
          {users?.map((user) => (
            <MenuItem key={user.id} value={user.id}>
              {user.name}
            </MenuItem>
          ))}
        </Select>
        <Select
          label="Status"
          name="status"
          value={formData.status}
          onChange={handleInputChange}
          fullWidth
          size="small"
          style={{ marginBottom: "1rem" }}
        >
          {status?.map((status) => (
            <MenuItem key={status} value={status}>
              {status}
            </MenuItem>
          ))}
        </Select>
        <Select
          label="Priority"
          name="priority"
          value={formData.priority}
          onChange={handleInputChange}
          fullWidth
          size="small"
          style={{ marginBottom: "1rem" }}
        >
          {Object.keys(priority).map((p) => (
            <MenuItem key={p} value={p}>
              {priority[p]}
            </MenuItem>
          ))}
        </Select>
      </Box>
    </Modal>
  );
};

export default AdditionForm;
