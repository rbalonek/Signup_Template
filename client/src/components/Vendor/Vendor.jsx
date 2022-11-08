import React from "react";
import "./Vendor.css";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
// import DeleteIcon from "@mui/icons-material/Delete";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function Vendor(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
  };
  const handleCloseDelete = (e) => {
    e.preventDefault();
    setOpen(false);
    props.handleDelete(props.vendor.id);
  };

  return (
    <div className="vendor-card__container">
      <div className="lineOne">
        <p>
          <span style={{ fontWeight: "bold" }}>Name: </span>
          {props.vendor.name}
        </p>
        <p>
          <span style={{ fontWeight: "bold" }}>Company: </span>
          {props.vendor.company}
        </p>
      </div>
      <div className="lineTwo">
        <p>
          <span style={{ fontWeight: "bold" }}>Phone: </span>
          {props.vendor.phone}
        </p>
        <p>
          <span style={{ fontWeight: "bold" }}>Email:</span>{" "}
          {props.vendor.email}
        </p>
      </div>
      <p>
        <span style={{ fontWeight: "bold" }}>Description: </span>

        {props.vendor.description}
      </p>

      <div>
        <p>
          <span style={{ fontWeight: "bold" }}>Require Liability: </span>
          {props.vendor.liabilityRequire}
        </p>
      </div>
      <p>
        <span style={{ fontWeight: "bold" }}>Requesting snacks: </span>

        {props.vendor.snackBring}
      </p>
      {props.vendor.snackBring === "YES" && (
        <p>Snacks: {props.vendor.snacks}</p>
      )}
      <Button onClick={handleOpen} variant="contained" color="error">
        Delete
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Are you sure you want to delete {props.vendor.name} ?
          </Typography>
          <div className="buttons">
            <Button
              onClick={handleCloseDelete}
              color="error"
              variant="outlined"
            >
              Yes, Delete
            </Button>
            <Button onClick={handleClose} color="primary" variant="outlined">
              No, don't Delete
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
