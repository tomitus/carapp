import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import { DialogTitle, DialogContent, TextField } from "@mui/material";

export default function EditCar({ editCar, params }) {
  const [open, setOpen] = useState(false);
  const [car, setCar] = useState({
    brand: "",
    model: "",
    color: "",
    fuel: "",
    price: "",
    year: "",
  });

  const handleClickOpen = () => {
    setOpen(true);
    setCar({
      brand: params.data.brand,
      model: params.data.model,
      color: params.data.color,
      fuel: params.data.fuel,
      price: params.data.price,
      year: params.data.year,
    });
  };

  const handleEdit = () => {
    setOpen(false);
    editCar(car, params.value);   
  };
  const handleCancel = () => { 
    setOpen(false);    
  };

  const handleClose = () => {
    setOpen(false);
  };

  const inputChanged = (event) => {
    console.log("inputti changed");
    setCar({ ...car, [event.target.name]: event.target.value });
  };



  return (
    <div>
      <Button onClick={handleClickOpen} variant="outlined">
        Edit car
      </Button>

      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <DialogTitle>Edit Car</DialogTitle>

          <TextField
            autoFocus={true}
            value={car.brand}
            onChange={inputChanged}
            margin="dense"
            label="Brand"
            name="brand"
            fullWidth={true}
            variant="standard"
          />
          
          <TextField
            autoFocus={true}
            value={car.model}
            onChange={inputChanged}
            margin="dense"
            label="Model"
            name="model"
            fullWidth={true}
            variant="standard"
          />
          <TextField
            autoFocus={true}
            value={car.color}
            onChange={inputChanged}
            margin="dense"
            label="Color"
            name="color"
            fullWidth={true}
            variant="standard"
          />
          <TextField
            autoFocus={true}
            value={car.fuel}
            onChange={inputChanged}
            margin="dense"
            label="Fuel"
            name="fuel"
            fullWidth={true}
            variant="standard"
          />
          <TextField
            autoFocus={true}
            value={car.price}
            onChange={inputChanged}
            margin="dense"
            label="Price"
            name="price"
            fullWidth={true}
            variant="standard"
          />
          <TextField
            autoFocus={true}
            value={car.year}
            onChange={inputChanged}
            margin="dense"
            label="Year"
            name="year"
            fullWidth={true}
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancel}>Cancel</Button>
          <Button onClick={handleEdit}>Edit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
